
/* ----------------- */
/* --- Ed's code --- */
/* ----------------- */

/* --- Constants ---  */

let string = '';
const answerBlock = document.getElementById('answer');
const allButtons = Array.from(document.querySelectorAll('div'));
const errorSpan = document.getElementById('error');
const screenDisplay = document.getElementById('screen');
const resetScreen = document.getElementById('reset');
const enterKey = document.getElementById('enter');
const article = document.querySelector('article');



/* --- Give each button an event listener --- */

resetScreen.addEventListener('click', () => {
  location.reload();
});

article.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    let btn = e.target
    // console.log(btn.innerHTML);
    if (btn.innerHTML === 'Enter') {
      processCalculation(string);
      string = '';
    } else {
      errorSpan.innerHTML = '';
      answerBlock.innerHTML = '';
      string += btn.innerHTML;
      screenDisplay.innerHTML = string;
    }
  }
})

/* --- Functions --- */

const calculator = (first, op, second) => {
  console.log(first,op,second);
  if (op === "+") {
    return first + second;
  } else if (op === "-") {
    return   first - second;
  } else if (op === "*") {
    return first * second;
  } else if (op === "/") {
    return first / second;
  } else if (op === "index"){
      return first ** second;
  } else if (op === "root") {
      if (!first) { first = 2; }
      return Math.pow(second, 1/first);
  }
};

const errorMessage = (str) => {
  return errorSpan.innerHTML = `Cannot calculate. Invalid input.\nPlease check you've entered the correct amount of Numbers to Operators and their order`
  };

/*
Process Calculation:
1) Formats the string
2) Checks for errors
    - checks array length is odd
    - checks numbers and operators are in correct place (numbers indexes are even, ops indexes are odd)
3) Sends data to runCalc which runs the calculator on it
4) Puts the answer in the html
*/

const processCalculation = (str) => {
  console.log(str);
  let decodedArray = decode(str);
  console.log(decodedArray)
  decodedArray = toNumber(decodedArray);
  console.log(decodedArray);

  if (decodedArray.length % 2 === 1 && checkingOrder(decodedArray)) {
    return answerBlock.innerHTML = runCalc(decodedArray);
  } else {
    return errorMessage();
  }
}

/* analyse string */

const decode = (str) => str.match(/[\d\.]+|[^\d^\.]+/g);

/* Turn the numbers into floats */

const toNumber = (arr) => arr.map(el => Number(el) | el === '0' ? Number(el) : el);

/* Check if correct number of floats to operators */

const checkingOrder = (arr) => {
  let check = arr.filter((el,index) => {
    console.log(typeof el, index)
    if (index % 2 === 1 && typeof el === 'string') {
      return true
    } else if (index % 2 === 0 && typeof el === 'number') {
      return true
    }
    return false
  })
  return check.length === arr.length;
};

/* BIDMAS: Locate the index with the array of where to calculate the next sum. */

const bidmas = (arr) => {
  order = ['root','index','/','*','+','-'];
  let nextIndex;
  order.find(bidmas => {
    return arr.find((el, i) => {
      if (el === bidmas) {
        console.log(el, i);
        return nextIndex = i;
      }
    })
  });
  return nextIndex;
};

/* run the calculator on approved array */

const runCalc = (arr) => {
  console.log(arr);
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr.length === 3) {
    return calculator(...arr)
  } else { 
    console.log('recursion');
    let bIndex = bidmas(arr);
    arr.splice(bIndex-1, 3, calculator(...arr.slice(bIndex-1, bIndex+2))) 
    return runCalc(arr);
  }
};
