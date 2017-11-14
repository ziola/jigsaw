## JIGSAW

### Requirements
- newish node installed
- newish chrome
- yarn

### Instructions

1. `yarn install`
2. `yarn server`
2. `yarn start` - in different console

### Comments
- Unfortunately no tests, as I didn't have time to do them
- I'm always assuming best-case scenarios with network requests, so no error handling, etc.
- No SASS or anything b/c styles were so simple it didn't make sense. Without time constraints I'd add css-variables, auto prefixer and generally I'd use PostCSS.
- The code could be simplified by adding the router. I didn't use any external router as I wanted to play with _naked React. 
- No state manager as it is quite simple. With more time I'd try to extract state objects to an external _store_ and do a very simple reducer implementation.
- Please don't judge the UI as it's ugly :)
