# healthcare patient feedback request form - Help Guide
## Purpose
This form is used to collect feedback from patients about their doctor's performance and their overall experience during their visit. The feedback is used to improve the quality of care provided by our healthcare staff. Please note that only completed forms will be taken into consideration for our internal processes. If you have already provided feedback, there is no need to fill out this form again.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form with your information and feedback.
2. Make sure to answer all required fields.
3. Review your form before submitting it.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Please enter your full name as it appears on your identification documents.
* **Date Of Visit** (`date_of_visit`, date, required): Enter the date you visited the doctor.
* **Time Of Visit** (`time_of_visit`, time, required): Enter the time you visited the doctor.
* **How was the doctor?** (`feedback_question_1`, select_multiple, required): Rate your overall satisfaction with the doctor's performance. Choose from Very Good, Somewhat Good, Neutral, Somewhat Bad, or Very Bad.
* **How would you rate the doctor?** (`feedback_question_2`, select_one, required): Rate your satisfaction with the doctor on a scale of 1 to 5.
* **Rating Scale** (`rating_scale`, number, required): Enter a numerical value to rate your overall satisfaction with the doctor's performance.
* **Additional Feedback** (`additional_feedback`, text, optional): If you have any additional comments or suggestions, please enter them here.
* **Contact Number** (`contact_number`, text, required): Enter your contact number so we can reach out to you for follow-up questions.
* **Email** (`email`, email, optional): Enter your email address so we can contact you via email for follow-up questions.
* **Do you consent to our collection of your feedback?** (`consent`, select_one, required): Please indicate whether you consent to our collection of your feedback.
* **Hospital Visit Details** (`hospital_visit_details`, note, optional): If you have any additional information about your visit that you would like to share, please enter it here.
* **Date Of Birth** (`date_of_birth`, date, required): Enter your date of birth.
* **Gender** (`gender`, select_one, required): Choose your gender (Male, Female, or Other).
* **Age** (`patient_age`, number, required): Enter your age.
* **Weight** (`patient_weight`, number, optional): Enter your weight (if applicable).
* **Blood Pressure** (`blood_pressure`, number, optional): Enter your blood pressure (if applicable).
* **Heart Rate** (`heart_rate`, number, optional): Enter your heart rate (if applicable).
* **Meds** (`medication_list`, select_multiple, optional): List any medications you are currently taking (if applicable).
* **Medical History** (`medical_history`, note, optional): If you have any medical history that is relevant to your visit, please enter it here.
* **Visit Duration** (`visit_duration`, number, optional): Enter the duration of your visit (if applicable).
* **Doctor Name** (`doctor_name`, text, optional): Enter the name of the doctor who attended to you.
* **Medical Department** (`medical_department`, text, optional): Enter the department you visited (if applicable).
* **Condition** (`patient_condition`, text, optional): Enter any medical conditions you are currently experiencing (if applicable).
* **Address** (`patient_address`, text, optional): Enter your address (if applicable).
* **Doctor Signature** (`doctor_signature`, text, optional): Enter the doctor's signature (if applicable).
