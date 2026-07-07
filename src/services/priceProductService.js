const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createPriceProduct = async data => {
    const conflict = await prisma.productPrice.findFirst({
        where: {
            id: data.id
        }
    });
    if (conflict) {
        throw new Error('El precio del producto ya se encuentra registrado');
    }
    return prisma.productPrice.create({ data });
}

exports.getPriceProduct = async (id) => {
    return prisma.productPrice.findUnique({
        where: { id: parseInt(id, 10) }
    });
};

exports.getByProductAndUnit = (productId, unitOfMeasureId) => {
    return prisma.productPrice.findFirst({
        where: { productId: parseInt(productId, 10), unitOfMeasureId : parseInt(unitOfMeasureId,10) }
    });
};
exports.getPriceProducts = async => {
    return prisma.productPrice.findMany({
        select: {
            quantity: true,
            unitPrice: true,
            unitOfMeasure: {
                select: {
                    id: true,
                    code: true,
                    name: true,
                },
            },
            product: {
                select: {
                    id: true,
                    name: true,
                    description: true,
                    quantity: true,
                    isPiece: true,
                    active: true,
                    category: {
                        select: {
                            name: true,
                        },
                    },
                    productImage: {
                        select: {
                            imageUrl: true,
                            orderImage: true,
                        },
                    },
                },
            },

        },
        orderBy: {
            product: {
                isPiece: "desc", // 👈 aquí ordenamos por isPiece descendente
            },
        },
        where:{
            unitOfMeasure:{active:true},
            active: true, 
            product: {active : true}
        }
    });
};

exports.updatePriceProduct = async (id, data) => {
    const conflict = prisma.productPrice.findFirst({
        where: {
            id: { not: parseInt(id, 10) }
        }
    });
    if (conflict) {
        throw new Error('El precio del producto ya se encuentra registrado');
    }
    return prisma.productPrice.update({
        where: {
            id: parseInt(id, 10),
            data
        }
    });
};


exports.deletePriceProduct = (id) => {
    return prisma.productPrice.delete({
        where: {
            id: parseInt(id, 10)
        }
    });
};


