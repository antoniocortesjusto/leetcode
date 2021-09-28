var FizzBuzz = function (num){
	let res = '';
    if (num % 15 == 0)
        return "FizzBuzz";
    if (num % 3 == 0)
        return "Fizz";
    else if (num % 5 == 0)
        return "Buzz";
    else
        return num.toString();
};

exports.FizzBuzz = FizzBuzz;