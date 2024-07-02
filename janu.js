function deleteInvalids(array) {

    if (!Array.isArray(array)) {
        return "Error: Input is not an array.";
    }

    const resultArray = array.filter(element => typeof element === 'number' && !isNaN(element));

    return resultArray;
}

console.log(deleteInvalids(["1" , {num:2} , NaN ]));