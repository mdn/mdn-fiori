+++
title = "set-font-size mixin"
tags = ["mixins", "scss", "typography"]
+++

The `set-font-size` mixin takes a single value. If the value's unit of measure is pixels, it will return two versions of the `font-size` rule. One will use the original pixel value, and the second will be an equivalent font size using `rem`.

```css
@mixin set-font-size($value) {
    font-size: $value; // if this is px it will be the fallback for the rem value, otherwise it will be the only declaration

    @if ($value != 'inherit') {
        // make sure we're working with px otherwise remify will just spit out what we spat out before
        $u: unit($value);
        @if $u == 'px' {
            font-size: -remify($value);
        }
    }
}
```

## Example

```css
@include set-font-size: 32px;
```

This will result in the following output

```css
font-size: 32px;
font-size: 2rem;
```
