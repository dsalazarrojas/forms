# Online Confession Appointment Form - Help Guide

## Purpose
The Online Confession Appointment Form is designed to collect information for the confession process. This form helps users schedule and submit their confession appointments, including details such as name, email, phone number, confession time, and date. Additionally, it allows users to select the type of confession, whether they want to share their confession, and provides options for sharing the form via embed code.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the name of the person booking the confession.
2. Enter the email address of the person.
3. Enter the phone number of the person.
4. Choose the time for the confession appointment from the time format.
5. Choose the date for the confession appointment.
6. Select the type of confession (Confession, Penance, or Mass).
7. Indicate whether you would like to share your confession.
8. Select the format for sharing the confession (HTML, URL, or JSON).
9. Choose the form ID for the confession appointment.
10. Indicate whether the form is the latest version or not.
11. Select the format for receiving the embed code (HTML, URL, or JSON).
12. Indicate whether you would like to save the confession.

## Field-by-Field Explanation

* **Confession Appointment Form** (Page 1):
	+ **Confession Time** (`confession_time`, time): Enter the time of the confession appointment in the correct format (HH:MM).
* **Email** (`email`, text): Enter the email address of the person.
* **Phone Number** (`phone`, text): Enter the phone number of the person.
* **Name** (`name`, text): Enter the name of the person booking the confession.
* **Date** (`confession_date`, date): Enter the date of the confession appointment.
* **Confession Type** (`confession_type`, select_one): Select the type of confession (Confession, Penance, or Mass).
* **Share Confession** (`share_confession`, select_multiple): Indicate whether you would like to share your confession.
* **Embed Form** (`embed_form`, select_one): Select the format for sharing the confession (HTML, URL, or JSON).
* **Share Embed Code** (`share_embed_code`, select_one): Select the format for receiving the embed code (HTML, URL, or JSON).
* **Form ID** (`form_id`, select_one): Choose the form ID for the confession appointment.
* **Form Version** (`form_version`, select_one): Indicate whether the form is the latest version.
* **Save Confession** (`save_confession`, select_one): Indicate whether you would like to save the confession.
