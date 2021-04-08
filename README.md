## jest-labels	

## Run examples using yarn
```
yarn test --labels 'test1'
yarn test --labels '!test1'
yarn test --labels 'test1 && test2'
yarn test --labels 'test1 || test2'
```
## Setup
To run this project, link it locally using npm:

```
$ cd lib
$ npm link
$ cd ../testing
$ npm link jest-labels 

