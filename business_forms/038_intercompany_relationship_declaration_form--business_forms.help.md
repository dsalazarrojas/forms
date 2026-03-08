<thinking>...</thinking>

To clarify the purpose and usage of this form, I'll review the provided YAML fields to ensure I understand what's being asked. The form's title suggests a relationship declaration between two companies, but it appears that this form is more focused on individual employee declarations within a company. I'll base my explanation on this understanding.

The form "intercompany_relationship_declaration_form" seems to be used for declaring relationships between employees within the company, specifically about whether an employee works with or declares a relationship with another company.

The form fields suggest that the user is to confirm their status with two companies, select their employee, job title, and reporting manager status, and add any additional declaration details if necessary.

</thinking>

# intercompany_relationship_declaration_form - Help Guide
## Purpose
This form is used for employee declarations about relationships with other companies within the company.

## How To Complete This Form
To complete this form, please follow the steps below.

## Field-by-Field Explanation
* **Company A** (`company_a`, select_one, required: false): Select 'Yes' if you have a relationship with Company A, or 'No' if you don't.
* **Company B** (`company_b`, select_one, required: false): Select 'Yes' if you have a relationship with Company B, or 'No' if you don't.
* **Declaration Date** (`declaration_date`, date, required: false): Enter the date you declare this relationship.
* **Declaration Time** (`declaration_time`, time, required: false): Enter the time you declare this relationship.
* **Employee** (`employee`, select_one, required: false): Select 'Yes' if you are an employee of the company, or 'No' if you are not.
* **Job Title** (`job_title`, select_multiple, required: false): Select any job titles you hold within the company.
* **Reporting Manager** (`reporting_manager`, select_one, required: false): Select 'Yes' if you report to this manager, or 'No' if you don't.
* **Declaration Details** (`declaration_details`, note, required: false): Add any additional details about your relationship declarations.

## Tips
When filling out this form, please select 'Yes' or 'No' for each field as accurately as possible. Add any relevant details in the 'Declaration Details' field if your declaration status is not clear or needs further explanation.
