# Alumni Association Donation Form - Help Guide
## Purpose
The Alumni Association Donation Form is designed to collect information from alumni for donation purposes, allowing the institution to track and manage donations effectively. This form captures details about the donor, their preferences, and other relevant information to facilitate smooth donation processing and communication with the donor.

## How To Complete This Form

To complete this form accurately and efficiently, follow these steps:

1. Start by filling in your personal details, including your first name, last name, email address, phone number, and class year.
2. Provide your current school or college details, such as your major or field of study.
3. Specify your donation preferences, including the amount you wish to donate, the purpose of your donation, and whether it's a one-time or recurring donation.
4. Choose your preferred payment method and indicate if you would like to make your donation anonymous.
5. If applicable, select your employer's matching gift availability and pledge type.
6. Specify how you prefer to be recognized, such as listing your name or remaining anonymous.
7. Finally, choose whether you would like to sign up for the newsletter and receive event invitations.

## Field-by-Field Explanation

* **First Name** (`donor_first_name`, `text`, **required**): Enter your first name as it is commonly known.
* **Last Name** (`donor_last_name`, `text`, **required**): Enter your last name as it is commonly known.
* **Email Address** (`donor_email`, `email`, **required**): Enter a valid email address for donation receipt and future communication.
* **Phone Number** (`donor_phone`, `text`, **required**): Enter your contact phone number for ease of communication.
* **Class Year** (`class_year`, `text`, **required**): Enter the year you graduated from the institution.
* **School or College** (`school_college`, `text`, **required**): Enter the name of the school or college you attended.
* **Major or Field of Study** (`major_field`, `text`, **optional**): Enter your area of study or major, if applicable.
* **Current City** (`current_city`, `text`, **optional**): Enter the city where you currently reside.
* **Current State** (`current_state`, `text`, **optional**): Enter the state or province where you currently reside.
* **Donation Amount** (`donation_amount`, `number`, **required**): Enter the amount you wish to donate.
* **Donation Purpose** (`donation_purpose`, `select_one`, **required**): Select the purpose of your donation from the provided options.
* **Donation Frequency** (`donation_frequency`, `select_one`, **required**): Select how frequently you would like to make this donation.
* **Make Donation Anonymous** (`anonymous_donation`, `select_one`, **optional**): Choose if you would like to make your donation anonymous.
* **Payment Method** (`payment_method`, `select_one`, **required**): Select your preferred payment method.
* **Employer Matching Available** (`employer_match`, `select_one`, **optional**): Choose if your employer matches donations.
* **Pledge Type** (`pledge_type`, `select_one`, **optional**): Select how you plan to fulfill your donation pledge.
* **Desired Recognition Level** (`recognition_level`, `select_one`, **optional**): Choose how you prefer to be recognized.
* **Sign Up for Newsletter** (`newsletter_signup`, `select_one`, **optional**): Choose if you would like to sign up for the newsletter.
* **Receive Event Invitations** (`event_invitations`, `select_one`, **optional**): Choose if you would like to receive event invitations.
* **Personal Message** (`additional_message`, `text`, **optional**): Enter any personal message to the school, if desired.
