<thinking>
We're checking if this form is relevant to your needs and if you've already submitted a similar form. This form is designed to collect information about patients' health status and preferences for COVID-19 vaccination. It's essential to complete this form accurately to ensure you receive the right care and assistance. Please review the form carefully and ensure you haven't already submitted a similar form.

</thinking>

# COVID 19 Vaccine Availability Form - Help Guide
## Purpose
This form is designed to help healthcare providers determine your eligibility for COVID-19 vaccination and provide you with guidance on accessing vaccination services.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your **Patient Full Name** in the corresponding field.
2. Enter your **Date of Birth** in the format MM/DD/YYYY.
3. Provide your **Age** as a number.
4. Enter your **Email Address** in the format [name]@[domain].
5. Provide your **Phone Number** in the format XXX-XXX-XXXX.
6. If you live in a congregate setting, select **True** for **Live in congregate setting** and enter the type of facility in the text field below.
7. Select your **State of Residence** from the list.
8. Enter your **Zip Code** as a 5-digit number.
9. If you're a healthcare worker, select **True** for **Are you a healthcare worker**.
10. If you're an essential worker, select **True** and choose the type of essential work from the list.
11. Select **True** or **False** for **Are you 65 years or older**, **Do you have underlying health conditions**, **Currently experiencing COVID-19 symptoms**, and **Recently tested positive for COVID-19**.
12. If you've tested positive, enter the date of the positive test in the format MM/DD/YYYY.
13. Select if you've been **Previously vaccinated for COVID-19** and choose the type of vaccine you received.
14. Select your preferred **Vaccination Provider** from the list.
15. If you need transportation assistance, select **True**.
16. Select your preferred **Language** from the list.
17. Your **Eligibility Status** will be determined by your healthcare provider based on your responses.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, text, required): Enter your full name as it appears on your government-issued ID.
* **Date of Birth** (`patient_dob`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Age** (`patient_age`, number, required): Enter your age as a number.
* **Email Address** (`email`, email, required): Enter your email address in the format [name]@[domain].
* **Phone Number** (`phone`, text, required): Enter your phone number in the format XXX-XXX-XXXX.
* **State of Residence** (`state_residence`, text, required): Select your state of residence from the list.
* **Zip Code** (`zip_code`, text, required): Enter your 5-digit zip code.
* **State of Residence** (`state_residence`, text, required): Select your state of residence from the list.
* **Live in congregate setting** (`live_in_facility`, select_one, required): If you live in a congregate setting, select **True** and choose the type of facility in the text field below.
* **Are you a healthcare worker** (`healthcare_worker`, select_one, required): Select **True** if you work in healthcare.
* **Are you an essential worker** (`essential_worker`, select_one, required): Select **True** and choose the type of essential work from the list.
* **If yes, type of essential worker** (`essential_worker_type`, text, required): If you selected **True**, choose the type of essential work.
* **Are you 65 years or older** (`age_65_plus`, select_one, required): Select **True** if you're 65 or older.
* **Do you have underlying health conditions** (`underlying_conditions`, select_one, required): Select **True** if you have underlying health conditions.
* **If yes, specify conditions** (`conditions_list`, text, required): If you selected **True**, specify your conditions.
* **Live in congregate setting** (`live_in_facility`, select_one, required): If you live in a congregate setting, select **True** and choose the type of facility.
* **If yes, type of facility** (`facility_type`, text, required): If you selected **True**, choose the type of facility.
* **Frontline worker during pandemic** (`frontline_worker`, select_one, required): Select **True** if you're a frontline worker.
* **Eligibility Screening --** (`eligibility_section`, note, required): This is a note section for your eligibility screening.
* **Currently experiencing COVID-19 symptoms** (`current_symptoms`, select_one, required): Select **True** if you're experiencing symptoms.
* **Recently tested positive for COVID-19** (`positive_test`, select_one, required): Select **True** if you've tested positive.
* **If yes, date of positive test** (`positive_test_date`, date, required): If you selected **True**, enter the date of the positive test in the format MM/DD/YYYY.
* **Previously vaccinated for COVID-19** (`prior_vaccine`, select_one, required): Select **True** if you've been vaccinated.
* **If yes, vaccine type** (`prior_vaccine_type`, text, required): If you selected **True**, choose the type of vaccine.
* **Vaccine Access --** (`vaccine_access_section`, note, required): This is a note section for vaccine access.
* **Preferred Vaccination Provider** (`preferred_provider`, select_one, required): Select your preferred provider from the list.
* **Need transportation assistance** (`transportation_need`, select_one, required): Select **True** if you need transportation assistance.
* **Language Preference** (`language_preference`, select_one, required): Select your preferred language.
* **Eligibility Status** (`eligibility_status`, select_one, required): This will be determined by your healthcare provider based on your responses.
