+++
title = "-remify function"
tags = ["functions", "scss"]
+++

The `remify` function converts pixel based units into `rem` based units. If you pass in any unit other than `px`, the exact same value will be returned.

```css
@function -remify($value) {
    $u: unit($value);
    $v: 0;

    @if $u == 'px' {
        $v: $value/$body-font-size * 1rem;
    } @else {
        $v: unit($value, u);
    }

    @return $v;
}
```

## Example

```css
font-size: -remify(16px);
```

This will result in the following output

```css
font-size: 1rem;
```

This is currently only used internally by the `set-font-size` mixin.
