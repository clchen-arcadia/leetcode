/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const proceedingDays = [];
    const answers = [];
    
    for (let i = temperatures.length - 1; i >= 0; i--) {
                
        let isInsert = false;
        let countDays = 1;
        
        for (let j = proceedingDays.length - 1; j >= 0; j--) {
            if (proceedingDays[j] > temperatures[i]) {
                isInsert = true;
                answers.push(countDays);
                break;
            }
            countDays++;
        }
        if (!isInsert) answers.push(0);
        
        proceedingDays.push(temperatures[i]);
    }
    
    answers.reverse();
    return answers;
};