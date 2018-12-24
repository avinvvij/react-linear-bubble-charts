# react-linear-bubble-charts

> A linear bubble chart for reactjs

[![NPM](https://img.shields.io/npm/v/react-linear-bubble-charts.svg)](https://www.npmjs.com/package/react-linear-bubble-charts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-linear-bubble-charts
```

## Image
![alt text](https://raw.githubusercontent.com/avinvvij/react-linear-bubble-charts/master/linear%20bubble%20example.jpg)

![alt text](https://raw.githubusercontent.com/avinvvij/react-linear-bubble-charts/master/linear%20bubble%20color%20example.jpg)
## Usage

```jsx
import React, { Component } from 'react'

import LinearBubbleChart from 'react-linear-bubble-charts'

class Example extends Component {
  render () {
    let data = [
        {
          title: "A",
          value: 5,
          color: "#bc3f05"
        },
        {
          title: "B",
          value: 20
        },
        {
          title: "C",
          value: 10,
          color: "#16b4e0"
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

| Prop          | Type          | Default| Comment|
| ------------- |:-------------:| :-----:| :-----|
| data      | array | - | data for the component should be an array of objects with keys as title, value, color|
| bubbleSpacing      | number      |90| spacing between each bubble|
| maxBubbleSize | number      |35| size of the bubble with max value|
| minBubbleSize | number      |12|  size of the bubble with minimum value|
| height | number      |300|  height of the svg element|
| bubbleColor | string      |#FB6669| color for the bubble if individual color is not given|
| titleColor | string      |#000000| color for the title of bubble |
| valueColor | string      |#000000| color for the value of bubble|
| onBubbleClick | function      |null| click event for a bubble will return index , title, value |

## License

MIT © [](https://github.com/)
