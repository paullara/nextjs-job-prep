-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
