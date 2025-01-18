let text = "aaa bbb a";
let char = 'd';
let count = 0 ;
 
for ( let i = 0 ; i < text.length ; i ++ ) {
    if ( char == text.charAt(i) ) {
        count ++;
    }
}
console.log(count);
