-thinking>
This form is designed for registering packages and providing details about them. It's a general-purpose form that can be used in various contexts, such as in clinics, labs, or other settings where packages need to be registered.
To avoid confusion and data duplication, please note that this form should not be used for registering packages with the same serial number or receipt details.

</thinking>

# injection_package_registration_form - Help Guide
## Purpose
This form is used to register packages and provide detailed information about them.

## How to Complete This Form
To complete this form, follow these steps:

1. Provide the Package Details (Page 1)
	* Enter the package title and any other relevant information in the text field.
2. Select the Assigned To (Page 1)
	* Choose the entity to which the package is assigned (e.g., Clinic or Lab).
3. Enter Responsibility (Page 1)
	* Provide a brief description of the package's responsibility.
4. Enter Receipt Details (Page 2)
	* Provide a description of the receipt details.
5. Enter Receipt Date (Page 2)
	* Enter the date the package was received, in the format `YYYY-MM-DD`.
6. Enter Receipt Time (Page 2)
	* Enter the time the package was received, in the format `HH:MM:SS`.
7. Enter Serial Number (Page 3)
	* Enter a unique identifier for the package.
8. Add Notes (Page 3)
	* Add any additional comments or information about the package.
9. Enter Contact Information (Page 3)
	* Enter the email and phone number of the person or entity responsible for the package.

## Field-by-Field Explanation

* **Package Details** (Page 1)
	* (`package_details`, text, Required: false)
		+ Enter a brief description of the package.
* **Assigned To** (Page 1)
	* (`assigned_to`, select_one, Required: false)
		+ Select the entity to which the package is assigned (e.g., Clinic or Lab).
* **Responsibility** (Page 1)
	* (`responsibility`, text, Required: false)
		+ Enter a brief description of the package's responsibility.
* **Receipt Details** (Page 2)
	* (`receipt_details`, text, Required: false)
		+ Provide a description of the receipt details.
* **Receipt Date** (Page 2)
	* (`receipt_date`, date, Required: false)
		+ Enter the date the package was received, in the format `YYYY-MM-DD`.
* **Receipt Time** (Page 2)
	* (`receipt_time`, time, Required: false)
		+ Enter the time the package was received, in the format `HH:MM:SS`.
* **Serial Number** (Page 3)
	* (`serial_number`, text, Required: false)
		+ Enter a unique identifier for the package.
* **Notes** (Page 3)
	* (`notes`, note, Required: false)
		+ Add any additional comments or information about the package.
* **Email** (Page 3)
	* (`email`, email, Required: false)
		+ Enter the email of the person or entity responsible for the package.
* **Phone** (Page 3)
	* (`phone`, text, Required: false)
		+ Enter the phone number of the person or entity responsible for the package.

## Tips
* Please make sure to enter accurate and complete information to ensure correct registration of the package.
* If you're unsure about any of the fields, please refer to the instructions above.
* This form is designed to be used in a variety of contexts, so please be mindful of the specific requirements of your institution or organization.
