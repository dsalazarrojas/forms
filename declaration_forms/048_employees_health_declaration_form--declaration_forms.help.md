<thinking>
We are creating a user-facing help guide for the "Employees Health Declaration Form" in the "declaration_forms" category.
This form is designed to collect information from employees on their health status, medical history, and other relevant details. The form should help employees provide accurate and clear information about their health to ensure a safe and healthy work environment. 
To ensure accuracy and completeness, please review this guide carefully and provide feedback if you have any questions or concerns.
</thinking>

# Employees Health Declaration Form - Help Guide
## Purpose
The Employees Health Declaration Form is a mandatory form that requires completion by all employees. It is used to collect information on their health status, medical history, and other relevant details. This information is crucial for the company to provide a safe and healthy work environment.

## How To Complete This Form
1. Fill in your employee name and job title.
2. Select your department from the provided options.
3. Choose your medical history as per the provided options.
4. Enter your medical note if necessary.
5. Enter your email address.
6. Enter your phone number.
7. Select your current employee status from the provided options.
8. Provide the date and time you are currently working or available to work.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Please enter your name as it appears on your identification documents.
* **Job Title** (`job_title`, text, required): Enter your job title or position within the company.
* **Department** (`department`, text, required): Select your department or team you belong to.
* **Medical History** (`medical_history`, select_one, optional): Please select your current medical status. Options: Healthy, Sick.
* **Medical Note** (`medical_note`, note, optional): If you need to provide any additional medical information, enter it in this field.
* **Email** (`email`, email, required): Enter your work email address.
* **Phone** (`phone`, text, optional): Enter your work phone number or any other contact number.
* **Employee Status** (`employee_status`, select_multiple, optional): Select your current employee status. Options: Active, Inactive, Retired.
* **Date** (`date`, date, required): Provide the date you are currently working or available to work.
* **Time** (`time`, time, optional): Provide the time you are available to work.
