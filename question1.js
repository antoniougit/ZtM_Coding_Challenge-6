// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const inputArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const organizeArray = (arr) => {
    arr.sort((a, b) => a - b); // sort the input array in numerical order

    const result = [];
    let currentGroup = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            // if the current element is equal to the previous one, push it to the current group
            currentGroup.push(arr[i]);
        } else {
            // if it's different, finalize the current group (either as a single value or an array)
            result.push(
                currentGroup.length === 1
                    ? currentGroup[0]
                    : currentGroup.slice()
            );
            currentGroup = [arr[i]]; // Start a new group
        }
    }

    // push the last group
    result.push(
        currentGroup.length === 1 ? currentGroup[0] : currentGroup.slice()
    );

    return result;
};

const organizedArray = organizeArray(inputArray);

console.log(organizedArray);
