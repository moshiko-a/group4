function RandomWord(tmparr) {
    if (!(tmparr instanceof Array))
        throw "\"chars\" should be an array.";

    else if (!(tmparr.every(value => { return typeof value === 'string' })))
        throw "\"chars\" should include only strings."

    else
        var charsArray = tmparr.concat();

    this.randomize = function (length) {
        if (!(isNaN(length))) {
            var str = "";
            
            for (var i = 0; i < length; i++)
                str += charsArray[Math.floor(Math.random() * charsArray.length)];

            return str;
        }
        else 
            throw "\"length\" should be a number.";
    }
}

try {
    var word1 = new RandomWord(['a', 'b', 'c']);
    console.log(word1.randomize(10));
}
catch (exeption) {
    console.log("Error:", exeption);

}