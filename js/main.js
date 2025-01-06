var isProjects = false;

function init() {
    // Set the copyright year
    $("#footer-text-date").html((new Date()).getFullYear());
    
    if(isProjects) {
        // Hide projects contents
        closeModal("projects-skydocu-content");

        $("#projects-skydocu").on("click", function() {
            //$("#projects-skydocu-content").show();
            openModal("projects-skydocu-content");
        });
    }
}

function closeModal(_name) {
    $("#" + _name).hide();
}

function openModal(_name) {
    $("#" + _name).show();
}