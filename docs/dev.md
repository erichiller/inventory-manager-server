# General Development Notes

## Fix Chrome F8 / pause

_Note: fixed in Chrome as of June 2020_


```js
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 119) { // F8
        debugger;
    }
}, {
    capture: true
});
```
