// //Paths
let baseUrl = window.location.origin;
let home = baseUrl + "/views/home.html";
let pathName = window.location.pathname;
let page = pathName.split("/").pop();

// //Array of Quotes
let quotes = [{
        author: "E.E.Cummings",
        quote: "It takes courage to grow up and become who you really are."
    },
    {
        author: "Mark Twain",
        quote: "If you tell the truth, you don't have to remember anything."
    },
    {
        author: "C.S. Lewis",
        quote: "You are never too old to set another goal or to dream a new dream."
    },
    {
        author: "Viola Davis",
        quote: "All dreams are within reach. All you have to do is keep moving towards them."
    },
    {
        author: "Oscar Wilde",
        quote: "To live is the rarest thing in the world. Most people just exist."
    }
];

function arrayToString(arr) {

    return JSON.stringify(arr);
}

function stringToArray(str) {

    return JSON.parse(str);
}

let getQuotes = localStorage.getItem("quotes");
let arrayQuotes = getQuotes ? stringToArray(getQuotes) : quotes;

if (!getQuotes) {

    let stringQuotes = arrayToString(quotes);
    localStorage.setItem("quotes", stringQuotes);

    getQuotes = localStorage.getItem("quotes");
}