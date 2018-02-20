+++
title = "Formatting"
tags = ["code style", "css"]
+++

## Formatting

* Use 4 spaces (no tabs) for indentation
* Prefer dashes over camelCasing in class names.
* Do not use ID selectors
* When using multiple selectors in a [rule declarations](/patterns/css/terminology/#rule-declaration), give each selector its own line.
* Put a space before the opening brace `{` in rule declarations
* In properties, put a space after, but not before, the `:` character.
* Put closing braces `}` of [rule declarations](/patterns/css/terminology/#rule-declaration) on a new line
* Put blank lines between [rule declarations](/patterns/css/terminology/#rule-declaration)
* Avoid the use of `!important` ~ [When Using !important is The Right Choice](https://css-tricks.com/when-using-important-is-the-right-choice/)

#### Bad

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

#### Good

```css
.avatar {
    border-radius: 50%;
    border: 2px solid white;
}

.no,
.nope,
.not_good {
    // ...
}
```

### Why No ID Selectors

While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an [unnecessarily high level of specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article on dealing with specificity](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/).

[kudos: AirBnB](https://github.com/airbnb/css#id-selectors)
