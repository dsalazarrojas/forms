# Code Verification And Email Confirmation Form - Help Guide

## Purpose
This form is used to verify your email address and confirm your identity. It consists of several sections to ensure that you accurately provide your information and agree to our terms and conditions.

## How To Complete This Form

1. **First Name** (`first_name`, text, required): Enter your first name as it appears on your government-issued ID or passport.
2. **Last Name** (`last_name`, text, required): Enter your last name as it appears on your government-issued ID or passport.
3. **Email Address** (`email_address`, email, required): Enter the email address associated with your account. We will send a verification code to this address.
4. **Confirm Email Address** (`confirm_email`, email, required): Re-enter the email address you just entered to verify it.
5. **Verification Code** (`verification_code`, text, required): Enter the code sent to your email address. This is used to confirm your identity.
6. **Code Received Time** (`code_received_time`, time, optional): Approximately when did you receive the code?
7. **I confirm the email address is correct and belongs to me** (`email_confirmed`, select_one, required): Select 'Yes, I Confirm' to confirm that the email address you entered is correct and belongs to you.
8. **I confirm the verification code is valid** (`code_valid`, select_one, required): Select 'Yes, It Is Valid' to confirm that the code you entered is valid.
9. **I accept the terms and conditions** (`accept_terms`, select_one, required): Select 'I Accept' to agree to our terms and conditions.
10. **I accept the privacy policy** (`accept_privacy`, select_one, required): Select 'I Accept' to agree to our privacy policy.
11. **I will create a strong password** (`password_strength`, select_one, required): Select 'I Agree' to confirm that you will create a strong password.
12. **I understand not to share my verification code** (`security_awareness`, select_one, required): Select 'I Understand' to confirm that you will not share your verification code.
13. **I have completed the verification process** (`verification_complete`, select_one, required): Select 'True' to confirm that you have completed the verification process.
14. **Date and Time of Confirmation** (`confirmation_date_time`, date, required): Enter the date and time you completed the verification process.

## Tips

* Make sure to enter your email address carefully, as this is the primary means of verifying your identity.
* Check your email inbox for the verification code and enter it correctly.
* Be honest about your password strength and security awareness to ensure a secure account experience.
* Confirm that you have completed the verification process and understand the terms and conditions and privacy policy.
