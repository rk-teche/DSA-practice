//www.naukri.com/code360/problems/reverse-the-array_1262298?interviewProblemRedirection=true

//Approach1

function reverseArr(arr, M) {
    const newArr = [];
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (i >= M) {
        newArr.push(arr[i]);
      } else {
        arr2.push(arr[i]);
      }
    }
    const updatedArr = [...arr2, ...newArr.reverse()];
  
    console.log(updatedArr);
  }
  
  const arr = [1, 2, 3, 4, 5];
  const M = 3;
  reverseArr(arr, M);
  
  //Approach 2
  
  function ReverseAnArray(arr, M) {
    const startArr = arr.slice(0, M);
    const endArr = arr.slice(M).reverse();
    const updatedArr = startArr.concat(endArr);
    console.log(updatedArr);
  }
  
  ReverseAnArray(arr, M);
  
  //Approach 3
  
  function ReverseAnArray2(arr, M) {
    let start = 0;
    let end = arr[arr.length - 1];
    while (start <= end) {
      if (start < M && end >= M) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
      }
      start++;
      end--;
    }
  }
  
  ReverseAnArray2(arr, M);
  