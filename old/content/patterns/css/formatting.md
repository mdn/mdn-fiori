+++
title = "Formatting"
tags = ["code style", "css"]
+++

## General

* Use 4 spaces (no tabs) for indentation
* Prefer dashes over camelCasing in class names.
* Do not use ID selectors
* When using multiple selectors in a [rule declarations](/patterns/css/terminology/#rule-declaration), give each selector its own line.
* Put a space before the opening brace <code>{</code> in rule declarations
* In properties, put a space after, but not before, the <code>:</code> character.
* Put closing braces <code>}</code> of [rule declarations](/patterns/css/terminology/#rule-declaration) on a new line
* Put blank lines between [rule declarations](/patterns/css/terminology/#rule-declaration)
* Avoid the use of <code>!important</code> ~ [When Using !important is The Right Choice](https://css-tricks.com/when-using-important-is-the-right-choice/)

#### Sad Face

```css
.avatar{
    border-radius:50%;
    border:2px solid white; }
.no, .nope, .not_good {
    // ...
}
#please_no {
  // ...
}

.some-class {
    border-radius: 50%; !important
}
```

#### Smiley

```css
.avatar {
    border-radius: 50%;
    border: 2px solid white;
}

.yes,
.good,
.very-nice {
    // ...
}
```

## Comments

* Always use CSS style comments, for example

```css
/* double the base size */
.larger {
    ...
}
```

* Write detailed comments for code that isn’t self-documenting, for example
    * Uses of z-index
    * Compatibility or browser-specific hacks

## Why No ID Selectors

While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an [unnecessarily high level of specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article on dealing with specificity](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/).

[kudos: AirBnB](https://github.com/airbnb/css#id-selectors)

## JavaScript Hooks

When creating hooks for JavaScript functionality, prefer the use of an `id` as for as possible. When this does not make sense, use class names prefixed with `js-`, for example:

```html
<form id="contact" class="contact">
    <input type="text" class="js-input" />
    ...
```

This clearly defines intent, eases refactoring across the code base, and alleviates the fear of breaking functionality when changing, or removing class names.

## Turning of Borders

When turning of borders on an element, always use `0` as apposed to `none`:

### Sad Face

```css
.selector {
    border: none;
}
```

### Smiley

```css
.selector {
    border: 0;
}
```

## Hex Color Codes

The following rules apply when specifying a `hex` color code:

* Always use lowercase letters
* Always prefer the short form of a `hex` code

### Sad Face

```css
.selector {
    background-color: #EFEFEF;
    color: #333333;
}
```

### Smiley

```css
.selector {
    background-color: #efefef;
    color: #333;
}
```
