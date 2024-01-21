function makeLine(size) {
    let hashStr = ""
    for (let i = 0; i < size; i++) {
        hashStr = hashStr.concat("#"); 
    }
    return hashStr; 
}

function makeSquare(size) {
    let squareStr = ""; 
    squareStr = makeRectangle(size, size); 
    return squareStr; 
}

function makeRectangle(width, height) {
    let rectangleStr = ""; 
    for (let i = 0; i < height; i++) {
        rectangleStr += "\n" + makeLine(width); 
    }
    return rectangleStr; 
}

function makeDownwardStairs(height) {
    let downwardStairsStr = ""; 
    for (let i = 0; i < height; i++) {
        downwardStairsStr += "\n" + makeLine(i + 1); 
    }
    return downwardStairsStr; 
}

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = ""
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += " "; 
    }
    spaceLine += makeLine(numChars); 
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += " "; 
    }
    return spaceLine; 
}

function makeIsoscelesTriangle(height) {
    let isoscelesTriange = ""; 
    for (let i = 0; i < height; i++) {
        isoscelesTriange += "\n" + makeSpaceLine(height - i - 1, 2 * i + 1); 
    }
    return isoscelesTriange;
}

function makeDiamond(height) {
    let diamond = ""; 
    diamond += makeIsoscelesTriangle(height); 
    diamond += reverse(makeIsoscelesTriangle(height)); 
    return diamond; 
}

function reverse(str) {
    let reversedString = ""; 
    for (let i = str.length - 1; i > 0; i--) {
        reversedString += str[i]; 
    }
    return "\n" + reversedString; 
}

console.log(makeDiamond(5)); 

