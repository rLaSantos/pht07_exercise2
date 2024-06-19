let nickName = localStorage.getItem("name");

// //Check if local storage have a name item
if (page == "" || page == "index.html") {

    if (nickName) {

        location.href = home;
    }
} else {

    if (!nickName) {

        alert("Nickname is required!");
        location.href = baseUrl;
    }

    if (page == "home.html") {

        document.getElementById("target").innerText = `${ nickName.toUpperCase() }! `;

        let show = localStorage.getItem("show");
        let aside = document.getElementById("aside");

        if (show == "show") {

            setTimeout(() => {

                aside.classList.remove("show");
                aside.classList.add("hidden");

                localStorage.setItem("show", "hidden");
            }, 5000);
        } else {

            aside.classList.remove("show");
            aside.classList.add("hidden");
        }
    }
}

// //Enter Function in Index
function enter() {

    let name = document.getElementById("name").value;

    if (name) {

        localStorage.setItem("name", name);
        location.href = home;
        localStorage.setItem("show", "show");
    } else {

        alert("Nickname is required!");
    }
}

// //Return to Index and remove localstorage item/s
function index() {

    localStorage.removeItem("name");
    localStorage.setItem("show", "show");
    // localStorage.removeItem("quotes");
    location.href = baseUrl
}

// //Will Show/Hide and add/remove "tabs-open" class div connected to button in tabs
function openTab(tabName) {

    // //Selecting Divs && Current Active Div
    let div = document.getElementsByClassName("div");
    let activeDiv = document.getElementById(tabName);


    // //Selecting Tabs && Current Active Tab
    let tab = document.getElementsByClassName("tabs-button");
    let activeTab = document.getElementById(`${ tabName }-tab`);

    // // Loop through to remove classes
    for (let i = 0; i < tab.length; i++) {

        div[i].classList.remove("show");
        div[i].classList.add("hidden");

        tab[i].classList.remove("tabs-open");
    }

    activeDiv.classList.remove("hidden");
    activeDiv.classList.add("show");

    activeTab.classList.add("tabs-open");
}