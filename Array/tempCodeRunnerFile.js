 let myArray = [4, 2, 7, 1, 5];
 console.log("Original Array:", myArray);


 //append element 
 const appendElement =(arr,ele)=>{
    arr[arr.length] = ele
 }
 appendElement(myArray, 6);
 console.log("AFTER APPENDING : "+ myArray)

 //prepend element 
 const prependElement = (arr,ele)=>{
    for(let i = arr.length ; i > 0 ; i--){
        arr[i] = arr[i-1]
    }
    arr[0]=ele;
 }
 prependElement(myArray,9)
 console.log("After Prepending :" + myArray)

//remove from start
const removeFromStart = (arr)=>{
    for(let i = 0 ; i < arr.length-1 ; i++){
        arr[i] = arr[i+1]
    }
    arr.length--;
}
removeFromStart(myArray)
console.log(myArray)

//remove from end 
 const removefromEnd = (arr) => {
   arr.length--;
 };
 removefromEnd(myArray);
 console.log("removeFromStart : " + myArray);

 //insert at index
 const insertAtIndex = (arr, index,ele) => {
   for (let i = arr.length; i > index; i--) {
     arr[i] = arr[i - 1];
   }
   arr[index] = ele;
 };
 insertAtIndex(myArray,3, 9);
 console.log("insertAtIndex :" + myArray);

 //removeatindex 
  const removeAtIndex = (arr, index) => {
    for (let i = index; i < arr.length-1 ; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length--
  };
  removeAtIndex(myArray, 3);
  console.log("removeAtIndex :" + myArray);

  //just adding a temp ele
  myArray.push(9)

  //removebyvalue

            //=> findINdex
  const findIndex = (arr,value) =>{
        for(let i = 0 ; i< arr.length ; i++){
            if(arr[i]===value){
                return i
            }
        }
        return -1
  }
  const removebyvalue = (arr,value)=>{
    const index = findIndex(arr,value)
    if(index !== -1){
        removeAtIndex(arr, index);
    }
  }

  removebyvalue(myArray, 9)
  console.log(myArray)

  //search 
  const search = (arr,ele)=>{
    for(let i = 0;i<arr.length ; i++){
        if(arr[i]===ele){
            return i
        }
    }
    return -1
  }

  const seachvalue =search(myArray,2)
  if(seachvalue != -1){
      console.log("Found at "+seachvalue+1)
  }else{
    console.log("Found at no position")
  }

  //reversearray
  const reversearray = (arr)=>{
    let start = 0;
    let end = arr.length -1;
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end]
        arr[end] = temp;

        start++;
        end --;
    }
  }
  reversearray(myArray)
  console.log(myArray)

  //sortarray
  const sortarray =(arr)=>{
    n = arr.length;
    for(let i = 0 ; i < n - 1 ; i++){
        for(let j = 0 ; j < n-i-1 ; j++){
            if(arr[j] > arr[j + 1]){
                let temp  = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
  }

  sortarray(myArray)
  console.log(myArray)