"use strict";

const testNode = document.getElementById("test");

function addClass(element, className) {
    if (className === undefined) {
        throw new Error("Missing class name!");
    }
    element.className += ` ${className}`;
}

try {
    addClass(testNode, "box");
} catch (e) {
    console.log(e.message);
}
