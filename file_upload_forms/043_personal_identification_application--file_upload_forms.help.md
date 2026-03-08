# Personal Identification Application - Help Guide
## Purpose
The Personal Identification Application form is designed to collect personal identification information, including first name, last name, date of birth, email, phone number, driver's license number, ID number, nationality, address, and upload various files as proof of identity. This form is used to verify the identity of an individual and should only be completed by the actual person being identified.

## How To Complete This Form
1. Fill in your first name, last name, date of birth, email, and phone number in the respective fields.
2. Select your nationality from the drop-down menu.
3. Enter your driver's license number and ID number in the respective fields. These fields are not required.
4. Enter your address in the address field.
5. Upload proof of identity files as required. The files should be in a format that is compatible with our system (e.g., PDF, JPG, PNG).

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): This is your first name.
* **Last Name** (`last_name`, text, required): This is your last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format mm/dd/yyyy.
* **Email** (`email`, email, required): Enter your email address. This will be used as contact information.
* **Phone** (`phone`, text, required): Enter your phone number. This will be used as contact information.
* **Driver License Number** (`driver_license`, text, optional): If you have a driver's license, enter the number here. If not, leave it blank.
* **ID Number** (`id_number`, text, optional): If you have an ID number, enter it here. If not, leave it blank.
* **Nationality** (`nationality`, select_one, required): Select your country of nationality from the drop-down menu.
* **Address** (`address`, text, required): Enter your address.
* **Upload File 1-16** (upload_file_1, upload_file_2, ..., upload_file_16, text, optional): Upload up to 16 proof of identity files. The files should be in a format that is compatible with our system (e.g., PDF, JPG, PNG).
