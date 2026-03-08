# Donor Information Form - Help Guide
## Purpose
The Donor Information Form is used to collect information from donors about their donations. This form is typically used for tracking and managing donor data.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Enter your email address in the "Email" field. Please use the format "example@example.com" for a valid email address.
4. Enter your phone number in the "Phone" field.
5. Select a donation date from the calendar or enter it manually in the "Donation Date" field.
6. Enter the amount of your donation in the "Donation Amount" field. Please enter a numerical value.
7. Choose how often you would like to make donations by selecting one or more options in the "Donation Frequency" field. You can select "Monthly", "Quarterly", or "Annually" for regular donations.
8. If you have any additional comments or information to share, type them in the "Comments" field.

## Field-by-Field Explanation
* **First Name** (`donor_first_name`, text, required): Enter your first name as it is written on your identification documents.
* **Last Name** (`donor_last_name`, text, required): Enter your last name as it is written on your identification documents.
* **Email** (`donor_email`, email, required): Enter a valid email address for communication purposes.
* **Phone** (`donor_phone`, text, required): Enter your phone number for contact purposes.
* **Donation Date** (`donation_date`, date, required): Select or enter the date of your donation.
* **Donation Amount** (`donation_amount`, number, required): Enter the amount of your donation as a numerical value.
* **Donation Frequency** (`donor_frequency`, select_multiple, optional): Choose how often you would like to make donations. Select one or more of the following options: "Monthly", "Quarterly", "Annually".
* **Comments** (`donor_comment`, note, optional): Share any additional comments or information about your donation.
