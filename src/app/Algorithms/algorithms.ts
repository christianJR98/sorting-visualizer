export const swapData = (indx1:number,indx2:number,arr:number[]) => {
  let aux = arr[indx2];
  arr[indx2] = arr[indx1];
  arr[indx1] = aux;
}

export const bubbleSort = (data, arrAnimation) =>{
  let auxArr = [...data];
  for(let i =0; i < auxArr.length;i++){
    for(let j = i+1; j < auxArr.length;j++){
      if(auxArr[i] > auxArr[j]){
        arrAnimation.push({position1:i,position2:j});
        swapData(i,j,auxArr);
      }
    }
  }
}

export const selectionSort = (data, arrAnimation) =>{
  let auxArr = [...data];

    for(let i = 0; i < auxArr.length; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < auxArr.length; j++){
            if(auxArr[j] < auxArr[min]) {
                min=j;
            }
         }
         if (min != i) {
            arrAnimation.push({position1:i,position2:min});
            swapData(i,min,auxArr);
        }
    }
    return auxArr;
}

export const quickSort = (array, arrAnimation) => {
  let auxArr = [...array];
  //let array = stateArray.slice(0),
  quickSortHelper(auxArr, 0, auxArr.length - 1, arrAnimation);
  return auxArr;
}

function quickSortHelper(array, start, end, arrAnimation) {
  if (start >= end) {
    return;
  }
  let pivot = start,
      left = start + 1,
      right = end;

  while (right >= left) {
    if (array[right] < array[pivot] && array[left] > array[pivot]) {

      swapData(right,left,array);
      arrAnimation.push({position1:right,position2:left});
    }
    if (array[right] >= array[pivot]) {
      right--;
    }
    if (array[left] <= array[pivot]) {
      left++;
    }
    //if (right >= left)
  }
  if (pivot !== right) {
    swapData(right,pivot,array);
    arrAnimation.push({position1:right,position2:pivot});
  }
  quickSortHelper(array, start, right - 1, arrAnimation);
  quickSortHelper(array, right + 1, end, arrAnimation);
}


