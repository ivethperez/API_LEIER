const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.getUser = (email)=>{
    return prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
        },
        where: {email: email}
    });
    };