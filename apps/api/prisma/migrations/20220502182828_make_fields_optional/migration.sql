-- AlterTable
ALTER TABLE `Lead` MODIFY `page_views_per_visit` DOUBLE NULL DEFAULT 0,
    MODIFY `average_time_per_visit` DOUBLE NULL DEFAULT 0,
    MODIFY `last_activity_date` DATETIME(3) NULL;
