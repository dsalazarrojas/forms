<thinking>
The form purpose is to collect information from catchers to register for a clinic event. This guide will cover how to fill out the form properly and what each field means. We will check if the user has all the required information and prevent them from continuing if they don't. The form is for athletes who want to participate in a catching clinic and need to provide their personal and medical information.

</thinking>

# Catching Clinic Registration Form - Help Guide
## Purpose
The purpose of this form is to collect information from catchers who want to register for a clinic event. Please make sure to fill out the form completely and accurately to avoid any issues with your registration.

## How To Complete This Form
1. Start by filling out the athlete's personal information, including their full name, age, and experience level. Please select the correct gender and years of catching experience from the provided options.
2. Next, provide the parent or guardian's contact information, including their name and contact email and phone number.
3. Select the emergency contact person and their contact information, if different from the parent or guardian.
4. If the athlete has any medical conditions or allergies, please provide this information in the medical conditions field.
5. Choose the clinic session you want to attend and agree to the liability waiver and medical release.
6. Finally, select your preferred payment method and provide any additional comments you'd like to share.

## Field-by-Field Explanation
* **Athlete Full Name** (`athlete_name`, `text`, required): Enter your full name as it is written on your official government-issued ID.
* **Age** (`athlete_age`, `number`, required): Enter your age.
* **Gender** (`athlete_gender`, `select_one`, required): Select your gender.
* **Years of Catching Experience** (`experience_level`, `select_one`, required): Select your level of experience.
* **Is catching your primary position** (`primary_position`, `select_one`, required): Select whether catching is your primary position.
* **School or Club Team Name** (`school_club_name`, `text`, optional): If you are a team member, enter your school or club team name.
* **Parent/Guardian Name** (`parent_name`, `text`, required): Enter your parent's or guardian's name.
* **Contact Email** (`contact_email`, `email`, required): Enter your contact email.
* **Contact Phone Number** (`contact_phone`, `text`, required): Enter your contact phone number.
* **Emergency Contact Name** (`emergency_name`, `text`, required): Enter the emergency contact's name.
* **Emergency Phone Number** (`emergency_phone`, `text`, required): Enter the emergency contact's phone number.
* **Any allergies or medical conditions** (`medical_conditions`, `text`, optional): If you have any medical conditions or allergies, enter them here.
* **Select Clinic Session** (`clinic_date_choice`, `select_one`, required): Choose the clinic session you want to attend.
* **I agree to the liability waiver and medical release** (`liability_waiver`, `select_one`, required): Check this box to agree to the terms of participation.
* **Preferred Payment Method** (`payment_method`, `select_one`, required): Select your preferred payment method.
* **Anything else you would like us to know** (`additional_comments`, `text`, optional): Provide any additional comments or information you'd like to share.
