-- CreateTable
CREATE TABLE "VEHICLE" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "specifications" VARCHAR(255) NOT NULL,
    "km" VARCHAR(255) NOT NULL,
    "year" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "fuel" VARCHAR(255) NOT NULL,
    "fuelUrban" VARCHAR(255) NOT NULL,
    "fuelRoad" VARCHAR(255) NOT NULL,
    "dataSheet" VARCHAR(255) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',

    CONSTRAINT "VEHICLE_pkey" PRIMARY KEY ("id")
);
