import { Prisma, PrismaClient, Roles } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'henrique123';

const seedCars = async (prisma: PrismaClient) => {
    const vehiclesInput: Prisma.VehicleCreateInput[] = [

    ];

    vehiclesInput.forEach(async (vehicleInput: Prisma.VehicleCreateInput) => {
        console.log('Creating ' + vehicleInput.name);

        await prisma.vehicle.create({
            data: vehicleInput,
        })
    })
}

const seedAdmin = async (prisma: PrismaClient) => {
    const existAdmin = (await prisma.user.count({ where: { role: Roles.ADMININISTRADOR } })) > 0;

    console.log('Existe administrador cadastrado?', existAdmin);

    if (!existAdmin) {
        console.log('Criando administrador - Login: ' + ADMIN_LOGIN + " Senha: " + ADMIN_PASSWORD);

        await prisma.user.create({
            data: {
                login: ADMIN_LOGIN,
                name: 'Henrique Admin',
                password: await bcrypt.hash(ADMIN_PASSWORD, 10),
                role: Roles.ADMININISTRADOR,
            },
        });
    }
}


(async () => {
    const prisma = new PrismaClient();

    await seedAdmin(prisma);

    await seedCars(prisma);
})();
