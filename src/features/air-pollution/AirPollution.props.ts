/**
 * Card info props
 */
const cardInfo = {
  link: 'https://openweathermap.org/api/air-pollution',
  title: 'Air pollution concept',
  description: `
    Besides basic Air Quality Index, the API returns data about polluting gases, such as Carbon monoxide (CO), Nitrogen monoxide (NO), Nitrogen dioxide (NO2), Ozone (O3), Sulphur dioxide (SO2), Ammonia (NH3), and particulates (PM2.5 and PM10).
  `,
};

/**
 * Card list props
 */
const cardList = {
  title: 'OpenWeather scale for Air Quality Index levels',
  th: [
    { label: 'Qualitative name' },
    { label: 'Index' },
    { label: 'Pollutant concentration in μg/m3', colSpan: 6 },
  ],
  td: [
    [
      'Good',
      '1',
      '[0; 20)',
      '[0; 40)',
      '[0; 20)',
      '[0; 10)',
      '[0; 60)',
      '[0; 4400)',
    ],
    [
      'Fair',
      '2',
      '[20; 80)',
      '[40; 70)',
      '[20; 50)',
      '[10; 25)',
      '[60; 100)',
      '[4400; 9400)',
    ],
    [
      'Moderate',
      '3',
      '[80; 250)',
      '[70; 150)',
      '[50; 100)',
      '[25; 50)',
      '[100; 140)',
      '[9400; 12400)',
    ],
    [
      'Poor',
      '4',
      '[250; 350)',
      '[150; 200)',
      '[100; 200)',
      '[50; 75)',
      '[140; 180)',
      '[12400; 15400)',
    ],
    ['Very Poor', '5', '⩾350', '⩾200', '⩾200', '⩾75', '⩾180', '⩾15400'],
  ],
};

export { cardInfo, cardList };
