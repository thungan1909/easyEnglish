const formatNumber = (num: number) => {
  return num % 1 === 0 ? num.toString() : num.toFixed(2);
};

export default formatNumber;
