const createArrayByLength = (length: number) => {
  return Array.from({ length }, (_, index) => index);
};

export default createArrayByLength;
