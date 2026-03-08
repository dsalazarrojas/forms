# Skin Care Consultation Form - Help Guide

## Purpose
This form is designed to collect information about your skin type, medical history, and appointment details to provide personalized skin care consultations.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name.
2. Enter your last name.
3. Provide your email address.
4. Enter your phone number.
5. Select your skin type (normal, sensitive, oily, dry, or acne prone).
6. Describe any medical conditions you have (if applicable).
7. List any allergies you have (if applicable).
8. List any medications you are currently taking (if applicable).
9. Add any relevant medical notes.
10. Describe your skin history.
11. Provide your health insurance information (if applicable).
12. Enter the name of your insurance provider (if applicable).
13. Select the date and time of your appointment.
14. Select the status of your appointment (if applicable).

## Field-by-Field Explanation
- **First Name** (`first_name`, `text`, required): Enter your first name.
- **Last Name** (`last_name`, `text`, required): Enter your last name.
- **Email** (`email`, `email`, required): Enter your email address.
- **Phone Number** (`phone_number`, `text`, required): Enter your phone number.
- **Skin Type** (`skin_type`, `select_one`, required): Select your skin type (normal, sensitive, oily, dry, or acne prone).
  * Note: This selection will help us understand your skin concerns.
- **Skin Condition** (`skin_condition`, `text`, optional): Describe any skin conditions you have (if applicable).
  * Note: This field is for providing additional context about your skin.
- **Medical Conditions** (`medical_conditions`, `text`, optional): List any medical conditions you have (if applicable).
  * Note: This field is for providing relevant medical history.
- **Allergies** (`allergies`, `text`, optional): List any allergies you have (if applicable).
  * Note: This field is for listing any allergies or sensitivities.
- **Medications** (`medications`, `text`, optional): List any medications you are currently taking (if applicable).
  * Note: This field is for listing medications that may impact your skin care.
- **Medical Notes** (`medical_notes`, `text`, optional): Add any relevant medical notes.
  * Note: This field is for providing additional medical context.
- **Skin History** (`skin_history`, `text`, optional): Describe your skin history (if applicable).
  * Note: This field is for providing a brief background about your skin.
- **Health Insurance** (`health_insurance`, `text`, optional): Provide your health insurance information (if applicable).
- **Insurance Provider** (`insurance_provider`, `text`, optional): Enter the name of your insurance provider (if applicable).
- **Appointment Date** (`appointment_date`, `date`, optional): Select the date of your appointment.
- **Appointment Time** (`appointment_time`, `time`, optional): Select the time of your appointment.
- **Next Appointment** (`next_appointment`, `date`, optional): Select the date of your next appointment.
- **Appointment Status** (`appointment_status`, `select_one`, optional): Select the status of your appointment (if applicable).
  * Note: This field is for updating your appointment status.
- **Appointment Date**, **Appointment Time** (`appointment_date`, `time`, `appointment_time`, optional): These fields are for scheduling your appointment.
