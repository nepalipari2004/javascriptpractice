// destructuring with arrays:
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
]

const [gold, silver, bronze ,, fifth, ...others] = raceResults;

console.log(gold);
console.log(silver);

console.log(bronze);

console.log(fifth);
console.log(others);


// destructuring with objects:
const runner = 
{
    first: "Eliud",
    last: "Kipchoge",
    country:"Kenya",
    title: "Elder son of Kenya"
}

const {first, last} = runner;

const {country: nation, title: honorific} = runner;

console.log(first);
console.log(last);

console.log(nation);

const {first, last, ...other} = runner;

console.log(other);

// destructuring nested objects:
const results = [{
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya"
},
{
    first: 'Feyisha',
    last: 'Lilesa',
    country: 'Ethiopia'
},

{
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
}]

const [{first: goldWinner}, {country}] = results;

console.log(goldWinner);
console.log(country);



const runner = 
{
    first: "Eliud",
    last: "Kipchoge",
    country:"Kenya",
    title: "Elder son of Kenya"
}


function print(person){
    const {first, last,title} = person;
console.log(`${first} - ${last} - ${title}`)
}

function print({
    first, last, title
})
{
    console.log(`${first}-${last}-${title}`);
}

print(runner);



const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
]

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`)
}

console.log(parseResponse(response));
