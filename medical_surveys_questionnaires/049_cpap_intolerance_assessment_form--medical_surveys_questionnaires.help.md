# CPAP Intolerance Assessment Form - Help Guide
## Purpose
The CPAP Intolerance Assessment Form is a tool designed to help you evaluate your tolerance and compliance with Continuous Positive Airway Pressure (CPAP) therapy. This form aims to gather information about your CPAP usage, comfort, and effectiveness, and identify potential issues that may affect your therapy.

## How To Complete This Form
1. Start by filling out the patient information page (fields 2-5).
2. Answer the CPAP therapy history questions (fields 6-8).
3. Evaluate your CPAP tolerance and comfort (fields 9-12).
4. Assess your CPAP compliance and effectiveness (fields 13-15).
5. Report any issues or concerns you have with your CPAP therapy (fields 16-19).
6. Describe any solutions you have attempted to improve your tolerance (field 20).
7. Finally, provide any additional comments or feedback you have about your CPAP therapy (field 21).

## Field-by-Field Explanation
* **Patient Name** (`cpap_patient_name`, text, required): Enter your full name as it appears on your identification documents.
* **Date of Birth** (`cpap_date_of_birth`, date, required): Enter your date of birth in MM-DD-YYYY format.
* **Medical Record Number** (`cpap_medical_record`, text, optional): Enter your patient ID or Medical Record Number if you have one.
* **Email Address** (`cpap_email`, email, optional): Enter your email address for communication purposes.
* **Phone Number** (`cpap_phone`, phone, optional): Enter your phone number for contact purposes.
* **How Long Have You Used CPAP** (`cpap_therapy_duration`, select_one, required): Select how long you have been using CPAP therapy:
	+ Less than 1 month
	+ 1-3 months
	+ 3-6 months
	+ 6-12 months
	+ 1-2 years
	+ 2-5 years
	+ Over 5 years
* **Type of CPAP Device** (`cpap_device_type`, select_one, required): Select the type of CPAP device you are using:
	+ CPAP
	+ BiPAP
	+ Auto-adjusting CPAP
	+ Other PAP device
	+ Unsure
* **Current Pressure Settings** (`cpap_pressure_settings`, text, optional): Enter your current CPAP pressure settings in cm H2O.
* **Type of Mask Used** (`cpap_mask_type`, select_one, required): Select the type of mask you are using:
	+ Nasal mask
	+ Nasal pillows
	+ Full face mask
	+ Oral mask
	+ Mixed use
	+ Unsure
* **Overall CPAP Tolerance** (`cpap_tolerance`, select_one, required): Rate your overall tolerance to CPAP therapy:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
	+ Cannot tolerate
* **Comfort Issues - Select All That Apply** (`cpap_comfort_issues`, select_multiple, optional): Check any comfort-related problems you experience:
	+ Mask discomfort
	+ Skin irritation
	+ Nose or sinus issues
	+ Dry mouth
	+ Eye irritation
	+ Pressure discomfort
	+ Equipment noise
	+ No comfort issues
* **Side Effects or Adverse Effects** (`cpap_side_effects`, select_multiple, optional): Check any side effects or adverse effects you experience:
	+ Claustrophobia
	+ Anxiety about mask
	+ Sleep disruption
	+ Air leaks
	+ Bloating
	+ Headaches
	+ Ear pressure
	+ No side effects
* **Mask-Related Problems** (`cpap_mask_issues`, text, optional): Describe any mask-related issues you experience.
* **Equipment or Device Problems** (`cpap_equipment_problems`, text, optional): Describe any equipment or device problems you experience.
* **What You Have Tried to Improve Tolerance** (`cpap_solutions_attempted`, select_multiple, optional): Select any solutions you have attempted to improve your tolerance:
	+ Changed mask type
	+ Adjusted pressure settings
	+ Used humidifier
	+ Gradual acclimatization
	+ Consultation with therapist
	+ Medication assistance
	+ Sleep position changes
	+ None yet
* **Additional Comments or Feedback** (`cpap_additional_comments`, text, optional): Share any other issues or feedback you have about your CPAP therapy.

## Tips
* Please answer each question honestly and accurately.
* If you are unsure or do not know the answer to a question, select "Unsure" or "None yet".
* If you have any additional comments or feedback, please use the text fields to provide more information.
* This form is designed to be completed by you, the patient, and should take approximately 10-15 minutes to complete.
