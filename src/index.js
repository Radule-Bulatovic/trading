const csv = require("csv-parser");
const fs = require("fs");

(async () => {
  class TradingStrategy {
    dataByDay = {};
    results = { success: 0, fail: 0 };
    successRate = 0;
    constructor(config) {
      this.config = config;
      this.results = { success: 0, fail: 0 };
    }

    initializeData(date, high, low) {
      this.dataByDay[date] = {
        swingHigh: high,
        swingLow: low,
        sell: false,
        success: 0,
        fail: 0,
        buy: false,
        traded: false,
      };
    }

    handleTrade(tradeType, date, high, low) {
      const trade = this.dataByDay[date];

      if (trade.swingHigh < high && !trade.sell && !trade.traded) {
        trade.sell = true;
        trade.traded = true;
      }

      if (trade.swingLow > low && !trade.buy && !trade.traded) {
        trade.buy = true;
        trade.traded = true;
      }

      if (tradeType === "sell") {
        if (trade.swingHigh + this.config.STOP_LOSS < high) {
          trade.fail++;
          this.results.fail++;
          trade.sell = false;
        }
        if (trade.swingHigh - this.config.TAKE_PROFIT > low) {
          trade.success++;
          this.results.success++;
          trade.sell = false;
        }
      } else if (tradeType === "buy") {
        if (trade.swingLow + this.config.TAKE_PROFIT < high) {
          trade.success++;
          this.results.success++;
          trade.buy = false;
        }
        if (trade.swingLow - this.config.STOP_LOSS > low) {
          trade.fail++;
          this.results.fail++;
          trade.buy = false;
        }
      }

      if (trade.sell || trade.buy) {
        if (
          trade.swingHigh + this.config.STOP_LOSS < high &&
          trade.swingHigh - this.config.TAKE_PROFIT > low
        ) {
          if (Math.random() > 0.5) {
            trade.fail--;
            this.results.fail--;
          } else {
            trade.success--;
            this.results.success--;
          }
        }
      }
    }

    async run() {
      try {
        const stream = fs.createReadStream(this.config.DATA).pipe(csv());

        stream.on("data", ({ high, low, time: dateTime }) => {
          const [date, time] = dateTime.split(" ");
          const hour = parseInt(time.split(":")[0]);

          if (hour >= this.config.START_TIME && hour < this.config.END_TIME) {
            if (!this.dataByDay[date]) {
              this.initializeData(date, high, low);
            } else {
              this.dataByDay[date].swingHigh = Math.max(
                this.dataByDay[date].swingHigh,
                high
              );
              this.dataByDay[date].swingLow = Math.min(
                this.dataByDay[date].swingLow,
                low
              );
            }
          }

          if (this.config.TRADING_HOURS.includes(hour)) {
            if (
              this.dataByDay[date].swingHigh < high &&
              !this.dataByDay[date].sell &&
              !this.dataByDay[date].traded
            ) {
              this.dataByDay[date].sell = true;
              this.dataByDay[date].traded = true;
            }
            if (
              this.dataByDay[date].swingLow > low &&
              !this.dataByDay[date].buy &&
              !this.dataByDay[date].traded
            ) {
              this.dataByDay[date].buy = true;
              this.dataByDay[date].traded = true;
            }
            if (this.dataByDay[date].sell) {
              if (
                this.dataByDay[date].swingHigh + this.config.STOP_LOSS <
                high
              ) {
                this.dataByDay[date].fail++;
                this.results.fail++;
                this.dataByDay[date].sell = false;
              }
              if (
                this.dataByDay[date].swingHigh - this.config.TAKE_PROFIT >
                low
              ) {
                this.dataByDay[date].success++;
                this.results.success++;
                this.dataByDay[date].sell = false;
              }
              if (
                this.dataByDay[date].swingHigh + this.config.STOP_LOSS < high &&
                this.dataByDay[date].swingHigh - this.config.TAKE_PROFIT > low
              ) {
                if (Math.random() > 0.5) {
                  this.dataByDay[date].fail--;
                  this.results.fail--;
                } else {
                  this.dataByDay[date].success--;
                  this.results.success--;
                }
              }
            }
            if (this.dataByDay[date].buy) {
              if (
                this.dataByDay[date].swingLow + this.config.TAKE_PROFIT <
                high
              ) {
                this.dataByDay[date].success++;
                this.results.success++;
                this.dataByDay[date].buy = false;
              }
              if (this.dataByDay[date].swingLow - this.config.STOP_LOSS > low) {
                this.dataByDay[date].fail++;
                this.results.fail++;
                this.dataByDay[date].buy = false;
              }
              if (
                this.dataByDay[date].swingLow + this.config.TAKE_PROFIT <
                  high &&
                this.dataByDay[date].swingLow - this.config.STOP_LOSS > low
              ) {
                if (Math.random() > 0.5) {
                  this.dataByDay[date].fail--;
                  this.results.fail--;
                } else {
                  this.dataByDay[date].success--;
                  this.results.success--;
                }
              }
            }
          }
        });

        await new Promise((resolve) => {
          stream.on("end", () => {
            this.successRate =
              this.results.success /
              ((this.results.success + this.results.fail) / 100);
            resolve();
          });
        });
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  }

  function generateNumbersBetween(a, b) {
    const result = [];

    for (let i = b; a <= i; i--) {
      result.unshift(i);
    }

    return result;
  }

  const generateStrategyConfigs = () => {
    const configs = [];
    const startTimes = [7, 8, 9, 10, 11, 12, 13];
    const endTimes = [13, 14, 15];
    const tradingHourLimit = 18;
    const stopLossValues = [0.75];
    const takeProfitValues = [1.5, 1.55, 1.6, 1.65, 1.7, 1.75];

    for (const startTime of startTimes) {
      for (const endTime of endTimes) {
        if (startTime >= endTime) break;
        for (let i = tradingHourLimit; endTime <= i; i--) {
          const tradingHours = generateNumbersBetween(endTime, i);
        //   for (const stopLoss of stopLossValues) {
            // for (const takeProfit of takeProfitValues) {
            const config = {
              START_TIME: startTime,
              END_TIME: endTime,
              TRADING_HOURS: tradingHours,
              STOP_LOSS: 1,
              TAKE_PROFIT: 2,
              DATA: "./src/data/xauusd_m5_200k.csv",
            };
            configs.push(config);
          }
          //   }
        // }
      }
    }

    return configs;
  };

  const topResults = [];

  const strategyConfigs = generateStrategyConfigs();
  for (const config of strategyConfigs) {
    const strategy = new TradingStrategy(config);
    await strategy.run();

    const result = {
      config: config,
      successRate: strategy.successRate.toFixed(2) + "%",
    };

    // Add the result to the list and keep it sorted
    topResults.push(result);
  }

  topResults.sort((a, b) => {
    return parseFloat(b.successRate) - parseFloat(a.successRate);
  });

  // Print the top 10 success rates and their configurations
  console.log("Top 10 Success Rates and Configurations:");
  topResults.slice(0, 10).forEach((result, index) => {
    console.log(`#${index + 1}: Success Rate: ${result.successRate}`);
    console.log("Configuration:", result.config);
    console.log("=======================");
  });
})();
