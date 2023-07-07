# Scripty Tailwind UI (`scriptyTUI`)

ScriptyTUI is a package for making it simple turn the animated TailwindUI components you purchased into actual animations using Tailwind-like syntax.

## Quickstart

STEP 1. Copy/paste `src/vanilla_code.js` into your files

STEP 2. Add the necessary `anim` classes to your TailwindCSS HTML.

STEP 3. Examine this example: Your example component that needs animation:
```html
<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
<button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
  <span class="sr-only">Use setting</span>
  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
  <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
```

STEP 4 to 8. Your component after adding ScriptyTUI classes:
```html
<!-- STEP 4. Add an identifier to your element.
             In this example, we call it 'unique' -->

<!-- STEP 5. Add the type of interaction that triggers the animation.
             In this example, we want to trigger from a click, so we
             call it 'anim-group-click:unique'
             The 'anim-group-click: tells us we want to trigger from a
             click, and 'unique' associates that click with the 'unique'
             animation group. -->
<!-- STEP 6. Add the class for where the animation transitions from,
             this will typically be its default state, for our example it
             is 'bg-gray-200' so we use the class 'anim-from:bg-gray-200' -->
<!-- STEP 7. Then we add what we animate to! Here, we take it to a brighter
             color, 'anim-to:bg-indigo-600' -->
<button type="button" class="anim-group-click:unique anim-group:unique anim-from:bg-gray-200 anim-to:bg-indigo-600 bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
  <span class="sr-only">Use setting</span>
  <!-- STEP 8. Finally, add any additional animations to applicable elements.
               Remember to identify them with your 'unique' animation group,
               along with your from/to rules. -->
  <span aria-hidden="true" class="anim-group:unique anim-from:translate-x-0 anim-to:translate-x-5 translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
```

## Currently Supported Interactions

* Click
* Mouseover
* Mouseout

## Justification

The folks at TailwindUI don't want to assume your JS implementation. If you're not super into using Vue or React, this package provides a vanilla JS implementation. Bundle it in your front-end, or simply copy/paste `src/index.js` or `dist/scriptytui.js` for a minimized version into your bespoke front-end.

## Caveats
* We don't assume your back-end. This is only for making animation implementation easier.
* This library also works separately from TailwindUI, so feel free to use this for an easy JS-extended TailwindCSS development experience!