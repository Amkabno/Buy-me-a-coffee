/*
  Warnings:

  - You are about to drop the column `cardName` on the `BankCard` table. All the data in the column will be lost.
  - Added the required column `cardNumber` to the `BankCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BankCard" DROP COLUMN "cardName",
ADD COLUMN     "cardNumber" TEXT NOT NULL;
