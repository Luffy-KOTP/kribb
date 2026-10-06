// export const formatPrice = (value: number): string => {
//   if (value >= 10000000) {
//     const cr = (value / 10000000).toFixed(1).replace(/\.0$/, "");
//     return `₹${cr}Cr`;
//   }
//   if (value >= 100000) {
//     const l = (value / 100000).toFixed(1).replace(/\.0$/, "");
//     return `₹${l}L`;
//   }
//   return `₹${value.toLocaleString()}`;
// };

export const formatPrice = (value: number): string => {
  if (value >= 1000000000) {
    const b = (value / 1000000000).toFixed(1).replace(/\.0$/, "");
    return `₦${b}B`;
  }
  if (value >= 1000000) {
    const m = (value / 1000000).toFixed(1).replace(/\.0$/, "");
    return `₦${m}M`;
  }
  if (value >= 1000) {
    const k = (value / 1000).toFixed(1).replace(/\.0$/, "");
    return `₦${k}k`;
  }
  return `₦${value.toLocaleString()}`;
};