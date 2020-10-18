// Get Functions to Retrieve Data

function getStartTime() {
    var startTime = document.getElementById("startTime").value;
    var hourAndMinuteArray = startTime.split(":");
    var hourString = hourAndMinuteArray[0];
    var workableStartTime;
    if (hourString == "00") {
        workableStartTime = 24;
    } else {
        workableStartTime = parseInt(hourString);
    }

    return workableStartTime;
}

function getEndTime() {
    var endTime = document.getElementById("endTime").value;
    var hourAndMinuteArray = endTime.split(":");
    var hourString = hourAndMinuteArray[0];
    var workableEndTime;
    if (hourString == "00") {
        workableEndTime = 24;
    } else {
        workableEndTime = parseInt(hourString);
    }

    return workableEndTime;
}

function getBedTime() {
    var bedTime = document.getElementById("endTime").value;
    var hourAndMinuteArray = bedTime.split(":");
    var hourString = hourAndMinuteArray[0];
    var workAbleBedTime;
    if (hourString == "00") {
        workAbleBedTime = 24;
    } else {
        workAbleBedTime = parseInt(hourString);
    }

    return workAbleBedTime;}

// Calculation Functions: 

function findBaseHours(startTime, endTime, bedTime) {
    const MIDNIGHT = 24; // Sets Midnight as a Variable
    const EARLIEST_START = 17; // Sets 5:00 PM as a Variable
    const LATEST_END = 4; // Sets 4:00 AM as a Variable
    const ELEVEN = 23; // Sets 11:00 PM as a Variable
    startTime = getStartTime();
    endTime = getEndTime();
    bedTime = getBedTime();

    if ((startTime <= LATEST_END) ||
        (startTime == MIDNIGHT) || 
        (startTime >= bedTime && bedTime >= EARLIEST_START) )
        { 
        return 0;
    } 
    else if (endTime <= LATEST_END && (bedTime > ELEVEN || bedTime <= LATEST_END)) {
        return Math.ceil(MIDNIGHT - startTime);
    }
    else if ((endTime <= bedTime && endTime >= EARLIEST_START) || (bedTime <= LATEST_END && endTime <= MIDNIGHT)) {
        return Math.ceil(endTime - startTime);
    }
    else {
        return Math.ceil(bedTime - startTime);
    };
};

function findBedHours(startTime, endTime, bedTime) {
    const MIDNIGHT = 24; 
    const EARLIEST_START = 17;
    const LATEST_END = 4;
    const ELEVEN = 23;
    startTime = getStartTime();
    endTime = getEndTime();
    bedTime = getBedTime();

    if ((bedTime >= endTime && endTime >= EARLIEST_START) || bedTime <= LATEST_END || bedTime > ELEVEN) {
        return 0;
    } else if ( bedTime <= startTime) {
        if (endTime <= MIDNIGHT && endTime >= EARLIEST_START) {
            return Math.floor(endTime - startTime); 
        }
        else { 
            return Math.floor(MIDNIGHT - startTime);
        }
    } else if (bedTime >= startTime) {
        if (endTime <= MIDNIGHT && endTime >= EARLIEST_START) {
            return Math.floor (endTime - bedTime);
        }
        else {
            return Math.floor(MIDNIGHT - bedTime);
        }
    };
};

function findLateHours(startTime, endTime, bedTime) {
    const EARLIEST_START = 17;
    const LATEST_END = 4;
    startTime = getStartTime();
    endTime = getEndTime();
    bedTime = getBedTime();

    if (endTime >= EARLIEST_START) {
        return 0;
    } else if (startTime <= LATEST_END) {
        return Math.ceil(endTime - startTime);
    } else {
        return Math.ceil(endTime - 0);
    }
};

function calculateBasePay(baseHours) {
    baseHours = findBaseHours();
    return baseHours * 12;
};

function calculateBedPay(bedHours) {
    bedHours = findBedHours();
    return bedHours * 8;
};

function calculateLatePay(lateHours) {
    lateHours = findLateHours();
    return lateHours * 16;
};

function calculateTotalPay(basePay , bedPay , latePay) {
    basePay = calculateBasePay();
    bedPay = calculateBedPay();
    latePay = calculateLatePay();
    totalPay = basePay + bedPay + latePay;
    alert(totalPay)
};

// Optional Functionalities
    // Multiply Pay By Number of Children: 
        // Give Each Child a different Bedtime? 