function largestSubarraySum(array) {
    let maxSum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > 0) {
            array[i] += array[i - 1];
        }
        maxSum = Math.max(array[i], maxSum);
    }
    return Math.max(maxSum, 0);
}