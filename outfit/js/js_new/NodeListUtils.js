[].forEach.call( document.querySelectorAll(sel), function(el) {
});

NodeList.prototype.forEach = Array.prototype.forEach;

NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach;

NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map = HTMLCollection.prototype.map = Array.prototype.map;
NodeList.prototype.filter = HTMLCollection.prototype.filter = Array.prototype.filter;
NodeList.prototype.reduce = HTMLCollection.prototype.reduce = Array.prototype.reduce;
NodeList.prototype.reduceRight = HTMLCollection.prototype.reduceRight = Array.prototype.reduceRight;
NodeList.prototype.every = HTMLCollection.prototype.every = Array.prototype.every;
NodeList.prototype.some = HTMLCollection.prototype.some = Array.prototype.some;

['forEach', 'map', 'filter', 'reduce', 'reduceRight', 'every', 'some'].forEach(
    function(p) {
    NodeList.prototype[p] = HTMLCollection.prototype[p] = Array.prototype[p];
});

function forEach( a, fn ) {
    return [].forEach.call(a, fn);
};

forEach(document.querySelectorAll(sel), function(el) {
});

function map( a, fn ) {
    return [].map.call(a, fn);
};
function filter( a, fn ) {
    return [].filter.call(a, fn);
};
function reduce( a, fn ) {
    return [].reduce.call(a, fn);
};
function reduceRight( a, fn ) {
    return [].reduceRight.call(a, fn);
};
function every( a, fn ) {
    return [].every.call(a, fn);
};
function some( a, fn ) {
    return [].some.call(a, fn);
};

[].slice.call(a)

function forEach(a, fn) {
    return [].forEach.call([].slice.call(a), fn);
}