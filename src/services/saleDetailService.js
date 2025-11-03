const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createSaleDetail = async data => {
    return prisma.saleDetail.create({ data });
}

exports.getSaleDetail = (id) => {
    return prisma.saleDetail.findUnique({
        where: { id: parseInt(id, 10) },
        include: {
            sale: {
                select: {
                    id: true,
                    folio: true,
                    totalAmount: true,
                    createdAt: true
                }
            },
            productPrice: {
                include: {
                    product: {
                        select: {
                            id: true,
                            name: true,
                            description: true
                        }
                    },
                    unitOfMeasure: {
                        select: {
                            id: true,
                            code: true,
                            name: true
                        }
                    }
                }
            }
        }
    });
};

exports.getSaleDetails = async (saleId) => {
    return prisma.saleDetail.findMany({
        select: {
            id: true,
            quantity: true,
            unitPrice: true,
            subtotal: true,
            sale: {
                select: {
                    totalAmount: true
                }
            },
            productPrice: {
                select: {
                    product: {
                        select: {
                            name: true,
                            description: true
                        }
                    },
                    unitOfMeasure: {
                        select: {
                            id: true,
                            code: true,
                            name: true
                        }
                    }
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }, where: {
            saleId: parseInt(saleId, 10)
        }
    });
};

exports.getSaleDetailsBySale = async (saleId) => {
    return prisma.saleDetail.findMany({
        where: {
            saleId: parseInt(saleId, 10)
        },
        include: {
            sale: {
                select: {
                    id: true,
                    folio: true,
                    totalAmount: true,
                    createdAt: true
                }
            },
            productPrice: {
                include: {
                    product: {
                        select: {
                            id: true,
                            name: true,
                            description: true
                        }
                    },
                    unitOfMeasure: {
                        select: {
                            id: true,
                            code: true,
                            name: true
                        }
                    }
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
};

exports.updateSaleDetail = async (id, data) => {
    return prisma.saleDetail.update({
        where: {
            id: parseInt(id, 10),
        },
        data
    });
};

exports.deleteSaleDetail = (id) => {
    return prisma.saleDetail.delete({
        where: {
            id: Number(id)
        }
    });
};
