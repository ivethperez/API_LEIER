const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createPurchaseOrder = async data => {
    return prisma.purchase.create({ data });
}

exports.getPurchaseOrder = (id) => {
    return prisma.purchase.findUnique({
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
            statuspurchase: {
                select: {
                    id: true,
                    code: true,
                    name: true
                }
            },
            warehouse: {
                select: {
                    id: true,
                    code: true,
                    name: true,
                    location: true
                }
            },
            purchaseDetail: {
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

exports.getPurchaseOrders = async () => {
    return prisma.purchase.findMany({
        select: {
            id: true,
            folio: true,
            totalAmount: true,
            orderDate: true,
            deliveryDate: true,
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
            statusPo: {
                select: {
                    id: true,
                    code: true,
                    name: true
                }
            },
            warehouse: {
                select: {
                    id: true,
                    code: true,
                    name: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
};

exports.getStatusPo = async () => {
    return prisma.statusPo.findMany({
        select: {
            id: true,
            code: true,
            name: true
        }
    });
};

exports.updatePurchaseOrder = async (id, data) => {
    return prisma.purchase.update({
        where: {
            id: parseInt(id, 10),
        },
        data
    });
};

exports.deletePurchaseOrder = (id) => {
    return prisma.purchase.delete({
        where: {
            id: Number(id)
        }
    });
};
