<thinking>
We're creating a help guide for the "downtown_business_enhance_survey" form. This form is designed to collect feedback and information from visitors about their experience in downtown. It's essential to ensure that the form is completed accurately and thoroughly to gather valuable insights.

Before creating the guide, we need to check for any duplication or redundancy in the form fields. Upon reviewing the provided YAML, there seem to be some potential issues:

* There are two fields with similar labels "feedback" and "other" which could be merged into one.
* The "email" field has the same label for the business and employee email, but they should have different labels to maintain clarity.
* The "phone" fields for "Contact us at 555-123-4567" and "What is the employee phone?" are not necessary as the first one is for general contact and the second one can be removed.

After addressing these potential issues, we can create the help guide.

</thinking>

# downtown_business_enhance_survey - Help Guide
## Purpose

This form is designed to collect feedback and information from visitors about their experience in downtown. It aims to gather valuable insights to enhance the area and provide a better experience for visitors.

## How To Complete This Form

To complete this form, follow these steps:

1. Answer the required questions accurately and thoroughly.
2. Select the correct options for each question.
3. Provide your contact information if you want to be reached back.
4. Review and submit the form before leaving downtown.

## Field-by-Field Explanation

* **What was the main reason you visited downtown today?** (`introduction`, `select_multiple`, **required**: false): This question asks for the main reason you visited downtown today. Select all the reasons that apply from the provided options.
* **How would you rate your experience with the downtown?** (`experience`, `select_one`, **required**: true): Rate your experience on a scale of 1 to 5.
* **What do you like most about downtown?** (`feedback`, `text`, **required**: true): Provide a detailed description of what you like most about downtown.
* **What is your birthday?** (`date`, `date`, **required**: true): Enter your birthday in the format MM/DD/YYYY.
* **What time of day do you visit downtown?** (`time`, `time`, **required**: true): Enter the time you visit downtown.
* **Any other notes?** (`note`, `note`, **required**: false): If you have any additional comments or suggestions, please provide them here.
* **How would you rate this experience?** (`rating`, `number`, **required**: true): Rate your experience on a scale of 1 to 5.
* **On a scale of 1-5** (`rating_scale`, `number`, **required**: true): Confirm your rating.
* **Contact us at email@email.com** (`email`, `email`, **required**: true): Enter your email address for us to contact you.
* **What is your home address?** (`address`, `text`, **required**: false): If you want to provide your home address for our records.
* **What is the name of the business?** (`business_name`, `text`, **required**: true): Enter the name of the business you visited.
* **What is the business email?** (`business_email`, `text`, **required**: false): If you want to provide the business email for their records.
* **What is the business phone?** (`business_phone`, `text`, **required**: true): Enter the business phone number.
* **What is the business address?** (`business_address`, `text`, **required**: true): Enter the business address.
* **What is the employee name?** (`employee_name`, `text`, **required**: true): Enter the name of the employee you interacted with.
* **What is the employee email?** (`employee_email`, `text`, **required**: false): If you want to provide the employee email for their records.
* **What is the employee phone?** (`employee_phone`, `text`, **required**: true): Enter the employee phone number.
* **What is the employee address?** (`employee_address`, `text`, **required**: true): Enter the employee address.
* **What are the store hours?** (`store_hours`, `time`, **required**: true): Enter the store hours in the format HH:MM-AM/PM.
* **What are the parking hours?** (`parking_hours`, `time`, **required**: false): If you want to provide the parking hours for our records.
* **What are the payment options?** (`payment_options`, `text`, **required**: true): Enter the payment options available at the business.
* **What is the website?** (`website`, `text`, **required**: true): Enter the website of the business.
* **Other (please specify)** (`other`, `text`, **required**: false): If you have any other comments or suggestions, please provide them here.

Please review the form carefully before submitting it. If you have any questions or issues, feel free to contact us.
