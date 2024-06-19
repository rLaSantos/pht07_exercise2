// //Randomize Quotes
function quoteToday(arrayQuotes) {

    let random = Math.floor((Math.random() * arrayQuotes.length));

    document.getElementById('author').innerText = "~" + arrayQuotes[random].author;
    document.getElementById('quote').innerText = arrayQuotes[random].quote;
}

// //Display All Quotes
function displayQuotes(arrayQuotes) {

    arrayQuotes.forEach((element, index) => {

        document.getElementById('quote').innerHTML +=
            `<li id="update` + index + `" type="square" class="italic text-primary ml-3 mb-1">` +

            `<button class="buttonQuote" onclick="del(` + index + `)">
                <i class="fa fa-trash-o pointer text-danger" aria-hidden="true"></i>
            </button>` +

            `<button class="buttonQuote" onclick="setFunction('update', ` + index + `)">
                <i class="fa fa-pencil-square-o pointer text-info" aria-hidden="true"></i>
            </button>` +

            element.quote + `<span class="bold text-danger"> ~ ` + element.author +
            `</span></li>`;
    });
}

function clearQuotes() {

    document.getElementById('quote').innerHTML = "";
}

// //Refresh Quote
function refreshQuote() {
    quoteToday(arrayQuotes);
}

// //Show/Hide/Set Function of Form

let subFormElement = document.getElementById("sub-form");
let createUpdate = 'create';
let quoteIndex = 0;

function show() {

    subFormElement.classList.remove("hidden");
    subFormElement.classList.add("show");
}

function cancel() {

    subFormElement.classList.remove("show");
    subFormElement.classList.add("hidden");

    document.getElementById("newAuthor").value = "";
    document.getElementById("newQuote").value = "";
}

function setFunction(val, index) {

    show();
    createUpdate = val;
    quoteIndex = index;

    if (val == 'update') {

        document.getElementById("newAuthor").value = arrayQuotes[quoteIndex]["author"];
        document.getElementById("newQuote").value = arrayQuotes[quoteIndex]["quote"];
    }
}

function loopQuotes(quotes) {

    arrayQuotes = [];
    quotes.forEach(element => {

        arrayQuotes.push(element);
    });

    localStorage.setItem('quotes', arrayToString(arrayQuotes));
}

// //CRUD
// !Create / Update
function submit() {

    let newAuthor = document.getElementById("newAuthor").value;
    let newQuote = document.getElementById("newQuote").value;


    if (!newAuthor || !newQuote) {

        alert('Author and Quote is required!');
    } else {

        if (createUpdate == 'create') {

            arrayQuotes.push({
                author: newAuthor,
                quote: newQuote
            });
        } else {

            arrayQuotes[quoteIndex] = {
                author: newAuthor,
                quote: newQuote
            };
        }

        localStorage.setItem('quotes', arrayToString(arrayQuotes));

        cancel();
        clearQuotes();
        displayQuotes(arrayQuotes);
    }
}

// !Read
if (page == '' || page == 'index.html') {

    quoteToday(arrayQuotes);
} else if (page == 'quote.html') {

    displayQuotes(arrayQuotes);
}

// !Delete
function del(delIndex) {

    let newArray = [];

    if (confirm('Are you sure you want to delete this quote?')) {

        arrayQuotes.forEach((val, index) => {

            if (index !== delIndex) {

                newArray.push(val);
            }
        });

        loopQuotes(newArray);

        cancel();
        clearQuotes();
        displayQuotes(arrayQuotes);
    }
}

// !Restore
function restore() {

    loopQuotes(quotes);

    cancel();
    clearQuotes();
    displayQuotes(arrayQuotes);
}