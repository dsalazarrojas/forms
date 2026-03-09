# Patient Reactivation Survey - Help Guide

## Purpose
The Patient Reactivation Survey is designed to collect feedback from patients about their experience at our clinic. This survey helps us understand what we're doing well and where we can improve, ultimately enhancing patient care and satisfaction.

## How To Complete This Form
To complete this form, follow these steps:

1. Please answer each section thoroughly and honestly.
2. For the "Retention Issues" section, select all applicable issues that you've experienced during your visit.
3. In the "Re-Engagement Outreach" section, provide a brief description of your experience with our clinic.
4. For the "Clinic Feedback" section, choose one of the options that best describes your overall satisfaction with our clinic.
5. Finally, rate your experience with the "Patient Feedback" section by selecting a number between 1 and 5, where 1 is "Very Dissatisfied" and 5 is "Very Satisfied".

## Field-by-Field Explanation
* **Patient Feedback** (`patient_reactivation_survey`, note, required: false): This section is a free-text area where you can provide any comments or feedback about your experience at our clinic. Please be as detailed as possible.
* **Retention Issues** (`retention_issues`, select_multiple, required: false): This section allows you to select any issues you've experienced with retaining your appointment or visit. Please choose all issues that apply.
* **Re-Engagement Outreach** (`re_engagement_outreach`, text, required: false): In this section, please provide a brief description of how you've been contacted and re-engaged by our clinic after your visit.
* **Clinic Feedback** (`clinic_feedback`, select_one, required: false): Choose one of the options that best describes your overall satisfaction with our clinic.
* **Patient Feedback** (`patient_feedback`, number, required: false): Rate your overall satisfaction with our clinic, using the following scale: 1 (Very Dissatisfied) to 5 (Very Satisfied).
