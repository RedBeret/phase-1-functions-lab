function distanceFromHqInBlocks(Dist) {
    return Math.abs(42 - Dist)
}

function distanceFromHqInFeet(Dist) {
    const HQDist = distanceFromHqInBlocks(Dist);
    return (HQDist * 264);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    const blockDist = (destination - start);
    const feetDist = blockDist * 264;
    console.log(destination - start);
    //returns the number of feet traveled
    return (Math.abs(feetDist));
}

function calculatesFarePrice(start, destination) {
    const distfirst = distanceTravelledInFeet(start, destination);

    if (distfirst <= 400) {
        //returns the fare for the cus;tomer
        return 0;
    }
    else if (distfirst > 400 && distfirst <= 2000) {
        return (distfirst - 400) * 0.02;
    }
    else if (distfirst > 2000 && distfirst <= 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}