# NUS IVLE for Google Sheets

A Google Sheets add-on providing custom functions for NUS IVLE LAPI calls.

## Development Setup

The IVLE LAPI key must be exported as an environment variable.

```bash
$ export IVLE_KEY="1vl3k3y"
```

To build, run the command

```bash
$ yarn build
```

## Google Scripts Behaviour

Google provides some documentation for their scripts API.

- [Extend G Suite: Custom Functions in Sheets
  ](https://developers.google.com/apps-script/guides/sheets/functions)

Only block function definitions are parsed as custom functions in Google Sheets.

```javascript
// this will NOT be parsed as a custom function
var DOUBLE = function(input) {
    return 2 * input;
}

// this will be parsed as a custom function
function TRIPLE(input) {
    return 3 * input;
}
```

Google Sheets will generate autocomplete using JsDoc, but only `@param` and
`@return` tags are supported. Every JsDoc must include a `@customfunction` tag.

```javascript
/**
 * Multiplies the input value by 4.
 *
 * @param {number} input The value to multiply
 * @return {number} The input multipled by 4.
 */
function QUADRUPLE(input) {
    return 4 * input;
}
```
