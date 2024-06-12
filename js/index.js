document.getElementById("shop").addEventListener("click", function (event) {
    event.preventDefault();
    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
        link.classList.remove("active");
    });
    // Thêm lớp active vào phần tử được nhấp
    this.classList.add("active");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../page/shop.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("main").innerHTML = xhr.responseText;
            addDetailEventListeners();
        }
    };
    xhr.send();
});

document.getElementById("about").addEventListener("click", function (event) {
    event.preventDefault();
    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
        link.classList.remove("active");
    });
    // Thêm lớp active vào phần tử được nhấp
    this.classList.add("active");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../page/about.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("main").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});

document.getElementById("contact").addEventListener("click", function (event) {
    event.preventDefault();
    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
        link.classList.remove("active");
    });
    // Thêm lớp active vào phần tử được nhấp
    this.classList.add("active");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../page/contact.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("main").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});

document.getElementById("subshop").addEventListener("click", function (event) {
    event.preventDefault();
    var navLinks = document.querySelectorAll(".nav-link");
    console.log(navLinks);
    navLinks.forEach(function (link) {
        link.classList.remove("active");
    });
    // Thêm lớp active vào phần tử được nhấp
    navLinks[1].classList.add("active");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../page/shop.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("main").innerHTML = xhr.responseText;
            addDetailEventListeners();
        }
    };
    xhr.send();
});

document.getElementById("cart").addEventListener("click", function (event) {
    event.preventDefault();
    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
        link.classList.remove("active");
    });
    // Thêm lớp active vào phần tử được nhấp
    this.classList.add("active");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../page/cart.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("main").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});

document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault();
    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
        link.classList.remove("active");
    });
    // Thêm lớp active vào phần tử được nhấp
    this.classList.add("active");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../page/login.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("main").innerHTML = xhr.responseText;
            addDetailEventListeners();
        }
    };
    xhr.send();
});


function addDetailEventListeners() {
    document.querySelectorAll(".detail-link").forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "../page/detail.html", true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    document.getElementById("main").innerHTML = xhr.responseText;
                }
            };
            xhr.send();
        });
    });


    var btnLogin = document.getElementById("btn-login");
    if (btnLogin) {
        btnLogin.addEventListener("click", function (event) {
            event.preventDefault();
            var navLinks = document.querySelectorAll(".nav-link");
            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });
            // Thêm lớp active vào phần tử được nhấp
            this.classList.add("active");
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "../page/login.html", true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    document.getElementById("main").innerHTML = xhr.responseText;
                    addDetailEventListeners();
                }
            };
            xhr.send();
        });
    }

    var btnRegister = document.getElementById("btn-register");
    if (btnRegister) {
        btnRegister.addEventListener("click", function (event) {
            event.preventDefault();
            var navLinks = document.querySelectorAll(".nav-link");
            // console.dir(navLinks);
            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });
            // Thêm lớp active vào phần tử được nhấp
            this.classList.add("active");
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "../page/register.html", true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    document.getElementById("main").innerHTML = xhr.responseText;
                    addDetailEventListeners();
                }
            };
            xhr.send();
        });
    }
}

// Gọi hàm này lần đầu tiên khi trang được tải
addDetailEventListeners();


document
    .getElementById("home")
    .addEventListener("click", function (event) {
        location.reload();
    });


// nút menu

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('nav-menu-visible');
    });
});