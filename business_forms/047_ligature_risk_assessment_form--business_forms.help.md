# Ligature Risk Assessment Form - Help Guide
## Purpose
This form is designed to assess the ligature risk in patients, helping medical professionals to evaluate and manage patient safety.

## How To Complete This Form
- Fill in the patient's name in the "Patient Name" field.
- Enter the patient's ID in the "Patient ID" field.
- Provide the date and time of the assessment in the "Date of Assessment" and "Time of Assessment" fields.
- List any risk factors present in the "Risk Factors" field.
- Select the appropriate ligature entanglement and displacement risk factors from the respective drop-down menus.
- Choose the risk level from the drop-down menu.
- List any recommended actions for mitigation in the "Recommended Actions" field.
- Select the review status and provide any comments from the "Reviewer Comments" field.
- Optionally, provide a description of the risk level and the date and time of review.
- Finally, enter the reviewer's name, title, email, phone, and any additional comments if required.

## Field-by-Field Explanation
### Patient Name (1)
* **Patient Name (1)** (`patient_name`, text, required): Enter the patient's name accurately and thoroughly.
### Patient ID (2)
* **Patient ID (2)** (`patient_id`, number, required): Enter the patient's ID number.
### Date of Assessment (3)
* **Date of Assessment (3)** (`date_of_assessment`, date, required): Enter the date of the assessment in the format MM/DD/YY.
### Time of Assessment (4)
* **Time of Assessment (4)** (`time_of_assessment`, time, required): Enter the time of the assessment in 24-hour format.
### Risk Factors (5)
* **Risk Factors (5)** (`risk_factors`, text, required): List any risk factors present in the patient.
### Ligature Entanglement (6)
* **Ligature Entanglement (6)** (`risk_factor_1`, select_one, required): Select the appropriate ligature entanglement risk factor from the drop-down menu.
### Ligature Displacement (7)
* **Ligature Displacement (7)** (`risk_factor_2`, select_multiple, required): Select the appropriate ligature displacement risk factors from the drop-down menu.
### Risk Level (8)
* **Risk Level (8)** (`risk_level`, select_one, required): Choose the risk level from the drop-down menu.
### Recommended Actions (9)
* **Recommended Actions (9)** (`recommended_actions`, text, required): List any recommended actions for mitigation.
### Review Status (10)
* **Review Status (10)** (`review_status`, select_one, required): Select the review status from the drop-down menu.
### Reviewer Comments (11)
* **Reviewer Comments (11)** (`reviewer_comments`, text, required): Provide any comments from the reviewer.
### Risk Level Description (12)
* **Risk Level Description (12)** (`risk_level_description`, text, optional): Optionally, provide a description of the risk level.
### Date of Review (13)
* **Date of Review (13)** (`date_of_review`, date, optional): Optionally, enter the date of the review in the format MM/DD/YY.
### Time of Review (14)
* **Time of Review (14)** (`time_of_review`, time, optional): Optionally, enter the time of review in 24-hour format.
### Reviewer Name (15)
* **Reviewer Name (15)** (`reviewer_name`, text, required): Enter the reviewer's name.
### Risk Factor 3 (16)
* **Risk Factor 3 (16)** (`risk_factor_3`, select_multiple, optional): Optionally, select the additional ligature displacement risk factors from the drop-down menu.
### Risk Factor 4 (17)
* **Risk Factor 4 (17)** (`risk_factor_4`, select_one, optional): Optionally, select the additional ligature entanglement risk factor from the drop-down menu.
### Risk Factor 5 (18)
* **Risk Factor 5 (18)** (`risk_factor_5`, select_multiple, optional): Optionally, select the additional ligature displacement risk factor from the drop-down menu.
### Reviewer Email (19)
* **Reviewer Email (19)** (`reviewer_email`, email, optional): Optionally, enter the reviewer's email.
### Reviewer Phone (20)
* **Reviewer Phone (20)** (`reviewer_phone`, text, optional): Optionally, enter the reviewer's phone number.
### Reviewer Signature (21)
* **Reviewer Signature (21)** (`reviewer_signature`, note, optional): Optionally, provide the reviewer's signature.
### Reviewer Title (22)
* **Reviewer Title (22)** (`reviewer_title`, text, optional): Optionally, enter the reviewer's title.
### Reviewer Date (23)
* **Reviewer Date (23)** (`reviewer_date`, date, optional): Optionally, enter the date of the review.
### Reviewer Time (24)
* **Reviewer Time (24)** (`reviewer_time`, time, optional): Optionally, enter the time of review.
### Reviewer Comments 2 (25)
* **Reviewer Comments 2 (25)** (`reviewer_comments_2`, text, optional): Optionally, provide additional comments from the reviewer.

## Tips
- Please ensure that you complete the form carefully and thoroughly.
- Do not skip any required fields.
- Provide accurate and truthful information.
- The reviewer's comments and recommendations are essential in making informed decisions.
