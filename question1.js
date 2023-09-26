const inputArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const orderArray = (arr) => {
    // sort array by numerical order
    const result = arr.sort((a, b) => a - b);
    return result;
};

const organizeArray = (arr) => {
    const countMap = {};
    const result = [];

    for (const item of arr) {
        if (countMap[item] === undefined) {
            // if it's the first occurrence of the item, add it to the result array
            result.push(item);
            countMap[item] = result.length - 1;
        } else {
            // if it's a duplicate, check if it's already in a subarray, and if not, create one
            if (!Array.isArray(result[countMap[item]])) {
                result[countMap[item]] = [item];
            }
            // push the duplicate value into the existing subarray
            result[countMap[item]].push(item);
        }
    }
    return result;
};

const orderedArray = orderArray(inputArray);
const organizedArray = organizeArray(orderedArray);

console.log(organizedArray);
