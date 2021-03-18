console.log('Your inspirational message of the day is - ');

const inspirationalQuotes = [ 
    'Every Dog has its day', 
    'Never Stop being a good person because of bad people'
                        ];

let randIdx = Math.floor(Math.random()*inspirationalQuotes.length);

console.log(inspirationalQuotes[randIdx]);
