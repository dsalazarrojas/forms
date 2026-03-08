# injector_service_feedback_form - Help Guide
## Purpose
The "injector_service_feedback_form" is a form used to gather feedback on the quality of service provided by an injector. This form helps us understand your experience and identify areas for improvement.

## How To Complete This Form
To complete this form, follow these steps:

1. Rate the quality of the service received using the scale provided on the "What was the quality of the service?" page.
2. Select a rating for the service from 1-3 on the "How would you rate the service?" page.
3. Provide any additional comments or remarks you may have about the service on the "Do you have any comments?" page.
4. If you would like to be contacted about your feedback, please enter your contact number on the "What is your contact number?" page.
5. If you have a preferred email address for communication, you can enter it on the "What is your e-mail address?" page.
6. If you are providing feedback about a service related to a vehicle, please enter the make and year of your vehicle on the "What is your vehicle make?" and "What is your vehicle year?" pages.

## Field-by-Field Explanation

* **What was the quality of the service?** (`injector_service_feedback_form`, number, required): Please rate the quality of service you received, using the scale provided. A rating of 1 indicates a poor experience, 2 is average, and 3 is excellent.
* **How would you rate the service?** (`rating`, select_one, required): Select a rating from 1-3 to indicate your overall satisfaction with the service.
* **Do you have any comments?** (`comments`, note, required): This is an opportunity to provide any additional comments or remarks about your experience with the service.
* **What is your contact number?** (`contact_number`, text, optional): If you would like to be contacted about your feedback, please enter your contact number here.
* **What is your e-mail address?** (`email`, email, optional): If you have a preferred email address for communication, please enter it here.
* **What is your vehicle make?** (`vehicle_make`, text, optional): If you are providing feedback about a service related to a vehicle, please enter the make of your vehicle here.
* **What is your vehicle year?** (`vehicle_year`, number, optional): If you are providing feedback about a service related to a vehicle, please enter the year of your vehicle here.
