<thinking>...</thinking>

# Access Permission Request Form - Help Guide

## Purpose
The Access Permission Request Form is used to request access to company resources, such as software, shared folders, or databases. This form helps to ensure that access is granted only to authorized personnel and for a valid reason.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your personal information, including your full name and work email address.
2. Specify your department and current job role.
3. Choose the type of resource you are requesting access to (e.g., Software License, Shared Folder Access, etc.).
4. Provide the name or path of the specific resource or folder you are requesting access to.
5. Select the level of access you need (e.g., Read-Only, Contributor or Write, Admin or Full Control).
6. Specify the duration of access you require (e.g., Permanent, Temporary Project, One-time Access).
7. Enter the start and end dates for temporary access requests.
8. Explain the business need for this access request.
9. Confirm that you have read and agree to the Information Security Policy.
10. Sign the form with your full name.

## Field-by-Field Explanation
- **Full Name** (`full_name`, text, required): Enter your full name as it appears on your official identification.
- **Email Address** (`email_address`, email, required): Enter your work or institutional email address.
- **Department** (`department`, text, required): Select your primary work area or department.
- **Current Job Role** (`job_role`, text, required): Enter your official position title.
- **Type of Resource Requested** (`resource_type`, select_multiple, required): Choose the category of resource you are requesting access to (e.g., Software License, Shared Folder Access).
- **Name of Specific Resource or Folder or System** (`specific_resource_name`, text, required): Enter the exact name or path of the resource or folder you are requesting access to.
- **Requested Permission Level** (`permission_level`, select_one, required): Select the level of control needed (e.g., Read-Only, Contributor or Write, Admin or Full Control).
- **Duration of Access** (`request_duration`, select_one, required): Select how long access is required (e.g., Permanent, Temporary Project, One-time Access).
- **Start Date** (`start_date`, date, required): Enter the access start date.
- **End Date** (`end_date`, date, optional): Enter the access end date for temporary access requests.
- **Describe the Business Need for this Access** (`business_justification`, text, required): Briefly explain why this access is necessary for your role.
- **I have read and Agree to the Information Security Policy** (`security_policy_acknowledgement`, select_one, required): Select "I Agree" to confirm compliance.
- **Signature** (`digital_signature`, text, required): Enter your full name to sign the form.
