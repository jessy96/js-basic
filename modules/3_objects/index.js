/**
 * Array to List
 */
export const arrayToList = (arr) => {
    let parentNode = {};
    let childNode = parentNode;
    for (let i = 0; i < arr.length; i++) {
      childNode.value = arr[i];
        if (i+1 !== arr.length){   
          childNode.rest = {}
          childNode = childNode.rest;
        }else {
          childNode.rest = null;
        }
        
    }
    return parentNode;
};
export const listToArray = (arr) => {
    return arr; // not clear what should be done here
};

/**
 * Keys and values to list
 */
export const getKeyValuePairs = (obj) => {
    let result = [];
    for (const key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
};

/**
 * Invert keys and values
 */
export const invertKeyValue = (obj) => {
    let result = {};
    for (const key in obj) {
        result[obj[key]] = key;
    }
    return result;
};

/**
 * Get all methods from object
 */
export const getAllMethodsFromObject = (obj) => {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == 'function';
    });
};

/**
 * Clock
 */
export class Clock {}

/**
 * Groups
 */
export class Groups {
    members = [];

    has(val){
        return this.members.includes(val);
    }

    add(val){
        if(!this.has(val)){
            this.members.push(val);
        }
    }

    delete(val){
        if(this.has(val)){
            let idx = this.members.indexOf(val);
            this.members.splice(idx, 1);
        }
    }

    static from (arr) {
        let instance = new Groups();
        instance.members = arr;
        return instance;
    }
}
