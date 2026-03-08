<thinking>
To create a user-facing help guide for the Actuarial Exam Site Preference Form, I will follow the instructions and the provided YAML structure.

# Actuarial Exam Site Preference Form - Help Guide
## Purpose
This form is designed to collect information about your preferred examination site, date, and other details for your actuarial exam. Please fill out this form to inform the test administrators about your needs and preferences for the exam.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your full legal name and email address as registered on your identification.
2. Rank up to three preferred examination locations.
3. Specify any testing accommodations you may require.
4. Provide 2-3 preferred exam dates.
5. Indicate if you will need travel assistance or if you will require lodging.
6. Provide any special instructions for the test center, such as parking information.
7. Enter your mobile phone number for contact on the day of the exam.
8. Confirm that you agree to follow the exam policies.

## Field-by-Field Explanation

* **Candidate name** (`candidate_name`, Text, Required): Enter your full legal name as on your registration.
* **Candidate email** (`candidate_email`, Email, Required): Enter your email address as registered for scheduling confirmation.
* **Preferred locations** (`preferred_locations`, Text, Required): Rank up to three examination site preferences. Please enter the name of the location in the order of your preference.
* **Accommodation needs** (`accommodation_needs`, Text, Optional): Specify any testing accommodations you may require, such as wheelchair accessibility or language support.
* **Exam date options** (`exam_date_options`, Text, Required): Provide 2-3 preferred exam dates in the format of MM/DD/YYYY.
* **Travel plan** (`travel_plan`, Select One, Optional): Indicate if you will need travel assistance (e.g., local travel, requires lodging).
* **Special instructions** (`special_instructions`, Text, Optional): Provide any special instructions for the test center, such as parking information or special requirements.
* **Contact phone** (`contact_phone`, Text, Required): Enter your mobile phone number for contact on the day of the exam.
* **Agreement to testing policies** (`consent_terms`, Select One, Required): Confirm that you agree to follow the exam policies by selecting "I agree".
