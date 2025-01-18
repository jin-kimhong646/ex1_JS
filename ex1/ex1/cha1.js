function cha1(width, height) { 
    let rectangleString = ''; 
    if ( width <= 0 || height <= 0 ) {
        return rectangleString ;
    }
    else {
        for (let i = 0; i < width; i++){ 
            for (let j = 0; j < height; j++){ 
        rectangleString += '*' ; 
            } 
        rectangleString += '\n';
        } 
        return rectangleString; 
    } 
}
console.log(cha1(3,-2));
