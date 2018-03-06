+++
title = "Comments"
tags = ["code style", "js"]
+++

## Comments

### Documenting functions

When documenting the purpose of functions use the following convetions.

Always use the `/** ... */` format to wrap your comments

```js
/**
 * Adds a new user to the database
 */
 function addUser(user) {
     ...
     return status;
 }
```

Documentation for each parameter should consist of the expected type, the name, and a description of its use.

```js
/**
 * Adds a new user to the database
 * @param {Object} user - The user to be added
 */
 function addUser(user) {
     ...
     return status;
 }
```

If a parameter is passed as an Object, describe the expected format.

```js
/**
 * Adds a new user to the database
 * @param {Object} user - The user to be added
 * {
 *     user: 'username',
 *     email: 'email@email.com',
 *     age: 41,
 *     country: 'South Africa'
 * }
 */
 function addUser(user) {
     ...
     return status;
 }
```

If a function returns a value, clearly describe what will be returned. For `Objects`, detail the return value as described above for `Object` parameters.

```js
/**
 * Adds a new user to the database
 * @param {Object} user - The user to be added
 * {
 *     user: 'username',
 *     email: 'email@email.com',
 *     age: 41,
 *     country: 'South Africa'
 * }
 * @returns status - A boolean indicating whether the user was added successfully
 */
 function addUser(user) {
     ...
     return status;
 }
```

## Single Line Comments

When added inline comments that does not span more than one line, use `//`. Place single line comments on a newline above the subject of the comment.

```js
// parse the html before adding to page
parseHTML(html);
```

## Multi Line Inline Comments

If the inline comment spans more than one line, use `/* ... */`
