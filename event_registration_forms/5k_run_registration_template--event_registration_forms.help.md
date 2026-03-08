<thinking>
The purpose of this form is to collect information from participants for the 5K Run event. It is designed to gather essential details such as name, contact information, and medical alerts for the participant's safety. The form also asks for previous race experience, payment method, and interest in volunteering. It is intended for adults and minors, with additional questions for minors' guardians. The form must be completed in full to ensure accurate and complete records for the event organizers.
</thinking>

# 5K Run Registration Template - Help Guide

## Purpose
This form is designed to collect participant information for the 5K Run event.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your **Full name** as it appears on your identification.
2. Enter your **Date of birth** to determine your age group.
3. If you are under 18, provide your **Guardian's name** and their contact information.
4. Enter your **Email address** for confirmation and race information purposes.
5. Enter your **Phone number** (mobile number preferred).
6. Choose your **Preferred shirt size**.
7. Select your **Payment method used**.
8. If applicable, enter your **Previous race experience** in minutes.
9. List any **Medical alerts or medications** you need to be aware of.
10. Select **Agree to the event waiver and accept responsibility for participation**.
11. If interested, select the **Volunteer roles** you would consider taking on.
12. Provide any **Notes for the organizers**.

## Field-by-Field Explanation

* **Full name (as on ID)** (`full_name`, `text`, required): Enter your name as it appears on your identification, including first and last name.
* **Date of birth** (`date_of_birth`, `date`, required): Enter your date of birth to determine your age group.
* **Guardian name (required if under 18)** (`guardian_name`, `text`, required): If you are under 18, provide your guardian's name and contact information.
* **Email address** (`contact_email`, `email`, required): Enter your email address for confirmation and race information purposes.
* **Phone number** (`phone_number`, `phone`, required): Enter your mobile phone number (preferred).
* **Preferred shirt size** (`shirt_size`, `select_one`, required): Choose your preferred shirt size from S, M, L, XL, or XXL.
* **Payment method used** (`payment_method`, `select_one`, required): Select your payment method used for the event from Credit card, Bank transfer, Cash on pickup, or Other.
* **Previous race experience (approximate 5K time)** (`previous_race_experience`, `integer`, optional): Enter your previous 5K time in minutes, or leave blank if not applicable.
* **Important medical alerts or medication** (`medical_alerts`, `text`, optional): List any medical alerts or medications you need to be aware of.
* **I agree to the event waiver and accept responsibility for participation** (`waiver_agreement`, `select_one`, required): Select Agreed (signed) to confirm you have read and agree to the event waiver.
* **Interested in volunteering for the event?** (`volunteer_interest`, `select_multiple`, optional): Select all volunteer roles you would consider taking on (Course marshal, Registration desk, Aid station, or Finish line crew).
* **Notes for organizers** (`notes_for_organizers`, `text`, optional): Provide any additional information the organizers should be aware of before the event.
