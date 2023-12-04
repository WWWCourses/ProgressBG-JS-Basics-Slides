//this will start from the current element and get all of the next siblings

function getNextSiblings(elem, filter) {
    var sibs = [];
    while (elem = elem.nextSibling) {
        if (!(elem.nodeType === 1)) continue; // not element node
        if (!filter || filter(elem)) sibs.push(elem);
    }
    return sibs;
}