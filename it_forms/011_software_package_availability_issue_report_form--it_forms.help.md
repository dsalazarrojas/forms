# Software Package Availability Issue Report Form - Help Guide
## Purpose
The Software Package Availability Issue Report Form is a one-time report form used to report issues related to software packages. This form helps ensure that the correct person is assigned to investigate and resolve the issue efficiently.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter a brief title to describe the issue in the "Report Title" field.
2. Enter the name of the software package that's causing the issue in the "Package Name" field.
3. Provide a detailed description of the issue in the "Description" field.
4. Specify the software package version that's causing the issue in the "Software Package Version" field.
5. Select the operating system where the issue is occurring in the "Operating System" field.
6. Choose the status of the software package in the "Software Package Status" field. This will help the assigned person understand the current state of the package.
7. Set the priority of the issue in the "Priority" field.
8. Fill out your contact information in the "Email" field, including your email address.
9. Enter your phone number in the "Phone" field.
10. Select the person assigned to investigate and resolve the issue in the "Assigned To" field.
11. Provide any additional comments about the issue in the "Assigned To Comment" field.
12. Select how the issue was submitted in the "Submitted Via" field.
13. Enter the package ID if you have it.
14. Specify the operating system version where the issue is occurring in the "Operating System Version" field (if applicable).
15. Provide any additional information about the software license and vendor in the "Software License" and "Software Vendor" fields (if applicable).
16. Enter the type of software that's causing the issue in the "Software Type" field (if applicable).
17. Enter any additional comments about the package status in the "Package Status Comment" field (if applicable).
18. Finally, fill out your contact information as the person submitting the report, including your name in the "Submitter" field, and enter a short description of why you're submitting the report in the "Submitter Comment" field.

## Field-by-Field Explanation

* **Report Title** (`software_package_availability_issue_report_form_1`, text, optional): A brief title to describe the issue.
* **Package Name** (`package_name`, text, optional): The name of the software package that's causing the issue.
* **Description** (`description`, text, optional): A detailed description of the issue.
* **Software Package Version** (`software_package_version`, text, optional): The software package version that's causing the issue.
* **Operating System** (`operating_system`, select_one, optional): The operating system where the issue is occurring. Select one of the options: Windows, macOS, or Linux.
* **Software Package Status** (`software_package_status`, select_multiple, required): The status of the software package. Select one or more of the options: Active, Inactive, or Not Installed.
* **Priority** (`priority`, select_one, required): The priority of the issue. Select one of the options: High, Medium, or Low.
* **Email** (`email`, email, required): Your email address.
* **Phone** (`phone`, text, required): Your phone number.
* **Assigned To** (`assigned_to`, select_one, required): The person assigned to investigate and resolve the issue. Select one of the options: John Doe or Jane Doe.
* **Assigned To Comment** (`assigned_to_comment`, text, optional): Additional comments about the issue.
* **Submitted Via** (`submitted_via`, select_one, optional): How the issue was submitted. Select one of the options: IT or Support.
* **Package ID** (`package_id`, number, required): The package ID.
* **Operating System Version** (`operating_system_version`, text, optional): The operating system version where the issue is occurring.
* **Software License** (`software_license`, text, optional): The software license.
* **Software Vendor** (`software_vendor`, text, optional): The software vendor.
* **Software Type** (`software_type`, text, optional): The type of software that's causing the issue.
* **Package Status Comment** (`package_status_comment`, text, optional): Additional comments about the package status.
* **Submitter** (`submitter`, select_one, required): The person submitting the report. Select one of the options: John Doe or Jane Doe.
* **Submitter Comment** (`submitter_comment`, text, optional): A short description of why you're submitting the report.
* **Submitter Email** (`submitter_email`, email, optional): Your email address.
* **Submitter Phone** (`submitter_phone`, text, optional): Your phone number.
