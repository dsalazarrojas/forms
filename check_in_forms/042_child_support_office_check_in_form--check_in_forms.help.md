# Child Support Office Check In Form - Help Guide

## Purpose
This form is designed to help visitors efficiently check in for their visit to the Child Support Office. Please take a few minutes to fill out this form and ensure that we have the necessary information to provide the best possible assistance.

## How To Complete This Form
1. Start by entering your **Visitor Full Name** in the first field.
2. Provide your **Case Number (if known)** to speed up the processing of your visit.
3. Select the **Reason for Visit** that best describes your purpose for visiting.
4. If you have a **scheduled appointment**, indicate that you have one.
5. If you are meeting with a **Case Worker**, please provide their name.
6. Choose your **preferred contact method for follow-up** (Phone Call, Email Update, or Standard Mail).
7. Enter your **Email Address** for digital notifications.
8. Choose the **Check-in Time** of your arrival.

## Field-by-Field Explanation

* **Visitor Full Name** (`visitor_name`, text, required): Enter your full name as it appears on your identification.
* **Case Number (if known)** (`case_number_inquiry`, text, optional): If you know your case number, please enter it here to speed up processing.
* **Reason for Visit** (`visit_reason`, select_one, required): Select one of the available options:
	+ Scheduled Appointment
	+ Walk-in Inquiry
	+ Dropping off Documents
	+ Payment Assistance
* **Do you have a scheduled appointment today?** (`has_scheduled_appt`, select_one, required): Indicate if you have a scheduled appointment.
* **Name of Case Worker (if known)** (`case_worker_name`, text, optional): If you are meeting with a Case Worker, please enter their name.
* **Preferred contact method for follow-up** (`contact_method_pref`, select_one, required): Choose how you would like to be contacted for follow-up:
	+ Phone Call
	+ Email Update
	+ Standard Mail
* **Email Address** (`visitor_email`, email, required): Enter your email address for digital notifications.
* **Check-in Time** (`check_in_time`, time, required): Select the time of your arrival.
