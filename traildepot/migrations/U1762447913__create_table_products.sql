CREATE TABLE "products" (
    'id' INTEGER PRIMARY KEY NOT NULL,
    'name' TEXT NOT NULL,
    'description' TEXT NOT NULL,
    'price' INTEGER NOT NULL,
    'image_url' TEXT NOT NULL,
    'category_id' INTEGER NOT NULL REFERENCES 'categories'('id'),
    'created_at' TEXT NOT NULL
) STRICT;