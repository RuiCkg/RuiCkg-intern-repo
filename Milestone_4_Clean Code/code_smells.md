# Identifying and Fixing Code Smells - Rui Chosa

## What are code smells?

Code smells are indicators of poor design or bad coding practices. They are not necessarily bugs, but they can make code harder to read, maintain, and debug. Refactoring helps improve the structure and quality of the code.

## Code smell examples and refactoring

### Magic Numbers and Strings

Bad example:

```js
function calculateDiscount(price) {
  return price * 0.2;
}

if (userRole === "admin") {
  console.log("Access granted");
}
```

Refactored:

```js
const DISCOUNT_RATE = 0.2;
const ADMIN_ROLE = "admin";

function calculateDiscount(price) {
  return price * DISCOUNT_RATE;
}

if (userRole === ADMIN_ROLE) {
  console.log("Access granted");
}
```

Improvement:
Using constants makes the code easier to understand and maintain because values are defined in one place.

---

### Long Functions

Bad example:

```js
function processOrder(order) {
  console.log("Checking stock");
  console.log("Calculating total");
  console.log("Applying discount");
  console.log("Generating receipt");
  console.log("Sending email");
}
```

Refactored:

```js
function checkStock() {
  console.log("Checking stock");
}

function calculateTotal() {
  console.log("Calculating total");
}

function applyDiscount() {
  console.log("Applying discount");
}

function generateReceipt() {
  console.log("Generating receipt");
}

function sendEmail() {
  console.log("Sending email");
}

function processOrder() {
  checkStock();
  calculateTotal();
  applyDiscount();
  generateReceipt();
  sendEmail();
}
```

Improvement:
Breaking large functions into smaller ones improves readability, testability, and maintainability.

---

### Duplicate Code

Bad example:

```js
function printStudent(name, age) {
  console.log(name);
  console.log(age);
}

function printTeacher(name, age) {
  console.log(name);
  console.log(age);
}
```

Refactored:

```js
function printPerson(name, age) {
  console.log(name);
  console.log(age);
}
```

Improvement:
Removing duplicate code reduces repetition and makes future changes easier.

---

### Large Classes (God Object)

Bad example:

```js
class AppManager {
  login() {}
  logout() {}
  createUser() {}
  deleteUser() {}
  generateReport() {}
  sendEmail() {}
}
```

Refactored:

```js
class UserManager {
  login() {}
  logout() {}
  createUser() {}
  deleteUser() {}
}

class ReportManager {
  generateReport() {}
}

class EmailService {
  sendEmail() {}
}
```

Improvement:
Splitting large classes into smaller ones improves clarity and follows good design principles.

---

### Deeply Nested Conditionals

Bad example:

```js
function access(user) {
  if (user) {
    if (user.isActive) {
      if (user.isAdmin) {
        console.log("Access granted");
      }
    }
  }
}
```

Refactored:

```js
function access(user) {
  if (!user || !user.isActive || !user.isAdmin) {
    return;
  }

  console.log("Access granted");
}
```

Improvement:
Using guard clauses reduces nesting and makes the logic easier to follow.

---

### Commented-Out Code

Bad example:

```js
function greet() {
  // console.log("Old greeting");
  console.log("Hello user");
}
```

Refactored:

```js
function greet() {
  console.log("Hello user");
}
```

Improvement:
Removing commented-out code keeps the codebase clean and easier to understand.

---

### Inconsistent Naming

Bad example:

```js
let x = "Rui";
let user_age = 24;
let Data = [];
```

Refactored:

```js
const userName = "Rui";
const userAge = 24;
const userData = [];
```

Improvement:
Consistent and meaningful naming improves readability and collaboration.

---

## Reflection

### What code smells did you find in your code?

I identified several common code smells such as magic numbers, duplicate code, long functions, and inconsistent naming. These issues can reduce code readability and make maintenance more difficult.

### How did refactoring improve readability and maintainability?

Refactoring improved readability by making the code more structured and easier to understand. Each function and class now has a clear responsibility, and repeated logic has been removed. This makes the code easier to maintain and update.

### How can avoiding code smells make debugging easier?

Avoiding code smells makes debugging easier because the code becomes more organized and predictable. Clear structure, smaller functions, and meaningful variable names help identify problems faster and reduce confusion during debugging.
