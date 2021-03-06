# bobvanoorschot-formsy-components

[![Build Status](https://travis-ci.org/twisty/bobvanoorschot-formsy-components.svg?branch=master)](https://travis-ci.org/twisty/bobvanoorschot-formsy-components)
[![npm version](https://badge.fury.io/js/bobvanoorschot-formsy-components.svg)](https://badge.fury.io/js/bobvanoorschot-formsy-components)

`bobvanoorschot-formsy-components` is a selection of React components that render form elements for use in a [formsy-react](https://github.com/formsy/formsy-react) form.

The components render markup to be quickly included in a [Bootstrap 3 form](https://getbootstrap.com/docs/3.3/css/#forms). This includes a `<label>`, [help text](https://getbootstrap.com/docs/3.3/css/#forms-help-text), and some [validation styling](https://getbootstrap.com/docs/3.3/css/#forms-control-validation) tied to formsy’s validation state and validation messages.

## Install

To install using `yarn`:

```
yarn add formsy-react
yarn add bobvanoorschot-formsy-components
```

To install using `npm`:

```
npm install --save formsy-react
npm install --save bobvanoorschot-formsy-components
```

## Browser Support

This should run on browsers where both [Bootstrap](https://getbootstrap.com/docs/3.3/getting-started/#support) and [React](https://facebook.github.io/react/docs/react-dom.html#browser-support) are supported.

* *Internet Explorer:* polyfills for [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and [Array.from](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from?v=example#Polyfill) are required.

## Usage

```jsx
import { Form, Input } from 'bobvanoorschot-formsy-components';

const MyForm = (props) => {
    return (
        <Form onSubmit={(data) => { console.log(data) }}>
            <Input
                name="firstname"
                label="What is your first name?"
            />
        </Form>
    )
}
```

## Examples

* See [examples](./examples/) for a overview on usage.

## Documentation

Documentation is a work in progress!

* For a working code example, visit the [Playground](http://twisty.github.io/bobvanoorschot-formsy-components/playground/), then examine the [source](https://github.com/twisty/bobvanoorschot-formsy-components/tree/master/examples/playground).
* There is some information in [/docs](https://github.com/twisty/bobvanoorschot-formsy-components/tree/master/docs).
