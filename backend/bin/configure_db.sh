#!/bin/bash
export PGPASSWORD='node_password'

dropdb -U node_user bellacasadb
createdb -U node_user bellacasadb

psql -U node_user bellacasadb < ./bin/sql/reviews.sql
psql -U node_user bellacasadb < ./bin/sql/account.sql
psql -U node_user bellacasadb < ./bin/sql/colors.sql
psql -U node_user bellacasadb < ./bin/sql/products.sql
psql -U node_user bellacasadb < ./bin/sql/colors_to_products.sql
psql -U node_user bellacasadb < ./bin/sql/reviews_to_products.sql
psql -U node_user bellacasadb < ./bin/sql/reviews_to_account.sql