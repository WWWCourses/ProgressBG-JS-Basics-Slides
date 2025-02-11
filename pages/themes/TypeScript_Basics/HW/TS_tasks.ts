// ---------------------------------- Task 1 ---------------------------------- //
    /* DESCRIPTION:
    Write a function named `squareNumber` that takes a number as an argument and returns its square.
    Ensure the argument is typed as a number.
    */

    // YOUR CODE HERE

    // TEST
    console.log(squareNumber(5));  // Expected output: 25
    console.log(squareNumber(2.5));  // Expected output: 6.25

// ---------------------------------- Task 2 ---------------------------------- //
    /* DESCRIPTION:
    Write a function named `isOdd` that takes a number as an argument and
    returns true if the number is odd, and false if it is even. Type the argument correctly.
    */

    // YOUR CODE HERE

    // TEST
    console.log(isOdd(5));  // Expected output: true
    console.log(isOdd(4));  // Expected output: false

// ---------------------------------- Task 3 ---------------------------------- //
    /* DESCRIPTION:
    Create a class `Car` with the following properties:
      - `make`: a string representing the car's make.
      - `model`: a string representing the car's model.
      - `year`: a number representing the car's manufacturing year.
    Add a method `getCarInfo()` that returns a string with the car's details.
    */

    // YOUR CODE HERE


    // TEST
    const car1 = new Car("Toyota", "Corolla", 2020);
    console.log(car1.getCarInfo());  // Expected output: "2020 Toyota Corolla"

// ---------------------------------- Task 4 ---------------------------------- //
    /* DESCRIPTION:
    Create a class `Person` with the following properties:
      - `firstName`: a string.
      - `lastName`: a string.
      - `age`: a number.
    Add a method `introduce()` that returns a string introducing the person by their full name and age.
    */

    // YOUR CODE HERE


    // TEST
    const person1 = new Person("Alice", "Johnson", 30);
    console.log(person1.introduce());  // Expected output: "Hi, I'm Alice Johnson, and I'm 30 years old."

// ---------------------------------- Task 5 ---------------------------------- //
    /* DESCRIPTION:
    Create an interface `Animal` with the following properties:
      - `name`: a string.
      - `sound`: a string.
    Create a class `Dog` that implements the `Animal` interface and includes a method `speak()`
    that returns a string using the `sound` property.
    */

    // YOUR CODE HERE


    // TEST
    const dog1 = new Dog("Buddy", "woof");
    console.log(dog1.speak());  // Expected output: "Buddy says woof!"

// ---------------------------------- Task 6 ---------------------------------- //
    /* DESCRIPTION:
    Create an interface `Employee` with the following properties:
      - `name`: a string.
      - `position`: a string.
      - `salary`: a number.
    Create a class `Manager` that implements the `Employee` interface and includes a method `getDetails()`
    that returns a string with the employee's details.
    */

    // YOUR CODE HERE


    // TEST
    const manager1 = new Manager("Sarah", "Project Manager", 75000);
    console.log(manager1.getDetails());  // Expected output: "Sarah is a Project Manager and earns $75000 annually."
