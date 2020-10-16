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