-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "memberName" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "bookTitle" TEXT NOT NULL,
    "bookAuthor" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
