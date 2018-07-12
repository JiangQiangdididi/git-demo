var jiangqiangdididi={
  chunk:(array,num=1)=>{
    var newArray=[];
    for(var i=0;i<array.length;i+=num){
       newArray.push(array.slice(i,i+num));
    }
    return newArray;
  },
  compact:array=>{
     var result= array.filter(arr=>
      arr===false,
      arr===NaN,
      arr===0,
      arr===null,
      arr===undefined,
      arr===""
    )
    return result;
  }
}
  
 

