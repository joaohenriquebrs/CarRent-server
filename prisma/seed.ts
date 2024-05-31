import { Prisma, PrismaClient, Roles } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'henrique123';

const seedCars = async (prisma: PrismaClient) => {
    const vehiclesInput: Prisma.VehicleCreateInput[] = [
        {
            brand: "Jeep",
            name: "Renagade",
            price: 93999,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "48.194",
            year: "2020/2021",
            image: "https://quatrorodas.abril.com.br/wp-content/uploads/2022/02/Novo-Jeep-Renegade-Longitude-18.jpg?quality=70&strip=info&w=720&crop=1",
            color: "Cinza",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Chevrolet",
            name: "S10",
            price: 103999,
            specifications: "1.9 16V FLEX LONGITUDE 4P",
            km: "312.149",
            year: "2020",
            image: "https://quatrorodas.abril.com.br/wp-content/uploads/2023/04/Chevrolet-Nova-S10-Midnight-2024-0-e1682618313179.jpg?quality=70&strip=info&w=720&h=440&crop=1",
            color: "Azul",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Fiat",
            name: "Toro",
            price: 113999,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "132.149",
            year: "2020",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsYFTXsWZYuyCmuHLoq9tSDfSMUX6pGE8rA&s",
            color: "Branco",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Ford",
            name: "Ka",
            price: 103899,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "23.149",
            year: "2020",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedoMf4gskVDTK43_IIIi1zdyKXUotOZK7UA&s",
            color: "Vermelho",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Honda",
            name: "Civic",
            price: 203999,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "55.555",
            year: "2020",
            image: "https://s2-autoesporte.glbimg.com/sVXRoZNY9s5PVWe2ZJ0N5NahFQM=/0x0:1280x853/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/j/C/mHflzZQYGCuYLp1iQ9Fw/civic-hibrido-estatica-2-0.jpg",
            color: "Branco",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Mercedes",
            name: "C 180",
            price: 249999,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "72.149",
            year: "2020",
            image: "https://cdn.autopapo.com.br/box/uploads/2021/08/31181151/mercedes-benz-c180-sedan-azul-de-frente-2015.jpg",
            color: "Cinza",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Nissan",
            name: "Versa",
            price: 83999,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "82.149",
            year: "2020",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Cew5ijNHTxRPXfjm-aRHkDGWsatOSJWLTw&s",
            color: "Cinza",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Peugeot",
            name: "308",
            price: 104699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "99.149",
            year: "2020",
            image: "https://revistacarro.com.br/wp-content/uploads/2018/03/308-capa.jpg",
            color: "Cinza",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Renault",
            name: "Kwid",
            price: 204699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "33.449",
            year: "2020",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-XdyZloWPugevigijaB_gEd4e9eJSWJFxg&s",
            color: "Cinza",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Toyota",
            name: "Corolla",
            price: 104699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2023/07/27132742/toyota-corolla-hybrid-20242.jpg",
            color: "Cinza",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Volkswagen",
            name: "Gol",
            price: 106699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjn_Fh81qgTbzeAsdU43NFBjtUDRsQPvN8SA&s",
            color: "Cinza",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Audi",
            name: "A5",
            price: 124999,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://s2-autoesporte.glbimg.com/9DZaIGU8-SnYQ0HFhJOoZgNNByI=/0x0:1600x1100/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/C/L/KEM2XhTiKPgeU33kS4eQ/audi-a5-sportback-2020-1600-01.jpg",
            color: "Cinza",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "BMW",
            name: "X5",
            price: 176699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://media.ed.edmunds-media.com/bmw/x5/2025/oem/2025_bmw_x5_4dr-suv_xdrive40i_fq_oem_1_600.jpg",
            color: "Cinza",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Chevrolet",
            name: "Cobalt",
            price: 174699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://quatrorodas.abril.com.br/wp-content/uploads/2018/08/cobalt-ltz-2017-5.jpg?quality=70&strip=info&w=720&crop=1",
            color: "Cinza",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Fiat",
            name: "Toro",
            price: 54699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://conteudo.imguol.com.br/c/entretenimento/53/2023/08/15/fiat-toro-ultra-2024-1692105577823_v2_4x3.jpg",
            color: "Cinza",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Ford",
            name: "Ranger",
            price: 70999,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://live.dealer-asset.co/images/br1001/product/paintSwatch/vehicle/ford-brasil-ranger-raptor-preto-basalto-v2-271123.jpg?s=1024",
            color: "Verde",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Honda",
            name: "Civic",
            price: 14699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://s2-autoesporte.glbimg.com/am_xvAgaqXTvLFxL_cOgXxOmG4c=/0x0:1920x1080/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/U/M/0AQABNTsW6kmItO0mGaQ/sem-titulo.jpg",
            color: "Branco",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Jeep",
            name: "Compass",
            price: 14699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://s2-autoesporte.glbimg.com/NxOOVEsAJZKH08Sn7gI5lgPyilI=/453x333:5551x3692/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/d/5/qPn2JxQYOkkEVZbLxPuA/imagem-55-.jpg",
            color: "Preto",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Mercedes",
            name: "GLA 200",
            price: 874699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://autoentusiastas.com.br/ae/wp-content/uploads/2021/02/Autoentusiastas-MB-GLA-200-AMG-12.jpg",
            color: "Branco",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Nissan",
            name: "Sentra",
            price: 184699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://midias.vrum.com.br/_midias/jpg/2024/04/12/740x420/1_nissan_sentra_2_0_modelo_2016_branco_de_frente_em_movimento_no_asfalto-36179264.jpg",
            color: "Branco",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Peugeot",
            name: "208",
            price: 139699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBewQ5hjykBcwOEQLNbhIGrbW6QsQX1EAfA&s",
            color: "Cinza",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Renault",
            name: "Captur",
            price: 129699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://renault.grupoamazonas.com.br/wp-content/uploads/2021/11/renault_captur.png",
            color: "Bege",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Toyota",
            name: "Hilux",
            price: 1204699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://cdn.motor1.com/images/mgl/Rq6Oqm/s3/toyota-hilux-2024-mild-hybrid-48-v---esterni-in-studio.jpg",
            color: "Vermelho",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        },
        {
            brand: "Volkswagen",
            name: "Passat",
            price: 124699,
            specifications: "1.8 16V FLEX LONGITUDE 4P",
            km: "32.149",
            year: "2020",
            image: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/02/db2019au00090_large.jpg?quality=70&strip=info&w=720&crop=1",
            color: "Azul",
            fuel: "Flex (Gasolina)",
            fuelUrban: "11",
            fuelRoad: "13",
            dataSheet: "Automático",
        }
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
