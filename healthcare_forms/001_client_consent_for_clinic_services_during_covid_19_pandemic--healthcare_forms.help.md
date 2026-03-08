<thinking>

To ensure we're on the same page, let's quickly discuss the purpose and requirements of this form.

This form is designed to collect patient information and consent for treatment during the COVID-19 pandemic. It includes essential questions about the patient's health status, travel history, and acknowledgment of the clinic's protocol during this period. The form is divided into two main sections: "Health Screening Questionnaire" and "Consent and Protocol."

Our goal is to provide a clear and concise guide to help patients understand the purpose and completion process of this form. We'll cover the following:

1. Purpose of the form
2. How to complete the form
3. Field-by-field explanation of each section

**Client Consent For Clinic Services During COVID 19 Pandemic - Help Guide**

## Purpose
This form is designed to ensure the safety and well-being of both our patients and staff during the COVID-19 pandemic. It will help us understand your health status, travel history, and your acknowledgment of our clinic's protocol during this time.

## How To Complete This Form
To complete this form, please follow these steps:

1. Read through each question carefully and answer accordingly.
2. Fill in your full name and appointment date.
3. Answer the health screening questions truthfully, including any recent symptoms or travel history.
4. Acknowledge our clinic's protocol during the pandemic.
5. Sign and date the form to confirm your consent.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, text, required): Please enter your full name as it appears on your identification.
* **Appointment Date** (`appointment_date`, date, required): Enter the date of your scheduled appointment.
* **Health Screening Questionnaire** (`section_screening`, note, not required): This section helps us understand your current health status. Please answer the following questions:
	+ **Have you had a fever or chills in the last 14 days?** (`fever_check`, select_one, required): Answer "True" if you have experienced fever or chills in the last 14 days. Answer "False" otherwise.
	+ **Have you experienced any shortness of breath or difficulty breathing?** (`shortness_of_breath`, select_one, required): Answer "True" if you have experienced shortness of breath or difficulty breathing. Answer "False" otherwise.
	+ **Have you had a new or worsening cough in the last 14 days?** (`cough_check`, select_one, required): Answer "True" if you have had a new or worsening cough in the last 14 days. Answer "False" otherwise.
	+ **Have you been in close contact with anyone with a confirmed COVID-19 case?** (`contact_check`, select_one, required): Answer "True" if you have been in close contact with someone with a confirmed COVID-19 case. Answer "False" otherwise.
	+ **Have you traveled outside the country in the last 14 days?** (`travel_check`, select_one, required): Answer "True" if you have traveled outside the country in the last 14 days. Answer "False" otherwise.
* **Clinic Protocol Acknowledgment** (`section_protocol`, note, not required): This section acknowledges our clinic's protocol during the pandemic.
* **I understand that toilet facilities are currently not available** (`toilet_facility_ack`, select_one, required): Answer "True" if you understand that our toilet facilities are not available.
* **I will bring my own refreshments** (`refreshments_ack`, select_one, required): Answer "True" if you will bring your own refreshments during and post-treatment. Answer "I understand" otherwise.
* **I will wait outside to avoid unnecessary contact with surfaces** (`wait_outside_ack`, select_one, required): Answer "True" if you will wait outside to avoid unnecessary contact with surfaces. Answer "I understand" otherwise.
* **I consent to receiving treatment during the pandemic period** (`consent_treatment`, select_one, required): Answer "True" if you consent to receiving treatment during this time. Answer "I consent" otherwise.
* **Signature - Type Full Name** (`digital_signature`, text, required): Please sign your name as it appears on your identification.

Note: Please ensure you answer the questions truthfully and carefully read through each section before signing the form.
