import prisma from './prisma';

export async function createUser(data) {
    try {
        const user = await prisma.user.create({
            data,
        });
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        return error;
    }
}

export async function getUserByEmail(email) {
    try {
        return await prisma.user.findUnique({
            where: {
                email,
            },
        });
    } catch (error) {
        console.error('Error fetching user by email:', error);
        return error;
    }
}

export async function getUserById(id) {
    try {
        return await prisma.user.findUnique({
            where: {
                id,
            },
        });
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        return error;
    }
}

export async function updateUser(id, data) {
    try {
        return await prisma.user.update({
            where: {
                id,
            },
            data,
        });
    } catch (error) {
        console.error('Error updating user:', error);
        return error;
    }
}

export async function deleteUser(id) {
    try {
        return await prisma.user.delete({
            where: {
                id,
            },
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        return error;
    }
}

// Uncomment this function if you want to retrieve saved properties for a user
/*
export async function getSavedProperties(userId) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                savedProperties: true,
            },
        });
        return user.savedProperties;
    } catch (error) {
        console.error('Error fetching saved properties:', error);
        return error;
    }
}
*/
