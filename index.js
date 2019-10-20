const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
const jobs = require("./jobs/callApi")
app = express();

// schedule tasks to be run on the server   



// You're probably looking for

// 0 */45 * * * *
// The ranges are here.

// Seconds: 0-59
// Minutes: 0-59
// Hours: 0-23
// Day of Month: 1-31
// Months: 0-11
// Day of Week: 0-6

cron.schedule("*/5 * * * * *", function() {
    console.log("Executing Job in every 5 seconds");
    jobs.callApi();
});

app.listen(3128);