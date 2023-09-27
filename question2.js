// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4) should return [1,3]

function findSum(numbers, targetSum) {
    function findSubset(nums, target, index, subset, count) {
        if (target === 0 && count === 2) {
            // returns a subset only when count is equal to 2 and the target is zero to ensure that the code finds a subset of exactly two numbers
            return subset;
        }

        if (index === nums.length || target < 0 || count > 2) {
            return null;
        }

        // include the current number in the subset
        const includeSubset = findSubset(
            nums,
            target - nums[index],
            index + 1,
            [...subset, nums[index]],
            count + 1
        );

        // exclude the current number from the subset
        const excludeSubset = findSubset(
            nums,
            target,
            index + 1,
            subset,
            count
        );

        return includeSubset || excludeSubset;
    }

    return findSubset(numbers, targetSum, 0, [], 0);
}

console.log(findSum([1, 2, 3], 4));
