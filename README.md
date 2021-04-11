## jest-tags	

## Run examples using yarn
```
yarn test --tags 'test1'
yarn test --tags '!test1'
yarn test --tags 'test1 && test2'
yarn test --tags 'test1 || test2'
```
## Setup
To run this project, link it locally using npm:

```
$ cd lib
$ npm link
$ cd ../testing
$ npm link jest-tags 

