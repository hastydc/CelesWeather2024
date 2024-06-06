/**
 * Get date formated in Day, Month Day number
 * @returns {string} response
 */
export const getCurrentDate = (): string => {
  let currentDate = new Date();

  const weekday = currentDate.toLocaleDateString('en-us', { weekday: 'long' });
  const month = currentDate.toLocaleDateString('en-us', { month: 'long' });
  const day = currentDate.getDay();

  return `${weekday}, ${month} ${day}`;
};

/**
 * Get random hexadecimal color for charts
 * @returns {string} response
 */
export const getHexColor = (): string => {
  const n = (Math.random() * 0xfffff * 1000000).toString(16);

  return `#${n.slice(0, 6)}`;
};
