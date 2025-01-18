let array = [1,3,5,6] ;
let total = 0;
 
if (array.length == 0) {
    console.log(array.length);
}
else {
    for ( let i = 0 ; i < array.length  ; i++ ) {
        total += array[i] ;
    }
 
    console.log(total / array.length);
}

