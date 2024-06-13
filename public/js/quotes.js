function quoteToday() {

    let quoteToday = [{
            author: "E.E.Cummings",
            quote: "It takes courage to grow up and become who you really are."
        },
        {
            author: "Dr. Seuss",
            quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And you are the guy who'll decide where to go."
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
    ]

    let random = Math.random() * quoteToday.length;

    document.getElementById('author').innerText = "~"+quoteToday[Math.floor(random)].author;
    document.getElementById('quote').innerText = quoteToday[Math.floor(random)].quote;
}

quoteToday()