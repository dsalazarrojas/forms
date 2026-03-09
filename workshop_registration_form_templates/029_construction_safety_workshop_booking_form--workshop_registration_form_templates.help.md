# Construction Safety Workshop Booking Form - Help Guide
## Purpose
The Construction Safety Workshop Booking Form is designed to collect registration information from attendees who want to participate in the Construction Safety Workshop.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the booking date for the workshop you want to attend.
2. Choose the workshop you want to attend from the list of available options.
3. Enter your preferred date for the workshop, if different from the booking date.
4. Enter your name, email address, phone number, and company name.
5. Provide your job title and years of experience in construction.
6. Indicate if you have had previous safety training.
7. Confirm if you need certification upon completion of the workshop.
8. Provide any special requirements or dietary needs.
9. Enter the number of attendees from your company.
10. List any additional attendees from your company.
11. Choose your preferred payment method.
12. Enter the registration fee per attendee.
13. Enter the total registration cost.
14. Confirm if the early bird discount has been applied.
15. Confirm if a group discount has been applied.
16. Read and agree to the cancellation policy.
17. Tell us how you heard about this workshop.
18. Enter any additional comments or questions.
19. Sign the form with your full name.

## Field-by-Field Explanation

* **Booking Date** (`booking_date`, date, required): Select the date of this registration.
* **Workshop Name** (`workshop_name`, select_one, required): Choose the workshop you want to attend.
* **Preferred Workshop Date** (`workshop_date`, date, required): Select your preferred date for the workshop.
* **Alternative Date** (`alternative_date`, date, optional): Enter a second choice for the workshop date.
* **Participant Name** (`participant_name`, text, required): Enter your full name as the attendee.
* **Email Address** (`participant_email`, email, required): Enter your email address for workshop information and materials.
* **Phone Number** (`participant_phone`, text, required): Enter your contact phone number.
* **Company Name** (`company_name`, text, required): Enter the name of your company or organization.
* **Company Address** (`company_address`, text, required): Enter your full business address.
* **Job Title** (`job_title`, text, required): Enter your job title or position.
* **Years in Construction** (`years_experience`, select_one, optional): Indicate how many years you have worked in construction.
* **Previous Safety Training** (`previous_training`, select_one, required): Indicate if you have had similar safety training in the past.
* **Certification Needed** (`certification_needed`, select_one, required): Confirm if you need certification upon completion of the workshop.
* **Special Requirements** (`special_requirements`, text, optional): Enter any special requirements or accommodations.
* **Dietary Requirements** (`dietary_requirements`, select_multiple, optional): Choose any dietary requirements or needs.
* **Number of Attendees** (`number_of_attendees`, number, required): Enter the total number of attendees from your company.
* **Additional Attendee Names** (`additional_attendees`, text, optional): Enter the names of any additional attendees from your company.
* **Payment Method** (`payment_method`, select_one, required): Choose your preferred payment method.
* **Registration Fee** (`registration_fee`, number, required): Enter the registration fee per attendee.
* **Total Amount** (`total_amount`, number, required): Enter the total registration cost.
* **Early Bird Discount** (`early_bird_discount`, select_one, optional): Confirm if the early bird discount has been applied.
* **Group Discount** (`group_discount`, select_one, optional): Confirm if a group discount has been applied.
* **Cancellation Policy Acknowledgment** (`cancellation_policy`, select_one, required): Confirm that you agree to the cancellation policy.
* **How Did You Hear About This Workshop** (`how_did_you_hear`, select_one, optional): Choose how you heard about this workshop.
* **Additional Comments or Questions** (`additional_comments`, text, optional): Enter any additional comments or questions.
* **Registrant Signature** (`registrant_signature`, text, required): Enter your full name as a signature.
