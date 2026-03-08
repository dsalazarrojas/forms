# Remote Village Outreach Donation Form - Help Guide

## Purpose
This form collects information from remote village outreach donors to understand their donation preferences and history, streamlining the donation process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form with as much information as possible, but only complete fields marked as "required" to proceed.
2. Choose the correct "Outreach Location" for your donation.
3. Enter the donation amount, which must be a valid number.
4. Select your preferred donation frequency from the options provided.
5. Enter your contact email address if you wish to receive updates or further communication.
6. Provide a phone number if you wish to be contacted via phone.
7. If desired, enter a donation date for record keeping purposes.
8. Add any additional comments about your donation.

## Field-by-Field Explanation
* **Outreach Location** (`<name>` `outreach_location`, `text`, required: `false`): Select the location where you will be using the outreach program or service to support.
* **Donation Amount** (`<name>` `amount`, `number`, required: `true`): Enter the amount you wish to donate.
* **Frequency of Donation** (`<name>` `frequency`, `select_multiple`, required: `false`): Choose one or more of the options that best fit your donation schedule.
	+ Option 1: One-time donation
	+ Option 2: Regular interval donation
	+ Option 3: Ongoing support
* **Contact Email** (`<name>` `contact_email`, `email`, required: `false`): Enter your email address to receive updates or further communication.
* **Contact Phone** (`<name>` `contact_phone`, `text`, required: `false`): Enter your phone number to be contacted via phone.
* **Donation Date** (`<name>` `donation_date`, `date`, required: `false`): Enter the date you plan to make the donation, for record keeping.
* **Additional Comments** (`<name>` `additional_comments`, `note`, required: `false`): Add any additional comments or details about your donation.
* **Donation Frequency Options** (`<name>` `donation_frequency_options`, `select_one`, required: `false`): Select one of the options:
	+ Option 1: One-time donation
	+ Option 2: Regular interval donation
	+ Option 3: Ongoing support
