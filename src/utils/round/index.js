export default (value, dp) => {
  if (!value || dp < 0) return 0;
  if (dp === 0) return Math.round(value);
  return Math.round((value * 10 ** dp) / 10 ** dp);
};
