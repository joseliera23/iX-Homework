

function date() {
    const date = new Date()
    console.log("Today is " + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + ".")
}


function perfectSquare(n) {
    let square_root = Math.sqrt(n)
    return (square_root === Math.trunc(square_root) ? true : false)
}

function fibonnaci() {
    let f_prev = 0
    let f_curr = 1
    console.log(f_prev)
    console.log(f_curr)

    for (let i = 2; i <= 10; i++) {
        let temp = f_curr
        f_curr = f_prev + f_curr
        f_prev = temp
        console.log(f_curr)
    }
}

date()
console.log("")


console.log("Here, we check if the number 1 thru 16 are perfect squares with the perfectSquare() function:")
for (let n = 1; n <= 16; n++) {
    varString = (perfectSquare(n) ? " is " : " is not ")
    console.log(n + varString + "a perfect square.")
}


console.log("")
console.log("Here are the first ten numbers in the fibonnaci sequences (not including 0), found using fibonnaci() function:")
fibonnaci()