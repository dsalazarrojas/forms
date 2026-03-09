# Service Request Work Order - Help Guide

## Purpose
The "Service Request Work Order" form is designed to collect and manage service requests from customers or users. This form is intended for internal service or support teams to receive and respond to requests in a structured and organized manner.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form title field with a brief description of the service request.
2. Select the category related to the service request.
3. Provide a detailed description of the issue or requirement.
4. Specify the location where the service request is being submitted from.
5. Choose the time when the service request was submitted.
6. Add any relevant contact information for follow-up.
7. Select the communication channel (phone, chat, or email) assigned to the service request.
8. Add any additional comments or notes regarding the request.
9. Select the user who submitted the request.
10. Verify if the request has been submitted.
11. Finally, review and submit the form.

## Field-by-Field Explanation

* **Service Request Work Order** (`form_title`, `text`, required: false): A brief description of the service request.
* **Category** (`category`, `select_one`, required: false): Select the category related to the service request.
* **Description** (`description`, `text`, required: false): Provide a detailed description of the issue or requirement.
* **Location** (`location`, `select_multiple`, required: false): Specify the location where the service request is being submitted from.
* **Date** (`date`, `date`, required: false): Enter the date when the service request was submitted.
* **Time** (`time`, `time`, required: false): Enter the time when the service request was submitted.
* **Contact** (`contact`, `text`, required: false): Add any relevant contact information for follow-up.
* **Email** (`email`, `email`, required: false): Enter the email address for follow-up.
* **Phone** (`phone`, `text`, required: false): Enter the phone number for follow-up.
* **Assigned Tool** (`assign_tool`, `select_one`, required: false): Select the communication channel assigned to the service request (chat, email, or phone).
* **Comments** (`comments`, `text`, required: false): Add any additional comments or notes regarding the request.
* **Follow-up Request** (`follow_up_request`, `text`, required: false): Add any follow-up requests or instructions.
* **Follow-up Status** (`follow_up_status`, `text`, required: false): Update the follow-up status of the request.
* **Submit** (`submit`, `select_one`, required: false): Verify if the request has been submitted.
* **Submitted By** (`submitted_by`, `select_one`, required: true): Select the user who submitted the request.
* **Submitted Date** (`submitted_date`, `date`, required: false): Enter the date when the request was submitted.
* **Submitted Time** (`submitted_time`, `time`, required: false): Enter the time when the request was submitted.
* **Status** (`status`, `select_one`, required: false): Select the status of the service request (pending, active, closed).
* **Due Date** (`due_date`, `date`, required: false): Enter the due date for the service request.
* **Due Time** (`due_time`, `time`, required: false): Enter the due time for the service request.
* **Service Provider** (`service_provider`, `select_one`, required: false): Select the service provider responsible for the request.
* **Service Type** (`service_type`, `select_one`, required: false): Select the type of service required.
* **Priority** (`priority`, `select_one`, required: false): Select the priority level of the service request (low, medium, high).
* **Assigned User** (`assigned_user`, `select_one`, required: false): Select the user assigned to the service request.
* **Yes/No** (`submit`, `select_one`, required: false): Verify if the request has been submitted.
