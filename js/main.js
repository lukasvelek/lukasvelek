var isProjects = false;

function init() {
    // Set the copyright year
    $("#footer-text-date").html((new Date()).getFullYear());
    
    if(isProjects) {
        const projects = [
            "skydocu"
        ];

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
}