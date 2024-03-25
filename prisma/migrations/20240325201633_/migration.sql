/*
  Warnings:

  - You are about to drop the column `userId` on the `Survey` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "EmailSurvey" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "LinkSurvey" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "SMSSurvey" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Survey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT,
    "status" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Survey" ("id", "title") SELECT "id", "title" FROM "Survey";
DROP TABLE "Survey";
ALTER TABLE "new_Survey" RENAME TO "Survey";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
