+++
title = "Terminology"
tags = ["code style", "css"]
weight = 1
+++

## Rule Declaration

A rule declaration generally consist of one or more selectors, and a list of properties. For example:

```css
.class-name {
    display: block;
    margin: 0;
}
```

## Selector

A [selector](https://www.w3.org/TR/selectors-3/#selectors) matches the element(s) to which the style rules will be applied. Selectors can be any combination of a class name, a HTML attribute as well as [psuedo-classes](https://www.w3.org/TR/selectors-3/#pseudo-classes) and [psuedo-elements](https://www.w3.org/TR/selectors-3/#pseudo-elements). For more details on selectors, see the [W3C CSS selectors specification](https://www.w3.org/TR/selectors-3/). For example:

```css
.my-class-selector {
    /* properties */
}

[aria-hidden="true"] {
    /* properties */
}

li:before {
    /* properties */
}
```

## Properties

A property in CSS is a key and value pair that defines the style to be applied to all elements matched by the selector or selectors. For example:

```css
.my-class {
    background-color: #333;
    color: #fff;
    border: 1px solid #000;
}
```
