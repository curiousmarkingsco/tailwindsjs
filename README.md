# TailwindSJS (Simple JavaScript)

TailwindSJS is a package for making it simple turn your TailwindCSS classes into animations based on user interaction. If you are a buyer of [TailwindUI components](https://tailwindui.com/), this is the perfect library to easily get those components animated without pidgeon-holing yourself into their React or Vue samples. Otherwise, this is a way to use Tailwind-y syntax to add JS-powered animations.

## Navigate this README
* [Installation](#installation)
* [Usage](#usage)
* [A more descriptive guide for usage](#tailwindsjs-class-overview)
* [Learn More](#justification)
* [Caveats](#caveats)
* [Contributing](#contributing)

## Installation

From the root of your Node project:
```bash
npm install tailwindsjs
```

Or simply copy/paste the contents of `src/vanilla_code.js` to wherever you deem necessary.

## Usage

STEP 1. [Install](#installation) TailwindSJS as a package **or** copy/paste `src/vanilla_code.js` into your files

STEP 2. Examine this example: Your example component that needs animation:
```html
<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
<button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
  <span class="sr-only">Use setting</span>
  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
  <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
```

STEP 3 to 7. Your component after adding TailwindSJS classes:
```html
<!-- STEP 3. Add an identifier to your element.
             In this example, we call it '[unique]'
             With the prefix we get 'group-anim/[unique]' -->

<!-- STEP 4. Add the type of interaction that triggers the animation.
             In this example, we want to trigger from a click, so we
             call it 'group-anim-click/[unique]'
             The 'group-anim-click:' tells us we want to trigger from a
             click, and '[unique]' associates that click with the '[unique]'
             animation group. -->

<!-- STEP 5. Add the class for where the animation transitions from,
             this will typically be its default state, for our example it
             is 'bg-gray-200' so we use the class 'from-anim:bg-gray-200' -->

<!-- STEP 6. Then we add what we animate to! Here, we take it to a brighter
             color, 'to-anim:bg-indigo-600' -->
<button type="button" class="group-anim-click/[unique] group-anim/[unique] from-anim:bg-gray-200 to-anim:bg-indigo-600 bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
  <span class="sr-only">Use setting</span>
  <!-- STEP 7. Finally, add any additional animations to applicable elements.
               Remember to identify them with your '[unique]' animation group,
               along with your from/to rules. -->
  <span aria-hidden="true" class="group-anim/[unique] from-anim:translate-x-0 to-anim:translate-x-5 translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
```

## TailwindSJS Class Overview

#### Unique Identifiers
To prevent unexpected visual bugs, you will need to make a unique identifier to keep your animations scoped to exactly the element you want animated.

When defining our identifier, it is considered best practice to wrap it in square brackets to maintain the visual indication of an arbitrary definition. That way, it is clear to any TailwindCSS developer that the identifier was an arbitrary hand-written value.

Example 1. `group-anim:[happy22]`
Example 1. `group-anim-click:[happy22]`

#### Animation Grouping
##### `group-anim:[unique-identifier]`

`group-anim:` prefix indicates that our element is going to be animated and is part of a group that will be animated upon its triggering. See [Animation Actions](#animation-actions) for how to trigger the animation.

Our hope is to match Tailwind's approach of triggering multiple animations. On Tailwind's hover, for example, it has the `group-` prefix to classes. For example, `group-hover:` See:
[https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state)

#### Animation Actions 
##### `group-anim-[action]:[unique-identifier]`

With this class, we are telling our Simple JavaScript what type of interaction triggers the animation. Use this class only once per group and use it on the element that is going to trigger the animation based on user interaction.

Currently supported triggers:
1. click `group-anim-click:`
2. mouseover `group-anim-mouseover:`
3. mouseout `group-anim-mouseout:`

#### Animating to and from different styles
For to/from, we loosely emulate TailwindCSS syntax which can be seen in gradient stops:
[https://tailwindcss.com/docs/gradient-color-stops](https://tailwindcss.com/docs/gradient-color-stops)

##### `from-anim:` and  `to-anim:`
In general, virtually all TailwindCSS classes are supported. Example:
```
from-anim:bg-gray-200 to-anim:bg-indigo-600
```

#### Completed Example
```html
<button type="button" class="group-anim-click/[unique] group-anim/[unique] from-anim:bg-gray-200 to-anim:bg-indigo-600 bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
  <span class="sr-only">Use setting</span>
  <span aria-hidden="true" class="group-anim/[unique] from-anim:translate-x-0 to-anim:translate-x-5 translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
```

## Justification

The folks at TailwindUI don't want to assume your JS implementation. If you're not super into using Vue or React, this package provides a vanilla JS implementation. Bundle it in your front-end, or simply copy/paste `src/index.js` or `dist/tailwindsjs.js` for a minimized version into your bespoke front-end.

As a happy accident of solving this, it turns out that any TailwindCSS user can benefit from simplifying a wide range JS-related animation needs from their TailwindCSS-powered HTML pages.

## Caveat(s)
* We don't assume your back-end. This is only for making animation implementation easier.

## Contributing
Everyone is encouraged to help improve this project. Here are a few ways you can help:

- [Report bugs](https://github.com/curiousmarkingsco/tailwindsjs/issues)
- Fix bugs and [submit pull requests](https://github.com/curiousmarkingsco/tailwindsjs/pulls)
- Write, clarify, or fix documentation
- Suggest or add new features, here's some examples:
  - Add animation support for form submission
  - Fix Ian's grammar mistakes in this README
  - Add documentation for more complex examples
  - Add a test suite

For security issues, send an email to the address on [this page](https://github.com/curiousmarkingsco).
