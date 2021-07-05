const fs = require("fs");
const pool = require('../../databasePool');
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("colors.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvData.shift();

    const query =
      "INSERT INTO colors (id, name, url) VALUES ($1, $2, $3)";

    pool.connect((err, pool, done) => {
      if (err) throw err;

      try {
        csvData.forEach(row => {
          pool.query(query, row, (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });
      } finally {
        done();
      }
    });
  });

stream.pipe(csvStream);