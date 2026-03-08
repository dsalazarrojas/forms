# MembershipEnroll Application Form - Help Guide
## Purpose
This form is for users to apply for membership in a group or organization. It is used to collect personal and enrollment details for both individuals and groups.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your personal details, including First Name, Last Name, Email, Phone, and Date of Birth.
2. Select your Enroll Date and Time.
3. Choose your Enroll Type (Individual or Group) and Enroll Type Status (Active or Inactive).
4. Provide your Group Name if you are enrolling as a group.
5. Agree to the Terms of Service.
6. Select your Enroll Reason if you want to provide additional information.
7. Complete any other required fields as necessary.

## Field-by-Field Explanation
* **First Name** (`form_first_name`, text, required): Enter your first name.
* **Last Name** (`form_last_name`, text, required): Enter your last name.
* **Email** (`form_email`, email, required): Enter a valid email address.
* **Phone** (`form_phone`, text, optional): Enter your phone number.
* **Date of Birth** (`form_date_of_birth`, date, optional): Enter your date of birth.
* **Enroll Date** (`form_enroll_date`, time, required): Select the date and time you would like to enroll.
* **Terms of Service** (`form_terms_of_service`, select_one, required): Confirm that you have read and agree with the terms of service.
* **Agree** (`form_agree`, select_multiple, required): Confirm that you agree with the terms of service.
* **Additional Information** (`form_additional_info`, note, optional): Enter any additional information you would like to provide.
* **Comments** (`form_comments`, text, optional): Enter any comments or notes about your enrollment.
* **Name** (`form_name`, text, required): Enter the name of the individual or group enrolling.
* **Address** (`form_address`, text, required): Enter the address of the individual or group enrolling.
* **Enroll Reason** (`form_enroll_reason`, text, optional): Enter the reason for your enrollment.
* **Enroll Status** (`form_enroll_status`, text, required): Enter your current enrollment status.
* **Enroll Type** (`form_enroll_type`, select_one, required): Choose between Individual and Group.
* **Group Name** (`form_group_name`, text, optional): Enter the name of the group enrolling.
* **Enroll Date/Time** (`form_enroll_date_time`, time, optional): Select the date and time for your enrollment.
* **Enroll Duration** (`form_enroll_duration`, text, optional): Enter the duration of your enrollment.
* **Enroll Type Status** (`form_enroll_type_status`, select_multiple, optional): Choose between Active and Inactive.
* **OTP** (`form_otp`, text, optional): Enter your one-time password (OTP).
* **OTP Expires** (`form_otp_expires`, date, optional): Enter the expiration date of your OTP.
* **I have read and agree with the terms and conditions** (`form_terms_of_service_agree`, select_one, required): Confirm that you have read and agree with the terms and conditions.
* **Comments on OTP** (`form_comments_otp`, text, optional): Enter any comments or notes about your OTP.
* **Enroll Agreement** (`form_enroll_agree`, select_multiple, optional): Confirm that you agree with the terms of service.
* **E-Signature** (`form_esignature`, text, optional): Enter your electronic signature.
* **I have not read and agree with the terms and conditions** (`form_terms_of_service_agree`, select_one, required): This field is likely an error in the original form definition and will be excluded from the help guide.
