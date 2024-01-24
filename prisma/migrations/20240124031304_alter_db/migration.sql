-- CreateTable
CREATE TABLE "Movie" (
    "movieId" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,
    "infoId" STRING,
    "length" INT4,
    "released" TIMESTAMP(3),
    "available" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("movieId")
);

-- CreateTable
CREATE TABLE "MetaInfo" (
    "mid" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MetaInfo_pkey" PRIMARY KEY ("mid")
);

-- CreateTable
CREATE TABLE "Genre" (
    "gid" STRING NOT NULL,
    "name" STRING NOT NULL,
    "info" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("gid")
);

-- CreateTable
CREATE TABLE "Tag" (
    "tid" STRING NOT NULL,
    "name" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("tid")
);

-- CreateTable
CREATE TABLE "Poster" (
    "pid" STRING NOT NULL,
    "imgUrl" STRING NOT NULL,
    "metaInfoId" STRING,

    CONSTRAINT "Poster_pkey" PRIMARY KEY ("pid")
);

-- CreateTable
CREATE TABLE "User" (
    "uid" STRING NOT NULL,
    "email" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "profileId" STRING,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Profile" (
    "pid" STRING NOT NULL,
    "phone" STRING NOT NULL,
    "firstname" STRING NOT NULL,
    "lastname" STRING NOT NULL,
    "themeId" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("pid")
);

-- CreateTable
CREATE TABLE "Theme" (
    "thid" STRING NOT NULL,
    "themeName" STRING NOT NULL,
    "themeColor" STRING NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("thid")
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
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_profileId_key" ON "User"("profileId");

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
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_infoId_fkey" FOREIGN KEY ("infoId") REFERENCES "MetaInfo"("mid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Poster" ADD CONSTRAINT "Poster_metaInfoId_fkey" FOREIGN KEY ("metaInfoId") REFERENCES "MetaInfo"("mid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("pid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("thid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToTag" ADD CONSTRAINT "_MovieToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("movieId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToTag" ADD CONSTRAINT "_MovieToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("tid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToProfile" ADD CONSTRAINT "_MovieToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("movieId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToProfile" ADD CONSTRAINT "_MovieToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("pid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToMovie" ADD CONSTRAINT "_GenreToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("gid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToMovie" ADD CONSTRAINT "_GenreToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("movieId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToProfile" ADD CONSTRAINT "_GenreToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("gid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToProfile" ADD CONSTRAINT "_GenreToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("pid") ON DELETE CASCADE ON UPDATE CASCADE;
