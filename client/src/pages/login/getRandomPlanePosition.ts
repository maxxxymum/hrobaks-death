function getRandomInRange(from: number, to: number, fixed: number) {
    return Number((Math.random() * (to - from) + from).toFixed(fixed));
}

const planeInitPositionBounds = {
    "_southWest": {
        "lat": 55.55893256721972,
        "lng": 37.07336425781251
    },
    "_northEast": {
        "lat": 55.945354913856036,
        "lng": 38.1719970703125
    }
}

export function getRandomPlanePosition() {
    return {
        lat: getRandomInRange(planeInitPositionBounds._southWest.lat, planeInitPositionBounds._northEast.lat, 6),
        lng: getRandomInRange(planeInitPositionBounds._southWest.lng, planeInitPositionBounds._northEast.lng, 6)
    }
}