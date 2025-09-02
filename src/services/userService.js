const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.getUser = (correo)=>{
    return prisma.usuarios.findMany({
        select: {
            Nombre: true,
            Correo: true,
            Telefono: true,
        },
        where: {Correo: correo}
    });
    };