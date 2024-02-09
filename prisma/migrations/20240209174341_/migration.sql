/*
  Warnings:

  - A unique constraint covering the columns `[priceId]` on the table `Plan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Plan_priceId_key" ON "Plan"("priceId");
