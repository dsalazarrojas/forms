# Appointment List Tracker - Help Guide
## Purpose
The Appointment List Tracker form is designed to help you efficiently manage and track appointments with clients. This form provides a comprehensive overview of each appointment, including client contact information, appointment details, and status updates.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields:
	* **Client Name**: Enter the client's name.
	* **Client Phone Number**: Enter the client's phone number.
	* **Appointment Date**: Select the date of the appointment.
	* **Appointment Time**: Select the time of the appointment.
	* **Service Type**: Choose the type of service provided (e.g., Haircut, Hair color, Massage, etc.).
	* **Service Provided**: Select the specific service provided (e.g., Haircut, Hair color, etc.).
	* **Assigned Staff Member**: Enter the name of the staff member assigned to the appointment.
	* **Current Status**: Select the current status of the appointment (e.g., Scheduled, Confirmed, In progress, etc.).
2. Fill in additional information if necessary:
	* **Client Email**: Enter the client's email address (if available).
	* **Service Duration**: Select the duration of the service provided (e.g., 30 minutes, 1 hour, etc.).
	* **Notes or Special Instructions**: Add any additional notes or instructions for the appointment.
	* **Pricing Information**: Add any relevant pricing details for the service.
	* **Payment Method**: Select the payment method used (e.g., Cash, Credit card, etc.).
	* **Payment Status**: Update the payment status (e.g., Paid, Pending, etc.).
	* **Reminder Sent?**: Indicate whether a reminder has been sent to the client.
	* **Follow-up Needed?**: Indicate whether a follow-up is required.
	* **Additional Tracking Notes**: Add any additional tracking notes (if necessary).

## Field-by-Field Explanation

* **Client Name** (`client_name`, `text`, required): Enter the client's name.
* **Client Phone Number** (`client_phone`, `text`, required): Enter the client's phone number.
* **Client Email** (`client_email`, `email`, optional): Enter the client's email address (if available).
* **Appointment Date** (`appointment_date`, `date`, required): Select the date of the appointment.
* **Appointment Time** (`appointment_time`, `time`, required): Select the time of the appointment.
* **Service Type** (`-- Service Type --`, `note`, optional): Choose the type of service provided (e.g., Haircut, Hair color, Massage, etc.).
* **Service Provided** (`service_provided`, `select_one`, required): Select the specific service provided (e.g., Haircut, Hair color, etc.).
* **Service Duration** (`service_duration`, `select_one`, optional): Select the duration of the service provided (e.g., 30 minutes, 1 hour, etc.).
* **Assigned Staff Member** (`assigned_staff`, `text`, required): Enter the name of the staff member assigned to the appointment.
* **Current Status** (`-- Appointment Status --`, `note`, optional): Select the current status of the appointment (e.g., Scheduled, Confirmed, In progress, etc.).
* **Notes or Special Instructions** (`notes`, `text`, optional): Add any additional notes or instructions for the appointment.
* **Pricing Information** (`-- Pricing Information --`, `note`, optional): Add any relevant pricing details for the service.
* **Service Price** (`service_price`, `number`, optional): Enter the price of the service provided (if applicable).
* **Payment Method** (`payment_method`, `select_one`, optional): Select the payment method used (e.g., Cash, Credit card, etc.).
* **Payment Status** (`payment_status`, `select_one`, optional): Update the payment status (e.g., Paid, Pending, etc.).
* **Reminder Sent?** (`reminder_sent`, `select_one`, optional): Indicate whether a reminder has been sent to the client.
* **Follow-up Needed?** (`follow_up_needed`, `select_one`, optional): Indicate whether a follow-up is required.
* **Additional Tracking Notes** (`additional_notes`, `text`, optional): Add any additional tracking notes (if necessary).
