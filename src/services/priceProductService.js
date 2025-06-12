const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createPriceProduct = async data => {
    const conflict = await prisma.preciosProducto.findFirst({
        where: {
            Id: data.Id
        }
    });
    if (conflict) {
        throw new Error('El precio del producto ya se encuentra registrado');
    }
    return prisma.preciosProducto.create({ data });
}

exports.getPriceProduct = (id) => {
    return prisma.PreciosProducto.findUnique({
        where: { Id: parseInt(id, 10) }
    });
};

exports.getPriceProducts = async => {
    return prisma.PreciosProducto.findMany({

        select: {
            Productos: {
                select: {
                    Id: true,
                    Nombre: true,
                    Descripcion: true,
                    Cantidad: true,
                    EsPieza: true,
                    Activo: true,
                    ImagenesProductos: {
                        select: {
                            URLImagen: true,
                            Orden: true
                        }
                    },
                    CategoriasProducto: {
                        select: {
                            Nombre: true
                        }
                    },
                }
            },
            Cantidad: true,
            PrecioUnitario: true,
            UnidadesMedida: {
                select: {
                    Id: true,
                    Code: true,
                    Nombre: true
                }
            },
        },
        orderBy: {
            Productos: {
                EsPieza: 'desc', // o 'asc' si prefieres que las piezas vayan al final
            },
        },
    });
};

exports.updatePriceProduct = async (id, data) => {
    const conflict = prisma.preciosProducto.findFirst({
        where: {
            Id: { not: parseInt(id, 10) }
        }
    });
    if (conflict) {
        throw new Error('El precio del producto ya se encuentra registrado');
    }
    return prisma.preciosProducto.update({
        where: {
            Id: parseInt(id, 10),
            data
        }
    });
};


exports.deletePriceProduct = (id) => {
    return prisma.preciosProducto.delete({
        where: {
            Id: parseInt(id, 10)
        }
    });
};
