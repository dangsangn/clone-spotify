export const getTimeSong = (
  ms: number
): { minute: string; seconds: string } => {
  const minute = Math.floor(ms / 60);
  const seconds = Math.floor(ms) - minute * 60;
  return { minute: String(minute), seconds: `0${seconds}`.slice(-2) };
};
