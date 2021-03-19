console.log('Your inspirational message of the day is - ');

const inspirationalQuotes_2 = [ 
    'Every Dog has its day', 
    'Never Stop being a good person because of bad people',
    'The best preparation for tomorrow is doing your best today',
    'Keep your face always towards the sun and shadows will fall behind you',
    'Perfection is not attainable, but if we chase perfection, we can achieve excellence'
    
                        ];

const inspirationalQuotes_1 = [
    'If opportunity doesn\'t knock, build a door',
    'It\'s never too late to be what you have been',
    'What lies behind you and what lies in front of you, pales in comparison to what lies inside you',
    'No act of kindness, no matter how small, is never wasted',
    'Don\'t judge each day by the harvest you reap but by the seeds you plant',
    'Change your thoughts and you change your world'
];

const inspirationalQuotes_3 = [
    'Your present circumstances do not determine where you go, they merely determine where you start',
    'No matter what people tell you, words and ideas change the world',
    'The only journey is the one within',
    'Give light and people will find the way',
    'Somewhere, something incredible is waiting to be known'
];

const getRandStr = arr => {
    let randIdx = Math.floor(Math.random()*arr.length);
    return arr[randIdx];
}

let str1 = getRandStr(inspirationalQuotes_1);
let str2 = getRandStr(inspirationalQuotes_2);
let str3 = getRandStr(inspirationalQuotes_3);
console.log(str1 + '. ' + str2 + '. ' + str3 + '.');
