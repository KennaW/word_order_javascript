function wordOrder(input) {
    var input = input.split(" ");
    input.sort();
    var words = [];
    var counts = [];
    var results = [];


    for (var i = 0; i < input.length; i++) {
        var word = input.splice(0, 1)[0];
        var count = 1;
        words.push(word);
        for (var j = 0; j < input.length; j++){
            while (input.indexOf(word) > -1) {
                input.splice(input.indexOf(word), 1);
                count++;
            }
        }
        counts.push(count);
        i = 0;
    }

    for (var i = 0; i < words.length; i++) {
        results.push([counts[i], words[i]]);
    }
    results.sort();
    words = [];

    for (var i = 0; i < results.length; i++) {
        words.push(results[i][1]);
    }

    return words;
};
