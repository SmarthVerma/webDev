var element1 = document.getElementById('element1');
var element2 = document.getElementById('element2');

element1.addEventListener('mouseover', function (event) {
    var relatedTarget = event.relatedTarget;
    console.log('Mouse over Element 1. Related target:', relatedTarget);
});

element1.addEventListener('mouseout', function (event) {
    var relatedTarget = event.relatedTarget;
    console.log('Mouse out of Element 1. Related target:', relatedTarget);
});

element2.addEventListener('mouseover', function (event) {
    var relatedTarget = event.relatedTarget;
    console.log('Mouse over Element 2. Related target:', relatedTarget);
});

element2.addEventListener('mouseout', function (event) {
    var relatedTarget = event.relatedTarget;
    console.log('Mouse out of Element 2. Related target:', relatedTarget);
});
