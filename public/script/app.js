"use strict";

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Hello world"
    ),
    React.createElement(
        "p",
        null,
        "Paragraph"
    )
);

var count = 0;

var addOne = function addOne() {
    count++;
    console.log("added one", count);
    render();
};

var subOne = function subOne() {
    count--;
    console.log("subtracted one", count);
    render();
};
var reset = function reset() {
    count = 0;
    console.log("reseted", count);
    render();
};
var render = function render() {

    var counterTemplate = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            { id: "counter" },
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: subOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        )
    );

    var myApp = document.querySelector("#my-app");

    ReactDOM.render(counterTemplate, myApp);
};
render();
