# Vocational Rehabilitation Intake Form - Help Guide
## Purpose
This form is designed to collect demographic and contact information from individuals seeking vocational rehabilitation services. It is intended to be completed by the individual or their representative.

## How To Complete This Form
- Start by providing your First Name and Last Name.
- Enter your Date Of Birth in the format of MM/DD/YYYY.
- Provide your Email and Phone Number.
- Enter your Address (if applicable).
- If you have a Social Security Number, please enter it in the format XXX-XX-XXXX.
- Select the type of disability you are experiencing (Physical Disability, Mental Health Disorder, or Other).
- Choose the services you are interested in (Job Placement Services, Vocational Training, or Independent Living Skills).
- Indicate the languages you speak (English, Spanish, Mandarin, Arabic, or Other).
- Select your Preferred Language for communication.
- Enter the times of your Primary and Secondary Ambulatory (e.g., 9am-5pm, 8am-4pm, etc.).
- Finally, enter any additional information or comments you feel is relevant in the Notes field.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): This field is for your first name, such as John.
* **Last Name** (`last_name`, text, required): This field is for your last name, such as Doe.
* **Date Of Birth** (`date_of_birth`, date, required): Please enter your date of birth in the format of MM/DD/YYYY.
* **Email** (`email`, email, required): Enter your email address.
* **Phone Number** (`phone_number`, text, required): Enter your phone number.
* **Address** (`address`, text, optional): This is an optional field for entering your address.
* **Social Security Number** (`social_security_number`, number, required): If you have a Social Security Number, enter it in the format XXX-XX-XXXX.
* **Disability** (`disability`, select_one, required): Select the type of disability you are experiencing from the options provided.
* **Service Needed** (`service_needed`, select_multiple, required): Choose the services you are interested in from the options provided.
* **Language Spoken** (`language_spoken`, select_one, required): Select the languages you speak from the options provided.
* **Preferred Language** (`preferred_language`, select_one, required): Select your preferred language for communication.
* **Primary Ambulatory** (`primary_ambulatory`, time, required): Enter the times of your primary ambulatory, such as 9am-5pm.
* **Secondary Ambulatory** (`secondary_ambulatory`, time, required): Enter the times of your secondary ambulatory.
* **Notes** (`notes`, note, optional): This is an optional field for entering any additional information or comments.

# Tips

* Please ensure that you are completing this form on behalf of yourself or your representative.
* Please double-check your information for accuracy before submitting.
* If you have any questions or concerns, do not hesitate to contact us.
