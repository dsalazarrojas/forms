# payment_processing_experience_survey - Help Guide
## Purpose
This form is a survey designed to gather feedback about your payment processing experience. Your input will help us identify areas of improvement for our payment processing system.

## How To Complete This Form
1. Fill in the required information as prompted.
2. Select the relevant options for each question.
3. Provide any additional comments or notes if necessary.
4. Review and submit the form.

## Field-by-Field Explanation

* **Payment Processing Survey** (`payment_processing_survey`, text, optional): Briefly describe your experience with our payment processing system.
* **Satisfaction** (`satisfaction`, select_one, optional): Rate your overall satisfaction with our payment processing system (Very Satisfied, Somewhat Satisfied, Not Satisfied).
* **Ease of Payment** (`easy_of_payment`, number, optional): Rate how easy it was to complete the payment process on a scale of 1-10.
* **Ease of Payment** (`ease_of_payment`, number, optional): (This field seems to be a duplicate of the above field, but we'll keep it for clarity's sake. Rate how easy it was to complete the payment process on a scale of 1-10.)
* **Payment Method** (`payment_method`, select_multiple, optional): Select all payment methods you used during the payment process (Credit Card, PayPal, Bank Transfer).
* **Issues** (`issues`, select_one, optional): If you encountered any issues during the payment process, select the one that best describes your experience (Not Encountered, Had to Contact, Unable to Complete).
* **Comments** (`comments`, note, optional): Provide any additional comments or notes about your experience.
* **Assigned User** (`assigned_user`, text, optional): If you were assisted by a specific user during the payment process, enter their name here.
* **Email** (`email`, email, optional): Enter your email address (if you wish to be contacted for further discussion).
* **Phone** (`phone`, text, optional): Enter your phone number (if you wish to be contacted for further discussion).
* **Date** (`date`, date, optional): Enter the date you completed the payment process.
* **Time** (`time`, time, optional): Enter the time you completed the payment process.
* **Assigned Tool** (`assigned_tool`, select_one, required): If you were assisted by a specific tool or system, select the one that best describes your experience (chatjimmy, other).
* **Notes** (`notes`, note, optional): Provide any additional notes or comments about your experience.
* **Submitted On** (`submitted_on`, date, optional): This field will be auto-filled with the date and time you submitted the form.
* **Submitted By** (`submitted_by`, text, optional): Enter your name or username.
* **Submitted By Email** (`submitted_by_email`, email, optional): Enter your email address (if you wish to be contacted for further discussion).
* **Submitted By Phone** (`submitted_by_phone`, text, optional): Enter your phone number (if you wish to be contacted for further discussion).
* **Submitted By Tool** (`submitted_by_tool`, text, optional): Enter the tool or system you used to submit the form.
* **Submitted By User ID** (`submitted_by_user_id`, text, optional): Enter your user ID or account number.
* **Submitted By User** (`submitted_by_user`, text, optional): Enter your name or username.
* **Assigned User ID** (`assigned_user_id`, text, optional): Enter the ID of the user who assisted you during the payment process.
* **Form ID** (`form_id`, text, optional): Enter the form ID or reference number.
* **Output File** (`output_file`, text, optional): This field is not explicitly described in the YAML file, so we'll assume it's for outputting the submitted form data.
