<thinking>Before creating this help guide, I checked the provided YAML fields and ensured that the form is for an "Conflict Of Interest Policy Acknowledgement Form". This form is likely used to gather information about an employee's understanding and agreement with the company's conflict of interest policy. The form collects various details such as employee identification, department, and job title, as well as their acknowledgement of the policy, understanding of its requirements, and agreement to comply with it. The form also includes sections for training and annual disclosures. I will create a clear and concise help guide based on this information.</thinking>

# Conflict Of Interest Policy Acknowledgement Form - Help Guide

## Purpose
The Conflict Of Interest Policy Acknowledgement Form is a document used to gather information about an employee's understanding and agreement with the company's conflict of interest policy. This form is used to ensure that employees are aware of and committed to following the policy's requirements.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the employee information section, which includes the employee's name, ID number, email address, department, and job title.
2. Select the type of acknowledgement you are making (e.g., New Employee Onboarding, Annual Policy Review, etc.).
3. Provide the date you received the conflict of interest policy.
4. Confirm that you have read and understand the policy.
5. Indicate if you have received training on the policy.
6. If you have received training, provide the date.
7. Agree to comply with the policy and disclose potential conflicts.
8. Confirm your agreement to submit annual disclosures and report policy violations.
9. Acknowledge that you understand the consequences of violating the policy.
10. If you have any questions about the policy, provide them in the "Questions" section.
11. Add any additional comments or feedback about the policy in the "Additional Comments" section.
12. Sign and date the form to confirm your agreement to the policy.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter your full legal name as it appears on your official documents.
* **Employee ID Number** (`employee_id`, text, required): Enter your employee identification number.
* **Email Address** (`email`, email, required): Enter your work email address.
* **Department** (`department`, text, required): Enter the name of your department or division.
* **Position Title** (`position_title`, text, required): Enter your job title.
* **Manager Name** (`manager_name`, text, required): Enter the name of your direct supervisor.
* **Hire Date** (`hire_date`, date, required): Enter the date you started working with the company.
* **Type of Acknowledgement** (`acknowledgement_type`, select_one, required): Select the reason for this acknowledgement (e.g., New Employee Onboarding, Annual Policy Review, etc.).
* **Date Policy Was Received** (`policy_received_date`, date, required): Enter the date you received the conflict of interest policy.
* **Policy Document Version** (`policy_document_version`, text, required): Enter the version or revision number of the policy you received.
* **I Have Read the Conflict of Interest Policy** (`read_policy`, select_one, required): Confirm that you have read the policy.
* **I Understand the Policy Requirements** (`understand_policy`, select_one, required): Confirm that you understand the policy's requirements.
* **Areas Needing Clarification** (`clarification_needed`, text, optional): If you are unsure about any part of the policy, describe it here.
* **Have You Received Conflict of Interest Training** (`received_training`, select_one, required): Confirm that you have received training on the policy.
* **Training Date** (`training_date`, date, optional): If you have received training, enter the date.
* **I Agree to Comply with the Policy** (`comply_with_policy`, select_one, required): Confirm your commitment to follow the policy's requirements.
* **I Will Disclose Potential Conflicts** (`disclose_conflicts`, select_one, required): Agree to report any potential conflicts.
* **I Will Complete Annual Disclosures** (`annual_disclosure`, select_one, required): Agree to submit annual declarations.
* **I Will Report Policy Violations** (`report_violations`, select_one, required): Agree to report observed policy violations.
* **I Understand Consequences of Violations** (`understand_consequences`, select_one, required): Confirm that you understand the disciplinary actions for violating the policy.
* **Do You Have Questions About the Policy** (`questions_policy`, text, optional): If you have any questions, describe them here.
* **Additional Comments** (`additional_comments`, text, optional): Add any other feedback about the policy.
* **Employee Signature** (`employee_signature`, text, required): Sign your name as the employee.
* **Date of Signature** (`signature_date`, date, required): Date when you signed this acknowledgement.
* **Witness Name** (`witness_name`, text, optional): If applicable, enter the name of the witness.
* **For HR Use - Record Status** (`hr_record`, select_one, optional): Administrative use only; do not change this field.
