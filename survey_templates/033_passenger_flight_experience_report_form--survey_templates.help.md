# Passenger Flight Experience Report Form - Help Guide
## Purpose
The Passenger Flight Experience Report Form is designed to gather feedback from passengers on their flight experience. This form will help airlines and travel companies identify areas of improvement and provide better services to their passengers.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the rating that best describes your experience.
2. Choose the rating score that you think best reflects your experience.
3. Choose the airline that you flew with.
4. Provide your flight number.
5. Choose the class of your flight.
6. Choose the type of traveler that you are.
7. Choose the quality of the flight attendants.
8. Choose the quality of the food service.
9. Choose the comfort of your seat.
10. Choose the quality of the boarding process.
11. Choose the quality of the flight attendants.
12. Choose the overall satisfaction with your flight.
13. Decide if you would recommend this flight to others.
14. If you want to suggest areas of improvement, please provide your comments.
15. If you have any additional comments, please provide them here.
16. Please provide the date and time you completed this survey.
17. If you have any comments on who you were surrounded by during the flight, please provide them here.

## Field-by-Field Explanation
* **Passengers** (`passenger_flight_experience_report_form_passengers`, select_multiple, required): Select all passengers who experienced this flight.
* **Rating** (`passenger_flight_experience_report_rating`, number, required): Choose the rating that best describes your experience.
* **Rating Score** (`passenger_flight_experience_report_rating_score`, select_one, required): Choose the rating score that you think best reflects your experience.
* **Comment** (`passenger_flight_experience_report_comment`, text, optional): Provide any additional comments about your experience.
* **Flight ID** (`passenger_flight_experience_report_flight_id`, text, optional): Enter the flight ID.
* **Date** (`passenger_flight_experience_report_date`, date, required): Choose the date of your flight.
* **Airline** (`passenger_flight_experience_report_airline`, select_one, required): Choose the airline you flew with.
* **Flight Number** (`passenger_flight_experience_report_flight_number`, number, required): Enter the flight number.
* **Flight Class** (`passenger_flight_experience_report_flight_class`, select_one, required): Choose the class of your flight.
* **Traveler Type** (`passenger_flight_experience_report_traveler_type`, select_one, required): Choose the type of traveler you are.
* **Flight Attendants** (`passenger_flight_experience_report_flight_attendants`, select_one, required): Choose the quality of the flight attendants.
* **Food Service** (`passenger_flight_experience_report_food_service`, select_one, required): Choose the quality of the food service.
* **Seat Comfort** (`passenger_flight_experience_report_seat_comfort`, select_one, required): Choose the comfort of your seat.
* **Boarding Service** (`passenger_flight_experience_report_boarding_service`, select_one, required): Choose the quality of the boarding service.
* **Inflight Entertainment** (`passenger_flight_experience_report_inflight_entertainment`, select_one, required): Choose the quality of the inflight entertainment.
* **Security** (`passenger_flight_experience_report_security`, select_one, required): Choose the quality of the security.
* **Check In** (`passenger_flight_experience_report_check_in`, select_one, required): Choose the quality of the check in service.
* **Boarding Process** (`passenger_flight_experience_report_boarding_process`, select_one, required): Choose the quality of the boarding process.
* **Flight Attendants** (`passenger_flight_experience_report_flight_attendants`, select_one, required): Choose the quality of the flight attendants.
* **Overall Satisfaction** (`passenger_flight_experience_report_overall_satisfaction`, select_one, required): Choose the overall satisfaction with your flight.
* **Recommend** (`passenger_flight_experience_report_recommend`, select_one, required): Decide if you would recommend this flight to others.
* **Improve Areas** (`passenger_flight_experience_report_improve_areas`, text, required): If you have any areas for improvement, please provide them here.
* **Additional Comments** (`passenger_flight_experience_report_additional_comments`, text, optional): If you have any additional comments, please provide them here.
* **Surrounded By** (`passenger_flight_experience_report_surrounded_by`, text, optional): If you were surrounded by anyone, please describe them here.
* **Surveyed At** (`passenger_flight_experience_report_surveyed_at`, date, optional): The date and time you completed this survey.
