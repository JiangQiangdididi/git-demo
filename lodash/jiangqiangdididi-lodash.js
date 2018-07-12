var jiangqiangdididi={
  chunk:(array,num=1)=>{
    var newArray=[];
    for(var i=0;i<array.length;i+=num){
       newArray.push(array.slice(i,i+num));
    }
    return newArray;
  },
  compact:(array)=>{
    var result=[];
     for(var i=0;i<array.length;i++){
       if(array[i]){
        result.push(array[i]);
       }
     }
     return result;
  },
  concat:(array,...value)=>{
      for(var i=0;i<value.length;i++){
        array.push(value[i]);
      }
  },
  difference:(array,...value)=>{
    var result=[];
    var state=0;
    for(var i=0;i<array.length;i++){
      for(var s=0;s<value.length;s++){
        if(value.indexOf(arrat[i])>0){
          state=1;
          break;
        }
      }
      if(state===0){
        result.push(value[i]);
      }
      state=0;
    }
  }
}
  
 

