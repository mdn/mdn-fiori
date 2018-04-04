+++
title = "UI Actions"
tags = ["links", "buttons", "components", "css", "html"]
+++

## Links

### CTA Link

{{<demo>}}
<style>
.cta-link {
    position: relative;
    display: inline-block;
    color: #333;
    padding: 10px 30px 10px 0;
    border-bottom: 2px solid;
    font-family: 'Open Sans', Helvetica Neue, sans-serif;
    font-size: 17px;
    text-align: left;
    text-decoration: none;
    box-sizing: border-box;
}

.cta-link:hover,
.cta-link:focus {
    text-decoration: none;
}

.icon-arrow {
    position: absolute;
    top: 30%;
    right: 0;
    width: 16px;
    height: 16px;
    transition: right .2s;
}

.cta-link:hover .icon-arrow,
.cta-link:focus .icon-arrow {
    right: -5px;
}
</style>
<a href="#" class="cta-link">
  Learn web development
  <svg class="icon icon-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" aria-hidden="true">
        <path d="M23 15c0 0.531-0.203 1.047-0.578 1.422l-10.172 10.172c-0.375 0.359-0.891 0.578-1.422 0.578s-1.031-0.219-1.406-0.578l-1.172-1.172c-0.375-0.375-0.594-0.891-0.594-1.422s0.219-1.047 0.594-1.422l4.578-4.578h-11c-1.125 0-1.828-0.938-1.828-2v-2c0-1.062 0.703-2 1.828-2h11l-4.578-4.594c-0.375-0.359-0.594-0.875-0.594-1.406s0.219-1.047 0.594-1.406l1.172-1.172c0.375-0.375 0.875-0.594 1.406-0.594s1.047 0.219 1.422 0.594l10.172 10.172c0.375 0.359 0.578 0.875 0.578 1.406z"></path>
    </svg>
</a>
{{</demo>}}

#### HTML

```html
<a href="{{ wiki_url('Learn') }}" class="cta-link">
  {{ _('Learn web development') }}{% include "includes/icons/arrow.svg" %}
</a>
```

## Buttons

### Form Submit Button

{{<demo>}}
<style>
button {
    border: 0;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    font-family: 'Open Sans', Helvetica Neue, sans-serif;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: normal;
    border: 2px solid #9b9b9b;
    background-color: #fff;
    padding: 5px 11px;
    color: #4c4c4c;
    text-decoration: none;
}

button.neutral {
    border-color: #4087A1;
    color: #29627e;
}

.newsletter-submit {
    position: relative;
    width: 40%;
    height: 50px;
    padding: 10px;
    padding-right: 2em;
    text-align: left;
}

.newsletter-submit:hover,
.newsletter-submit:focus {
    text-decoration: none;
}

.icon {
    fill: currentColor;
}

.icon-arrow {
    position: absolute;
    top: 30%;
    right: 10px;
    width: 16px;
    height: 16px;
    transition: right .2s;
}

.newsletter-submit:hover .icon-arrow,
.newsletter-submit:focus .icon-arrow {
    right: 5px;
}
</style>
<button id="newsletter-submit" type="submit" class="button neutral newsletter-submit">
    Sign up now
    <svg class="icon icon-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" aria-hidden="true">
          <path d="M23 15c0 0.531-0.203 1.047-0.578 1.422l-10.172 10.172c-0.375 0.359-0.891 0.578-1.422 0.578s-1.031-0.219-1.406-0.578l-1.172-1.172c-0.375-0.375-0.594-0.891-0.594-1.422s0.219-1.047 0.594-1.422l4.578-4.578h-11c-1.125 0-1.828-0.938-1.828-2v-2c0-1.062 0.703-2 1.828-2h11l-4.578-4.594c-0.375-0.359-0.594-0.875-0.594-1.406s0.219-1.047 0.594-1.406l1.172-1.172c0.375-0.375 0.875-0.594 1.406-0.594s1.047 0.219 1.422 0.594l10.172 10.172c0.375 0.359 0.578 0.875 0.578 1.406z"></path>
      </svg>
</button>
{{</demo>}}

#### HTML

```html
<button id="newsletter-submit" type="submit" class="button neutral newsletter-submit">
    {{ _('Sign up now') }}{% include "includes/icons/arrow.svg" %}
</button>
```
