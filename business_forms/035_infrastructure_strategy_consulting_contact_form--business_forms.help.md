<thinking>
This form is designed to collect contact information and project details from clients or potential clients. The form will help the consulting team to understand the client's needs and provide them with the necessary consulting services. It will also help in assigning the right tools and resources for the project.
</thinking>

# Infrastructure Strategy Consulting Contact Form - Help Guide

## Purpose
This form is used to collect contact and project details from clients or potential clients. It will help the consulting team to assess their needs and provide them with the necessary consulting services.

## How To Complete This Form

To complete this form, please follow these steps:

1. Select "Yes" or "No" for the "form_details" field to indicate if this is a new form or not.
2. Enter your contact name in the "Contact Name" field.
3. Provide your email address in the "Email" field.
4. Enter your phone number in the "Phone" field.
5. Describe your project details in the "Project Details" field.
6. Choose "Yes" or "No" for the "Consulting Services" field to indicate if you are looking for consulting services.
7. Provide more details about your inquiry in the "Inquiry Details" field.
8. Enter your company name in the "Company" field.
9. Choose "Yes" or "No" for the "Assigned Tool" field to indicate if you have a specific tool in mind.
10. Enter the ID of the tool you are looking to use in the "Assigned Tool ID" field.
11. If you have a specific version of the tool in mind, enter it in the "Assigned Tool Version" field.
12. Enter the ID of this form in the "Form ID" field (will be automatically populated).
13. Finally, enter your name in the "Created By" field.

## Field-by-Field Explanation

* **Form Details**: (`form_details`, select_multiple, required: false)
	+ Choose "Yes" if this form is for a new project, otherwise select "No".
* **Contact Name**: (`contact_name`, text, required: false)
	+ Enter your name so we can address you appropriately.
* **Email**: (`email`, email, required: false)
	+ Enter your email address so we can contact you.
* **Phone**: (`phone`, text, required: false)
	+ Enter your phone number so we can easily contact you.
* **Project Details**: (`project_details`, text, required: false)
	+ Describe your project in a few words to help us understand your needs.
* **Consulting Services**: (`consulting_services`, select_one, required: false)
	+ Choose "Yes" if you are looking for consulting services, otherwise select "No".
* **Inquiry Details**: (`inquiry_details`, text, required: false)
	+ Provide more details about your inquiry so we can better understand your needs.
* **Company**: (`company`, text, required: false)
	+ Enter your company name so we can know who you represent.
* **Assigned Tool**: (`assigned_tool`, select_one, required: false)
	+ Choose "Yes" if you have a specific tool in mind, otherwise select "No".
* **Assigned Tool ID**: (`assigned_tool_id`, text, required: false)
	+ Enter the ID of the tool you are looking to use.
* **Assigned Tool Version**: (`assigned_tool_version`, text, required: false)
	+ If you have a specific version of the tool in mind, enter it here.
* **Form ID**: (`form_id`, number, required: false)
	+ This field will be automatically populated.
* **Created By**: (`created_by`, text, required: false)
	+ Enter your name so we can know who created this form.
