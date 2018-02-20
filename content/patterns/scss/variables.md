+++
title = "Variables in SCSS"
weight = 1
+++

All SCSS variables are defined in `kuma/static/styles/includes/_vars.scss`

## Colours

### Base Colours

<div class="colors-container">
  <ul class="colors">
    {{< color-var color="#e66465" var="$red" >}}
    {{< color-var color="#f69d3c" var="$orange" >}}
    {{< color-var color="#f6b73c" var="$yellow" >}}
    {{< color-var color="#4d9f0c" var="$green" >}}
    {{< color-var color="#3f87a6" var="$blue" >}}
    {{< color-var color="#9198e5" var="$purple" >}}
    {{< color-var color="#696969" var="$grey" >}}
  </ul>
</div>

### Lighter Base Shades

<div class="colors-container">
  <ul class="colors">
    {{< color-var color="#ffe7e8" var="$red-light" >}}
    {{< color-var color="#ffe8d4" var="$orange-light" >}}
    {{< color-var color="#fff3d4" var="$yellow-light" >}}
    {{< color-var color="#ebf8e1" var="$green-light" >}}
    {{< color-var color="#e4f0f5" var="$blue-light" >}}
    {{< color-var color="#d7d9f2" var="$purple-light" >}}
    {{< color-var color="#eee" var="$grey-light" >}}
  </ul>
</div>

### Darkened Base Shades

<div class="colors-container">
  <ul class="colors">
    {{< color-var color="#b65456" var="$red-dark" >}}
    {{< color-var color="#b27229" var="$orange-dark" >}}
    {{< color-var color="#b28529" var="$yellow-dark" >}}
    {{< color-var color="#3a7408" var="$green-dark" >}}
    {{< color-var color="#29627e" var="$blue-dark" >}}
    {{< color-var color="#6f74b2" var="$purple-dark" >}}
    {{< color-var color="#4c4c4c" var="$grey-dark" >}}
  </ul>
</div>

### Dark Base Shades

<div class="colors-container">
  <ul class="colors">
    {{< color-var color="#5d3739" var="$red-vdark" >}}
    {{< color-var color="#332206" var="$orange-vdark" >}}
    {{< color-var color="#332807" var="$yellow-vdark" >}}
    {{< color-var color="#162300" var="$green-vdark" >}}
    {{< color-var color="#001d33" var="$blue-vdark" >}}
    {{< color-var color="#303253" var="$purple-vdark" >}}
    {{< color-var color="#151515" var="$grey-vdark" >}}
  </ul>
</div>

## Color in Typography

<div class="colors-container">
  <ul class="colors">
    {{< color-var color="#333333" var="$text-color" >}}
    {{< color-var color="#3f87a6" var="$link-color" >}}
  </ul>
</div>

### `$bg-dark`

{{% colors "#222" %}}

## Spacing

* `$gutter-width`: 24px
* `$content-block-margin`: 24px
* `$mobile-center-spacing`: 15px
