const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const ftp =  require('basic-ftp');
const dotenv = require('dotenv');

dotenv.config();

exports.createProductImage = async data => {
    // Check if product exists
    const product = await prisma.product.findUnique({
        where: { id: data.productId }
    });
    
    if (!product) {
        throw new Error('El producto no existe');
    }

    // Check for duplicate image order for the same product
    const existingImage = await prisma.productImage.findFirst({
        where: {
            productId: data.productId,
            orderImage: data.orderImage
        }
    });

    if (existingImage) {
        throw new Error('Ya existe una imagen con este orden para el producto');
    }

    return prisma.productImage.create({data});
}

exports.getProductImage = (id) => {
    return prisma.productImage.findUnique({
        where: { id: parseInt(id, 10) },
        include: {
            product: true
        }
    });
};

exports.getProductImages = async (productId) => {
    const whereClause = productId ? { productId: parseInt(productId, 10) } : {};   
    return prisma.productImage.findMany({
        where: whereClause,
        select: {
            id:true,
            productId:true,
            imageUrl:true,
            altText:true,
            orderImage:true,
            active:true
        }, 
        orderBy: {
            orderImage: 'asc'
        }
    });
};

// Función para subir a FTP
exports.uploadToFTP = async (localPath, remotePath) => {
    console.log("engtra al service ftp")
    const client = new ftp.Client();
    client.ftp.verbose = false;
  
    try {
      await client.access({
        host: process.env.FTP_HOST,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
        secure: process.env.FTP_SECURE === "true",
      });

  
      // Subir archivo
      await client.uploadFrom(localPath, remotePath);
  
      client.close();
      return true;
    } catch (err) {
      console.error("Error subiendo archivo a FTP:", err);
      client.close();
      throw err;
    }
  };
exports.updateProductImage = async (imagesData) => {

    const updates = [];

    for (const img of imagesData) {
      const { id, ...rest } = img;
  
      if (id) {
        const updated = await prisma.productImage.update({
          where: { id: parseInt(id, 10) },
          data: rest,
        });
        updates.push(updated);
      } else {
        throw new Error("Falta el id de la imagen para actualizar");
        // const created = await prisma.productImage.create({
        //   data: rest,
        // });
        // updates.push(created);
      }
    }
  
    return updates;
};

exports.deleteProductImage = (id) => {
    return prisma.productImage.delete({
        where: { id: parseInt(id, 10) }
    });
};
