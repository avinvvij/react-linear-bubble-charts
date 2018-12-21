# react-linear-bubble-charts

> A linear bubble chart for reactjs

[![NPM](https://img.shields.io/npm/v/react-linear-bubble-charts.svg)](https://www.npmjs.com/package/react-linear-bubble-charts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-linear-bubble-charts
```

## Image
![alt text](https://raw.githubusercontent.com/avinvvij/react-linear-bubble-charts/master/linear%20bubble%20example.jpg)

## Usage

```jsx
import React, { Component } from 'react'

import LinearBubbleChart from 'react-linear-bubble-charts'

class Example extends Component {
  render () {
    let data = [
        {
          title: "A",
          value: 5
        },
        {
          title: "B",
          value: 20
        },
        {
          title: "C",
          value: 10
        },
        {
          title: "D",
          value: 30
        }
      ]
    return (
      <LinearBubbleChart data={data} />
    )
  }
}
```

## Props

| Prop          | Type          | Default|
| ------------- |:-------------:| -----:|
| data      | array | - |
| bubbleSpacing      | number      |90|
| maxBubbleSize | number      |35|
| minBubbleSize | number      |12|
| height | number      |300|
| bubbleColor | string      |#FB6669|
| titleColor | string      |#000000|
| valueColor | string      |#000000|
| onBubbleClick | function      |null|

## License

MIT © [](https://github.com/)
