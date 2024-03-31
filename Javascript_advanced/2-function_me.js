
function welcomeMessage(fullName) {
    return function closure() {
        alert("Welcome" + ' ' + fullName);
    };
}

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred")

guillaume();
alex();
fred();