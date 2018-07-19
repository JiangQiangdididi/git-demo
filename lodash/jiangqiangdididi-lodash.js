var jiangqiangdididi={
  chunk:function(array,num=1){
    var newArray=[];
    for(var i=0;i<array.length;i+=num){
       newArray.push(array.slice(i,i+num));
    }
    return newArray;
  },
  compact:function(array){
    var result=[];
     for(var i=0;i<array.length;i++){
       if(array[i]){
        result.push(array[i]);
       }
     }
     return result;
  },
  concat:function(array,...value){
      for(var i=0;i<value.length;i++){
        array.push(value[i]);
      }
      return array;
  },
  difference:function(array,...value){
    var result=[];
    var state=0;
    for(var i=0;i<array.length;i++){
      for(var s=0;s<value.length;s++){
        if(value[s].indexOf(array[i])>=0){
          state=1;
          break;
        }
      }
      if(state===0){
        result.push(array[i]);
      }
      state=0;
    }
    return result;
  },
  /**
   * 
   */
  differenceby:function(array,[values],[iteratee=_.identity]){
      var result;
      
  },
  drop:function(array,n=1){
    for(var s=0;s<n;s++){
      array.shift();
    }
    return array;
  },
  dropRight:function(array,n=1){
    for(var s=0;s<n;s++){
      array.pop();
    }
    return array;
  },
  dropRightWhile:function(array,select){
    array.filter((x)=>{
      return x
    })
    return array;
  },
  property:function(propName){
      return function(obj){
        return obj.propName;
      }
  },
  sumBy:function(ary,iteratee){
    var result=0;
    for(var i=0;i<ary.length;i++){
      result+=iteratee(ary[i]);
    }
    return result;
  },  
  sum:function(ary){
    return this.sumBy(ary,value=>value);//sada 
  },  
}
  
 

