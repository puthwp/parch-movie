/*
  Warnings:

  - You are about to drop the `UserPref` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserPref" DROP CONSTRAINT "UserPref_themeId_fkey";

-- DropForeignKey
ALTER TABLE "UserPref" DROP CONSTRAINT "UserPref_userId_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToMovie" DROP CONSTRAINT "_GenreToMovie_A_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToProfile" DROP CONSTRAINT "_GenreToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToProfile" DROP CONSTRAINT "_GenreToProfile_B_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToProfile" DROP CONSTRAINT "_MovieToProfile_B_fkey";

-- DropTable
DROP TABLE "UserPref";

-- DropTable
DROP TABLE "category";

-- CreateTable
CREATE TABLE "Genre" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "info" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" STRING NOT NULL,
    "phoneNumber" STRING NOT NULL,
    "firstname" STRING NOT NULL,
    "lastname" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "themeId" INT8 NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_phoneNumber_key" ON "Profile"("phoneNumber");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToProfile" ADD CONSTRAINT "_MovieToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToMovie" ADD CONSTRAINT "_GenreToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToProfile" ADD CONSTRAINT "_GenreToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToProfile" ADD CONSTRAINT "_GenreToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
