// NOTES: 
    // The babysitter:
    // - starts no earlier than 5:00PM
    // - leaves no later than 4:00AM
    // - gets paid $12/hour from start-time to bedtime
    // - gets paid $8/hour from bedtime to midnight
    // - gets paid $16/hour from midnight to end of job
    // - gets paid for full hours (no fractional hours)

// NOTES:
    // Times are By Military Time: EXCEPT Midnight -- Midnight = 24
        // 5:00PM = 17
        // 6:00PM = 18
        // 7:00PM = 19
        // 8:00PM = 20
        // 9:00PM = 21
        // 10:00PM = 22
        // 11:00PM = 23
        // 12:00AM (Midnight) = 24
        // 1:00AM = 1
        // 2:00AM = 2
        // 3:00AM = 3
        // 4:00AM = 4
    // Fraction Times will be rounded for Babysitter's Advantage

// PRE-WORK
    // Methods: 
        // Calculate Hours of Each Type of Pay Rate
            // Calculate Base Hours #### DONE ##### 
                // (Start Time / Midnight --> Bed Time / Midnight / End)
            // Calculate Bed Hours ##### DONE #####
                // (Start Time / Bed Time --> Midnight / End Time)
            // Calculate Late Hours ##### DONE #####
                // (Start Time / Midnight --> End)
        // Calculate Price
            // Calculate Base Cost
                // Base Hours * Base Rate (12)
            // Calculate Bed Cost
                // Bed Hours * Bed Rate (8)
            // Calculate Late Cost 
                // Late Hours * Late Rate (16)
            // Calculate Total Cost
                // Base Cost + Bed Cost + Late
    // Variables & Constants
        // Times
            // Start Time
            // Bed Time
            // End Time
            // Midnight (Constant)
        // Pay Rates
            // Base Rate (12)
            // Bed Rate (8)
            // Late Rate (16)

function findBaseHours(startTime, endTime, bedTime) {
    const MIDNIGHT = 24; // Sets Midnight as a Variable
    const EARLIEST_START = 17; // Sets 5:00 PM as a Variable
    const LATEST_END = 4; // Sets 4:00 AM as a Variable
    const ELEVEN = 23; // Sets 11:00 PM as a Variable 

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

    if (endTime >= EARLIEST_START) {
        return 0;
    } else if (startTime <= LATEST_END) {
        return Math.ceil(endTime - startTime);
    } else {
        return Math.ceil(endTime - 0);
    }
};

function calculateBasePay(baseHours) {
    baseHours = findBaseHours;
    return baseHours * 12;
};

function calculateBedPay(bedHours) {
    bedHours = findBedHours;
    return bedHours * 8;
};

function calculateLatePay(lateHours) {
    lateHours = findLateHours;
    return lateHours * 16;
};

function calculateTotalPay(basePay , bedPay , latePay) {
    basePay = calculateBasePay;
    bedPay = calculateBedPay;
    latePay = calculateLatePay;
    return basePay + bedPay + latePay;
};