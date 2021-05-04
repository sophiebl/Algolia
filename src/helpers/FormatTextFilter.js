export const priceRange = (price) => {
  if (price === "2") return `$30 and under`;
  else if (price === "3") return `$31 to $50`;
  else if (price === "4") return `$50 and over`;
};

export const rateComment = (rate) => {
  if (rate > 4.5 && rate <= 5) return ` · Exceptional · ${rate}`;
  if (rate > 4.0 && rate <= 4.5) return ` · Excellent · ${rate}`;
  if (rate > 3.5 && rate <= 4) return ` · Awesome · ${rate}`;
  if (rate > 3 && rate <= 3.5) return ` · Good · ${rate}`;
  if (rate >= 2.5 && rate <= 3) return ` · Average · ${rate}`;
  if (rate >= 2 && rate < 2.5) return ` · Ok · ${rate}`;
  if (rate < 2) return `Not good · ${rate}`;
  else return rate;
};
