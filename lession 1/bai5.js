/* xac dinh loai tam giac
tam giac can, tam giac deu, tam giac vuong
*/
const triangleType = (a, b, c) => {
  arr = [a,b,c];
  arr.sort();
  console.log(arr);

  a = arr[0];
  b = arr[1];
  c = arr[2];

  if (a + b > c && a + c > b && b + c > a) {
    if (a == b) {
        if (b == c) {
          console.log("tam giac deu");
          return 0;
        }
        console.log("tam giac can");
        return 0;
      }
    if(a* a + b*b == c*c){
      console.log("tam giac vuong");
        return 0;
    }
  }
  else{
    console.log("not triangle");
  }
}

triangleType(5,3,4);
triangleType(5,4,4);
triangleType(5,5,5);

triangleType(1,1,2);