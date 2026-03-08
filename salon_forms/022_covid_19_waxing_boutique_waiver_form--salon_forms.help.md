# Covid 19 Waxing Boutique Waiver Form - Help Guide

## Purpose
The Covid 19 Waxing Boutique Waiver Form is a document that clients are required to fill out before receiving services at the salon. It aims to ensure that clients are aware of and agree to the terms and conditions of service, including any risks associated with the treatments they are about to receive, particularly in the context of COVID-19.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form with the required information, including your full name, email address, and date of birth.
2. Select the date and time of your service from the provided options.
3. Choose the salon staff member who will be performing your service.
4. Check the statements that apply to you, ensuring you understand and agree to the terms and conditions.
5. Select the warranties that apply to your service.
6. Sign the waiver form to confirm that you have read, understand, and agree to the terms and conditions.

## Field-by-Field Explanation

* **waiver_form** (1, text, required): This is the waiver form itself, where you will provide your consent to the terms and conditions of service.
* **full_name** (2, text, required): Please enter your full name as it appears on your official identification.
* **email** (3, email, required): Enter your email address, which will be used for communication purposes.
* **date_of_birth** (4, date, optional): If you wish to provide your date of birth for our records.
* **signature** (5, note, required): This is where you will sign the waiver form to confirm your consent.
* **date_of_service** (6, date, required): Please select the date of your service from the provided calendar.
* **time_of_service** (7, time, required): Choose the time of your service from the provided options.
* **salon_staff** (8, select_one, required): Select the salon staff member who will be performing your service.
* **client_statement** (9, select_multiple, required): Check the statements that apply to you, ensuring you understand and agree to the terms and conditions.
	+ statement1: I understand that I am responsible for my own safety and well-being during the service.
	+ statement2: I understand that I may experience some discomfort or pain during the service.
	+ statement3: I understand that I will be provided with aftercare instructions to ensure the longevity of the service.
* **terms_and_conditions** (10, select_multiple, required): Check the terms and conditions that apply to your service.
	+ term1: I understand that the salon is not responsible for any medical conditions that may arise after the service.
	+ term2: I understand that the salon may use my personal and medical information for marketing purposes.
	+ term3: I understand that I must notify the salon if I experience any adverse reactions after the service.
* **salon_warranty** (11, select_multiple, required): Select the warranties that apply to your service.
	+ warranty1: The service will last for 6 months.
	+ warranty2: The service will be performed with the highest standard of care.
	+ warranty3: The service will be performed with the latest technology available.
