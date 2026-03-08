<thinking>
The form is used to gather feedback from users about the punctuality of bus services. This form is designed to collect information from users about their experiences with bus delays, including the duration of the delay, the frequency of delays on the route, and their overall satisfaction with the service's punctuality. The form is intended to help the transit team understand the issues with the bus services and make improvements to reduce delays. To ensure accurate feedback, users are asked to provide specific information about their trip, such as the bus route number and the scheduled and actual arrival times. The form is anonymous, and users are only asked to provide their email address if they wish to receive a response from the transit team.
</thinking>

# Bus Service Punctuality Feedback Form - Help Guide
## Purpose
The Bus Service Punctuality Feedback Form is designed to gather feedback from users about the punctuality of bus services. This form is intended to help the transit team understand issues with bus services and make improvements to reduce delays.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the bus route number that you took.
2. Enter the location where you waited for the bus.
3. Report the scheduled arrival time as per the official timetable.
4. Report the actual arrival time of the bus.
5. Choose the duration of the delay (if any).
6. Rate your satisfaction with the bus service's punctuality.
7. (Optional) Select the weather conditions during your trip.
8. (Optional) Provide any additional comments about the reliability of the bus service.
9. (Optional) If you wish to receive a response from the transit team, enter your email address.
10. Select the date of your trip.

## Field-by-Field Explanation

* **Bus Route Number** (`bus_route_number`, text, required): Enter the number of the bus route that you took. This will help the transit team identify which service to focus on improving.
* **Bus Stop Name/Location** (`bus_stop_location`, text, required): Enter the location where you waited for the bus. This will help the transit team pinpoint the exact spot where the delay occurred.
* **Scheduled Arrival Time** (`scheduled_arrival_time`, time, required): Report the time when the bus was scheduled to arrive. Please refer to the official timetable for this information.
* **Actual Arrival Time** (`actual_arrival_time`, time, required): Report the time when the bus actually arrived. This will help us understand how much delay occurred.
* **Duration of Delay** (`delay_duration_category`, select_one, required): Choose the duration of the delay from the options provided. If there was no delay, select "On Time (or early)".
* **Frequency of Delays on this Route** (`frequency_of_delay_on_route`, select_one, required): Rate how frequently delays occur on this route based on your recent experience.
* **Satisfaction with Punctuality** (`punctuality_satisfaction_score`, number, required): Rate your satisfaction with the punctuality of the bus service from 1 (Very Dissatisfied) to 5 (Very Satisfied).
* **Weather Conditions During Trip** (`weather_conditions_trip`, select_one, optional): Select the most accurate weather condition during your trip.
* **Additional Comments on Reliability** (`punctuality_comments`, text, optional): Provide any specific observations about the delay.
* **Email Address** (`contact_email_feedback`, email, optional): If you wish to receive a response from the transit team, enter your email address here.
* **Date of Trip** (`feedback_submission_date`, date, required): Select the date of your trip.
