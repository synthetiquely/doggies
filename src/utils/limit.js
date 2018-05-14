/**
 * Calculates a posible pagination limit based on the following:
 * square of the current client window size divided by square of an average image size
 * @param {number} clientHeight
 * @param {number} clientWidth
 * @returns {number} approximated limit
 */
export const calculatePaginationLimit = (clientHeight, clientWidth) => {
  const averageImageHeight = 200;
  const averageImageWidth = 200;

  const imageArea = clientHeight * clientWidth;
  const averageImageArea = averageImageHeight * averageImageWidth;

  return Math.round(imageArea / averageImageArea);
};
