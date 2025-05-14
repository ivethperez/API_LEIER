const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.createProduct = async data => {
    const conflict = await prisma.productos.findFirst({
        where:{
            Id: data.Id,
            Nombre: data.Nombre
        }
    });
    if(conflict){
        throw new Error('El producto ya se encuentra registrado');
    }
    return prisma.productos.create({data});
}

exports.getProduct = (id)=>{
return prisma.productos.findUnique({
    where: {Id: parseInt(id,10)}
});
};

exports.getProducts = async =>{
    return prisma.productos.findMany({
        include: {
            CategoriasProducto:{
                select:{ Nombre:true}}
        }
    });
    };

exports.updateProduct = async(id,data) =>{
    const conflict = prisma.productos.findFirst({
        where:{
            Id: {not: parseInt(id,10)},
            Nombre: data.Nombre
        }
    });
    if(conflict){
        throw new Error('El producto ya se encuentra registrado');
    }
    return prisma.productos.update({
        where:{
            Id: parseInt(id,10),
            data
        }
    });
};


exports.deleteProduct = (id) =>{
    return prisma.productos.delete({
        where:{
            Id: parseInt(id,10)
        }
    });
};
