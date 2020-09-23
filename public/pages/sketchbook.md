## Building a delayed promise

```javascript
    function Delay(miliseconds) {
      return new Promise((resolve, reject) => {
        const seconds = miliseconds / 1000;
        setTimeout((seconds) => {
          resolve(`${seconds} seconds have passed! We got the dogos`);
        }, miliseconds, seconds);
      });
    }
```