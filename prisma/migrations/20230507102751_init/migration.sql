-- CreateTable
CREATE TABLE `staff` (
    `firstName` VARCHAR(250) NOT NULL,
    `lastName` VARCHAR(250) NOT NULL,
    `userName` VARCHAR(250) NOT NULL,
    `primaryContact` VARCHAR(10) NOT NULL,
    `staffCategory` VARCHAR(250) NOT NULL,
    `securityStatus` ENUM('active', 'inactive') NULL DEFAULT 'active',

    UNIQUE INDEX `staff_primaryContact_key`(`primaryContact`),
    PRIMARY KEY (`userName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
