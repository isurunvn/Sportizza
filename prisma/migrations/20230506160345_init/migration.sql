-- AlterTable
ALTER TABLE `facility` ADD COLUMN `securityStatus` ENUM('active', 'inactive') NULL DEFAULT 'active';
