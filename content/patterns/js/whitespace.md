+++
title = "Whitespace"
tags = ["code style", "js"]
+++

## General

Use soft tabs set to 4 spaces.

### Sad Face

```js
function highlight() {
∙∙let header;
}
```

### Happy Face

```js
function highlight() {
∙∙∙∙let header;
}
```

## Code Blocks

Place 1 space before the leading brace

### Sad Face

```js
function highlight(){
∙∙let header;
}
```

### Happy Face

```js
function highlight() {
∙∙∙∙let header;
}
```

## Control Statements

Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.).

### Sad Face

```js
if(true) {
    ...
}
```

### Happy Face

```js
if (changeling) {
    ...
}
```

## Function Declarations

No spaces between the argument list and the function name.

### Sad Face

```js
function add (one, two) {
    ...
}
```

### Happy Face

```js
function add(one, two) {
    ...
}
```
