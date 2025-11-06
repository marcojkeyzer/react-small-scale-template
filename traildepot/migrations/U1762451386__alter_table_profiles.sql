PRAGMA foreign_keys = OFF;

CREATE TABLE "__alter_table_profiles" (
    'id' INTEGER PRIMARY KEY NOT NULL,
    'full_name' TEXT NOT NULL,
    'avatar_url' TEXT NOT NULL,
    'email' BLOB NOT NULL REFERENCES '_user'('id')
) STRICT;

INSERT INTO
    "__alter_table_profiles" (full_name, id, avatar_url)
SELECT
    full_name,
    id,
    avatar_url
FROM
    "profiles";

DROP TABLE "profiles";

PRAGMA legacy_alter_table = ON;

ALTER TABLE
    "__alter_table_profiles" RENAME TO "profiles";

PRAGMA legacy_alter_table = OFF;

PRAGMA foreign_keys = ON;