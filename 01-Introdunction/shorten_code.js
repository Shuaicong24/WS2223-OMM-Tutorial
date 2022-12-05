// Breakout #2 Shorten the following code snippets as much as you can

// Snippet 1
var arr1 = new Array(3);
arr1[0] = 2;
arr1[1] = 4;
arr1[2] = 8;
arr1[3] = 16;

var x = [2, 4, 8, 16];

// Snippet 2
var arr2 = [2, 4, 8, 16];
for (var i = 0; i < arr2.length; i++) {
    arr2[i] = coolFunction(arr2[i]);
}

arr2.map(coolFunction);

// Snippet 3
function myFunction1 ( obj ) {
    var foo = obj.foo;
    var bar = obj.bar;
    if (foo) {
        return bar;
    } else {
        return null;
    }
}

function myFunction2 ( { foo, bar} ) { return foo ? bar : null; }