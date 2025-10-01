const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createSale = async data => {
    return prisma.sale.create({ data });
}

exports.getSale = (id) => {
    return prisma.sale.findUnique({
        where: { id: parseInt(id, 10) },
        include: {
            customer: {
                select: {
                    id: true,
                    name: true,
                    lastName: true,
                    phone: true,
                    email: true
                }
            },
            paymentMethod: {
                select: {
                    id: true,
                    code: true,
                    name: true
                }
            },
            statusSale: {
                select: {
                    id: true,
                    code: true,
                    name: true
                }
            },
            po: {
                select: {
                    id: true,
                    folio: true,
                    orderDate: true,
                    deliveryDate: true
                }
            },
            saleDetail: {
                include: {
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
            }
        }
    });
};

exports.getSales = async => {
    return prisma.sale.findMany({
        select: {
            id: true,
            folio: true,
            totalAmount: true,
            createdAt: true,
            customer: {
                select: {
                    id: true,
                    name: true,
                    lastName: true,
                    phone: true,
                    email: true
                }
            },
            paymentMethod: {
                select: {
                    id: true,
                    code: true,
                    name: true
                }
            },
            statusSale: {
                select: {
                    id: true,
                    code: true,
                    name: true
                }
            },
            po: {
                select: {
                    id: true,
                    folio: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
};

exports.getStatusSale = async => {
    return prisma.statusSale.findMany({
        select: {
            id: true,
            code: true,
            name: true
        }
    });
};

exports.updateSale = async (id, data) => {
    return prisma.sale.update({
        where: {
            id: parseInt(id, 10),
        },
        data
    });
};


exports.deleteSale = (id) => {
    return prisma.sale.delete({
        where: {
            id: Number(id)
        }
    });
};
