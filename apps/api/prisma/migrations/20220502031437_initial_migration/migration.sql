-- CreateTable
CREATE TABLE `Lead` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lead_number` INTEGER NOT NULL,
    `origin` VARCHAR(191) NOT NULL,
    `source` VARCHAR(191) NOT NULL,
    `notes` VARCHAR(191) NULL,
    `stage` VARCHAR(191) NOT NULL,
    `engagement_score` INTEGER NOT NULL DEFAULT 0,
    `total_visits` INTEGER NOT NULL DEFAULT 0,
    `page_views_per_visit` DOUBLE NOT NULL DEFAULT 0,
    `average_time_per_visit` DOUBLE NOT NULL DEFAULT 0,
    `last_activity` VARCHAR(191) NOT NULL,
    `last_activity_date` DATETIME(3) NOT NULL,
    `lead_conversion_date` DATETIME(3) NULL,
    `city_old` VARCHAR(191) NULL,
    `specialization` VARCHAR(191) NULL,
    `entrance_test` VARCHAR(191) NULL,
    `current_occupation` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
