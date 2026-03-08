<Thinking> 
This form is a tool for confirming tax submissions, likely used by accountants, auditors, or other professionals in the field of accounting or finance. It is designed to collect information about a tax submission, including the title, date, and submission ID. The form has multiple pages, and the user can select from categories such as "Administrative Forms," "Financial Forms," or "Other." The form also allows the user to specify the type of submission, either individual or business, and to add a note if desired. This form may be used for internal purposes only or for external submissions, depending on the context. There is a required field for submission ID and a required field for date, indicating that these fields are essential for the form to be considered complete. 

</Thinking>

# Tax Submission Confirmation Form - Help Guide

## Purpose

This form is used to confirm tax submissions, allowing users to provide essential information about a tax submission, including the title, date, submission ID, and type of submission.

## How To Complete This Form

1. To complete this form, follow these steps:
	* Enter the **Tax Submission Confirmation Form** title to confirm the purpose of the submission.
	* Provide a brief **Description** of the tax submission, if necessary.
	* Select the relevant **Category** from the dropdown menu, which can be "Administrative Forms," "Financial Forms," or "Other."
	* If the category is "Other," provide a clear **Other** description to help distinguish the submission.
	* Enter the **Date** of the tax submission in the format MM/DD/YY or DD/MM/YY.
	* Choose the type of **Tax Submissions** from the dropdown menu, either **Individual** or **Business.**
	* Enter the **Submission ID** number, which is a unique identifier for the tax submission.
	* Add any additional **Note** to the submission, if desired.

## Field-by-Field Explanation

* **Tax Submission Confirmation Form** (`form_title`, text, optional): Enter a brief title to confirm the purpose of the submission.
* **Description** (`form_description`, text, optional): A brief description of the submission.
* **Category** (`form_category`, select_one, optional): Select the relevant category for the submission. This can be "Administrative Forms," "Financial Forms," or "Other."
* **Other** (`form_category_other`, text, optional): If you selected "Other" as the category, provide a clear description to distinguish the submission.
* **Date** (`form_date`, date, required): Enter the date of the submission in the format MM/DD/YY or DD/MM/YY.
* **Time** (`form_time`, time, optional): Select the time of the submission, if applicable.
* **Tax Submissions** (`form_submissions`, select_multiple, required): Choose the type of submission, either "Individual" or "Business."
* **Individual** (`form_submissions_individual`, text, optional): If you selected "Individual" as the submission type, enter the relevant details.
* **Business** (`form_submissions_business`, text, optional): If you selected "Business" as the submission type, enter the relevant details.
* **Submission ID** (`form_submission_id`, text, required): Enter a unique identification number for the submission.
* **Note** (`form_note`, note, optional): Add any additional notes or comments to the submission.
