export const DATA = {
  VOLATILITY: {
    BY_HOUR: {
      SUMMER: [
        { label: '00:00', value: 2.71 },
        { label: '01:00', value: 3.13 },
        { label: '02:00', value: 3.68 },
        { label: '03:00', value: 2.67 },
        { label: '04:00', value: 2.29 },
        { label: '05:00', value: 2.21 },
        { label: '06:00', value: 2.79 },
        { label: '07:00', value: 3.41 },
        { label: '08:00', value: 3.96 },
        { label: '09:00', value: 3.87 },
        { label: '10:00', value: 3.51 },
        { label: '11:00', value: 3.44 },
        { label: '12:00', value: 3.77 },
        { label: '13:00', value: 5.96 },
        { label: '14:00', value: 6.77 },
        { label: '15:00', value: 6.67 },
        { label: '16:00', value: 5.67 },
        { label: '17:00', value: 4.48 },
        { label: '18:00', value: 4.04 },
        { label: '19:00', value: 3.82 },
        { label: '20:00', value: 3.43 },
        { label: '21:00', value: 2.57 },
        { label: '22:00', value: 1.68 },
        { label: '23:00', value: 2.59 }
      ],
      WINTER: [
        { label: '00:00', value: 3.17 },
        { label: '01:00', value: 3.17 },
        { label: '02:00', value: 3.71 },
        { label: '03:00', value: 2.75 },
        { label: '04:00', value: 2.38 },
        { label: '05:00', value: 2.21 },
        { label: '06:00', value: 2.68 },
        { label: '07:00', value: 3.03 },
        { label: '08:00', value: 3.69 },
        { label: '09:00', value: 4.25 },
        { label: '10:00', value: 3.68 },
        { label: '11:00', value: 3.64 },
        { label: '12:00', value: 3.63 },
        { label: '13:00', value: 4.45 },
        { label: '14:00', value: 6.88 },
        { label: '15:00', value: 6.78 },
        { label: '16:00', value: 6.57 },
        { label: '17:00', value: 5.11 },
        { label: '18:00', value: 4.38 },
        { label: '19:00', value: 4.19 },
        { label: '20:00', value: 3.82 },
        { label: '21:00', value: 3.18 },
        { label: '22:00', value: 2.12 },
        { label: '23:00', value: 1.89 }
      ]
    }
  },
  SUCCESS: [
    {
      config: {
        START_TIME: 10,
        END_TIME: 14,
        TRADING_HOURS: [14],
        STOP_LOSS: 2,
        TAKE_PROFIT: 2,
        SAMPLE: '2020/12/09 - 2023/10/04'
      },
      data: [
        { label: 'success', value: 336 },
        { label: 'fail', value: 190 }
      ]
    },
    {
      config: {
        START_TIME: 10,
        END_TIME: 14,
        TRADING_HOURS: [14],
        STOP_LOSS: 2,
        TAKE_PROFIT: 2,
        SAMPLE: "2022/05/09 - 2023/10/04"
      },
      data: [
        { label: 'success', value: 141 },
        { label: 'fail', value: 91 }
      ]
    },
    {
      config: {
        START_TIME: 10,
        END_TIME: 14,
        TRADING_HOURS: [14, 15],
        STOP_LOSS: 2,
        TAKE_PROFIT: 2,
        SAMPLE: '2020/12/09 - 2023/10/04'
      },
      data: [
        { label: 'success', value: 398 },
        { label: 'fail', value: 238 }
      ]
    },
    {
      config: {
        START_TIME: 10,
        END_TIME: 14,
        TRADING_HOURS: [13, 14, 15],
        STOP_LOSS: 2,
        TAKE_PROFIT: 2,
        SAMPLE: '2020/12/09 - 2023/10/04'
      },
      data: [
        { label: 'success', value: 402 },
        { label: 'fail', value: 234 }
      ]
    },
    {
      config: {
        START_TIME: 10,
        END_TIME: 14,
        TRADING_HOURS: [14],
        STOP_LOSS: 3,
        TAKE_PROFIT: 2,
        SAMPLE: '2020/12/09 - 2023/10/04'
      },
      data: [
        { label: 'success', value: 373 },
        { label: 'fail', value: 130 }
      ]
    },
    {
      config: {
        START_TIME: 10,
        END_TIME: 14,
        TRADING_HOURS: [14],
        STOP_LOSS: 2,
        TAKE_PROFIT: 1,
        SAMPLE: '2020/12/09 - 2023/10/04'
      },
      data: [
        { label: 'success', value: 445 },
        { label: 'fail', value: 98 }
      ]
    },
    {
      config: {
        START_TIME: 10,
        END_TIME: 14,
        TRADING_HOURS: [14],
        STOP_LOSS: 3,
        TAKE_PROFIT: 1,
        SAMPLE: '2020/12/09 - 2023/10/04'
      },
      data: [
        { label: 'success', value: 477 },
        { label: 'fail', value: 61 }
      ]
    },
    {
      config: {
        START_TIME: 10,
        END_TIME: 14,
        TRADING_HOURS: [14, 15],
        STOP_LOSS: 3,
        TAKE_PROFIT: 1,
        SAMPLE: '2020/12/09 - 2023/10/04'
      },
      data: [
        { label: 'success', value: 563 },
        { label: 'fail', value: 79 }
      ]
    },
    {
      config: {
        START_TIME: 12,
        END_TIME: 14,
        TRADING_HOURS: [14],
        STOP_LOSS: 5,
        TAKE_PROFIT: 1,
        SAMPLE: '2020/12/09 - 2023/10/04'
      },
      data: [
        { label: 'success', value: 556 },
        { label: 'fail', value: 32 }
      ]
    }
  ]
};
