CREATE TABLE reviews(
    id             SERIAL PRIMARY KEY,
    "content"      TEXT,
    "timestamp"    TIMESTAMP,
    rating         INT
);
