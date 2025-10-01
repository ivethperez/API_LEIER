const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.getPaymentMethod = (id)=>{
return prisma.paymentMethod.findUnique({
    where: {id: parseInt(id,10)}
});
};

exports.getPaymentMethods = async =>{
    return prisma.paymentMethod.findMany({
        select: {
            id: true,
            code: true,
            name: true
        },
        where:{active:true},
        orderBy: {
            name: 'asc'
        }
    });
    };
