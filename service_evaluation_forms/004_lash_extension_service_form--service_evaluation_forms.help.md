# Lash Extension Service Form - Help Guide

## Purpose
The Lash Extension Service Form is used to record and manage services provided by lash technicians, including lash extensions, lash lifts, and lash curls. This form helps to streamline the process of booking and tracking appointments, client communications, and service details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of service you are providing (e.g., Lash Extensions, Lash Lift, Lash Curl).
2. Choose a valid date for the service.
3. Select the start and end times for the service.
4. Enter the client's name.
5. Enter the client's contact email (optional).
6. Enter the client's phone number (optional).
7. Enter the service address.
8. Select the lash technician providing the service.
9. Enter any comments about the service.
10. If applicable, enter the appointment ID, appointment time, and appointment date.
11. Set the service status.
12. Enter the client ID (if applicable).
13. Enter any service notes.
14. Rate the service (Excellent, Good, Fair).
15. Rate the client's satisfaction (Excellent, Good, Fair).

## Field-by-Field Explanation

* **Service Type** (`service_type`, select_one): Select the type of service being provided (e.g., Lash Extensions, Lash Lift, Lash Curl).
* **Service Date** (`service_date`, date): Enter the date for the service.
* **Service Time** (`service_time`, time): Enter the start and end times for the service.
* **Client Name** (`client_name`, text): Enter the client's name.
* **Contact Email** (`contact_email`, email): Enter the client's contact email (optional).
* **Contact Phone** (`contact_phone`, text): Enter the client's phone number (optional).
* **Service Address** (`service_address`, text): Enter the service address.
* **Lash Technician** (`lash_technician`, select_one): Select the lash technician providing the service.
* **Service Comments** (`service_comments`, note): Enter any comments about the service.
* **Appointment ID** (`appointment_id`, number): If applicable, enter the appointment ID.
* **Appointment Time** (`appointment_time`, time): If applicable, enter the appointment time.
* **Appointment Date** (`appointment_date`, date): If applicable, enter the appointment date.
* **Service Status** (`service_status`, select_one): Set the service status (e.g., Scheduled, Completed, Pending).
* **Client ID** (`client_id`, number): If applicable, enter the client ID.
* **Service Notes** (`service_notes`, note): Enter any service notes.
* **Service Rating** (`service_rating`, select_multiple): Rate the service (Excellent, Good, Fair).
* **Client Rating** (`client_rating`, select_multiple): Rate the client's satisfaction (Excellent, Good, Fair).
* **Service Cost** (`service_cost`, number): Enter the service cost (optional).

Note: The fields marked as "required: false" are optional and can be skipped if not applicable.
