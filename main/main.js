module.exports = function main(str) {
  // Write your cade here
    var len = str.length;
    var sum = 0;
    for(var i = 0;i<len;i++){
        var x = parseInt(str.charAt(i));
        sum += x;
    }
    return sum;
}
