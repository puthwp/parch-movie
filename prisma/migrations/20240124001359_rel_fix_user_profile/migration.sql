/*
  Warnings:

  - You are about to drop the column `usrid` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_usrid_fkey";

-- DropIndex
DROP INDEX "Profile_usrid_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "usrid";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profileId" STRING;

-- CreateIndex
CREATE UNIQUE INDEX "User_profileId_key" ON "User"("profileId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("pid") ON DELETE SET NULL ON UPDATE CASCADE;
