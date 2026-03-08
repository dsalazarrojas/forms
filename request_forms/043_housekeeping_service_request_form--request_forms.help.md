# housekeeping_service_request_form - Help Guide

## Purpose
This form is used to request a service and provide optional details about the service and the request process.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the service type (yes/no) from the list of options.
2. Enter the address where the service will be performed.
3. Input the start and end dates of the service.
4. Provide the contact information (phone, email) for the service requester.
5. Add any additional notes about the service request.
6. If applicable, select the assigned tool for the service.
7. Provide any additional service details.

## Field-by-Field Explanation

* **Service Type** (`service_type`, `select_one`, required: false): Select the type of service being requested.
* **Address** (`address`, `text`, required: false): Enter the address where the service will be performed.
* **Start Date** (`start_date`, `date`, required: false): Input the start date of the service.
* **End Date** (`end_date`, `date`, required: false): Input the end date of the service.
* **Contact Person** (`contact_person`, `text`, required: false): Provide the name of the contact person.
* **Phone** (`phone`, `text`, required: false): Enter the phone number of the contact person.
* **Email** (`email`, `email`, required: false): Enter the email address of the contact person.
* **Note** (`note`, `note`, required: false): Add any additional notes about the service request.
* **Assigned Tool** (`assigned_tool`, `select_one`, required: false): If applicable, select the assigned tool for the service.
* **Service Details** (`service_details`, `note`, required: false): Provide any additional information about the service.
