## qUnit Tests
- I've never used qUint Tests before, so I'm not sure if I used them entirely correctly: 
- In order to tests my functions I just copied and pasted them into the 'Test' Script in the HTML Test File. (tests.html) -- I realize the redundancy, but It was the simplest solution I could think of at the time I started writing my tests. 

## NOTES AND INSTRUCTIONS: 
- The babysitter:
    - starts no earlier than 5:00PM
    - leaves no later than 4:00AM
    - gets paid $12/hour from start-time to bedtime
    - gets paid $8/hour from bedtime to midnight
    - gets paid $16/hour from midnight to end of job
    - gets paid for full hours (no fractional hours)

## NOTES FOR HOW I WANT TO WORK IT:
-  Times are By Military Time: EXCEPT Midnight -- Midnight = 24
    - 5:00PM = 17
    - 6:00PM = 18
    - 7:00PM = 19
    - 8:00PM = 20
    - 9:00PM = 21
    - 10:00PM = 22
    - 11:00PM = 23
    - 12:00AM (Midnight) = 24
    - 1:00AM = 1
    - 2:00AM = 2
    - 3:00AM = 3
    - 4:00AM = 4
        - Fraction Times currently are rounded Down to the nearest Hour below

## PRE-WORK & PLANNING
- Methods: 
    - Calculate Hours of Each Type of Pay Rate
        - Calculate Base Hours 
            - (Start Time / Midnight --> Bed Time / Midnight / End)

        - Calculate Bed Hours 
            - (Start Time / Bed Time --> Midnight / End Time)

        - Calculate Late Hours 
            - (Start Time / Midnight --> End)

    - Calculate Price
        - Calculate Base Cost
            - Base Hours * Base Rate (12)

        - Calculate Bed Cost
            - Bed Hours * Bed Rate (8)

        - Calculate Late Cost 
            - Late Hours * Late Rate (16)

        - Calculate Total Cost
            - Base Cost + Bed Cost + Late
    - OPTIONAL
        - Calculate Total Cost based on Number of Kids
            - Total Cost * Number of Kids

    - VARIABLES AND CONSTANTS NEEDED FOR MVP
        - Times
            - Start Time
            - Bed Time
            - End Time
            
        - Pay Rates
            - Base Rate (12)
            - Bed Rate (8)
            - Late Rate (16)

        - OPTIONAL
            - Number of Children
