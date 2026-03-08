> <thinking>...</thinking>

# Detailed Service Request - Help Guide

## Purpose
This form is designed to collect detailed information about a service request. It is meant for customers to submit their service requests, providing the necessary details for our team to effectively process and resolve their issues.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter a brief description of your service request in the **Service Description** field.
2. Select a **Service Type** (Yes/No) to indicate the type of service you are requesting.
3. Enter your **Appointment Date** and **Start Time** to schedule your service appointment.
4. Enter your **Phone** number and **Email** address so we can get in touch with you.
5. Provide the **Service Provider** information, if applicable.
6. Add any additional **Notes** about your service request.
7. Select the **Service Request Status** (Active/Inactive) to indicate the current status of your request.
8. Finally, review and confirm the information provided before submitting the form.

## Field-by-Field Explanation
* **Service Request** (`service_request`, `text`, required: false): A brief description of your service request.
* **Appointment Date** (`appointment_date`, `date`, required: false): The date of your scheduled appointment.
* **Start Time** (`start_time`, `time`, required: false): The start time of your scheduled appointment.
* **Service Description** (`service_description`, `text`, required: false): A detailed description of the service request.
* **Service Type** (`service_type`, `select_one`, required: false): Select "Yes" if you are requesting a service, or "No" if you are not.
* **Service Location** (`service_location`, `text`, required: false): The location where the service will be provided.
* **Phone** (`phone`, `text`, required: false): Your phone number for communication.
* **Email** (`email`, `email`, required: false): Your email address for communication.
* **Service Provider** (`service_provider`, `text`, required: false): The service provider information, if applicable.
* **Notes** (`notes`, `note`, required: false): Any additional notes about your service request.
* **Service Request ID** (`service_request_id`, `number`, required: false): A unique ID for your service request.
* **Service Request Status** (`service_request_status`, `select_multiple`, required: false): Select "Active" if your service request is active, or "Inactive" if it is not.
* **Service Request Date** (`service_request_date`, `date`, required: false): The date of your service request.
* **Service Request Time** (`service_request_time`, `time`, required: false): The time of your service request.
* **Service Request Description** (`service_request_description`, `text`, required: false): A detailed description of your service request.
