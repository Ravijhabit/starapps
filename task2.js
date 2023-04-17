//My approach
//At any point on the array we need to find the maximum value from the current position of the array till position whose value it holds and that maximum value becomes our next halt airport and that halt airport becomes our current position and we repeat the process till we reach the last array element.
let arr=[1,6,4,4,3,0,0,1,2,6];
//res stands for result holding array of airports as the final answer
const res=[];
if(arr.length>0)
    res.push(arr[0]);
//from the question it is very clear that we need to start from first airport so the first airport having any value will be present in the result.
for(let i=0,maxi,j;i<arr.length;i++){
    //over is a variable that contains whether we are at end of the array
    let over=false;
    //if first element is zero itself then it is not possible to travel
    if(arr[i]===0)
        break;
    //maxi holds index of maximum value
    maxi=i+1;
    for(j=i+1;(j<=i+arr[i] && j<arr.length);j++){
        // if we are at the end of the array over becomes true and we exit the loop  
        if(j===arr.length-1){
            //last index is pushed since our destination is the last airport
            res.push(arr[j]);
            //over because true because we are at the end of the array
            over=true;
            break;
        }
        else if(arr[j]+j-i>=arr[maxi]){
            //We update maxi if we get a variable once we get a value greater than the arr[maxi]
            maxi=j;
        }
    }
    // if over is true i.e. we are at the end of the array
    if(over)
        break;
    // i gets updated to the maxi and -1 is because in next loop we update the value of i
    i=maxi-1;
    //we got an airport where we need to halt to get the minimum number of airport between source and destination
    res.push(arr[maxi]);
}
if(arr[0]===0)
    console.log('Mission Impossible');
else{
    for(let el of res)
        console.log(el+'->');
}