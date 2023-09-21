export const normalizeTime = (minutes: number, seconds: number): string => {
  let normalizedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let normalizedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${normalizedMinutes}:${normalizedSeconds}`;
};

export const calculateRenderVolumeValue = (value: number) =>
  Math.round(value * 100);

export const isPreviousDay = (currentDate: string, prevDate: string) => {
  const dateParts = currentDate.split(".");
  const prevByCurrentDay = new Date(
    parseInt(dateParts[2]),
    parseInt(dateParts[1]) - 1,
    parseInt(dateParts[0])
  );
  prevByCurrentDay.setDate(prevByCurrentDay.getDate() - 1);

  return prevByCurrentDay.toLocaleDateString() == prevDate;
};
