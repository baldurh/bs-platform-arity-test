This Repo is for demonstrating an issue with how [Bucklescript](https://github.com/BuckleScript/bucklescript) handles currying
---

The issue began with `bs-platform` version 4.0.7 and is still present in the latest version (4.0.18 at the time of writing).
See issue https://github.com/BuckleScript/bucklescript/issues/3362

The issue comes up when you pass a JS function with no arguments which is curried on the BS side. 

## Running the example

Everything is included in this repo, including dependencies.

Just clone this repo and run:

`node index.js`


Note: The "fix" for 4019 is changing

```JS
function curry_1(o, a0, arity) {
  switch (arity) {
    case 1 : 
        return o(a0);
```

to

```JS
function curry_1(o, a0, arity) {
  switch (arity) {
    case 0 :
    case 1 : 
        return o(a0);
```

in `4019/node_modules/bs-platform/lib/js/curry.js`