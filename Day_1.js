/** Alright, we start with **Bug 1**:

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("Value of i:", i);
    }, 1000);
}
```

Your task: figure out why it **doesn’t log 0, 1, 2** and fix it so it does.

Do your thing.
 */

// My Fix 


for (let i = 0; i < 3; i++){
    setTimeout(
        () => {console.log("Value of i", i)}
        , 1000)
}

// This is because the the "var" initializer is function scoped and not block scoped. So that means when the thing runs the function once it just produces results instead.