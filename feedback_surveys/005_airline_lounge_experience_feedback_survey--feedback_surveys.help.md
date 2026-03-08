# Airline Lounge Experience Feedback Survey - Help Guide
## Purpose
This form is designed to gather feedback from visitors to our airline lounges. Your input will help us identify areas for improvement and provide the best experience for our customers.

## How To Complete This Form
1. Please provide your Visitor Name (if you'd like to share it).
2. Choose your Membership Status from the options provided.
3. Enter the Lounge Location (Airport and Terminal).
4. Select the Date of your Visit.
5. Rate the efficiency of our Check-in Process (1-5).
6. Rate the Seating Availability and Comfort (1-5).
7. Rate the Food Selection and Quality (1-5).
8. Rate the Beverage Selection and Quality (1-5).
9. Rate the Wi-Fi Speed and Connectivity (1-5).
10. Rate the Restroom and Shower Cleanliness (1-5).
11. Rate the Staff Helpfulness and Courtesy (1-5).
12. Rate the Overall Atmosphere and Ambiance (1-5).
13. Choose your favorite feature of the lounge from the options provided.
14. Share any Suggestions for Improvement.
15. Let us know if you'll visit this lounge again (Definitely, Likely, Unlikely).

## Field-by-Field Explanation
* **Visitor Name** (`visitor_name`, text, Optional): Enter your name if you'd like to share it.
* **Membership Status** (`membership_level`, select_one, True): Choose your membership status (Standard, Silver, Gold, Platinum, One-time Pass).
* **Lounge Location** (`lounge_location`, text, True): Enter the airport and terminal you visited.
* **Date of Visit** (`visit_date`, date, True): Enter the date of your visit.
* **Time of Visit** (`visit_time`, time, False): Enter the time of your visit (if you'd like to share it).
* **Check-in Process Efficiency** (`check_in_process`, number, True): Rate the efficiency of our check-in process (1-5).
* **Seating Availability and Comfort** (`seating_availability`, number, True): Rate the availability and comfort of seating (1-5).
* **Food Selection and Quality** (`food_selection`, number, True): Rate the food selection and quality (1-5).
* **Beverage Selection and Quality** (`beverage_selection`, number, True): Rate the beverage selection and quality (1-5).
* **Wi-Fi Speed and Connectivity** (`wifi_speed`, number, True): Rate the speed and connectivity of our Wi-Fi (1-5).
* **Restroom and Shower Cleanliness** (`shower_restroom_cleanliness`, number, True): Rate the cleanliness of our restrooms and showers (1-5).
* **Staff Helpfulness and Courtesy** (`staff_helpfulness`, number, True): Rate the helpfulness and courtesy of our staff (1-5).
* **Overall Atmosphere and Ambiance** (`overall_atmosphere`, number, True): Rate the overall atmosphere and ambiance (1-5).
* **Favorite Feature** (`favorite_feature`, text, False): Choose your favorite feature of the lounge.
* **Suggestions for Improvement** (`improvement_suggestions`, text, False): Share any suggestions you may have for us.
* **Will you visit this lounge again?** (`visit_again`, select_one, True): Let us know if you'll visit this lounge again (Definitely, Likely, Unlikely).

Note: This guide assumes that all fields are required unless otherwise specified as Optional or False.
