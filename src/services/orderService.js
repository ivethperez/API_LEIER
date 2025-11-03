const { PrismaClient } = require('@prisma/client');
const { parse } = require('dotenv');
const prisma = new PrismaClient();

exports.createOrder = async data => {
    return prisma.po.create({ data });
}

exports.getOrder = (id) => {
    return prisma.po.findUnique({
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
                    name: true,
                    location: true
                }
            },
            poDetail: {
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

exports.getOrders = async () => {
    return prisma.po.findMany({
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

exports.getOrdersList = async (statusOrderId) => {
    return prisma.po.findMany({
        select: {
            id: true,
            folio: true,
        },
        where:{statusPoId: Number(statusOrderId)},
        orderBy: {
            createdAt: 'desc'
        }
    });
};

exports.getStatusOrder = async (active) => {
    const isActive = active === "true";
    return prisma.statusPo.findMany({
        select: {
            id: true,
            code: true,
            name: true
        },
        where: {
            active: isActive
        }
    });
};

exports.updateOrder = async (id, data) => {
    return prisma.po.update({
        where: {
            id: parseInt(id, 10),
        },
        data
    });
};

exports.deleteOrder = (id) => {
    return prisma.po.delete({
        where: {
            id: Number(id)
        }
    });
};
