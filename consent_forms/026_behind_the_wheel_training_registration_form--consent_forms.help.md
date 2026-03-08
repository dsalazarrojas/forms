# Behind The Wheel Training Registration Form - Help Guide
## Purpose
The purpose of this form is to collect necessary information from new students to register them for behind-the-wheel training with our driving school. 

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your personal details, including your first name, last name, date of birth, email address, phone number, and street address.
2. Indicate your current driver's license status, preferred vehicle type for training, and whether you have prior driving instruction.
3. Choose your preferred training start date, preferred training time, and the number of sessions needed.
4. Select your preferred session length and confirm your understanding of the training rules and liability and safety requirements.
5. Finally, confirm your consent to participate in the training program.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required): Enter your given name as it appears on your identification documents.
* **Last Name** (`last_name`, `text`, required): Enter your surname as it appears on your identification documents.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in the format MM/DD/YYYY.
* **Email Address** (`email`, `email`, required): Enter your valid email address.
* **Phone Number** (`phone`, `text`, required): Enter your telephone number.
* **Street Address** (`address`, `text`, required): Enter your street address or mailing address.
* **City** (`city`, `text`, required): Enter the city where you reside.
* **State** (`state`, `text`, required): Enter the state where you reside.
* **Zip Code** (`zip_code`, `text`, required): Enter your ZIP code.
* **Current Driver's License Status** (`license_status`, `select_one`, required): Select your current driver's license status: 
  - Learner's Permit
  - No License
  - Suspended
  - Other
* **Permit/License Number** (`permit_number`, `text`, optional): If applicable, enter your driver's license or permit number.
* **Prior Driving Instruction** (`prior_instruction`, `select_one`, optional): If you have prior driving instruction, select "True". Otherwise, select "False".
* **Estimated Hours of Driving Experience** (`hours_experience`, `select_one`, optional): Select your estimated hours of driving experience: 
  - None
  - 1-10 hours
  - 10-50 hours
  - 50-100 hours
  - More than 100 hours
* **Preferred Vehicle Type for Training** (`vehicle_type`, `select_one`, required): Select the type of vehicle you prefer to train with: 
  - Automatic
  - Manual
  - Either
* **Preferred Training Start Date** (`training_date`, `date`, required): Enter your preferred training start date in the format MM/DD/YYYY.
* **Preferred Training Time** (`training_time`, `select_one`, required): Select your preferred training time: 
  - Morning (6 AM - 12 PM)
  - Afternoon (12 PM - 5 PM)
  - Evening (5 PM - 9 PM)
  - Flexible
* **Number of Sessions Needed** (`num_sessions`, `select_one`, required): Select the number of training sessions you need: 
  - 1 Session
  - 2 Sessions
  - 3 Sessions
  - 4 Sessions
  - 5+ Sessions
* **Preferred Session Length** (`session_length`, `select_one`, required): Select your preferred session length: 
  - 30 minutes
  - 1 hour
  - 1.5 hours
  - 2 hours
* **I understand and accept the training rules** (`rules_understand`, `select_one`, required): Select "True" to confirm you understand and accept the training rules.
* **I understand liability and safety requirements** (`liability_consent`, `select_one`, required): Select "I Agree" to confirm you understand liability and safety requirements.
* **Date of Registration** (`registration_date`, `date`, required): This will be auto-populated as the date of submitting this form.

## Tips
* Please make sure to fill out all required fields accurately and completely.
* If you are having trouble filling out a field, feel free to ask our staff for help.
