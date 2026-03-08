# customer_service_response_time_evaluation_form - Help Guide
## Purpose
This form is used to evaluate the quality of customer service response times after an interaction with a customer service representative.
## How To Complete This Form
To complete this form, please follow these steps:

1. Rate the time it took for the customer service representative to respond to your issue or inquiry.
2. Rate the quality of the response on a scale of Excellent, Good, Fair, or Poor.
3. If you have any comments or feedback, please provide them in the comments field.
4. Select which customer service representative was assigned to handle your issue or inquiry.
5. Enter the date of the interaction.
6. Enter the time of the interaction.

## Field-by-Field Explanation

* **Customer Service Response Time (1)** (`customer_service_response_time`, number, required): Enter the time it took for the customer service representative to respond to your issue or inquiry. Please rate on a scale of 1-10, where 1 is less than 1 minute and 10 is greater than 30 minutes.
* **Response Time (2)** (`response_time`, time, required): Enter the exact time of the response, including AM/PM and seconds.
* **Evaluation Scale (3)** (`evaluation_scale`, select_multiple, required): Rate the quality of the response on a scale of Excellent, Good, Fair, or Poor.
	+ Excellent: The response was prompt, accurate, and helpful.
	+ Good: The response was satisfactory, but not always prompt or accurate.
	+ Fair: The response was not always prompt or accurate.
	+ Poor: The response was unacceptable.
* **Comments (4)** (`comments`, text, optional): If you have any additional feedback or comments, please provide them here.
* **Assigned To (5)** (`assigned_to`, select_one, required): Select the customer service representative who handled your issue or inquiry.
* **Date (6)** (`date`, date, required): Enter the date of the interaction in YYYY-MM-DD format.
* **Time (7)** (`time`, time, required): Enter the time of the interaction in 12-hour format (e.g., 10:00 AM).

## Tips

* Please fill out the form as accurately and truthfully as possible.
* If you are unsure about any of the fields, please contact the customer service team for clarification.
* This form is for feedback purposes only, and your responses will be kept confidential.
