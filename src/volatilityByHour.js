const csv = require("csv-parser");
const fs = require("fs");

const dataByHour = {}; // Initialize an object to store data grouped by hour

fs.createReadStream("xauusd_h1.csv")
  .pipe(csv())
  .on("data", (data) => {
    const [date, time] = data["time"].split(" "); // Split the date and time
    const hour = time.split(":")[0]; // Extract the hour component
    const volatility = parseFloat(data.high) - parseFloat(data.low);
    const month = new Date(date).getMonth();
      // Check if the hour is already a key in the object; if not, initialize it as an empty array
      if (!dataByHour[hour]) {
        dataByHour[hour] = [];
      }

      dataByHour[hour].push(volatility); // Add the volatility to the corresponding hour's array
  })
  .on("end", () => {
    // Calculate the average volatility for each hour
    const averageVolatilityByHour = Object.keys(dataByHour).map((hour) => ({
      hour: `${hour}:00`,
      value: (
        dataByHour[hour].reduce((sum, volatility) => sum + volatility, 0) /
        dataByHour[hour].length
      ).toFixed(2),
    }));

    averageVolatilityByHour.sort((a, b) => {
      const hourA = parseInt(a.hour.split(":")[0]);
      const hourB = parseInt(b.hour.split(":")[0]);
      return hourA - hourB;
    });

    console.log(averageVolatilityByHour);
  });
