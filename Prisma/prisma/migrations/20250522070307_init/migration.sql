/*
  Warnings:

  - You are about to drop the column `userId` on the `userPreferences` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userPreferenceId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "userPreferences" DROP CONSTRAINT "userPreferences_userId_fkey";

-- DropIndex
DROP INDEX "userPreferences_userId_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userPreferenceId" TEXT;

-- AlterTable
ALTER TABLE "userPreferences" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "User_userPreferenceId_key" ON "User"("userPreferenceId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPreferenceId_fkey" FOREIGN KEY ("userPreferenceId") REFERENCES "userPreferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;
