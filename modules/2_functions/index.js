/**
 * Currying 
 */
export const mergeWords = () => {};

/**
 * Every/Some
 */
export const checkUsersValid = (originUsers) => {
    function checkUsers(users){
        let originIds = originUsers.map((user) => user.id);
          
        for(const user of users) {
            if(!originIds.includes(user.id)) return false;
        }
        return true;
    }
    return checkUsers;
};

/**
 * Reduce 
 */
export const countWords = (words) => {
    function updateObjectProperty(obj, word){
        obj[word] = (obj[word] || 0) + 1;
        return obj;
    }
    return words.reduce((obj, word) => updateObjectProperty(obj, word), new Object());
};

/**
 * Palindrome 
 */
export const isPalindrome = (str) => {
    let reverseStr = str.toLowerCase().split('').reverse().join('');
    return str.toLowerCase() === reverseStr ? "The entry is a palindrom":"Entry is not a palindrome";
};

/**
 * Recursion 
 */
export const factorial = (num) => {
    if (num === 0) {
        return 1;
    }
    else { 
        return num * factorial( num - 1 ); 
    }
};
export const amountToCoins = () => {};
export const repeat = (fn, times) => {
    if(times <= 0){
        return;
    }

    fn.call();
    repeat(fn, --times);
};
export const reduce = () => {};
