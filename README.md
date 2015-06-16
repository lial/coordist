# CoorDist
Count distance between two points as on geoid(WGS84 format) as on flat surface (cartesian coordinate system)

## Description
This Node.JS module was ported from php class of [domino](http://phpclub.ru/talk/threads/%D1%80%D0%B0%D1%81%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D0%B4%D0%B2%D1%83%D0%BC%D1%8F-%D1%82%D0%BE%D1%87%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B7%D0%B5%D0%BC%D0%BB%D0%B8-%D0%B2-gps-%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%82%D0%B0%D1%85-%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%B0-wgs84.54170/)
For geoid coordinates module hase more accuracy than haversine formulae.

## Installation
```
$ npm install coordist
```

## Using

### Calculate distance between two points
function distance(coord1, coord2, isCartesian);

### Get decimal value of angle
function getDecimalDegree(deg, min, sec);

### Returns latitude name
function checkLatitude(lat);

### Returns longitude name
function checkLongitude(lng);

### Converts degrees to radians
function Deg2Rad(value);

```

```

Example of using:

```
var coordist = require('coordist');


```

## Support or Contact
Having questions? Contact me using email dev@instup.com
