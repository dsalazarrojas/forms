# Employee Benefit Enrollment Form - Help Guide
## Purpose
The Employee Benefit Enrollment Form is a form for employees to enroll or update their benefits with the company. This form helps ensure that the benefits information is up-to-date and accurate.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Enter your Employer Name (required)
2. Enter your Employee ID (required)
3. Select your benefits (Blue Cross Blue, Blue Cross Gold, Blue Cross Silver, Blue Cross Standard, Health Savings Account, Medishare, Prescription Plan, Voluntary Benefits) (required)
4. Select a date for benefits enrollment (required)
5. If applicable, select the status of your benefits enrollment (optional)
6. Select your health insurance provider (Aetna, Blue Cross, Cigna, Humana) (required)
7. Select your life insurance provider (Guardian, MetLife) (optional)
8. Select your disability insurance provider (Liberty Mutual, The Hartford) (optional)
9. Select your health savings account provider (Bank of America, Wells Fargo) (optional)
10. Select your vision insurance provider (Blue Cross, EyeMedicare, MetLife) (optional)
11. Select your dental insurance provider (Blue Cross, Guardian, MetLife) (optional)
12. If applicable, select other benefits provider (Yes, No) (optional)
13. Select your employee status (Active, Inactive) (required)
14. Select a date for benefits enrollment (required)
15. If applicable, select a date for benefits status update (optional)
16. Enter any additional notes (optional)

## Field-by-Field Explanation

* **Employer Name** (`employer_name`, `text`, required): Enter your company name.
* **Employee ID** (`employee_id`, `number`, required): Enter your employee ID.
* **Benefits** (`employee_benefits`, `select_multiple`, required): Select your benefits. Please note that you should only select one benefit from each category.
* **Benefits Enrollment Date** (`benefits_enrollment_date`, `date`, required): Select a date for your benefits enrollment.
* **Enrollment Status** (`benefit_enrollment_status`, `text`, optional): If applicable, select the status of your benefits enrollment.
* **Health Insurance Provider** (`health_insurance_provider`, `select_one`, required): Select your health insurance provider.
* **Life Insurance Provider** (`life_insurance_provider`, `select_one`, optional): Select your life insurance provider.
* **Disability Insurance Provider** (`disability_insurance_provider`, `select_one`, optional): Select your disability insurance provider.
* **Health Savings Account Provider** (`health_savings_account`, `select_one`, optional): Select your health savings account provider.
* **Vision Insurance Provider** (`vision_insurance_provider`, `select_one`, optional): Select your vision insurance provider.
* **Dental Insurance Provider** (`dental_insurance_provider`, `select_one`, optional): Select your dental insurance provider.
* **Other Benefits Provider** (`other_benefits_provider`, `select_one`, optional): If applicable, select other benefits provider.
* **Employee Status** (`employee_status`, `select_one`, required): Select your employee status.
* **Benefits Enrollment Date** (`benefits_enrollment_date`, `date`, required): Select a date for your benefits enrollment.
* **Benefits Status Update Date** (`benefit_status_update_date`, `date`, optional): If applicable, select a date for benefits status update.
* **Notes** (`notes`, `note`, optional): Enter any additional notes.
