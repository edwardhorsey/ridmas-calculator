// console.log(/\d/.test(0))
// console.log(/\d/.test(4))
// console.log(/\d/.test('no'))
// console.log(/\d/.test('/'))
// console.log(/\d/.test(24242))
// console.log(/\d/.test(3.1623))
// console.log(/\d/.test(3.1623))


//finding bidmas

const bidmas = (arr) => {
  order = ['root','power','/','*','+','-'];
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

console.log(bidmas([65, '+', 40, '*', 5]))

const add = (a,b) => {
  return a + b
};

let array = [1,2,3,4,5,6,7];

// let toAdd = array.slice(2,4);
// console.log(toAdd);
// let added = add(...toAdd);
// console.log(added)

array.splice(4, 2, add(...array.slice(4,6))) 

console.log(array);

// console.log(add(3,4))


// checking index number of numbers and index number of operators
// let arrTwo = [66, '+', 55, '-', 77];
// let arrThree = [66, '+', 55, '-', 77, '-', 45, 45, '-', '4'];


// console.log(arrThree.filter((el,index) => {
//   console.log(typeof el, index)
//   if (index % 2 === 1 && typeof el === 'string') {
//     return true
//   } else if (index % 2 === 0 && typeof el === 'number') {
//     return true
//   }
//   return false
// }))



console.log(Number('0'))
if (Number(0)) {console.log('hi')}

//

// allButtons.forEach(btn => {
//   if (btn.innerHTML === 'Enter') {
//     btn.addEventListener('click', () => {
//       processCalculation(string);
//       string = '';
//     })
//   } else {
//     btn.addEventListener('click', () => {
//       errorSpan.innerHTML = '';
//       answerBlock.innerHTML = '';
//       string += btn.innerHTML;
//       screenDisplay.innerHTML = string;
//     })
//   }
// })