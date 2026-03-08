# Cab Service Feedback Form - Help Guide
## Purpose
## How To Complete This Form
## Field-by-Field Explanation

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill out your name, email, and phone number (if available).
2. Provide details about your ride, including the date and time of your service, and the locations you picked up and dropped off.
3. Rate your overall experience and specific aspects of the service, such as the driver's politeness, vehicle cleanliness, and driving safety.
4. Share any additional feedback or comments you have about your experience.
5. Decide if you would recommend our service and if you want us to follow up with you.

## Field-by-Field Explanation
* **Passenger Name** (`passenger_name`, text, optional): This is your name, which is optional but helps us know who you are.
* **Email Address** (`contact_email`, email, optional): Your contact information for follow-up on your feedback.
* **Phone Number** (`contact_phone`, text, optional): Your phone number if you want us to contact you.
* **Date of Ride** (`ride_date`, date, required): The date of your service.
* **Time of Ride** (`ride_time`, time, optional): The approximate time of your service.
* **Pickup Location** (`pickup_location`, text, required): Where you boarded the cab.
* **Drop-off Location** (`dropoff_location`, text, required): Where you exited the cab.
* **Cab Number** (`cab_number`, text, optional): The vehicle ID if you have it.
* **Driver Name** (`driver_name`, text, optional): If you know the driver's name, please share.
* **Overall Rating** (`overall_rating`, select_one, required): Rate your overall experience. Choose from: Excellent - 5 stars, Good - 4 stars, Average - 3 stars, Poor - 2 stars, Very Poor - 1 star.
* **Driver Courtesy** (`driver_courtesy`, select_one, required): Rate the driver's politeness. Choose from: Excellent, Good, Average, Poor, Very Poor.
* **Vehicle Cleanliness** (`vehicle_cleanliness`, select_one, required): Rate the cab cleanliness. Choose from: Very clean, Clean, Acceptable, Dirty, Very dirty.
* **Driving Safety** (`driving_safety`, select_one, required): Rate the driver's behavior. Choose from: Very safe, Safe, Average, Reckless, Dangerous.
* **Route Efficiency** (`route_efficiency`, select_one, required): Rate the route taken by the driver. Choose from: Most direct route, Reasonable route, Longer than necessary, Suspicious routing.
* **Wait Time** (`wait_time`, select_one, optional): How long you waited for the cab. Choose from: Under 5 minutes, 5-10 minutes, 10-15 minutes, 15-20 minutes, Over 20 minutes.
* **Fare Accuracy** (`fare_accuracy`, select_one, optional): Was the fare as expected. Choose from: As expected, Slightly higher, Much higher, Lower than expected, Not sure.
* **Feedback Category** (`feedback_category`, select_one, required): What best describes your feedback. Choose from: Compliment, Suggestion, Complaint, Lost item report, Other.
* **Detailed Feedback** (`detailed_feedback`, text, required): Share any additional comments about your experience.
* **Would You Recommend** (`would_recommend`, select_one, required): Would you use our service again? Choose from: Definitely yes, Probably yes, Not sure, Probably not, Definitely not.
* **May We Contact You** (`follow_up_permission`, select_one, optional): Allow us to contact you about your feedback. Choose from: Yes, please contact me, Only if necessary, No, thank you.
