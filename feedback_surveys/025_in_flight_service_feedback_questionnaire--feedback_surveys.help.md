# in_flight_service_feedback_questionnaire - Help Guide
## Purpose
This form is designed to collect feedback from passengers about their in-flight experiences. It helps airlines to understand what their passengers think about different aspects of their flights, such as cabin amenities, service quality, and overall satisfaction.

## How To Complete This Form
To complete this form, please follow the instructions below:

1. Answer the questions honestly, and provide as much detail as you need to help us understand your experience.
2. Select the options that best describe your experience for each question.
3. If you have any comments or feedback, please include them in the "Flight Experience" field.
4. If you have any additional comments or suggestions, please include them in the "Comments" field.

## Field-by-Field Explanation
* **Introduction** (`introduction`, `text`, optional): A brief introduction to your feedback. Please feel free to describe your flight number, departure and arrival city, and any other details you'd like to include.
* **Cabin** (`cabin`, `select_multiple`, optional): Please select all that apply to indicate whether you had:
	+ Yes: You had a cabin on your flight.
	+ No: You did not have a cabin on your flight.
* **Route** (`route`, `select_multiple`, optional): Please select all that apply to indicate whether you:
	+ Yes: Were on a route with a layover.
	+ No: Did not have a layover on your flight.
* **Overall Satisfaction** (`overall_satisfaction`, `select_one`, optional): Please select one of the following to rate your overall satisfaction:
	+ Excellent: You were extremely satisfied with your flight.
	+ Very good: You were satisfied with your flight.
	+ Good: You were somewhat satisfied with your flight.
	+ Fair: You were somewhat dissatisfied with your flight.
	+ Poor: You were not satisfied with your flight.
* **Service Quality** (`service_quality`, `select_multiple`, optional): Please select all that apply to rate your experience with in-flight service:
	+ Good: The service was good.
	+ Poor: The service was poor.
* **Seat** (`seat`, `select_one`, optional): Please select the type of seat you were assigned:
	+ Window: You were assigned a window seat.
	+ Aisle: You were assigned an aisle seat.
	+ Cabin: You were assigned a cabin seat.
	+ First Class: You were flying in first class.
* **Seat Preferred** (`seat_preferred`, `text`, optional): If you could choose your seat, which type would you have preferred?
* **Flight Experience** (`flight_experience`, `text`, optional): Please describe the positive or negative experiences you had on this flight.
* **Comments** (`comments`, `text`, optional): Do you have any additional comments or suggestions for us?
