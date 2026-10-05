-- CreateTable
CREATE TABLE "Rant" (
    "id" SERIAL NOT NULL,
    "problem" TEXT NOT NULL,
    "rant" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rant_pkey" PRIMARY KEY ("id")
);
