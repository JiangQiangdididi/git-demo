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
     for(var i;i<array.length;i++){
       if(array[i]){
        result[i].push(array[i]);
       }
     }
     return result;
  }
}
  
 

