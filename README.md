# jest-tags

```bash
npm i jest-tags --save-dev
npm i -g jest-tags
```


## AND, NOT, OR


### `AND`

Run tests with the `X` and `Y` tags

```bash
npm test -- --tags 'X && Y'
```

### `OR`

Run tests with the `X` or `Y` tags
```bash
npm test -- --tags 'X Y'
```
or
```bash
npm test -- --tags 'X || Y'
```

### `AND`

Don't run tests with the `X` tag

```bash
npm test -- --tags '!X'
```
### Combined
Don't run tests with the `X` and `Y` tags combination
```bash
npm test -- --tags '!X && !Y'
```
Run tests without the `X` or `Y` tags
```bash
npm test -- --tags '!X && !Y'
```
Run tests with the `X` tag and without the `Y` tag
```bash
npm test -- --tags 'X && !Y'
```





## Example

```js
const {tags} = require('jest-tags')

tags('smoke').test(/* ... */)

tags('integration', 'fast').it(/* ... */)
```


```bash
npm test -- --tags "smoke !integration"
```
or
```bash
npm yarn --tags "smoke !integration"
```

Only tests that matches the criteria will proceed. Other tests will be skipped and 
appear as `skipped` in the test output.

## Test hooks

- `tags().test.only()` : has a priority over a tag
- `tags().test.skip()` : has a priority over a tag


