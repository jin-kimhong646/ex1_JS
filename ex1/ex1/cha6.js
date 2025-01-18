
let a= 0 , b =0 , c = 0 ;
let votes = ['A' , 'B' , 'C' , 'C'] ;
 
for ( let i = 0 ; i < votes.length ; i ++ ) {
    if ( votes[i] == 'A') {
        a++;
    }
    else if ( votes[i] == 'B') {
        b++ ;
    }
    else {
        c++ ;
    }
}
 
if ( a > b ) {
    if ( a > c ) {
        console.log("A is the winner.") ;
    }
    else if ( a < c ) {
        console.log("C is the winner.") ;
    }
    else {
        console.log("A and C are both winners.") ;
    }
}
else if ( a < b ) {
    if ( b > c ) {
        console.log("B is the winner.") ;
    }
    else if ( b < c ) {
        console.log("C is the winner.") ;
    }
    else {
        console.log("B and C are both winners.") ;
    }
}
else {
    if ( a > c ) {
        console.log("A and B are both winners.") ;
    }
    else if ( a == c ) {
        console.log("A B and C are winners.") ;
    }
    else {
        console.log("C is the winner.") ;
    }
}


