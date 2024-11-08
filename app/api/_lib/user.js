import prisma from './prisma';
import { User } from '@prisma/client';

export async function createUser(data) {
    
    }

export async function getUserByEmail(email) {
    return prisma.user.findUnique({
        where: {
            email,
        },
    });
}

export async function getUserById(id) {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
}

export async function updateUser(id, data) {
    return prisma.user.update({
        where: {
            id,
        },
        data,
    });
}

export async function deleteUser(id) {
    return prisma.user.delete({
        where: {
            id,
        },
    });
}
{/*
export async function getSavedProperties(userId) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            savedProperties: true,
        },
    });

    return user.savedProperties;
}

*/}