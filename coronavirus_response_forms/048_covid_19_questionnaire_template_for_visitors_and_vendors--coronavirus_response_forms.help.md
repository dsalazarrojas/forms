<thinking>

**Form Purpose and Validation Checks**
This form is designed to collect information from visitors and vendors regarding their COVID-19 status and adherence to safety guidelines. To ensure the accuracy and effectiveness of the information collected, we will validate the form as follows:
- Only visitors and vendors who have not been previously screened for COVID-19 will be allowed to proceed with their visit.
- If a visitor or vendor has been in close contact with a COVID-19 positive person, has traveled to a high-risk area, or has tested positive for COVID-19 in the past 14 days, they will not be allowed to enter the facility.
- Visitors and vendors must confirm that their answers are truthful and accurate.
- Visitors and vendors must agree to follow all facility safety guidelines during their visit.
- Visitors and vendors must agree to wear a mask if required.

</thinking>

# COVID 19 Questionnaire Template For Visitors And Vendors - Help Guide
## Purpose
This form is used to collect information from visitors and vendors about their COVID-19 status and adherence to safety guidelines before entering the facility.

## How To Complete This Form
To complete this form, follow these steps:
1. Select "Client or customer" if you are visiting the facility as a client or customer.
2. Fill in your full name.
3. Enter your email address.
4. Enter your phone number.
5. Select whether you have visited the facility before. 
6. Choose your type of visit.
7. Select the date of your visit.
8. Answer the health screening questions truthfully.
9. Confirm that you have not been in close contact with a COVID-19 positive person, have not traveled to a high-risk area, and have not tested positive for COVID-19 in the past 14 days.
10. Confirm that your answers are accurate and truthful.
11. Agree to follow all facility safety guidelines during your visit.
12. Agree to wear a mask if required.
13. Select the date of your screening.

## Field-by-Field Explanation
* **Full Name** (`visitor_name`, text, required): Enter your full name as it appears on your official identification.
* **Email Address** (`visitor_email`, email, required): Enter your email address where you can be reached.
* **Phone Number** (`visitor_phone`, text, required): Enter your phone number where we can reach you.
* **Type of Visit** (`visitor_type`, select_one, required): Select your reason for visiting the facility. Options are:
	+ Vendor or supplier
	+ Client or customer
	+ Service provider
	+ Delivery
	+ Contractor
	+ Guest
	+ Other
* **Date of Visit** (`visit_date`, date, required): Select the date of your visit.
* **Do you have a fever or elevated temperature?** (`fever`, select_one, required):
	+ False
	+ True
	+ Unsure
* **Do you have a cough or shortness of breath?** (`cough`, select_one, required):
	+ False
	+ True
* **Do you have a sore throat or body aches?** (`sore_throat`, select_one, required):
	+ False
	+ True
* **Have you lost your sense of taste or smell?** (`taste_smell`, select_one, required):
	+ False
	+ True
* **Have you tested positive for COVID-19 in the past 14 days?** (`covid_diagnosis`, select_one, required):
	+ False
	+ True
	+ Unsure
* **Have you been in close contact with a COVID-19 positive person?** (`close_contact`, select_one, required):
	+ False
	+ True
	+ Unsure
* **Have you traveled to a high-risk COVID-19 area recently?** (`travel_exposure`, select_one, required):
	+ False
	+ True
* **I confirm that my answers are truthful and accurate** (`accurate_answers`, select_one, required):
	+ True
	+ False
* **I agree to follow all facility safety guidelines during my visit** (`follow_safety`, select_one, required):
	+ True
	+ False
* **I agree to wear a mask if required** (`mask_compliance`, select_one, required):
	+ True
	+ False
	+ As needed
* **Screening Date** (`screening_date`, date, required): Select the date you completed this form.
