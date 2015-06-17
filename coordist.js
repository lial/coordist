/**
 * Coordist module designated to calculate distance between two point as on geoid (WGS84 format) as on flat surface.
 *
 * This is a port of php class from domino for node.js
 * Original link: http://phpclub.ru/talk/threads/%D1%80%D0%B0%D1%81%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D0%B4%D0%B2%D1%83%D0%BC%D1%8F-%D1%82%D0%BE%D1%87%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B7%D0%B5%D0%BC%D0%BB%D0%B8-%D0%B2-gps-%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%82%D0%B0%D1%85-%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%B0-wgs84.54170/
 *
 * Ported by LIAL (https://github.com/lial/)
 */

var majorAxis = 6378137.0;              // meters
var minorAxis = 6356752.3142;           // meters
var majorAxisSquare = 40680631590769;   // meters, Math.pow(majorAxis, 2)
var minorAxisSquare = 40408299984087;   // meters, math.pow(minorAxis, 2)


/**
 * Calculate distance between two point on surface
 *
 * @param Object coord1 First coordinate
 * @param Object coord2 Second coordinate
 * @param Bool isCartesian Is surface flat (yes - cartesian coordinate, no - geoid)
 *
 * @var coordX {lat, lng, alt}
 * @var lat - latitude (широта)
 * @var lng - longitude (долгота)
 * @var alt - altitude (высота над уровнем моря)
 *
 * @return Number
 */
function distance(coord1, coord2, isCartesian) {

    if (isCartesian) {
        //Just for convenience for flat surface
        if (coord1.x != undefined) coord1.lat = coord1.x;
        if (coord1.y != undefined) coord1.lng = coord1.y;
        if (coord2.x != undefined) coord2.lat = coord2.x;
        if (coord2.y != undefined) coord2.lng = coord2.y;

        return Math.sqrt(Math.pow((coord1.lat - coord2.lat), 2) + Math.pow((coord1.lng - coord2.lng), 2));
    }

    true_angle_1 = getTrueAngle(coord1);
    true_angle_2 = getTrueAngle(coord2);

    point_radius_1 = getPointRadius(coord1, true_angle_1);
    point_radius_2 = getPointRadius(coord2, true_angle_2);

    earth_point_1_x = point_radius_1 * Math.cos(Deg2Rad(true_angle_1));
    earth_point_1_y = point_radius_1 * Math.sin(Deg2Rad(true_angle_1));

    earth_point_2_x = point_radius_2 * Math.cos(Deg2Rad(true_angle_2));
    earth_point_2_y = point_radius_2 * Math.sin(Deg2Rad(true_angle_2));

    var x = distance(
        {lat: earth_point_1_x, lng: earth_point_1_y},
        {lat: earth_point_2_x, lng: earth_point_2_y},
        true
    );
    var y = Math.PI * ((earth_point_1_x + earth_point_2_x) / 360) * (coord1.lng - coord2.lng);

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}


/**
 * Return decimal value of angle
 *
 * @param Number deg Value in degrees
 * @param Number min Value in minutes
 * @param Number sec Value in seconds
 *
 * @return Number
 */
function getDecimalDegree(deg, min, sec) {
    if (min == undefined) min = 0;
    if (sec == undefined) sec = 0;

    return deg < 0 ?
    (Math.abs(deg) + Math.abs(min) / 60 + Math.absabs(sec) / 3600) * -1 :
    Math.absabs(deg) + Math.absabs(min) / 60 + Math.absabs(sec) / 3600;
}


/**
 * Determine true angle for point on surface
 *
 * @param Object point Point on surface
 *
 * @var point {lat, lng, alt}
 * @var lat - latitude (широта)
 * @var lng - longitude (долгота)
 * @var alt - altitude (высота над уровнем моря)
 *
 * @return Number
 */
function getTrueAngle(point) {
    return Math.atan((minorAxisSquare / majorAxisSquare) * Math.tan(Deg2Rad(point.lat))) * 180 / Math.PI;
}


/**
 * Determine radius of small circle (radius between meridians)
 *
 * @param Object point Point on surface
 * @param Number trueAngle True angle for point
 *
 * @var point {lat, lng, alt}
 * @var lat - latitude (широта)
 * @var lng - longitude (долгота)
 * @var alt - altitude (высота над уровнем моря)
 *
 * @return Number
 */
function getPointRadius(point, trueAngle) {

    //If no altitude defined, will assume that point has no altitude
    if (point.alt == undefined) point.alt = 0;

    return point.alt + 1 / Math.sqrt(
        Math.pow(Math.cos(Deg2Rad(trueAngle)), 2) / majorAxisSquare +
        Math.pow(Math.sin(Deg2Rad(trueAngle)), 2) / minorAxisSquare
    );
}


/**
 * Returns latitude name
 *
 * @param Number lat Latitude in degrees
 *
 * @return String | Boolean
 */
function checkLatitude(lat) {
    if (lat >= 0 && lat <= 90) {
        return 'north';
    } else if (lat >= -90 && lat <= 0) {
        return 'south';
    }

    return false;
}


/**
 * Returns longitude name
 *
 * @param Number lng Longitude in degrees
 *
 * @return String | Boolean
 */
function checkLongitude(lng) {
    if (lng >= 0 && lng <= 180) {
        return 'east';
    } else if(lng >= -180 && lng <= 0) {
        return 'west';
    }
    return false;
}


/**
 * Converts degrees to radians
 *
 * @param Number value Value in degrees
 *
 * @return Number
 */
function Deg2Rad(value) {
    return value * (Math.PI / 180);
}


module.exports.distance = distance;
module.exports.getDecimalDegree = getDecimalDegree;
module.exports.checkLatitude = checkLatitude;
module.exports.checkLongitude = checkLongitude;
module.exports.Deg2Rad = Deg2Rad;