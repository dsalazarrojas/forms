# Babysitting Application - Help Guide

## Purpose

The Babysitting Application is a form to help us understand your background, qualifications, and preferences as a caregiver. This information will help us determine the best fit for you as a babysitter for families.

## How To Complete This Form

- Fill out the form in its entirety, including all required fields.
- Ensure that all fields are accurate and up-to-date.
- Double-check your email and phone number for errors.
- Select all applicable options for your desired employment type, education, and certifications.
- Be detailed in the "availability schedule" field and "list three professional references" fields.
- Provide a compelling reason why families should choose you as their babysitter in the "why hire me" field.

## Field-by-Field Explanation

* **Full Name** (`applicant_name`, `text`, required: true): Please enter your full name as you would like to be referred to in the application process.
* **Email Address** (`contact_email`, `email`, required: true): Enter your valid email address for communication purposes.
* **Phone Number** (`contact_phone`, `text`, required: true): Enter your phone number in the format (XXX) XXX-XXXX.
* **Desired Employment Type** (`preferred_employment_type`, `select_one`, required: true): Select how you'd like to be employed as a babysitter:
	+ Full-time
	+ Part-time
	+ Occasional/As-needed
	+ Summer only
* **Requested Hourly Rate** (`requested_pay_rate`, `number`, required: true): Enter your requested hourly rate in dollars.
* **Highest Education Completed** (`education_status`, `select_one`, required: true): Select your highest level of education:
	+ High School
	+ Associate's Degree
	+ Bachelor's Degree
	+ Master's Degree or higher
* **Years of Professional Childcare Experience** (`childcare_experience_years`, `number`, required: true): Enter the number of years you have professionally worked with children.
* **Age Groups You Are Comfortable With** (`age_group_preferences`, `select_multiple`, required: true): Select all age groups you are comfortable caring for:
	+ Newborns (0-6 months)
	+ Infants (6-18 months)
	+ Toddlers (18 months - 3 years)
	+ Preschool (3-5 years)
	+ School Age (5-12 years)
	+ Teenagers
* **Certifications** (`certifications_check`, `select_multiple`, required: false): If applicable, select any active certifications:
	+ CPR - Infant
	+ CPR - Adult
	+ First Aid
	+ Lifeguard
	+ Special Needs Training
* **Availability Schedule** (`availability_note`, `text`, required: true): List specific days and times you are available to work.
* **Are you willing to undergo a background check?** (`background_check_willingness`, `select_one`, required: true): Select 'True' if you are willing to undergo a background check.
* **List three professional references** (`references_summary`, `text`, required: true): Include the name, phone number, and email of three professional references.
* **Why should a family choose you as their babysitter?** (`why_hire_me`, `text`, required: true): Write a brief but compelling explanation of why families should choose you as their babysitter.
* **Certification** (`signature_acknowledgment`, `select_one`, required: true): Select "I certify" to confirm that all information provided is true and correct.
