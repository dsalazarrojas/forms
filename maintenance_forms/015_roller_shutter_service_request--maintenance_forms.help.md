# Roller Shutter Service Request - Help Guide

## Purpose
This form is for requesting roller shutter services, including repairs, installations, and removals. It captures relevant customer information, service details, and job status updates to facilitate efficient service delivery.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the Customer Information page with the customer's name, address, phone number, and email.
2. On the Service Request page, select the type of service required (repair, installation, or removal).
3. Provide a schedule visit date and time for the service.
4. Enter the customer's contact details, including phone and address.
5. Add any additional comments or instructions for the service team.
6. Review and update the job status as needed.

## Field-by-Field Explanation

### Customer Information
* **Customer Name** (`customer_name`, `text`, required: false): Enter the customer's name.
* **Customer Address** (`customer_address`, `text`, required: false): Enter the customer's address.
* **Customer Phone** (`customer_phone`, `text`, required: false): Enter the customer's phone number.
* **Customer Email** (`customer_email`, `text`, required: false): Enter the customer's email address.

### Service Request
* **Service Type** (`service_type`, `select_one`, required: false): Select the type of service required (repair, installation, or removal).
* **Schedule Visit** (`schedule_visit`, `date`, required: false): Select a date for the service visit.
* **Visit Time** (`visit_time`, `time`, required: false): Select a time for the service visit.

### Contact Details
* **Contact Person** (`contact_person`, `text`, required: false): Enter the contact person's name.
* **Contact Phone** (`contact_phone`, `text`, required: false): Enter the contact person's phone number.
* **Contact Email** (`customer_email`, `email`, required: false): Enter the contact person's email address.

### Job Status
* **Job Status** (`job_status`, `select_one`, required: false): Select the current status of the job (pending, completed, or cancelled).
* **Service Status** (`service_status`, `select_one`, required: false): Select the current status of the service (pending, completed, or in progress).

### Additional Information
* **Job Notes** (`job_notes`, `note`, required: false): Add any additional comments or instructions for the service team.
* **Visit Notes** (`visit_notes`, `note`, required: false): Add any notes about the visit, such as any issues or concerns.
* **Service Status Notes** (`service_status_notes`, `note`, required: false): Add any notes about the service status.
* **Service Description** (`service_description`, `text`, required: false): Provide a brief description of the service required.
* **Service Details** (`service_details`, `text`, required: false): Provide any additional information about the service.
* **Job Schedule** (`job_schedule`, `text`, required: false): Provide a schedule for the job, including any recurring dates or times.
* **Job Schedule Time** (`job_schedule_time`, `time`, required: false): Provide a specific time for the job schedule.
* **Customer Address 2** (`customer_address_2`, `text`, required: false): Enter the customer's address 2.
* **Customer Address 2** (`customer_phone`, `text`, required: false): Enter the customer's phone number 2.

### Visit Information
* **Visit Date** (`visit_date`, `date`, required: false): Select a date for the visit.
* **Visit Notes** (`visit_notes`, `note`, required: false): Add any notes about the visit.
* **Service Status Notes** (`service_status_notes`, `note`, required: false): Add any notes about the service status.

### Job Reference
* **Job Reference** (`job_reference`, `text`, required: false): Enter the job reference number.
* **Service Description** (`service_description`, `text`, required: false): Provide a brief description of the service.
