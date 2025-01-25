const maxareacontainer=function(arr){
    let maxarea=0;
    for (let p1=0;p1<arr.length;p1++)
      {
        for(let p2=p1+1;p2<arr.length;p2++)
          {
            let height=Math.min(arr[p1],arr[p2]);
            let width=p2-p1;
            let area=height*width;
            maxarea=Math.max(maxarea,area);
          }
      }
    return maxarea;
  }
  
  console.log(maxareacontainer([7,1,2,3,9]));