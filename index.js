// Basic solution using var
function countDown1() {
    for (var i = 3; i >= 0; i--) {
        (function () {
            var j = i;
            setTimeout(function () {
                console.log(j || "Lift-off!");
            }, (3 - j) * 1000);
        })();
    }
}

// Variation on var that passes in i to the IIFE
function countDown2() {
    for (var i = 3; i >= 0; i--) {
        (function (j) {
            setTimeout(function () {
                console.log(j || "Lift-off!");
            }, (3 - j) * 1000);
        })(i);
    }
}

// Basic solution using let
function countDown3() {
    for (var i = 3; i >= 0; i--) {
        let j = i;
        setTimeout(function() {
            console.log(j || "Lift-off!");
        }, (3 - j) * 1000);
    }
}

// Variation on let that makes use of let's scoping in for loops
function countDown4() {
    for (let i = 3; i >= 0; i--) {
        setTimeout(function() {
            console.log(i || "Lift-off!");
        }, (3 - i) * 1000);
    }
}

countDown1();
countDown2();
countDown3();
countDown4();