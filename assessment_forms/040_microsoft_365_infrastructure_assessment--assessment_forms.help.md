# Microsoft 365 Infrastructure Assessment - Help Guide
## Purpose
This form is designed to collect information for the Microsoft 365 Infrastructure Assessment.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields with accurate and relevant information.
2. Select the correct options for the User Type, MFA Enabled, and MFA Authentication Method fields.
3. Review and fill in any additional fields that are relevant to your situation.

## Field-by-Field Explanation

* **Microsoft 365 Infrastructure** (`page_one`, `text`, required/optional: false): This field is a text field where you can enter a brief description of the Microsoft 365 infrastructure.
* **User Type** (`user_type`, `select_one`, required/optional: false): Select one of the following options:
	+ User: I am an individual user.
	+ Group: I am a group of users.
	+ Other: I do not fit into either of the above categories.
* **Company** (`company_name`, `text`, required/optional: false): Enter the name of your company.
* **Description** (`description`, `text`, required/optional: false): Enter a brief description of your Microsoft 365 infrastructure.
* **Location** (`location`, `text`, required/optional: false): Enter the location where your Microsoft 365 infrastructure is located.
* **Email** (`email`, `email`, required/optional: false): Enter your email address.
* **Phone** (`phone`, `text`, required/optional: false): Enter your phone number.
* **Password** (`password`, `text`, required/optional: false): Enter your password.
* **Confirm Password** (`confirm_password`, `text`, required/optional: false): Confirm your password.
* **MFA Enabled** (`mfa_enabled`, `select_one`, required/optional: false): Select one of the following options:
	+ Yes: I have MFA enabled.
	+ No: I do not have MFA enabled.
* **MFA Authentication Method** (`mfa_authentication_method`, `select_one`, required/optional: false): Select one of the following options:
	+ Authenticator App: I use an authenticator app.
	+ SMS Code: I receive SMS codes.
	+ Phone Call: I receive phone calls for MFA.
	+ Security Key: I use a security key.
	+ Other: I use a different method.
* **MFA Backup Email** (`mfa_backup_email`, `email`, required/optional: false): Enter a backup email address for MFA.
* **MFA Backup Phone** (`mfa_backup_phone`, `text`, required/optional: false): Enter a backup phone number for MFA.
* **MFA Backup Password** (`mfa_backup_password`, `text`, required/optional: false): Enter a backup password for MFA.
* **MFA Backup Confirmation** (`mfa_backup_confirmation`, `select_one`, required/optional: false): Select one of the following options:
	+ Yes: I have a backup for MFA.
	+ No: I do not have a backup for MFA.
