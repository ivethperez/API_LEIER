const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.createCustomer = async data => {
    return prisma.customer.create({data});
}

exports.getCustomer = (id)=>{
return prisma.customer.findUnique({
    where: {id: parseInt(id,10)}
});
};

exports.getCustomers = async =>{
    return prisma.customer.findMany({
        select: {
            id: true,
            name:true,
            lastName: true,
            phone:true,
            email:true,
            address: true,
            active:true
        }
    });
    };

exports.updateCustomer = async(id,data) =>{
    // const conflict = await prisma.customer.findFirst({
    //     where:{
    //         id: {not: parseInt(id,10)},
    //         name: data.name,
    //         email: data.email
    //     }
    // });
    // if(conflict){
    //     throw new Error('El cliente ya se encuentra registrado');
    // }
    return prisma.customer.update({
        where:{
            id: parseInt(id,10),
        },
        data
    });
};


exports.deleteCustomer = (id) =>{
    return prisma.customer.delete({
        where:{
            id: Number(id)
        }
    });
};

