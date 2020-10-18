// Get Functions to Retrieve Data

// Gets Start Time
function getStartTime() {
    var startTime = document.getElementById("startTime").value;
    var hourAndMinuteArray = startTime.split(":"); // Splits String by : 
    var hourString = hourAndMinuteArray[0]; // Gets the Hour String
    var workableStartTime; // declares Variable to store Hour in
    if (hourString == "00") { // Checks if it's midnight
        workableStartTime = 24; // If it is -- Set Value to 24
    } else {
        workableStartTime = parseInt(hourString); // Otherwise Parse Value to Number
    }

    return workableStartTime;
}

// Same Method as Above, Except for End Time
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

// Same Method as Above, Except for Bed Time
function getBedTime() {
    var bedTime = document.getElementById("bedTime").value;
    var hourAndMinuteArray = bedTime.split(":");
    var hourString = hourAndMinuteArray[0];
    var workAbleBedTime;
    if (hourString == "00") {
        workAbleBedTime = 24;
    } else {
        workAbleBedTime = parseInt(hourString);
    }

    return workAbleBedTime;
}

function getNumberOfKids() {
    var numberOfKidsInput = document.getElementById("numberOfKids").value;
    var numberOfKids = parseInt(numberOfKidsInput)
    return numberOfKids;
}


// Calculation Functions: 

// Finds Base Hours (12/Hour Allocation)
function findBaseHours(startTime, endTime, bedTime) {
    const MIDNIGHT = 24; // Sets Midnight as a Variable
    const EARLIEST_START = 17; // Sets 5:00 PM as a Variable
    const LATEST_END = 4; // Sets 4:00 AM as a Variable
    const ELEVEN = 23; // Sets 11:00 PM as a Variable
    startTime = getStartTime();
    endTime = getEndTime();
    bedTime = getBedTime();

    // 0 Values
    if ((startTime <= LATEST_END) || // Checks if Start After Midnight
        (startTime == MIDNIGHT) ||  // Checks if Start is Midnight
        (startTime >= bedTime && bedTime >= EARLIEST_START) ) // Checks if Bed Time is Before Start Time
        { 
        return 0;
    } 
    // Midnight As End of Base Hour Block
    else if (endTime <= LATEST_END && (bedTime > ELEVEN || bedTime <= LATEST_END)) { // Checks if Bed Time is Midnight or After
        return Math.ceil(MIDNIGHT - startTime);
    }
    else if ((endTime <= bedTime && endTime >= EARLIEST_START) || (bedTime <= LATEST_END && endTime <= MIDNIGHT)) { // Checks if End Time is Before bed time
        return Math.ceil(endTime - startTime);
    }
    else { // All Other Scenarios
        return Math.ceil(bedTime - startTime);
    };
};

// Finds Bedtime Hours (8/Hour Allocation)
function findBedHours(startTime, endTime, bedTime) {
    const MIDNIGHT = 24; 
    const EARLIEST_START = 17;
    const LATEST_END = 4;
    const ELEVEN = 23;
    startTime = getStartTime();
    endTime = getEndTime();
    bedTime = getBedTime();

    // 0 Values
    if ((bedTime >= endTime && endTime >= EARLIEST_START) || // Checks if Bed Time is after End Time
        bedTime <= LATEST_END || // Checks if Bed time is after Midnight
        bedTime > ELEVEN) { // Checks if Bed Time is After 11:01 
        return 0;
        // End Time as End Point
    } else if ( bedTime <= startTime) { // Checks if Bed Time is Before Start Time
        if (endTime <= MIDNIGHT && endTime >= EARLIEST_START) { // Checks if End Time is Before Midnight
            return Math.floor(endTime - startTime); 
        }
        else { // If After Midnight Use Midnight as End Point
            return Math.floor(MIDNIGHT - startTime);
        }
    } else if (bedTime >= startTime) { // Checks if bed time is After Start Time
        if (endTime <= MIDNIGHT && endTime >= EARLIEST_START) { // Checks if End Time is Before Midnight
            return Math.floor (endTime - bedTime);
        }
        else { // If After Midnight Use Midnight As End Point
            return Math.floor(MIDNIGHT - bedTime);
        }
    };
};

// Finds Late Hours (16/Hour Allocation)
function findLateHours(startTime, endTime, bedTime) {
    const EARLIEST_START = 17;
    const LATEST_END = 4;
    startTime = getStartTime();
    endTime = getEndTime();
    bedTime = getBedTime();

    if (endTime >= EARLIEST_START) { // Checks if End Time is After Before Midnight
        return 0; // Only 0 Value
    } else if (startTime <= LATEST_END) { // If Start Time is After Midnight
        return Math.ceil(endTime - startTime); // Use End Time as End Point 
    } else {
        return Math.ceil(endTime - 0); // -0 Allows for Decimals to be rounded instead of using another method
    }
};

// Calculate Pay Functions ==> They All multiply their specific rates by the number of hours worked in the specific rate bracket
// Number of Hours found above

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

// Adds the amount owed found w/ functions above then ALERTS it on the webpage 
function calculateTotalPay(basePay , bedPay , latePay , numberOfKids) {
    basePay = calculateBasePay();
    bedPay = calculateBedPay();
    latePay = calculateLatePay();
    numberOfKids = getNumberOfKids();
    totalPay = numberOfKids * (basePay + bedPay + latePay);
    alert("The Babysitter will Cost $" + totalPay)
};

// Optional Functionalities
    // Multiply Pay By Number of Children: 
        // Give Each Child a different Bedtime? 