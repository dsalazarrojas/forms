<thinking>
This form is likely used for a rental application process, where users are required to provide personal and financial information, property details, and application status. The purpose of this form is to gather information from applicants for a rental property, ensuring they meet certain requirements and criteria for approval. This form will guide you through the steps to complete it effectively and accurately.
</thinking>

# rental_application - Help Guide
## Purpose
This form is designed to collect information from applicants for a rental property. Please fill out the form accurately and completely to ensure a smooth rental application process.

## How To Complete This Form
1. Start by filling out the personal details section, which includes:
	* First Name: Enter your first name as it appears on your identification.
	* Last Name: Enter your last name as it appears on your identification.
	* Email: Enter your email address where you can be reached for communication.
	* Phone: Enter your phone number where you can be reached.
2. Move on to the property details section, which includes:
	* Address: Enter the exact address of the rental property.
	* Date of Birth: Enter your date of birth in the format MM/DD/YYYY.
	* Social Security Number: Enter your Social Security Number for identification purposes.
	* Real Estate Type: Select the type of property you are applying for (House, Apartment, Condo).
	* Property Type: Select whether the property is 'Yes' or 'No' for specific types (e.g., furnished, etc.).
3. Next, provide financial information:
	* Rent Amount: Enter the amount of rent you are willing to pay.
	* Rent Period: Select the period for which you are applying for rent (Month, Quarter, Year).
	* Move-in Date: Enter the date you plan to move in.
	* Move-in Time: (Optional) Enter the time of day you plan to move in (e.g., 09:00 AM).
4. Application Status and Income:
	* Application Status: Select the status of your application (Pending, Approved, Rejected).
	* Applicant Income: Enter your annual income.
5. Co-applicant Information (if applicable):
	* Co-applicant Income: Enter the annual income of your co-applicant (if applicable).
6. Finalize your application:
	* Rental Unit Type: Select the type of rental unit you are applying for (Yes, No).

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Enter your first name as it appears on your identification.
* **Last Name** (`last_name`, `text`, required): Enter your last name as it appears on your identification.
* **Email** (`email`, `email`, optional): Enter your email address where you can be reached for communication.
* **Phone** (`phone`, `text`, optional): Enter your phone number where you can be reached.
* **Address** (`address`, `text`, required): Enter the exact address of the rental property.
* **Date of Birth** (`date_of_birth`, `date`, optional): Enter your date of birth in the format MM/DD/YYYY.
* **Social Security Number** (`social_security_number`, `text`, required): Enter your Social Security Number for identification purposes.
* **Rent Amount** (`rent_amount`, `number`, required): Enter the amount of rent you are willing to pay.
* **Rent Period** (`rent_period`, `select_one`, required): Select the period for which you are applying for rent (Month, Quarter, Year).
* **Move-in Date** (`move_in_date`, `date`, required): Enter the date you plan to move in.
* **Move-in Time** (`move_in_time`, `time`, optional): Enter the time of day you plan to move in (e.g., 09:00 AM).
* **Real Estate Type** (`real_estate_type`, `select_multiple`, required): Select the type of property you are applying for (House, Apartment, Condo).
* **Property Type** (`property_type`, `select_multiple`, required): Select whether the property is 'Yes' or 'No' for specific types (e.g., furnished, etc.).
* **Move-in Note** (`move_in_note`, `note`, optional): Enter any additional information about your move-in plans.
* **Application Status** (`application_status`, `select_one`, required): Select the status of your application (Pending, Approved, Rejected).
* **Applicant Income** (`applicant_income`, `number`, required): Enter your annual income.
* **Co-applicant Income** (`coapplicant_income`, `number`, optional): Enter the annual income of your co-applicant (if applicable).
* **Rental Unit Type** (`rental_unit_type`, `select_multiple`, required): Select the type of rental unit you are applying for (Yes, No).
