# sports_coaching_registration_form - Help Guide
## Purpose
The sports coaching registration form is designed to collect information from participants who wish to register for sports coaching. This form gathers essential details about the participant, including their contact information, payment preferences, and payment status, to facilitate a smooth and efficient registration process.

## How to Complete This Form
To complete this form, please follow these steps:

1. Fill in your participant information, including your name, email address, and phone number.
2. Provide your preferred program name.
3. Enter your coach's name (if applicable).
4. Fill in your payment details, including your preferred payment method and amount.
5. Specify your payment frequency (e.g., weekly, monthly, quarterly).
6. Select your payment status.
7. Choose the payment date (if applicable).

## Field-by-Field Explanation
* **Participant Information** (`participant_info`, `text`, required: false): This field is used to collect general information about the participant. Please fill in any relevant details you would like to provide.
* **Participant Name** (`participant_name`, `text`, required: false): Enter your name as it appears on your identification documents.
* **Participant Email** (`participant_email`, `email`, required: false): Enter your email address where you can be reached for further communication.
* **Participant Phone** (`participant_phone`, `text`, required: false): Enter your phone number where you can be reached.
* **Program Name** (`program_name`, `text`, required: false): If you're registering for a specific program, please enter the name of the program.
* **Coach Name** (`coach_name`, `text`, required: false): If you have a designated coach, enter their name.
* **Payment Details** (`payment_details`, `text`, required: false): Enter any additional payment details or instructions.
* **Payment Method** (`payment_method`, `select_one`, required: false): Select your preferred payment method: Stripe, Pay, or Square.
* **Payment Amount** (`payment_amount`, `number`, required: false): Enter the payment amount.
* **Payment Frequency** (`payment_frequency`, `select_multiple`, required: false): Select how often you'd like to make payments: Weekly, Monthly, or Quarterly.
* **Payment Status** (`payment_status`, `text`, required: false): Enter your current payment status.
* **Payment Date** (`payment_date`, `date`, required: false): If you're paying on a specific date, enter it in the format MM/DD/YYYY.
