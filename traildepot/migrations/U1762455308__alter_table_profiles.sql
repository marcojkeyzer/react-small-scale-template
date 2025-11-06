PRAGMA foreign_keys = OFF;

CREATE TABLE "__alter_table_profiles" (
    'id' INTEGER PRIMARY KEY NOT NULL,
    'full_name' TEXT NOT NULL,
    'avatar_url' TEXT NOT NULL DEFAULT 'https://i.pravatar.cc/150?u=sam.wilson@example.com',
    'user_id' TEXT NULL
) STRICT;

INSERT INTO
    "__alter_table_profiles" (avatar_url, user_id, id, full_name)
SELECT
    avatar_url,
    user_id,
    id,
    full_name
FROM
    "profiles";

DROP TABLE "profiles";

PRAGMA legacy_alter_table = ON;

ALTER TABLE
    "__alter_table_profiles" RENAME TO "profiles";

PRAGMA legacy_alter_table = OFF;

PRAGMA foreign_keys = ON;