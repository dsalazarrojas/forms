<thinking>...</thinking>

# Care Provider Application Form - Help Guide
## Purpose
This form is for individuals seeking employment as a care provider with our organization. The form requires information about your personal and professional background, qualifications, and experience. Please complete the form carefully and accurately to ensure a smooth application process.

## How To Complete This Form
1. Start by filling in your full name, date of birth, and social security number. This information is required for background checks and identification purposes.
2. Enter your current address, city, and zip code. This will help us verify your residence.
3. Choose the position you are applying for from the dropdown menu. Select one or more from the options provided.
4. Indicate your availability for work. Choose all the shifts and schedules you are available for, as well as any other special requirements.
5. List your certifications and qualifications, including any specialized training or skills you have.
6. Select the populations you have experience serving. Choose all that apply from the options provided.
7. Confirm your transportation arrangements. Indicate whether you have reliable transportation, access to a vehicle, or need transportation assistance.
8. If you have a driver's license, select 'True', otherwise, select 'False'.
9. Confirm that you consent to background checks and drug screening. You will be asked for more information during the hiring process.
10. Report on your health screening status. This includes any testing or vaccinations you have completed.
11. Provide three professional references with contact information.
12. Enter the name and contact information of an emergency contact.
13. Explain why you are interested in this position.
14. Share your greatest strengths as a caregiver.
15. If applicable, describe any challenging situations you have handled in the past.
16. Confirm that you agree to the terms and conditions of employment.
17. Complete the form with your electronic signature and date of application.

## Field-by-Field Explanation
* **Full Name** (`applicant_full_name`, text, required): Enter your full name, including first, middle, and last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in MM/DD/YYYY format.
* **Social Security Number** (`social_security_number`, text, required): Enter your social security number for background check purposes.
* **Current Address** (`current_address`, text, required): Enter your full street address, including apartment number.
* **City** (`city`, text, required): Enter the city where you reside.
* **State** (`state`, text, required): Enter the state where you reside.
* **ZIP Code** (`zip_code`, text, required): Enter your zip code for address verification.
* **Phone Number** (`phone_number`, text, required): Enter your primary contact number.
* **Email Address** (`email_address`, email, required): Enter your email address.
* **Position Applied For** (`position_applied_for`, select_one, required): Select one or more of the following positions:
	+ Home Health Aide
	+ Personal Care Assistant
	+ Certified Nursing Assistant
	+ Companion Caregiver
	+ Respite Care Provider
	+ Live-in Caregiver
	+ Pediatric Care Provider
	+ Geriatric Care Provider
	+ Disability Care Specialist
* **Availability** (`availability`, select_multiple, required): Select all that apply from the following options:
	+ Weekdays - mornings
	+ Weekdays - afternoons
	+ Weekdays - evenings
	+ Weekends - mornings
	+ Weekends - afternoons
	+ Weekends - evenings
	+ Overnight shifts
	+ Live-in available
	+ Flexible schedule
* **Certifications Held** (`certifications`, select_multiple, required): Select all that apply from the following options:
	+ CNA Certification
	+ HHA Certification
	+ CPR Certified
	+ First Aid Certified
	+ Medication Administration
	+ Dementia Care Certification
	+ Hospice Care Training
	+ Disability Care Training
	+ None
* **Certification Numbers** (`certification_numbers`, text, optional): If applicable, enter your certification numbers and expiration dates.
* **Years of Care Experience** (`years_of_experience`, select_one, required): Select one of the following options:
	+ Less than 1 year
	+ 1-2 years
	+ 3-5 years
	+ 6-10 years
	+ More than 10 years
* **Previous Care Experience** (`previous_employers`, text, required): List your previous care experiences, including employers and dates.
* **Highest Level of Education** (`education_level`, select_one, required): Select one of the following options:
	+ Less than high school
	+ High school diploma or GED
	+ Some college
	+ Associate degree
	+ Bachelor's degree
	+ Graduate degree
* **Specialized Training or Skills** (`specialized_training`, select_multiple, required): Select all that apply from the following options:
	+ Alzheimer's and dementia care
	+ Parkinson's disease care
	+ Diabetes management
	+ Mobility assistance
	+ Tube feeding
	+ Catheter care
	+ Wound care
	+ Medication management
	+ Pediatric care
	+ Mental health support
	+ None
* **Populations Served** (`population_served`, select_multiple, required): Select all that apply from the following options:
	+ Elderly clients
	+ Adults with disabilities
	+ Children with special needs
	+ Post-surgical patients
	+ Chronically ill patients
	+ Terminal illness patients
	+ Mental health clients
	+ Newborns and infants
* **Transportation** (`transportation`, select_one, required): Select one of the following options:
	+ Yes - own vehicle
	+ Yes - access to vehicle
	+ No - rely on public transportation
	+ No - need transportation assistance
* **Driver's License** (`drivers_license`, select_one, required): Select 'True' if you have a valid driver's license, otherwise select 'False'.
* **Background Check Consent** (`background_check_consent`, select_one, required): Select 'True' if you consent to background checks, otherwise select 'False'.
* **Drug Screening Consent** (`drug_screening_consent`, select_one, required): Select 'True' if you consent to drug screening, otherwise select 'False'.
* **Health Screening Status** (`health_screening`, select_one, required): Select one of the following options:
	+ Current - within past year
	+ Will obtain upon hire
	+ Not completed
* **Vaccination Status** (`vaccination_status`, select_one, required): Select one of the following options:
	+ Fully vaccinated
	+ Partially vaccinated
	+ Not vaccinated
	+ Medical exemption
	+ Religious exemption
* **Professional References** (`references`, text, required): List three professional references with contact information.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of your emergency contact.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, text, required): Describe your relationship with your emergency contact.
* **Why Interested in This Position** (`why_interested`, text, required): Explain why you are interested in this position.
* **Greatest Strengths as a Caregiver** (`strengths_as_caregiver`, text, required): Share your greatest strengths as a caregiver.
* **Challenging Situations** (`challenging_situations`, text, optional): Describe any challenging situations you have handled in the past.
* **Terms and Conditions** (`terms_and_conditions`, select_one, required): Select 'True' if you agree to the terms and conditions of employment.
* **Application Date** (`application_date`, date, required): Enter the date of application.
* **Electronic Signature** (`signature`, text, required): Enter your electronic signature with your full name.
