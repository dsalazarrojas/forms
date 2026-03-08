# digital-platform-integration-contact-form - Help Guide
## Purpose
This form is used for digital platform integration contact purposes, such as troubleshooting or providing feedback on issues related to integrations with external tools.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill in your user name and email address in the "User Name" and "Email" fields, respectively.
2. Enter your phone number in the "Phone" field.
3. Describe your integration inquiry in the "Integration Inquiry" field.
4. Provide any additional submission details in the "Submission Details" field.
5. Optionally, add any comments in the "Comments" field.
6. Select the team member you want to be assigned to your inquiry from the "Assigned To" dropdown menu.
7. Choose the tool associated with your integration inquiry from the "Assigned Tool" dropdown menu.
8. Select the person you want to submit the integration inquiry to from the "Submitted To" dropdown menu.
9. Choose the tool you used to submit the integration inquiry from the "Submitted By Tool" dropdown menu.
10. Select the status of the integration process from the "Submission Status" dropdown menu.
11. (Optional) Enter the URL of the tool you used to submit the integration inquiry in the "Submitted By Tool API URL" field.
12. (Optional) Enter the API version of the tool you used to submit the integration inquiry in the "Submitted To Tool API Version" field.

## Field-by-Field Explanation

* **User Name** (`user_name`, text, required): Please enter your name.
* **Email** (`email`, email, required): Please enter a valid email address.
* **Phone** (`phone`, text, required): Please enter your phone number.
* **Integration Inquiry** (`integration_inquiry`, text, required): Describe your integration inquiry in detail.
* **Submission Details** (`submission_details`, text, required): Provide any additional submission details.
* **Comments** (`comments`, text, optional): Optionally, add any comments related to your submission.
* **Assigned To** (`assigned_to`, select_one, required): Select the team member you want to be assigned to your inquiry.
* **Assigned Tool** (`assigned_tool`, select_one, required): Choose the tool associated with your integration inquiry.
* **Submitted By** (`submitted_by`, select_multiple, optional): Select the person who submitted the integration inquiry (can be multiple people).
* **Submission Date** (`submission_date`, date, required): The date when the integration inquiry was submitted.
* **Submission Time** (`submission_time`, time, required): The time when the integration inquiry was submitted.
* **Submitted To** (`submitted_to`, select_one, required): Select the team member or department to submit the integration inquiry to.
* **Submitted By Tool** (`submitted_by_tool`, select_one, required): Choose the tool used to submit the integration inquiry.
* **Submission Status** (`submission_status`, select_one, optional): Select the status of the integration process.
* **Submitted By Tool API URL** (`submitted_by_tool_api_url`, text, optional): Enter the API URL of the tool used to submit the integration inquiry.
* **Submitted To Tool API Version** (`submitted_to_tool_api_version`, text, optional): Enter the API version of the tool used to submit the integration inquiry.
* **Submitted To Tool API Version Major** (`submitted_to_tool_api_version_major`, text, optional): Enter the major version of the tool's API.
* **Submitted To Tool API Minor** (`submitted_to_tool_api_minor`, text, optional): Enter the minor version of the tool's API.
* **Submitted To Tool API Patch** (`submitted_to_tool_api_patch`, text, optional): Enter the patch version of the tool's API.
* **Submitted To Tool API Commit** (`submitted_to_tool_api_commit`, text, optional): Enter the commit version of the tool's API.

## Tips
Please ensure that all required fields are completed before submitting the form. The information collected will be used to facilitate the integration process and ensure timely resolution of your inquiries.
