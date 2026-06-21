-- CreateTable
CREATE TABLE "AppInfo" (
    "id" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppInfo_pkey" PRIMARY KEY ("id")
);
