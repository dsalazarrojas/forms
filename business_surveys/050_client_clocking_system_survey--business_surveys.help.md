<thinking>
This form is designed to collect feedback from clients about their experience with our clocking system. The form is divided into several sections, including an introduction, system usability, features, and overall value of the system. This feedback is crucial to help us identify areas of improvement and provide better services to our clients.

To avoid duplication, we encourage clients who have already submitted their feedback to not do so again. This form will help us gather information from clients who have not previously shared their thoughts about our system.

To ensure the data collected is accurate and reliable, please fill out the form completely and honestly. We appreciate your time and feedback.

Before filling out the form, please make sure you are logged in or provide your email address if you are not logged in, so we can follow up with you on your feedback.

</thinking>

# Client Clocking System Survey - Help Guide
## Purpose

This form is designed to collect feedback from clients about their experience with our clocking system. We use this feedback to identify areas of improvement and provide better services to our clients.

## How To Complete This Form

1. Please fill out the form completely and honestly.
2. If you have already submitted your feedback, please do not fill out the form again.
3. Make sure you are logged in or provide your email address if you are not logged in, so we can follow up with you on your feedback.
4. If you have any comments or suggestions, please provide them in the "Any other comments or suggestions" field.

## Field-by-Field Explanation

* **-- Clocking System Feedback Survey --** (`survey_intro`, note, required: false): This is an introduction to the survey.
* **Company Name** (`client_company_name`, text, required: true): Please enter your company name.
* **Which clocking method do you primarily use?** (`clocking_method`, select_one, required: true):
	+ Biometric (Fingerprint/Face)
	+ RFID / ID Badge
	+ Mobile App (GPS)
	+ Web Dashboard
	+ Desktop App
* **How easy is it to clock in and out?** (`ease_of_use_rating`, number, required: true): Rate your experience from 1 (Very Difficult) to 5 (Very Easy).
* **How often do you experience system downtime or errors?** (`system_reliability`, select_one, required: true):
	+ Never
	+ Rarely
	+ Monthly
	+ Weekly
	+ Frequently
* **If using the mobile app, rate your experience** (`mobile_app_experience`, select_one, required: false):
	+ Excellent
	+ Good
	+ Fair
	+ Poor
	+ N/A
* **Satisfaction with Technical Support (if used)** (`tech_support_satisfaction`, select_one, required: false):
	+ Very Satisfied
	+ Satisfied
	+ Neutral
	+ Dissatisfied
	+ Very Dissatisfied
	+ N/A
* **How easy is it to review your logs or generate reports?** (`report_generation_ease`, select_one, required: true):
	+ Very Easy
	+ Easy
	+ Moderate
	+ Difficult
* **Do you feel the system accurately records your hours?** (`accuracy_perception`, select_one, required: true):
	+ Yes, always
	+ Mostly accurate
	+ Occasional discrepancies
	+ Inaccurate
* **What features are missing from our system?** (`missing_features`, text, required: false): Please list any features you feel are missing from our system.
* **Overall value of the system to your organization** (`overall_value_rating`, number, required: true): Rate your experience from 1 (Poor) to 10 (Excellent).
* **Any other comments or suggestions** (`additional_feedback`, text, required: false): Please provide any other comments or suggestions you may have.
* **Your Role (e.g. Employee, Manager, Admin)** (`survey_respondent_role`, text, required: true): Please select your role.
* **Email Address (Optional)** (`respondent_email`, email, required: false): This is for follow-up on your feedback.
* **Date of Response** (`survey_date`, date, required: false): This will be automatically populated.
