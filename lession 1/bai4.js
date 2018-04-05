//giai phuong trinh bac 2
const slove = (a,b,c) => {
    delta = b*b - 4*a*c;
    if (delta < 0) {
        console.log("vo nghiem");
        
    } else if (delta == 0){
        x = -b/(2*a);
        console.log("nghiem kep x = " + x);
        
    }
    else {
        x1 = (-b - Math.sqrt(delta))/(2*a);
        x2 = (-b + Math.sqrt(delta))/(2*a);
        console.log(" 2 nghiem ")
        console.log("X1 = "+ x1);
        console.log("X2 = "+ x2);
    }
}

slove(1,2,-6);