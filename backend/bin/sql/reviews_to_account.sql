CREATE TABLE reviews_to_account(
    "reviewId"        INTEGER,
    "accountId"       INTEGER,
    FOREIGN KEY("reviewId") REFERENCES reviews(id),
    FOREIGN KEY("accountId") REFERENCES account(id)
);
