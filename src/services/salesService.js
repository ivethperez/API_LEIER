const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createSale = async data => {
    return prisma.sale.create({ data });
}

exports.getSale = (id) => {
    return prisma.sale.findUnique({
        where: { id: parseInt(id, 10) },
        select: {
            id: true,
            folio: true,
            totalAmount: true,
            saleDate: true,
            customer: {
                select: {
                    id: true
                }
            },
            paymentMethod: {
                select: {
                    id: true
                }
            },
            statusSale: {
                select: {
                    id: true
                }
            },
            po: {
                select: {
                    id: true
                }
            },
            saleDetail: {
                select: {
                    id: true,
                    quantity: true,
                    unitPrice: true,
                    subtotal: true,
                    productPrice: {
                        select: {
                            id: true,
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
                                    name: true
                                }
                            }
                        }
                    }
                }
            }
        },
    });
};

exports.getSales = async => {
    return prisma.sale.findMany({
        select: {
            id: true,
            folio: true,
            totalAmount: true,
            saleDate: true,
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
    const { customerId, paymentMethodId, statusSaleId, saleDate } = data;
    return prisma.sale.update({
        where: {
            id: parseInt(id, 10),
        },
        data: {
            ...(customerId && { customerId: parseInt(customerId, 10) }),
            ...(paymentMethodId && { paymentMethodId: parseInt(paymentMethodId, 10) }),
            ...(statusSaleId && { statusSaleId: parseInt(statusSaleId, 10) }),
            ...(saleDate && { saleDate: new Date(saleDate) })
          }
    });
};


exports.deleteSale = (id) => {
    return prisma.sale.delete({
        where: {
            id: Number(id)
        }
    });
};
