/*
  Warnings:

  - Made the column `last_activity_date` on table `Lead` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Lead` MODIFY `notes` TEXT NULL,
    MODIFY `last_activity_date` DATETIME(3) NOT NULL;
