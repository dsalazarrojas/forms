# Eye Exam Inquiry Form - Help Guide
## Purpose
This form is designed to collect information from patients for an eye exam inquiry. The purpose of this form is to gather details about the patient's visit, including their personal information, doctor information, and details about previous exams.

## How To Complete This Form
To complete this form, please follow these steps:

1. Please fill out the patient information section with your personal details.
2. Answer the question about whether you have had an eye exam before.
3. If you answered "Yes", please provide the date and time of your last eye exam.
4. If you have had a different doctor for your last eye exam, select "Yes" and enter their name.
5. Select the doctor you will be seeing for your upcoming eye exam.
6. Enter the date and time of your upcoming eye exam.
7. If the doctor who performed your last eye exam is different from your upcoming doctor, select "Yes" and enter their name.

## Field-by-Field Explanation
* **Patient Information** (`patient_info`, `text`, required: false): This is the section where you will enter your personal details, including your name, address, and contact information.
* **Eye Exam Inquiry** (`eye_exam_inquiry`, `select_one`, required: false): Please answer "Yes" if you have had an eye exam before or "No" if it's your first visit.
* **Date Of Visit** (`date_of_visit`, `date`, required: false): If you answered "Yes" to the previous question, enter the date of your last eye exam.
* **Time Of Visit** (`time_of_visit`, `time`, required: false): Enter the time of your last eye exam.
* **Doctor Info** (`doctor_info`, `text`, required: false): This is where you will enter any additional information about your doctor or medical history.
* **Doctor Name** (`doctor_name`, `text`, required: false): Enter the name of the doctor who will be performing your upcoming eye exam.
* **Other Doctor** (`doctor_name_other`, `select_one`, required: false): Select "Yes" if the doctor who performed your last eye exam is different from your upcoming doctor.
* **Date Of Last Exam** (`date_of_last_exam`, `date`, required: false): If you answered "Yes" to the previous question, enter the date of your last eye exam.
* **Time Of Last Exam** (`time_of_last_exam`, `time`, required: false): Enter the time of your last eye exam.
* **Doctor Last Exam** (`doctor_last_exam`, `text`, required: false): Enter the name of the doctor who performed your last eye exam.
* **Other Doctor Last Exam** (`doctor_last_exam_other`, `select_one`, required: false): Select "Yes" if the doctor who performed your last eye exam is different from your upcoming doctor.
