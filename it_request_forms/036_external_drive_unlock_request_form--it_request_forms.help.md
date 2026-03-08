# <hr>

<thinking>As a form designer and technical writer, I will create a user-facing help guide for the "external_drive_unlock_request_form" form. This form is used for employees to request the unlocking of an external drive. The form gathers information about the employee requesting the access, the purpose of the access, and other relevant details. It is essential to understand the purpose and relevance of this form to provide accurate and useful information to the user.</thinking>

# external_drive_unlock_request_form - Help Guide

## Purpose

The "External Drive Unlock Request Form" is a form used by employees to request access to an external drive. This form helps to provide relevant information to the IT team for efficient and swift processing of the request.

## How To Complete This Form

To complete this form, follow these steps:

1. **Enter your Employee Name**: Type in your official work name to help the IT team identify you.
2. **Enter your Manager's Name**: Type in the name of your direct manager to help the IT team verify your request.
3. **Choose your Department**: Enter the department you belong to, as this will help the IT team locate the drive you're asking to access.
4. **Specify the Location**: Type in the location where the external drive is accessible.
5. **Provide Reason for Request**: Explain why you need access to the external drive.
6. **Select Date**: Choose the date you need access to the external drive.
7. **Time**: Choose the time you plan to access the drive.
8. **Enter your Email**: Type in your official work email to help the IT team contact you.
9. **External Drive Details**: Briefly describe the external drive you're asking to access.
10. **External Drive ID**: Type in the ID of the external drive you're requesting access to.
11. **Urgency Level**: Choose how urgent your request is, with options being Normal, Low, High, or Critical.
12. **Comments**: Provide any additional information about your request in this section.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, Required): <small>Enter your official name as registered with your company.</small>
* **Manager Name** (`manager_name`, text, Required): <small>Enter the name of your direct manager to verify your request.</small>
* **Department** (`department`, text, Optional): <small>Enter your department to help locate the drive you're requesting access to.</small>
* **Location** (`location`, text, Optional): <small>Enter the location where the external drive is accessible.</small>
* **Reason for Request** (`reason`, text, Optional): <small>Explain why you need access to the external drive.</small>
* **Date** (`date`, date, Optional): <small>Choose the date you plan to access the drive.</small>
* **Time** (`time`, time, Optional): <small>Choose the time you plan to access the drive.</small>
* **Employee Email** (`employee_email`, email, Optional): <small>Enter your company email to help the IT team contact you.</small>
* **External Drive** (`external_drive`, text, Optional): <small>Briefly describe the external drive you're asking to access.</small>
* **External Drive ID** (`external_drive_id`, text, Optional): <small>Type in the ID of the external drive you're requesting access to.</small>
* **Urgency** (`priority`, select_one, Required): <small>Select the level of urgency for your request, with options being Normal, Low, High, or Critical.</small>
* **Comments** (`comments`, note, Optional): <small>Provide any additional information about your request.</small>
