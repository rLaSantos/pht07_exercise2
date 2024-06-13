    let baseUrl = window.location.origin;
    let pathName = window.location.pathname;
    let page = pathName.split("/").pop();

    if (page == "dashboard.html") {

        let name = localStorage.getItem("name");

        if (name) {

            document.getElementById("target").innerText = name.toUpperCase() + "!";
        }
    }

    function enter() {

        let name = document.getElementById("name").value;

        if (name) {

            localStorage.setItem("name", name);
            location.href = baseUrl + "/views/dashboard.html";
        } else {

            alert("Nickname is required!");
        }
    }

    function home() {

        localStorage.removeItem("name");
        location.href = baseUrl + '/home.html'
        console.log(baseUrl);
    }

    function openTab(tabName) {
        var i;
        var x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
    }