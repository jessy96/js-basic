/**
 * Change the capitalization of all letters in a string
 */
export const changeCase = (str) => {
    let result = '';
    for(let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if(char === char.toUpperCase()){
            char = char.toLowerCase();
        }else if(char === char.toLowerCase()){
            char = char.toUpperCase();
        }
        result = result + char;
    }
    return result;
};

/**
 * Filter out the non-unique values in an array
 */
export const filterNonUnique = (arr) => {
    let result = [];
    for (const element of arr) {
        let elmentCounter = 0;
        for(const el2 of arr) {
            if (element === el2){
                elmentCounter++;
            }
        }
        if(elmentCounter === 1) {
        result.push(element);
        }
    }
    return result;
};

/**
 * Sort string in alphabetical order
 */
export const alphabetSort = (str) => {
    let chars = str.split('');
    let sortedChars = chars.sort();
    return sortedChars.join('');
};

/**
 * Get min integer
 */
export const getSecondMinimum = (arr) => {
    let min = null;
    let secMin = null;
    arr = arr.sort();
    for (const el of arr){
        if (min === null || el <= min){
            min = el;
        } else if (secMin === null || el <= secMin) {
            secMin = el;
        }
    }
    return secMin != null ? secMin : min;
};

/**
 * Double every even integer
 */
export const doubleEveryEven = (arr) => {
    let result = [];
    for(const element of arr) {
        if(element % 2 === 0){
            result.push(element * 2);
        }else{
            result.push(element);
        }
    }
    return result;
};

/**
 * Create array with all possible pairs of two arrays
 */
export const getArrayElementsPairs = (arr1, arr2) => {
    let result = [];
    for(const el1 of arr1){
        for (const el2 of arr2){
            result.push([el1, el2]);
        }
    }
    return result;
};

/**
 * Deep equal
 */
export const deepEqual = () => {};

/**
 * Format date
 */
export const formatDate = () => {};
