/*
  Warnings:

  - You are about to drop the column `customerId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `priceId` on the `Subscription` table. All the data in the column will be lost.
  - Added the required column `priceId` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "subscriptionId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Survey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    CONSTRAINT "Survey_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "priceId" TEXT NOT NULL
);
INSERT INTO "new_Plan" ("country", "id", "name") SELECT "country", "id", "name" FROM "Plan";
DROP TABLE "Plan";
ALTER TABLE "new_Plan" RENAME TO "Plan";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "teamId" TEXT,
    CONSTRAINT "User_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "image", "name") SELECT "email", "emailVerified", "id", "image", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_Subscription" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subscritiptionId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "planId" TEXT,
    "customerId" TEXT NOT NULL,
    "currentPeriodEndDate" DATETIME NOT NULL,
    "teamId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Subscription_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Subscription" ("active", "createdAt", "currentPeriodEndDate", "customerId", "id", "planId", "subscritiptionId", "updatedAt") SELECT "active", "createdAt", "currentPeriodEndDate", "customerId", "id", "planId", "subscritiptionId", "updatedAt" FROM "Subscription";
DROP TABLE "Subscription";
ALTER TABLE "new_Subscription" RENAME TO "Subscription";
CREATE UNIQUE INDEX "Subscription_subscritiptionId_key" ON "Subscription"("subscritiptionId");
CREATE UNIQUE INDEX "Subscription_customerId_key" ON "Subscription"("customerId");
CREATE UNIQUE INDEX "Subscription_teamId_key" ON "Subscription"("teamId");
CREATE INDEX "Subscription_customerId_idx" ON "Subscription"("customerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
