var arr=[1,2,3,4,5,6,7]
var t=11;

function findsum(arr,t){
  for(let p=0;p<arr.length;p++)
    {
      const q=t-arr[p];
      for(let p2=p+1;p2<arr.length;p2++)
        {
          console.log(q,arr[p2])
          if(q===arr[p2])
          {
            console.log(q,arr[p2])
            return [p,p2]
          }
        }
    }
  return null;
}

console.log(findsum(arr,t));