# Trading Strategy Tester

This repository contains a Node.js script for testing a trading strategy on historical price data. The script reads historical data from a CSV file, processes it, and applies a simple trading strategy. It tracks the success and failure of the strategy based on certain parameters like stop-loss and take-profit.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Results](#results)
- [License](#license)

## Requirements

Before you can use the trading strategy tester, make sure you have the following prerequisites:

- **Node.js:** Ensure that Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

- **Git:** You will need Git installed on your system to clone this repository and manage version control. You can download it from [git-scm.com](https://git-scm.com/).


## Installation

1. Clone this repository to your local machine.

   ```shell
   git clone https://github.com/Radule-Bulatovic/trading.git
2. Navigate to the project directory.

   ```shell
   cd trading
3. Install the required dependencies.

   ```shell
   npm i
## Usage

To use this trading strategy tester, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/en) installed on your machine.

2. Place your historical price data in a CSV file in the project directory and add header.
    ```
    time,open,high,low,close,volume
   ```
   You can get csv files from here [forexsb.com](https://forexsb.com/historical-forex-data), dont forget to add headers at the beggining of a csv file.

3. Configure the trading parameters in the CONFIG object in the index.js file as needed. You can specify the start time, end time, trading hours, stop-loss, take-profit, and the CSV file name.

4. Run the trading strategy tester:

    ```shell
    npm run start
5. View the results in the console, which will display the data grouped by date and the success/failure statistics.

## Configuration
You can customize the trading strategy by modifying the CONFIG object in the index.js file. Here are the available configuration options:

* START_TIME: The start hour for trading.
* END_TIME: The end hour for trading.
* TRADING_HOURS: An array of hours during which trading will occur.
* STOP_LOSS: The stop-loss value for the strategy, which is added/removed from price.
* TAKE_PROFIT: The take-profit value for the strategy,  which is added/removed from price..
* DATA: The name of the CSV file containing historical price data.

Make sure to adjust these parameters according to your trading strategy and dataset.

## Results
The trading strategy tester will output the following results:

* Data grouped by date, including swing highs and lows.
* Statistics on successful and failed trades.
* The total number of successful and failed trades.