# Student Loan Survey - Help Guide
## Purpose
The Student Loan Survey is a form designed to gather feedback and data from students about their experiences with student loans. It aims to assess the satisfaction and effectiveness of student loan programs, helping administrators or researchers to make informed decisions for improvement.

## How To Complete This Form
To complete the form, follow these steps:

1. Answer "Yes" or "No" to questions about whether you have taken out federal loans, private loans, or have a loan servicer.
2. Choose "Yes" or "No" to indicate your level of satisfaction with your loan experience.
3. Select "Satisfied" or "Dissatisfied" to rate your satisfaction level with your loan experience.
4. If required, provide additional comments about your experience with student loans.
5. Enter the date of your last loan disbursal (if applicable).
6. Enter the time of your last loan disbursal (if applicable).
7. Enter the interest rate of your loan (if applicable).
8. Enter your monthly loan payment amount (if applicable).
9. Enter the total outstanding balance of your loan (if applicable).
10. Enter the total amount of interest you've paid (if applicable).
11. Enter the total amount you've paid towards your loan (if applicable).
12. Select "Yes" or "No" to indicate if you have a loan originator.
13. Select "Yes" or "No" to indicate if you have a loan servicer.
14. Choose "Satisfied" or "Dissatisfied" to rate your satisfaction level with your loan experience (similar to question 3).
15. Select "Satisfied" or "Dissatisfied" from the multiple options to rate your overall satisfaction level.

## Field-by-Field Explanation

* **student_loan_survey** (`student_loan_survey`, text, optional): This field is the title of the survey.
* **questions** (`questions`, select_multiple, optional): Choose "Yes" or "No" to indicate the types of loans you've taken out. 
* **federal_loan** (`federal_loan`, select_one, optional): Select "Yes" or "No" to indicate if you have taken out federal loans.
* **private_loan** (`private_loan`, select_multiple, optional): Select "Yes" or "No" to indicate if you have taken out private loans.
* **satisfaction_level** (`satisfaction_level`, select_one, optional): Choose "Satisfied" or "Dissatisfied" to rate your overall satisfaction level with your loan experience.
* **satisfaction_level** (`satisfaction_level`, select_multiple, optional): This field is similar to the previous field, but with multiple options. 
* **date_of_last_disbursal** (`date_of_last_disbursal`, date, optional): Enter the date of your last loan disbursal (if applicable).
* **time_of_last_disbursal** (`time_of_last_disbursal`, time, optional): Enter the time of your last loan disbursal (if applicable).
* **student_loan_interest_rate** (`student_loan_interest_rate`, number, optional): Enter the interest rate of your loan (if applicable).
* **monthly_payment** (`monthly_payment`, number, optional): Enter your monthly loan payment amount (if applicable).
* **total_outstanding_balance** (`total_outstanding_balance`, number, optional): Enter the total outstanding balance of your loan (if applicable).
* **total_interest_paid** (`total_interest_paid`, number, optional): Enter the total amount of interest you've paid (if applicable).
* **total_amount_paid** (`total_amount_paid`, number, optional): Enter the total amount you've paid towards your loan (if applicable).
* **loan_originator** (`loan_originator`, select_one, optional): Select "Yes" or "No" to indicate if you have a loan originator.
* **loan_servicer** (`loan_servicer`, select_one, optional): Select "Yes" or "No" to indicate if you have a loan servicer.
* **student_loan_survey_satisfaction** (`student_loan_survey_satisfaction`, select_one, optional): Choose "Satisfied" or "Dissatisfied" to rate your satisfaction level with your loan experience.
* **student_loan_survey_satisfaction_level** (`student_loan_survey_satisfaction_level`, select_multiple, optional): This field is similar to the previous field, but with multiple options.
* **student_loan_survey_comments** (`student_loan_survey_comments`, note, optional): If required, provide additional comments about your experience with student loans.
* **student_loan_survey_comments** (`student_loan_survey_comments`, note, optional): Another field for additional comments (this field is identical to the previous one).
