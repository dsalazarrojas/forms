# Club Membership Order Form - Help Guide
## Purpose
This form is designed for new members to register for membership in a club or organization. It collects personal and membership details to provide the best experience for our members.

## How To Complete This Form
1. Fill in your personal details such as First Name, Last Name, Email Address, Phone Number, and Date of Birth.
2. Enter your Street Address, City, State or Province, and ZIP or Postal Code.
3. Select your Membership Type (e.g., Standard, Premium, VIP, Family, Student).
4. Choose your Membership Duration (e.g., 1 Month, 3 Months, 6 Months, 1 Year, 2 Years, Lifetime).
5. Enter the Membership Cost.
6. Choose your Payment Method (e.g., Credit Card, Debit Card, Check, Bank Transfer, Cash).
7. Select all the Areas of Interest that apply to you.
8. Choose how you heard about us (e.g., Word of Mouth, Social Media, Website, Email, Event).
9. Read and agree to our Terms and Conditions by selecting "I Agree".

## Field-by-Field Explanation
* **First Name** (`member_first_name`, text, required): Enter your first name.
* **Last Name** (`member_last_name`, text, required): Enter your last name.
* **Email Address** (`member_email`, email, required): Enter your email address.
* **Phone Number** (`member_phone`, text, required): Enter your phone number.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format mm/dd/yyyy.
* **Street Address** (`address`, text, required): Enter your street address.
* **City** (`city`, text, required): Enter your city.
* **State or Province** (`state`, text, required): Enter your state or province.
* **ZIP or Postal Code** (`zip_code`, text, required): Enter your ZIP or postal code.
* **Membership Type** (`membership_type`, select_one, required): Select the membership level that suits you.
* **Membership Duration** (`membership_duration`, select_one, required): Choose your membership term.
* **Membership Cost** (`membership_cost`, number, required): Enter the membership cost.
* **Payment Method** (`payment_method`, select_one, required): Choose your payment method.
* **Areas of Interest** (`interests`, select_multiple, optional): Select all the areas of interest that apply to you.
* **How Did You Hear About Us** (`referral_source`, select_one, optional): Choose how you heard about us.
* **I Agree to Terms and Conditions** (`terms_agreement`, select_one, required): Read and agree to our Terms and Conditions.

Note: This guide assumes that all fields are as described in the YAML provided, any discrepancies will be reported as "best-effort explanation".
