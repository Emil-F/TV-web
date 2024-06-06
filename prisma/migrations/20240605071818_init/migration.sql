/*
  Warnings:

  - Added the required column `rating` to the `Tv` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tv" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tv_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "poster_path" TEXT NOT NULL,
    "backdrop_path" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Tv" ("backdrop_path", "createdAt", "id", "name", "poster_path", "release_date", "tv_id", "updatedAt") SELECT "backdrop_path", "createdAt", "id", "name", "poster_path", "release_date", "tv_id", "updatedAt" FROM "Tv";
DROP TABLE "Tv";
ALTER TABLE "new_Tv" RENAME TO "Tv";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
