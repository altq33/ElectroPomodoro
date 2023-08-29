export const normalizeTime = (minutes: number, seconds: number): string => {
  let normalizedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let normalizedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${normalizedMinutes}:${normalizedSeconds}`;
};
