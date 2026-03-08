# service_status_record - Help Guide
## Purpose
The Service Status Record form is used to track and manage the status of services provided to customers. It helps to keep a record of requests, their corresponding status updates, and other relevant details. This form is essential for maintaining an accurate and up-to-date record of service requests and their resolutions.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the Request Date field with the date the service request was made.
2. Fill in the Request Time field with the time the service request was made.
3. Select the Status Update Frequency from the options provided to indicate how often status updates are provided for this service.
4. Fill in the Customer Name field with the customer's name.
5. Enter the Customer E-mail field with the customer's email address.
6. Enter the Customer Phone field with the customer's phone number.
7. Select the Service Type from the options provided to indicate the type of service.
8. Select the Service Status from the options provided to indicate the current status of the service.
9. Enter the Request Details field with a brief description of the request.
10. Enter any additional Notes about the request.
11. Select the Service Status Update Frequency to indicate how often status updates are provided for this service.
12. Fill in the Service Status Update Date and Service Status Update Time fields with the date and time of the last status update.

## Field-by-Field Explanation

* **Request Date** (`request_date`, `date`, optional): Enter the date the service request was made.
* **Request Date/Time** (`request_date_time`, `date` and `time`, optional): Enter the date and time the service request was made.
* **Request Time** (`request_time`, `time`, optional): Enter the time the service request was made (not required if Request Date/Time is filled in).
* **Status Update Frequency** (`status_update_frequency`, `select_one`, optional): Select how often status updates are provided for this service.
* **Customer Name** (`customer_name`, `text`, optional): Enter the customer's name.
* **Customer E-mail** (`customer_email`, `email`, optional): Enter the customer's email address.
* **Customer Phone** (`customer_phone`, `text`, optional): Enter the customer's phone number.
* **Service Type** (`service_type`, `select_one`, optional): Select the type of service provided.
* **Service Status** (`service_status`, `select_one`, optional): Select the current status of the service.
* **Request Details** (`request_details`, `text`, optional): Enter a brief description of the request.
* **Notes** (`notes`, `note`, optional): Enter any additional notes about the request.
* **Service Status Update Frequency** (`service_status_update_frequency`, `select_one`, optional): Select how often status updates are provided for this service.
* **Service Status Update Date** (`service_status_update_date`, `date`, optional): Enter the date of the last status update.
* **Service Status Update Time** (`service_status_update_time`, `time`, optional): Enter the time of the last status update.
* **Last Update** (`last_update`, `date`, optional): Not currently used, likely intended for future development.

## Tips

* Ensure that all required fields are completed before submitting the form.
* If a field is not required, fill it in only if necessary to provide additional context.
* Use clear and concise language when filling in fields for better tracking and searching.
* Regularly review and update the form to maintain accurate and up-to-date records.
