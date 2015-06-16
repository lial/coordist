# CoorDist
Count distance between two points as on Geoid (WGS84 format) as on flat surface (cartesian coordinate system)

### Description
This Node.JS module was ported from php class of [domino](http://phpclub.ru/talk/threads/%D1%80%D0%B0%D1%81%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D0%B4%D0%B2%D1%83%D0%BC%D1%8F-%D1%82%D0%BE%D1%87%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B7%D0%B5%D0%BC%D0%BB%D0%B8-%D0%B2-gps-%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%82%D0%B0%D1%85-%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%B0-wgs84.54170/). For Geoid coordinates module has more accuracy than haversine formulae.

### Installation
```
$ npm install coordist
```

### Using

```
var coordist = require('coordist');
```
###### Calculate distance between two points
coordist.distance(coord1, coord2, isCartesian);

|name|type|notice|
|----|------|------|
|coord1|Object|First coordinate|
|coord2|Object|Second coordinate|
|isCartesian|Boolean|If YES - flat surface, NO - Geoid|

> Coordinate object has three fields:
> {lat, lng, elevation}, where elevation is height above the sea level (default is 0)

Returns distance between *coord1* and *coord2* in meters.

###### Get decimal value of angle
coordist.getDecimalDegree(deg, min, sec);

###### Returns latitude name
coordist.checkLatitude(lat);

Returns *north* or *south*.

###### Returns longitude name
coordist.checkLongitude(lng);

Returns *west* or *east*.

###### Converts degrees to radians
coordist.Deg2Rad(value);

```

```

Example of using:

```
var coordist = require('coordist');


```

## Support or Contact
Having questions? Contact me using email dev@instup.com
