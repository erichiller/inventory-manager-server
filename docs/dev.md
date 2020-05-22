# General Development Notes

## Fix Chrome F8 / pause

```js
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 119) { // F8
        debugger;
    }
}, {
    capture: true
});
```