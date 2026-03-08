# The `public_service_evaluation_survey` form is designed to help administrators evaluate the public services provided by the organization. It is used to gather feedback and ratings on the quality of service from the public. This form is typically used to identify areas of improvement and make necessary adjustments to the service delivery process. It is an essential tool for the administration to gauge the effectiveness and satisfaction of public services.

</thinking>

# public_service_evaluation_survey - Help Guide
## Purpose
The `public_service_evaluation_survey` form is intended to gather feedback and ratings from the public on the quality of services provided by the organization.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the `First name` field.
2. Enter your last name in the `Last name` field.
3. Enter your email address in the `Email` field.
4. Rate the service provided by selecting a number from 1 to 5 in the `Service rating` field.
5. Express your level of satisfaction with the service by selecting a number from 1 to 5 in the `Satisfaction level` field.
6. If you have a service request, indicate whether it was provided (`Yes`) or not (`No`) in the `Service request` field.
7. Provide any feedback you have about your experience with the service in the `Feedback` field.

## Field-by-Field Explanation
### First name
* **First name** (`first_name`, `text`, required/optional): Enter your first name as it appears on your identification documents.

### Last name
* **Last name** (`last_name`, `text`, required/optional): Enter your last name as it appears on your identification documents.

### Email
* **Email** (`email`, `email`, required/optional): Enter your email address that is associated with your public service interaction.

### Service rating
* **Service rating** (`service_rating`, `number`, required/optional): Rate the service provided on a scale of 1 to 5, where 1 is poor and 5 is excellent.

### Satisfaction level
* **Satisfaction level** (`satisfaction_level`, `number`, required/optional): Express your level of satisfaction with the service on a scale of 1 to 5, where 1 is not satisfied and 5 is very satisfied.

### Service request
* **Service request** (`service_request`, `select_one`, required/optional): Indicate if you had a service request provided to you. Select `Yes` if the request was granted, `No` otherwise.

### Feedback
* **Feedback** (`feedback`, `text`, required/optional): Provide any comments or suggestions you have about your experience with the service.
