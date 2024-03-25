/*
  Warnings:

  - Made the column `type` on table `Survey` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Survey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Survey" ("description", "id", "status", "title", "type") SELECT "description", "id", "status", "title", "type" FROM "Survey";
DROP TABLE "Survey";
ALTER TABLE "new_Survey" RENAME TO "Survey";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
