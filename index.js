const student1 = {
    name: "taiwo",
    age: 40,
    isAlive: true,
    greetings: function greet() {
        console.log(this)
    },
}

console.log(student1.greetings());