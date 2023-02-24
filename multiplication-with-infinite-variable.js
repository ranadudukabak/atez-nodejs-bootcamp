function printArguments(...args) {
    let sum = 1;
    let flag = 0;

    args.forEach((arg, index) => {
        if (isNaN(arg) == 0) {
            sum *= arg;
        } else {
            flag = 1;
        }
    });

    if (flag == 0) {
        console.log(sum);
    } else {
        console.log("Please enter valid values!");
    }
}

printArguments(1, 2, 3, 4, "rana", 6); //You can add infinite variables here.
