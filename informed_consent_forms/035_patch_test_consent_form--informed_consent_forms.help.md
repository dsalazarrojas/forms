# Patch Test Consent Form - Help Guide
## Purpose
This form is intended to be used in medical settings to gather information from clients regarding their consent for patch test procedures. It ensures that clients understand the process and agree to it.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your client's information in the "Client Information" section.
2. Provide details about the test in the "Test Details" section.
3. Specify the test site in the "Test Site" section.
4. Choose the type of test in the "Test Type" section.
5. Describe the treatment plan in the "Treatment Plan" section.
6. Select the option that best represents the consent given in the "Consent Given" section.
7. Select the relevant contact details in the "Contact Details" section.

## Field-by-Field Explanation
* **Client Information** (`client_information`, text, required/optional): This is the section where you enter your client's basic information.
* **Test Details** (`test_details`, text, required/optional): Enter a brief description of the test, including what will be tested and why.
* **Test Site** (`test_site`, text, required/optional): Specify the location or site where the test will take place.
* **Test Type** (`test_type`, text, required/optional): Choose the type of test that will be administered.
* **Treatment Plan** (`treatment_plan`, text, required/optional): Describe the treatment or actions that will be taken after the test results.
* **Consent Given** (`consent_given`, select_one, required/optional): Select the option that best represents the client's consent status:
	+ Option 1: I have read and understand the test details.
	+ Option 2: I do not have time to read, but I understand the test details.
	+ Option 3: I do not understand the test details, but I will read it later.
	+ Option 4: I do not want to give consent.
	+ Option 5: I am not sure.
	+ Option 6: Other (please specify)
	+ Option 7: Unable to read the test details.
	+ Option 8: Not able to understand the test details.
	+ Option 9: Do not want to give consent at this time.
* **Contact Details** (`contact_details`, select_multiple, required/optional): Select the relevant contact details for communication:
	+ Option 1: Email
	+ Option 2: Phone number
	+ Option 3: Address
	+ Option 4: Social media
	+ Option 5: Other (please specify)
