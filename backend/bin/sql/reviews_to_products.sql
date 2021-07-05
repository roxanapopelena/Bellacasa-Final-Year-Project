CREATE TABLE reviews_to_products(
    "reviewId"       INTEGER,
    "productId"      INTEGER,
    FOREIGN KEY("reviewId") REFERENCES reviews(id),
    FOREIGN KEY("productId") REFERENCES products(id)
);
