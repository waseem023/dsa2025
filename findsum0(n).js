var arr=[1,2,3,5,4,6,7]
var t=11;

function findsum(arr,t){
  var o={};
  for(let p=0;p<arr.length;p++)
    {
     cmv=o[arr[p]] 
      if(cmv>=0)
      {
        return [cmv,p]
      }
      else
      {
        let ntf=t-arr[p];
        o[ntf]=p
      }
    }
  
  return null;
}

console.log(findsum(arr,t));