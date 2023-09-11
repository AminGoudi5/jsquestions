<<<<<<< HEAD
function calculate(num1) {
    return function (num2) {
        return function (operator) {
            if (operator === '+') {
                return num1 + num2;
            } else if (operator === '-') {
                return num1 - num2;
            } else if (operator === '*') {
                return num1 * num2;
            } else if (operator === '/') {
                return num1 / num2;
            }
        };
    };
}



function sumFromTo(start, end) {
    if (start > end) {
        return 0;
    }

    return start + sumFromTo(start + 1, end);
}



function callOnceAfter(func, seconds) {
    let lastCalledTime = 0;

    return function (...args) {
        const currentTime = Date.now();
        if (currentTime - lastCalledTime >= seconds * 1000) {
            lastCalledTime = currentTime;
            return func(...args);
        }
    };
}


function limitCallForEveryDuration(func, duration) {
    let lastCalledTime = 0;
    const timeThreshold = duration * 1000;
    return function (...args) {
        const currentTime = Date.now();
        if (currentTime - lastCalledTime >= timeThreshold) {
            lastCalledTime = currentTime;
            func(...args);
        }
    };
}


function rememberOrDo(func) {
    const results = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (results.hasOwnProperty(key)) {
            return results[key];
        } else {
            const result = func(...args);
            results[key] = result;
            return result;
        }
    };
}



function makeCancelableTimeout(func, time) {
    let timeoutId;
  
    const cancel = () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  
    timeoutId = setTimeout(func, time);
  
    return cancel;
  }
=======
function calculate(num1) {
    return function (num2) {
        return function (operator) {
            if (operator === '+') {
                return num1 + num2;
            } else if (operator === '-') {
                return num1 - num2;
            } else if (operator === '*') {
                return num1 * num2;
            } else if (operator === '/') {
                return num1 / num2;
            }
        };
    };
}



function sumFromTo(start, end) {
    if (start > end) {
        return 0;
    }

    return start + sumFromTo(start + 1, end);
}



function callOnceAfter(func, seconds) {
    let lastCalledTime = 0;

    return function (...args) {
        const currentTime = Date.now();
        if (currentTime - lastCalledTime >= seconds * 1000) {
            lastCalledTime = currentTime;
            return func(...args);
        }
    };
}


function limitCallForEveryDuration(func, duration) {
    let lastCalledTime = 0;
    const timeThreshold = duration * 1000;
    return function (...args) {
        const currentTime = Date.now();
        if (currentTime - lastCalledTime >= timeThreshold) {
            lastCalledTime = currentTime;
            func(...args);
        }
    };
}


function rememberOrDo(func) {
    const results = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (results.hasOwnProperty(key)) {
            return results[key];
        } else {
            const result = func(...args);
            results[key] = result;
            return result;
        }
    };
}



function makeCancelableTimeout(func, time) {
    let timeoutId;
  
    const cancel = () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  
    timeoutId = setTimeout(func, time);
  
    return cancel;
  }
>>>>>>> a2b488b767741d0ed72b562012cbef6e5439d445
  