const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.createCategory = async data => {
    const conflict = await prisma.category.findFirst({
        where:{
            id: data.Id,
            code: data.code,
            name: data.name
        }
    });
    if(conflict){
        throw new Error('La categoría ya se encuentra registrada');
    }
    return prisma.category.create({data});
}

exports.getCategory = (id)=>{
return prisma.category.findUnique({
    where: {id: parseInt(id,10)}
});
};

exports.getCategories = async (isProducts) => {
    return prisma.category.findMany({
        where: {
            ...(isProducts && {
                categoryType: {
                    code: 'PROD'
                }
            })
        }
    });
};

exports.updateCategory = async(id,data) =>{
    const conflict = prisma.category.findFirst({
        where:{
            Id: {not: parseInt(id,10)},
            Nombre: data.Nombre
        }
    });
    if(conflict){
        throw new Error('La categoría ya se encuentra registrada');
    }
    return prisma.category.update({
        where:{
            Id: parseInt(id,10),
            data
        }
    });
};


exports.deleteCategory = (id) =>{
    return prisma.category.delete({
        where:{
            Id: parseInt(id,10)
        }
    });
};
