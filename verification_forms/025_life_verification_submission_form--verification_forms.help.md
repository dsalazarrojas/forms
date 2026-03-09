# life-verification-submission-form - Help Guide
## Purpose
The life verification submission form is used to collect and verify personal information for life events, such as date of birth, contact details, and status.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill in your first name in the field 'First Name'.
2. Fill in your last name in the field 'Last Name'.
3. Enter your date of birth in the 'Date of Birth' field in the format 'month/day/year'.
4. Enter your address in the 'Address' field.
5. Enter your phone number in the 'Phone Number' field.
6. Enter your email address in the format 'your_name@domain.com' in the 'Email' field.
7. Enter the date of entry or admission in the 'Date of Entry' field in the format 'month/day/year'.
8. If you want to provide an update on when you last accessed or modified any information, you can do so in the 'Date of Entry' field.
9. In the 'Status' field, select either 'Active' or 'Inactive' to indicate your status.
10. Select your country of residence from the list provided in the 'Country' field.

## Field-by-Field Explanation

* **First Name** (`name`, text, required): Enter your first name in this field.
* **Last Name** (`surname`, text, required): Enter your last name in this field.
* **Date of Birth** (`dob`, date, required): Enter your date of birth in the format 'month/day/year'.
* **Address** (`address`, text, optional): If applicable, enter your address in this field.
* **Phone Number** (`phone`, text, required): Enter your contact phone number.
* **Email** (`email`, email, required): Enter your email address in the format 'your_name@domain.com'.
* **Date of Entry** (`date_of_entry`, date, required): Enter the date of entry or admission in the format 'month/day/year'.
* **Last Updated** (`last_updated`, time, optional): If applicable, enter the last time you updated any information.
* **Last Updated Reason** (`last_updated_reason`, text, optional): If you want to provide a reason for the last update, enter it here.
* **Status** (`status`, select_one, required): Select either 'Active' or 'Inactive' to indicate your status.
* **Country** (`country`, select_multiple, required): Select your country of residence from the list provided.
