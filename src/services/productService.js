const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.createProduct = async data => {
    const conflict = await prisma.product.findFirst({
        where:{
            Id: data.Id,
            Nombre: data.Nombre
        }
    });
    if(conflict){
        throw new Error('El producto ya se encuentra registrado');
    }
    return prisma.product.create({data});
}

exports.getProduct = (id)=>{
return prisma.product.findUnique({
    where: {id: parseInt(id,10)}
});
};

exports.getProducts = async =>{
    return prisma.product.findMany({
        include: {
            CategoriasProducto:{
                select:{ Nombre:true}}
        }
    });
    };

exports.updateProduct = async(id,data) =>{
    return prisma.product.update({
        where:{
            id: parseInt(id,10)
        }, data
    });
};


exports.deleteProduct = (id) =>{
    return prisma.product.delete({
        where:{
            Id: parseInt(id,10)
        }
    });
};
