export const getCurrentDate = (): string => {
  let currentDate = new Date();

  const weekday = currentDate.toLocaleDateString('en-us', { weekday: 'long' });
  const month = currentDate.toLocaleDateString('en-us', { month: 'long' });
  const day = currentDate.getDay();

  return `${weekday}, ${month} ${day}`;
};
