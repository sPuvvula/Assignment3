function findMinMax() {
    let Arr = [50, 60, 20, 10, 40];

    let minValue = Math.min(...Arr);
    let maxValue = Math.max(...Arr);
    
    console.log("Minimum element is:" + minValue);
    console.log("Maximum Element is:" + maxValue);
}

findMinMax()


const calAve = function (array) {
let sum = 0;
for (let i = 0; i < array. length; i++)
sum += array[i];
const average = sum / array. length;
console. log(average);
return average;
};

findAverage()