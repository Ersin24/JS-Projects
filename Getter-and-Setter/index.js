//Getter And Setter Using

////Created Object
const obje = {
    counter: 0
}

Object.defineProperty
    (obje,
        "reset",
        { get: function () { this.counter = 0 } }
    )

Object.defineProperty(
    obje,
    "increment",
    { get: function () { this.counter++; } }
)

Object.defineProperty(
    obje,
    "decrement",
    { get: function () { this.counter--; } }
)

Object.defineProperty(
    obje,
    "add",
    { set: function (value) { this.counter += value } }
)

Object.defineProperty(
    obje,
    "subtract",
    { set: function (value) { this.counter -= value } }
)

obje.reset;
obje.add = 5;
obje.subtract = 1;
obje.increment;
obje.decrement;
document.getElementById("exampDefineGetSet").innerHTML = obje.counter;