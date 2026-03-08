# Electrical Services Customer Satisfaction Survey - Help Guide
## Purpose
The Electrical Services Customer Satisfaction Survey is a form designed to collect customer feedback on the electrical services provided by the company. It aims to gather information on the customer's experience with the service request, allowing us to identify areas of improvement and provide better services in the future.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the survey date to provide the date on which the survey was taken.
2. Fill in your first and last name as the customer.
3. Enter your email address to ensure we can contact you.
4. Provide the name of the employee who requested the service.
5. Specify the type of service requested.
6. Enter the date of the service request.
7. Select the status of the service request (Active or Inactive).
8. Rate the resolution time for the service request (number of days).
9. Rate your overall service experience (Good or Fair).
10. Select your overall satisfaction level (Satisfied or Dissatisfied).
11. Enter any comments or feedback about your experience.

## Field-by-Field Explanation
### Survey Date
* **Survey Date** (`survey_date`, date, required: false): Enter the date on which this survey was taken.

### Customer First Name
* **Customer First Name** (`customer_first_name`, text, required: false): Enter your first name as the customer.

### Customer Last Name
* **Customer Last Name** (`customer_last_name`, text, required: false): Enter your last name as the customer.

### Customer Email
* **Customer Email** (`customer_email`, email, required: false): Enter your email address to ensure we can contact you.

### Service Requesting Employee
* **Service Requesting Employee** (`service_requesting_employee`, text, required: false): Provide the name of the employee who requested the service.

### Service Type
* **Service Type** (`service_request_type`, text, required: false): Specify the type of service requested.

### Service Request Date
* **Service Request Date** (`service_request_date`, date, required: false): Enter the date of the service request.

### Service Status
* **Service Status** (`service_request_status`, select_one, required: false): Select the status of the service request (Active or Inactive).

### Service Resolution Time
* **Service Resolution Time** (`service_request_resolution_time`, number, required: false): Rate the resolution time for the service request.

### Customer Service Rating
* **Customer Service Rating** (`customer_service_rating`, select_one, required: false): Rate your overall service experience (Good or Fair).

### Overall Satisfaction
* **Overall Satisfaction** (`overall_satisfaction`, select_multiple, required: false): Select your overall satisfaction level (Satisfied or Dissatisfied).

### Comments
* **Comments** (`comments`, text, required: false): Enter any comments or feedback about your experience.

## Tips
* Make sure to fill in all required fields to ensure accurate data collection.
* If you have any comments or feedback, please provide them in the comments field.
* If you have any questions or concerns, please contact us at [insert contact email].
