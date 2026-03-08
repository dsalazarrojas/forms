<thinking>
  This form is designed to collect information from employees who have tested positive for COVID-19, including their personal details, test results, symptoms, and medical status. This form is intended to help track the spread of the virus and provide essential information for the management and prevention of the disease. To ensure data accuracy, please fill in the form completely and accurately. If you have already submitted a previous form, please do not resubmit. If you're unsure about any field or section, refer to the field-by-field explanation below.
</thinking>

# COVID 19 Positive Diagnosis Form - Help Guide
## Purpose
This form is used to collect information from employees who have tested positive for COVID-19. It is essential for tracking and managing the spread of the virus and ensuring the well-being of other employees.

## How To Complete This Form
To complete this form, please follow the steps below:

1.  Fill in the required fields accurately and completely.
2.  Ensure all sections and fields are filled before submitting the form.
3.  Review your answers carefully before submission to avoid errors.

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, `text`, required): Please enter your name as it appears on your official documents.
* **Employee ID** (`employee_id`, `text`, required): Please enter your employee ID number.
* **Date of Birth** (`date_of_birth`, `date`, required): Please enter your date of birth in the format `MM/DD/YYYY`.
* **Department** (`department`, `text`, required): Please enter your department name.
* **Job Position** (`position`, `text`, required): Please enter your job title or position.
* **Email Address** (`email`, `email`, required): Please enter your email address as it appears in the company's system.
* **Phone Number** (`phone`, `text`, required): Please enter your work phone number.
* **Date of Positive Test** (`test_date`, `date`, required): Please enter the date you tested positive for COVID-19.
* **Type of Test** (`test_type`, `select_one`, required): Please select the type of test you underwent from the options provided (RT-PCR, Rapid Antigen, Antibody Test, or Other).
* **Testing Location or Provider** (`test_location`, `text`, optional): Please enter the location where you underwent the test or the name of the healthcare provider who administered the test.
* **Symptoms Experienced** (`symptoms`, `select_multiple`, optional): Please select any symptoms you experienced from the options provided (Fever, Cough, Shortness of breath, Sore throat, Loss of taste or smell, Body aches, Fatigue, Asymptomatic, or Other).
* **Severity of Symptoms** (`symptom_severity`, `select_one`, required): Please select the severity of your symptoms from the options provided (Asymptomatic, Mild, Moderate, Severe).
* **Last Date at Work** (`last_work_date`, `date`, required): Please enter the date you last worked before testing positive for COVID-19.
* **Work Environment** (`work_environment`, `select_one`, required): Please select the work environment you are in from the options provided (Office, Healthcare facility, Field work, Remote, or Other).
* **Number of Close Contacts at Work** (`close_contacts_work`, `number`, optional): Please enter the number of close contacts you had at work.
* **Hospitalization Required** (`hospitalization`, `select_one`, required): Please select whether you required hospitalization from the options provided (False, True).
* **Hospitalization Dates** (`hospitalization_dates`, `text`, optional): Please enter any dates you were hospitalized.
* **Current Recovery Status** (`recovery_status`, `select_one`, required): Please select your current recovery status from the options provided (Actively ill, Recovering, Recovered, Complications).
* **Date of Report** (`report_date`, `date`, required): Please enter the date you are submitting this report.
* **Person Submitting Report** (`reporting_person`, `text`, required): Please enter your name as the person submitting this report.
