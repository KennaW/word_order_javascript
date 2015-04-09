function wordOrder(input) {
    var input_sorted = input.toLowerCase().split(" "); //input equals itself exploded by spaces
    input_sorted.sort(); //sort array
    var words = [];
    var counts = [];
    var results = [];


    for (var i = 0; i <= input_sorted.length; i++) {
        //remove first word of input array and assign first words to temp variable
        var word = input_sorted.splice(0, 1)[0];

        //set tally to 1; push word to words array
        var count = 1;
        words.push(word);

        //search input array for all instances of temp word;
        //for each match, remove word at returned index and increase tally (count) by 1
        for (var j = 0; j < input_sorted.length; j++){
            while (input_sorted.indexOf(word) > -1) {
                input_sorted.splice(input_sorted.indexOf(word), 1);
                count++;
            }
        }

        //push tally (count) to counts array
        counts.push(count);

        //reset i to keep loop on track
        i = 0;
    }

    //push words and counts as regular array into results array
    for (var i = 0; i < words.length; i++) {
        results.push([counts[i], words[i]]);
    }

    //sort results by count (index 0)
    results.sort();
    results.reverse();

    //re-set words array to empty
    words = [];

    //loop through results array; push each word to newly empty words array
    for (var i = 0; i < results.length; i++) {
        words.push(results[i][1]);
    }

    return words;
};


$(document).ready(function() {
    $("#text-block").submit(function(event) {
        var text = $("textarea#new-sentence").val();

        var sorted_words = wordOrder(text);
        $("#word_list").empty();
        for (var i = 0; i < sorted_words.length; i++) {
            $("#word_list").append("<li>" + sorted_words[i] + "</li>");
        }
        $("#results").show();

        event.preventDefault();
    });
});
