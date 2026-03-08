# route_efficiency_rider_inquiry_form - Help Guide
## Purpose
The form is designed to collect feedback from riders on the efficiency of a specific route.

## How To Complete This Form
1. Answer each question to the best of your ability.
2. If you have already completed this form for the same route, do not submit it again.
3. If you have any additional comments or feedback, use the "Additional Comments" field.

## Field-by-Field Explanation
* **Rider Feedback (text)** (`rider_feedback`, text, required: false): This is the main section where you can provide your feedback and thoughts on the route.
* **Route Efficiency (number)** (`route_efficiency`, number, required: false): Please rate the route's efficiency on a scale.
* **Route Number (text)** (`route_number`, text, required: false): Enter the number of the route you took.
* **Satisfaction Level (select_one)** (`satisfaction_level`, select_one, required: false):
	+ Very Satisfied
	+ Somewhat Satisfied
	+ Neutral
	+ Somewhat Dissatisfied
	+ Very Dissatisfied: Rate your overall satisfaction level with the route.
* **Delays Encountered (select_multiple)** (`delays_encountered`, select_multiple, required: false):
	+ Yes
	+ No: Check if you experienced any delays during your trip.
* **Delay Reasons (text)** (`delay_reasons`, text, required: false): If you checked "Yes" for delays, please describe the reasons for the delay.
* **Additional Comments (note)** (`comments`, note, required: false): Use this field to add any additional comments or feedback about your trip.
