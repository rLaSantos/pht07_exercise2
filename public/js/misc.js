// //Paths
let baseUrl = window.location.origin;
let home = baseUrl + "/views/home.html";
let pathName = window.location.pathname;
let page = pathName.split("/").pop();

// //Variables
let nickName = localStorage.getItem("name");

// //Validate if local Sotrage have name and the page is in home
if (page == "home.html") {

    if (nickName) {

        document.getElementById("target").innerText = nickName.toUpperCase() + "!";
    } else {

        location.href = baseUrl;
        alert("Nickname is required!");
    }
} else {

    if (nickName) {

        location.href = home
    }
}

// //Enter Function in Index
function enter() {

    let name = document.getElementById("name").value;

    if (name) {

        localStorage.setItem("name", name);
        location.href = home;
    } else {

        alert("Nickname is required!");
    }
}

// //Return to Index and remove localstorage item/s
function index() {

    localStorage.removeItem("name");
    location.href = baseUrl
}

// //Will Show/Hide and add/remove "tabs-open" class div connected to button in tabs
function openTab(tabName) {

    // //Selecting Divs && Current Active Div
    let div = document.getElementsByClassName("div");
    let activeDiv = document.getElementById(tabName);


    // //Selecting Tabs && Current Active Tab
    let tab = document.getElementsByClassName("tabs-button");
    let activeTab = document.getElementById(tabName + "-tab");

    // // Loop through to remove classes
    for (var i = 0; i < tab.length; i++) {

        div[i].classList.remove("show");
        div[i].classList.add("hidden");

        tab[i].classList.remove("tabs-open");
    }

    activeDiv.classList.remove("hidden");
    activeDiv.classList.add("show");
    
    activeTab.classList.add("tabs-open");
}