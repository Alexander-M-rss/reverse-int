module.exports = function reverse (n) {
    let str = n.toString();
    
    if (str[0] === '-')
        str = str.slice(1);
    
    return Number(str.split('').reverse().join(''));
 }
