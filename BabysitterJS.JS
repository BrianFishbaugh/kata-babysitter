// The babysitter:
// - starts no earlier than 5:00PM
// - leaves no later than 4:00AM
// - gets paid $12/hour from start-time to bedtime
// - gets paid $8/hour from bedtime to midnight
// - gets paid $16/hour from midnight to end of job
// - gets paid for full hours (no fractional hours)

// Hours Use Military Time starting numbers NOT including Midnight, Midnight will be 24
    // Example: 6:00 PM => 18:00 => 18, 3:00 AM => 03:00 => 3
        // 5:00 = 17
        // 6:00 = 18
        // 7:00 = 19
        // 8:00 = 20
        // 9:00 = 21
        // 10:00 = 22
        // 11:00 = 23
        // 12:00 (Midnight) = 24
        // 1:00 = 1
        // 2:00 = 2
        // 3:00 = 3
        // 4:00 = 4

// Pay Rates By Hour
    // 17 --> Bedtime = $12.00 / Hour
    // 24 --> 4 = $16.00 / Hour (ALWAYS, REGARDLESS OF BEDTIME)
    // Bedtime --> 24 = $8.00 / Hour
    // If no Bedtime 17 --> 24 = $12.00 / Hour

// Methods: 
    // Determine amount of Money
        // Variables
            // Find Start Time
            // Find End Time
            // Find Bed Time
        // Finding Base Total
            // Bed Time - Start Time = Number of Base Hours
            // Number of Base Hours * Base Rate ($12.00) = Total Base Money
        // Finding Bedtime Total
            // Midnight (OR) End Time - Bed Time = Number of Bed Time Hours
            // Number of Bed Time Hours * Bed Time Rate ($8.00) = Total Bed Money
        // Finding Late Night Total
            // End Time - Midnight = Number of Late Night Hours
            // Number of Late Night Hours * Late Night Rate ($16.00) = Total Late Night Money
    // Total Amount of Money = Total Late Night Money + Total Bed Money + Total Base Money

// Finds Total Number of Base Pay Hours
function findBaseTotalHours(startTime , bedTime) {

// Sets Variables to be Used in Function
    let baseHours;
    let midnight = 24;

// Checks if Bedtime is Earlier than Midnight
    if (bedTime > 4) {
        baseHours = bedTime - startTime;
        // IF Bedtime is before Start Time -- Sets Hours to 0 for Base Rate
        if (baseHours < 0) {
            baseHours = 0;
        };
    };

// Checks if Bedtime is After Midnight
    if (bedTime < 4) {
        baseHours = midnight - startTime;
        // IF Bedtime is before Start Time -- Sets Hours to 0 for Base Rate
        if (baseHours < 0) {
            baseHours = 0;
        };
    };

    // Returns Number of Hours Rounded up once the Hour Started
    return Math.ceil(baseHours);
};

function findBedTimeTotalHours(startTime, bedTime, endTime) {
    let bedTimeHours;
    let midnight = 24;
    // Bed Time After Midnight
    if (bedTime < 4) {
        bedTimeHours = 0;
    };

    // Bed Time Before End Time
    if (bedTime < endTime) {
        bedTimeHours = endTime - bedTime;
    };

    // Bed Time After Midnight
    if (bedTime > 4) {
        if (bedTime > endTime) {
            bedTimeHours = midnight - bedTime;
        }
    }
    return Math.floor(bedTimeHours);
};