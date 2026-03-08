# COVID 19 Client Health Questionnaire - Help Guide
## Purpose
The purpose of this form is to collect health information from clients before providing services at the salon, ensuring a safe and healthy environment for both clients and staff.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in your **Full Name** in the `client_name` field.
2. Enter your **Phone Number** in the `phone_number` field, so we can reach you if we need any further information.
3. Enter your **Email Address** in the `email_address` field, so we can keep you updated on any necessary precautions or changes.
4. Choose the date of your **Appointment Date** from the calendar icon.
5. Select the **Service Being Requested** from the list of options provided.
6. Answer the questions in the **Health Screening** section, selecting all that apply for current symptoms.
7. Indicate if you have had a **Temperature above 100.4F** in the past 24 hours.
8. Confirm if you have been **Exposed to someone with COVID-19** in the past 14 days.
9. Answer if you have been **Tested Positive for COVID-19** in the past 10 days.
10. Select your **Vaccination Status** from the options provided.
11. Answer if you are **Immunocompromised or have underlying health conditions**.
12. If applicable, describe any **Health Conditions** in the text field.
13. Confirm you are **Healthy to Receive Services**.
14. Select **I Understand and Agree to all COVID-19 Safety Protocols**.

## Field-by-Field Explanation

* **Full Name** (`client_name`, text, required): Please enter your full name as it appears on your government-issued ID or passport.
* **Phone Number** (`phone_number`, text, required): Enter your phone number so we can reach you if needed.
* **Email Address** (`email_address`, email, required): Enter your email address so we can keep you updated on any necessary precautions or changes.
* **Appointment Date** (`appointment_date`, date, required): Choose the date of your scheduled appointment from the calendar icon.
* **Service Being Requested** (`service_type`, select_one, required): Select the service you are requesting, such as Hair Cut, Hair Color, etc.
* **Health Screening** (`health_section`, note, required): Please select all the current symptoms you are experiencing from the options provided.
* **Temperature above 100.4F** (`has_fever`, select_one, required): Indicate if you have had a temperature above 100.4F in the past 24 hours.
* **Exposed to someone with COVID-19** (`recent_exposure`, select_one, required): Confirm if you have been exposed to someone with COVID-19 in the past 14 days.
* **Tested Positive for COVID-19** (`positive_test`, select_one, required): Answer if you have tested positive for COVID-19 in the past 10 days.
* **Vaccination Status** (`vaccination_status`, select_one, required): Select your vaccination status from the options provided.
* **Immunocompromised or underlying health conditions** (`immune_conditions`, select_one, required): Answer if you are immunocompromised or have underlying health conditions.
* **Describe health conditions if applicable** (`condition_details`, text, optional): If you have health conditions, describe them in this text field.
* **Confirm you are healthy to receive services** (`wellness_confirmation`, select_one, required): Confirm your health status before receiving services.
* **I understand and agree to all COVID-19 safety protocols** (`agreement`, select_one, required): Select to confirm you understand and agree to the safety protocols.
