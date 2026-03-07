<thinking>
This help guide is for the Accounting System User Registration Form. Its purpose is to register new users with the accounting system, ensuring they have the necessary access rights and permissions. To prevent data duplication, the system checks for existing users with the same username and email. Before proceeding, ensure you are aware of the company's data security and password policies.
</thinking>

# Accounting System User Registration Form - Help Guide
## Purpose
The Accounting System User Registration Form is used to register new users with the accounting system, allowing them to access system features and perform tasks. It is essential to complete this form correctly to ensure proper system configuration and data security.

## How To Complete This Form
1. Fill in your full name.
2. Enter a username requested, subject to availability and company policy.
3. Provide your corporate email address.
4. Select the desired access level, which affects the roles and permissions granted.
5. Enter your department code, using the format e.g., FIN-202.
6. Choose which business units this user will have access to.
7. If applicable, enter your office extension.
8. Confirm whether the Multi-Factor Authentication (MFA) setup is complete.
9. Agree to follow the company's data security and password policies.
10. Select a date for the request.
11. Enter the name of your supervisor for approval.
12. Complete the form by clicking the submit button.

## Field-by-Field Explanation
* **Full Name** (`full_name`, text, required): Enter your name in the format "First Name Last Name" (e.g., John Doe).
* **Username Requested** (`username_requested`, text, required): Choose a unique username that meets the company's naming conventions and is not already taken by another user.
* **Corporate Email** (`corporate_email`, email, required): Enter a valid email address provided by the company.
* **Access Level** (`access_level`, select_one, required): Select one of the available options to determine the user's role and access permissions: 
  * Read-Only: limited access to read-only features.
  * Data Entry: allows entry of data, but not configuration changes.
  * Managerial: provides full access with some restrictions.
  * Administrator: full access with no restrictions.
* **Department Code** (`department_code`, text, required): Enter your department code using the format e.g., FIN-202.
* **Assigned Entities** (`assigned_entities`, select_multiple, required): Select the business units this user should have access to. Choose from the available options.
* **Office Extension** (`office_extension`, text, optional): Enter your office extension if applicable.
* **Security Compliance** (`security_header`, note, optional): This is a note indicating the section on security compliance.
* **MFA Setup Complete** (`mfa_setup_complete`, select_one, required): Confirm whether the Multi-Factor Authentication setup is complete.
* **Agree to Security Policy** (`security_policy_acknowledgment`, select_one, required): Select "I agree" to comply with the company's data security and password policies.
* **Request Date** (`request_date`, date, required): Enter the date for the request.
* **Supervisor Approval Name** (`supervisor_approval_name`, text, required): Enter the name of your supervisor for approval.

**Tips**
* Double-check your information for accuracy before submitting the form.
* Ensure you are aware of the company's data security and password policies.
* If you have any questions or need assistance, contact your supervisor or IT department.
