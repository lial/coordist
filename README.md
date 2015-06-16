# Coordist
Count distance between two points as on Geoid (WGS84 format) as on flat surface (cartesian coordinate system)

### Description
This Node.JS module was ported from php class of [domino](http://phpclub.ru/talk/threads/%D1%80%D0%B0%D1%81%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D0%B4%D0%B2%D1%83%D0%BC%D1%8F-%D1%82%D0%BE%D1%87%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B7%D0%B5%D0%BC%D0%BB%D0%B8-%D0%B2-gps-%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%82%D0%B0%D1%85-%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%B0-wgs84.54170/). For Geoid coordinates module has more accuracy than haversine formula.

### Installation
```
$ npm install coordist
```

### Using

##### Calculate distance between two points
**_distance(coord1, coord2, isCartesian)_**

|name|type|notice|
|----|------|------|
|coord1|Object|First coordinate|
|coord2|Object|Second coordinate|
|isCartesian|Boolean|If YES - flat surface, NO - Geoid|

> Coordinate object has three fields:
> {lat, lng, elevation}, where elevation is height above the sea level (default is 0)

Returns distance between *coord1* and *coord2* in meters.

##### Get decimal value of angle
**_getDecimalDegree(deg, min, sec)_**

##### Returns latitude name
**_checkLatitude(lat)_**

Returns *north* or *south*.

##### Returns longitude name
**_checkLongitude(lng)_**

Returns *west* or *east*.

##### Converts degrees to radians
**_Deg2Rad(value)_**

###### Example of using:

```
var coordist = require('coordist');

//Calculate distance using WGS84 coordinates on Geoid
coordist.distance({lat:37.2345, lng:55.245, elevation:0}, {lat:38.123, lng:57.126, elevation:0}, false);

//Calculate distance on flat surface
coordist.distance({x:2.5, y:3.4}, {x:7.12, y:8}, true);
```

## Support or Contact
Having questions? Contact me using email dev@instup.com
