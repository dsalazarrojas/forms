<thinking>
The "Airline Survey" form is designed to collect feedback from passengers about their recent flight experience. This form is intended to gather information about the various aspects of the flight, including flight number, flight date, departure and arrival cities, travel class, overall satisfaction, and more. The data collected will help airlines improve their services and provide better experiences for their passengers. To ensure accurate and relevant data is collected, please make sure to complete the form carefully and honestly. You can skip questions that are not applicable to your experience.
</thinking>

# Airline Survey - Help Guide
## Purpose
This form is designed to collect feedback about your recent airline flight experience. The data collected will help the airline improve their services and provide better experiences for their passengers.

## How To Complete This Form
1. Enter your flight number in the `Flight Number` field.
2. Select the `Flight Date` when you took your recent flight.
3. Enter the city you departed from in the `Departure City` field.
4. Enter the city you arrived at in the `Arrival City` field.
5. Select your travel class in the `Travel Class` field.
6. Rate your overall satisfaction with the service in the `Overall Satisfaction` field.
7. Rate the check-in process in the `Check-in Experience Rating` field.
8. Rate the boarding process in the `Boarding Process Rating` field.
9. Rate the comfort level of your seat in the `Seat Comfort` field.
10. Rate the cleanliness of the aircraft cabin in the `Cabin Cleanliness` field.
11. Rate the friendliness of the flight attendants in the `Crew Friendliness` field.
12. (Optional) Rate the quality of food and drinks in the `Food and Beverage Rating` field.
13. (Optional) Rate the in-flight entertainment options in the `In-flight Entertainment Rating` field.
14. Rate the baggage handling service in the `Baggage Handling` field.
15. Indicate if your flight was on time or not in the `On-time Performance` field.
16. Rate the value for money in the `Value for Money` field.
17. Indicate how likely you are to recommend the airline to others in the `Would You Recommend This Airline?` field.
18. Add any additional comments or feedback you would like to share in the `Additional Comments` field.

## Field-by-Field Explanation
* **Flight Number** (`flight_number`, `text`, required): Enter your flight number in the space provided.
* **Flight Date** (`flight_date`, `date`, required): Select the date you took your recent flight.
* **Departure City** (`departure_city`, `text`, required): Enter the city you departed from.
* **Arrival City** (`arrival_city`, `text`, required): Enter the city you arrived at.
* **Travel Class** (`travel_class`, `select_one`, required): Select your travel class (Economy, Premium Economy, Business Class, First Class).
* **Overall Satisfaction** (`overall_satisfaction`, `select_one`, required): Rate your overall satisfaction with the service (Very Satisfied, Satisfied, Neutral, Dissatisfied, Very Dissatisfied).
* **Check-in Experience Rating** (`check_in_rating`, `select_one`, required): Rate the check-in process (Excellent, Good, Average, Poor, Very Poor).
* **Boarding Process Rating** (`boarding_rating`, `select_one`, required): Rate the boarding process (Excellent, Good, Average, Poor, Very Poor).
* **Seat Comfort** (`seat_comfort`, `select_one`, required): Rate the comfort level of your seat (Very Comfortable, Comfortable, Neutral, Uncomfortable, Very Uncomfortable).
* **Cabin Cleanliness** (`cabin_cleanliness`, `select_one`, required): Rate the cleanliness of the aircraft cabin (Very Clean, Clean, Average, Dirty, Very Dirty).
* **Crew Friendliness** (`crew_friendliness`, `select_one`, required): Rate the friendliness of the flight attendants (Excellent, Good, Average, Poor, Very Poor).
* **Food and Beverage Rating** (`food_beverage_rating`, `select_one`, optional): Rate the quality of food and drinks (Excellent, Good, Average, Poor, Very Poor, Not Applicable).
* **In-flight Entertainment Rating** (`entertainment_rating`, `select_one`, optional): Rate the in-flight entertainment options (Excellent, Good, Average, Poor, Very Poor, Not Applicable).
* **Baggage Handling** (`baggage_handling`, `select_one`, optional): Rate the baggage handling service (Excellent, Good, Average, Poor, Very Poor).
* **On-time Performance** (`on_time_performance`, `select_one`, required): Indicate if your flight was on time (Early, On Time, Slightly Delayed, Moderately Delayed, Significantly Delayed).
* **Value for Money** (`value_for_money`, `select_one`, required): Rate the value for money (Excellent Value, Good Value, Fair Value, Poor Value, Very Poor Value).
* **Would You Recommend This Airline?** (`recommend_airline`, `select_one`, required): Indicate how likely you are to recommend the airline to others (Very Likely, Likely, Neutral, Unlikely, Very Unlikely).
* **Additional Comments** (`additional_comments`, `text`, optional): Add any additional comments or feedback you would like to share.
