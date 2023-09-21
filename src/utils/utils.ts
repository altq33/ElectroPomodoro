export const normalizeTime = (minutes: number, seconds: number): string => {
  let normalizedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let normalizedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${normalizedMinutes}:${normalizedSeconds}`;
};

export const calculateRenderVolumeValue = (value: number) =>
  Math.round(value * 100);

export const isPreviousDay = (currentDate: string, prevDate: string) => {
  const prevByCurrentDay = new Date(currentDate);
  prevByCurrentDay.setDate(prevByCurrentDay.getDate() - 1);

  const prevByCurrentDayString = prevByCurrentDay.toDateString();
  return prevByCurrentDayString == prevDate;
};
