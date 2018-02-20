+++
title = "bidi - l10n utilities"
tags = ["mixins", 'l10n']
+++

The bidi mixins are used to declare both the LTR and RTL values for a property together and output appropriate declarations. This makes it easier to maintain the RTL version since you only have to update values in one place.

accepts: a list of lists - each list must have 3 or 4 values

A list with three properties overrides the ltr value in rtl locales

```
@include bidi(((float, left, right),));
```

Results in:

```
LTR: float: left;
RTL: float: right;
```

A list with four properties overrides the ltr value in rtl locales AND provides a new rtl only property value

```
@include bidi(((margin-right, 20px, margin-left, 0),));
```

Results in:

```
LTR: margin-right: 10px;
RTL: margin-right: 0;
     margin-left: 10px;
```

## Example input:

```
.test {
    @include bidi((
        (float, left, right),
        (margin-right, ($grid-spacing / 2), margin-left, 0),
    ));
}
```

## Example output:

```
.test {
    float: left;
    margin-right: 10px;
}

html[dir='rtl'] .test {
    float: right;
    margin-right: 0;
    margin-left: 10px;
}
```
