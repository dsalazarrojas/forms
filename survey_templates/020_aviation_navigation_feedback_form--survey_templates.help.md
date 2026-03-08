# Aviation Navigation Feedback Form - Help Guide

## Purpose
This form is designed to gather feedback on the navigation system's performance and user experience.

## How To Complete This Form
1. Start by entering your pilot's full name in the "Pilot Full Name" field. 
2. Enter your email address in the "Pilot Email Address" field.
3. Specify the date of the flight in the "Date of Flight" field.
4. Choose the type of aircraft you flew on in the "Aircraft Type" field.
5. Describe the route you took in the "Route Description" field.
6. Select all the navigation systems you used during the flight in the "Navigation Systems Used" field.
7. Rate the currency of the navigation databases in the "Database Currency Status" field.
8. Rate the accuracy of the navigation data in the "System Accuracy Rating" field.
9. If you experienced any issues during the flight, select them in the "Navigation Issues Observed" field.
10. Rate the overall reliability of the navigation system in the "Overall Navigation Reliability Rating" field.
11. If there were any issues, report them to avionics maintenance in the "Reported to Avionics Maintenance?" field.
12. If you have any suggestions for improvement, enter them in the "Suggested Navigation Improvements" field.
13. Finally, enter any other comments in the "Final Feedback and Notes" field.

## Field-by-Field Explanation
* **Pilot Full Name** (`pilot_name`, text, required): Enter your full name as a pilot.
* **Pilot Email Address** (`pilot_email`, email, required): Enter your email address for contact.
* **Date of Flight** (`flight_date`, date, required): Enter the date of the flight.
* **Aircraft Type** (`aircraft_type`, text, required): Select the type of aircraft you flew on.
* **Route Description** (`route_description`, text, required): Describe the route you took during the flight.
* **-- Navigation System Performance --** (`section_navigation_feedback`, note, required): Provide details on your navigation system experience.
* **Navigation Systems Used** (`nav_systems_used`, select_multiple, required): Select all the navigation systems you used during the flight.
* **Database Currency Status** (`database_currency`, select_one, required): Rate the currency of the navigation databases used.
* **System Accuracy Rating** (`system_accuracy`, select_one, required): Rate the accuracy of the navigation data.
* **Navigation Issues Observed** (`issues_observed`, select_multiple, required): Select any issues you experienced during the flight.
* **Overall Navigation Reliability Rating** (`nav_reliability_scale`, number, required): Rate the overall reliability of the navigation system.
* **Reported to Avionics Maintenance?** (`avionics_report`, select_one, required): Report any issues to avionics maintenance.
* **Suggested Navigation Improvements** (`navigation_improvements`, text, optional): Suggest improvements to the navigation system.
* **Final Feedback and Notes** (`final_feedback_notes`, text, optional): Enter any other comments.
