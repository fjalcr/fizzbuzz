const fizzbuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0 && num !== 0)
        return "fizzbuzz";
    if(num % 3 === 0 && num !== 0)
        return "fizz";
    if(num % 5 === 0 && num !== 0)
        return "buzz";
    if (num === 0)
        return 0;
    return num
}
module.exports = fizzbuzz;
