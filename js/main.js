var isProjects = false;
var isAboutMe = false;

const projects = [
    "skydocu",
    "dms",
    "topics"
];

function init() {
    // Set the copyright year
    $("#footer-text-date").html((new Date()).getFullYear());
    
    if(isProjects) {
        // Hide projects contents
        projects.forEach(function(value, index, array) {
            const modalName = "projects-content-" + value;
            const linkName = "projects-showcase-" + value;

            closeModal(modalName);

            $("#" + linkName).on("click", function() {
                openModal(modalName);
            });
        });
    }

    if(isAboutMe) {
        const currentDate = new Date();
        const birthDate = new Date("01/01/2001");

        var age = currentDate.getFullYear() - birthDate.getFullYear();
        var _m = currentDate.getMonth() - birthDate.getMonth();

        if(_m < 0 || (_m === 0)) {
            age--;
        }

        $("#about-me-my-age").html(age);
    }
}

function closeModal(_name) {
    $("#" + _name).hide();
}

function openModal(_name) {
    const name = "#" + _name;

    $(name)
        .show()
        .css("position", "absolute")
        .css("top", "10%")
        .css("left", "10%")
        .css("width", "80%")
        .css("background-color", "rgb(200, 200, 200)")
    ;

    projects.forEach(function(value, index, array) {
        const modalName = "projects-content-" + value;

        if(name == ("#" + modalName)) {
            return;
        }

        closeModal(modalName);
    });
}