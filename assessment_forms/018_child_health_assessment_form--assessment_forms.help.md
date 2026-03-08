# Child Health Assessment Form - Help Guide

## Purpose

The Child Health Assessment Form is designed to collect information about a child's health status, medical history, and lifestyle. This form helps healthcare providers make informed decisions about the child's care and ensures that the child receives the most effective medical treatment.

## How To Complete This Form

To complete this form, please follow these steps:

1.  Fill out the patient information section with the child's full name, date of birth, and gender.
2.  In the medical history section, select all previous illnesses or conditions that apply to the child.
3.  Answer the question about recent surgeries in the past year.
4.  Indicate if immunizations are up to date according to the CDC schedule.
5.  In the current health concerns section, describe any current health concerns or issues the child may be experiencing.
6.  Choose the current pain level of the child, using the provided scale.
7.  In the lifestyle and wellness section, provide the average hours of sleep per night for the child and their current appetite level.
8.  Finally, fill out the physician details section with the child's primary doctor's name and contact number.

## Field-by-Field Explanation

*   **Child Full Name** (`child_name`, text, required): Fill out the child's full name, including their first and last name.
*   **Date of Birth** (`child_dob`, date, required): Enter the child's date of birth to verify their age.
*   **Gender** (`child_gender`, select_one, optional): Select the child's gender from the provided options.
*   **Previous Illnesses or Conditions** (`previous_illnesses`, select_multiple, optional): Select all previous illnesses or conditions that apply to the child.
*   **Any surgeries in the last year** (`recent_surgeries`, select_one, required): Indicate if the child has had any surgeries in the past year.
*   **Immunizations up to date** (`immunizations_current`, select_one, required): Select if immunizations are up to date according to the CDC schedule.
*   **Current Health Concerns** (`health_concerns_desc`, text, optional): Describe any current health concerns or issues the child may be experiencing.
*   **Current Pain Level** (`pain_level`, select_one, required): Choose the current pain level of the child using the provided scale.
*   **Hours of sleep per night** (`sleep_hours`, number, required): Provide the average hours of sleep per night for the child.
*   **Appetite Level** (`appetite_level`, select_one, required): Select the child's current appetite level compared to normal.
*   **Pediatrician Name** (`pediatrician_name`, text, required): Enter the child's primary doctor's name.
*   **Doctor Phone Number** (`doctor_phone`, text, required): Enter the child's primary doctor's contact number.
*   **Today Date** (`today_date`, date, required): Fill out the current date.

## Tips

*   Please provide accurate and truthful answers to ensure that the healthcare provider has the most helpful information to make informed decisions about the child's care.
*   If you are unsure about any question or section, please ask for clarification.
*   Please note that this form is designed to collect information about the child's health status and medical history. If you have any questions or concerns, please do not hesitate to ask.
