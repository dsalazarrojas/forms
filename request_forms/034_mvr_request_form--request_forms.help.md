<thinking>
The form is used to request a Motor Vehicle Record (MVR) from the relevant authorities. The form is not required to be completed for all users, but is instead intended for those who want to request this information for their own use. Users are asked for personal information, including name, driver license number, date of birth, and address. The form also includes a few fields related to communication, such as email and phone number, which is intended for contacting the user to discuss their request further. The purpose of this form is for users to provide their own information to facilitate their request of an MVR.
</thinking>
# MVR Request Form - Help Guide
## Purpose
The MVR Request Form is used for requesting a Motor Vehicle Record from the relevant authorities. It's intended for users who want to obtain this information for their personal use.

## How To Complete This Form
To complete this form, follow the instructions below:

1.  Fill in your **First name**, **Last name**, and **Driver license number** if you want to request an MVR.
2.  Select your **License state** from the dropdown menu.
3.  Fill in your **Insurance Company** if you have one.
4.  Enter your **Date of Birth** in the format `YYYY-MM-DD`.
5.  Fill in your **Address Line 1**, **Address Line 2**, and **City**.
6.  Enter your **Zip code**.
7.  Add a valid **Email** and **Phone number** to contact you about your request.
8.  Fill in the **Reason for requesting** the MVR, if applicable.
9.  If you have any **Additional comments**, you can add them here.

## Field-by-Field Explanation
* **First name** (`first_name`, text, required: false): Please fill in your first name as it appears on your driver's license.
* **Last name** (`last_name`, text, required: false): Please fill in your last name as it appears on your driver's license.
* **Driver license number** (`driver_license_number`, text, required: false): If you want to request an MVR, please fill in your driver license number.
* **License state** (`license_state`, select_one, required: false): Select the state where your driver's license was issued from the dropdown menu.
* **Insurance Company** (`insurance_company`, select_multiple, required: false): If you have an insurance company, please select it from the list.
* **Date of Birth** (`date_of_birth`, date, required: false): Enter your date of birth in the format `YYYY-MM-DD`.
* **Address Line 1** (`address_line_1`, text, required: false): Fill in your first line of your address.
* **Address Line 2** (`address_line_2`, text, required: false): Fill in your second line of your address.
* **City** (`city`, text, required: false): Fill in the name of the city where you reside.
* **Zip code** (`zip_code`, number, required: false): Fill in your zip code.
* **Email** (`email`, email, required: false): Add a valid email address where we can contact you about your request.
* **Phone number** (`phone_number`, text, required: false): Add a valid phone number where we can contact you about your request.
* **Reason for requesting** (`reason_for_requesting`, text, required: false): If you want to provide a reason for requesting the MVR, fill it in here.
* **Additional comments** (`additional_comments`, text, required: false): If you want to add any additional comments, please write them here.
