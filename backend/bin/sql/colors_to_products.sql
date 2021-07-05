CREATE TABLE colors_to_products(
    "colorId"        INTEGER,
    "productId"      INTEGER,
    FOREIGN KEY("colorId") REFERENCES colors(id),
    FOREIGN KEY("productId") REFERENCES products(id)
);
