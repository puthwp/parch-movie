-- CreateTable
CREATE TABLE "Movie" (
    "movieId" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING,
    "length" INT4,
    "released" TIMESTAMP(3),
    "available" TIMESTAMP(3),
    "infoId" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("movieId")
);

-- CreateTable
CREATE TABLE "MetaInfo" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,
    "movieId" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MetaInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "info" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Poster" (
    "id" STRING NOT NULL,
    "imgUrl" STRING NOT NULL,
    "metaInfoId" STRING,

    CONSTRAINT "Poster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "userEmail" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPref" (
    "id" STRING NOT NULL,
    "phoneNumber" STRING NOT NULL,
    "firstname" STRING NOT NULL,
    "lastname" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "themeId" INT8 NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "UserPref_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Theme" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "themeName" STRING NOT NULL,
    "themeColor" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MovieToTag" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateTable
CREATE TABLE "_MovieToProfile" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateTable
CREATE TABLE "_GenreToMovie" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateTable
CREATE TABLE "_GenreToProfile" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_infoId_key" ON "Movie"("infoId");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "UserPref_phoneNumber_key" ON "UserPref"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Theme_themeName_key" ON "Theme"("themeName");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToTag_AB_unique" ON "_MovieToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToTag_B_index" ON "_MovieToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToProfile_AB_unique" ON "_MovieToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToProfile_B_index" ON "_MovieToProfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToMovie_AB_unique" ON "_GenreToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToMovie_B_index" ON "_GenreToMovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToProfile_AB_unique" ON "_GenreToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToProfile_B_index" ON "_GenreToProfile"("B");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_infoId_fkey" FOREIGN KEY ("infoId") REFERENCES "MetaInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Poster" ADD CONSTRAINT "Poster_metaInfoId_fkey" FOREIGN KEY ("metaInfoId") REFERENCES "MetaInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPref" ADD CONSTRAINT "UserPref_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPref" ADD CONSTRAINT "UserPref_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToTag" ADD CONSTRAINT "_MovieToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("movieId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToTag" ADD CONSTRAINT "_MovieToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToProfile" ADD CONSTRAINT "_MovieToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("movieId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToProfile" ADD CONSTRAINT "_MovieToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPref"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToMovie" ADD CONSTRAINT "_GenreToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToMovie" ADD CONSTRAINT "_GenreToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("movieId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToProfile" ADD CONSTRAINT "_GenreToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToProfile" ADD CONSTRAINT "_GenreToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPref"("id") ON DELETE CASCADE ON UPDATE CASCADE;
