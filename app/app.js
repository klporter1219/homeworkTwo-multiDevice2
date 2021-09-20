function showVariable(newName) {
    console.log("newName app.js " + newName);
}

function showFooterVariable(newFooterVariable) {
    console.log("newFooterName app.js " + newFooterName);
}

function setBindings() {
    $("nav a").click(function (e) {
        let btnID = e.currentTarget.id;
        MODEL.getMyVariable(btnID);
    });

    $("footer a").click(function (e) {
        let btnID = e.currentTarget.id;
        MODEL.getMyVariable(btnID, showFooterVariable);
    });
}

$(document).ready(function () {
    console.log("ready");
    setBindings();
});
