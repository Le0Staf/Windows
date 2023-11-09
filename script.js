//-------------------------------------------------Start Menu-------------------------------------------------//

function OpenStartMenu() {
    var startMenu = document.getElementById("start-menu");
    var startButton = document.getElementById("start");
    
    // Toggle the visibility of the start menu
    startMenu.classList.toggle("visible");
    
    // Toggle the active class on the start button
    startButton.classList.toggle("active");
    
    // Add an event listener to the document to close the start menu when clicking outside
    if (startMenu.classList.contains("visible")) {
        document.addEventListener('click', CloseStartMenuOnClickOutside);
    } else {
        document.removeEventListener('click', CloseStartMenuOnClickOutside);
    }
}

function CloseStartMenu() {
    document.getElementById("start-menu").classList.toggle("visible");
    document.getElementById("start").classList.toggle("active");
}

// Function to close the start menu when clicking outside
function CloseStartMenuOnClickOutside(event) {
    var startMenu = document.getElementById("start-menu");
    var startButton = document.getElementById("start");

    if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
        startMenu.classList.remove("visible");
        startButton.classList.remove("active");
        document.removeEventListener('click', CloseStartMenuOnClickOutside);
    }
}


//-------------------------------------------------File Explorer-------------------------------------------------//


function changeImgOnHover() {
    var closeImg = document.querySelector("#file-explorer-menu-close img");

    closeImg.src = "closewhite.png";
}

function restoreImgOnHoverOut() {
    var closeImg = document.querySelector("#file-explorer-menu-close img");

    closeImg.src = "close.png";
}

var fileExplorerClose = document.querySelector("#file-explorer-menu-close");
fileExplorerClose.addEventListener("mouseover", changeImgOnHover);
fileExplorerClose.addEventListener("mouseout", restoreImgOnHoverOut);


function CloseFileExplorer() {
        document.getElementById("file-explorer-menu").classList.toggle("visible");
}

function OpenFileExplorer() {
    if (!document.getElementById("file-explorer-menu").classList.contains("visible")) {
        document.getElementById("file-explorer-menu").classList.toggle("visible");
    }
}

let fileExplorerIsMaximized = 0;

function MaximizeFileExplorer() {
    if (fileExplorerIsMaximized == 0) {
        document.getElementById("file-explorer-menu").style.top = "0";
        document.getElementById("file-explorer-menu").style.left = "0";
        document.getElementById("file-explorer-menu").style.width = "100%";
        document.getElementById("file-explorer-menu").style.height = "100%";
        document.getElementById("file-explorer-menu-header").style.height = "2.8%";
        document.getElementById("file-explorer-menu-minimize").style.width = "5%";
        document.getElementById("file-explorer-menu-fullscreen").style.width = "5%";
        document.getElementById("file-explorer-menu-close").style.width = "5%";
        document.getElementById("left-file-explorer-nav").style.width = "6%";

        fileExplorerIsMaximized = 1;
    }
    else if (fileExplorerIsMaximized == 1) {
        console.log(fileExplorerIsMaximized);
        document.getElementById("file-explorer-menu").style.top = "15%";
        document.getElementById("file-explorer-menu").style.left = "23%";
        document.getElementById("file-explorer-menu").style.width = "1000px";
        document.getElementById("file-explorer-menu").style.height = "600px";
        document.getElementById("file-explorer-menu-header").style.height = "5%";
        document.getElementById("file-explorer-menu-minimize").style.width = "10%";
        document.getElementById("file-explorer-menu-fullscreen").style.width = "10%";
        document.getElementById("file-explorer-menu-close").style.width = "10%";
        document.getElementById("left-file-explorer-nav").style.width = "12%";

        fileExplorerIsMaximized = 0;
    }

}


//-------------------------------------------------Calculator-------------------------------------------------//


function CloseCalculator() {
    document.getElementById("calculator").classList.toggle("visible");
}

function OpenCalculator() {
    if (!document.getElementById("calculator").classList.contains("visible")) {
    document.getElementById("calculator").classList.toggle("visible")
    }
}


//-----Calculator Buttons-----//

function CalculatorAddNumber(number) {
    
}
