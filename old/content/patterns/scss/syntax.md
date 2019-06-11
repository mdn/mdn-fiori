+++
title = "General Syntax"
weight = 1
+++

## General

* Use the `.scss` syntax, never the original `.sass` syntax
* Order your regular CSS and `@include` declarations logically (see below)

## Ordering of property declarations

List all standard CSS properties, followed by `@include` and nested selectors:

```css
.card {
    display: flex;
    margin: 10px;
    @include set-font-size(18px);

    .title {
        color: $text-color;
        font-weight: bold;
    }
}
```

## Variables

Prefer dash-cased variable names (e.g. `$my-variable`) over camelCased or snake_cased variable names

## Mixins

Mixins should be used to DRY up your code, add clarity, or abstract complexity. As with function names, ensure the name clearly describe its intent.

## Nested Selectors

Never nest selectors more than three levels deep. If you feel you have a need to break this rule, read the first sentence again. But seriously, you probably want to rethink your HTML structure, and ensure you are not fighting specificity. Embrace the cascade.

```css
.one {
    .two {
        .three {
            // for the love of all that is good, please stop here
        }
    }
}
```
