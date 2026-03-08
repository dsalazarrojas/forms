# Tenant Rental Application Form - Help Guide
## Purpose
The Tenant Rental Application Form is designed to collect information from tenants for rental property applications. This form helps landlords and property managers to assess the applicant's identity, rental preferences, and property requirements. It's essential to complete this form accurately to increase the chances of securing a rental property.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your personal details in the first page, including your first name, last name, email, and phone number.
2. Enter your move-in date, move-in location, and move-out date (if applicable) on the second page.
3. Choose the type of property you are interested in, its size, and rent term on the third page.
4. Provide your security deposit amount and lease agreement details on the fourth page.
5. Sign the form digitally to confirm your rental application.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required): Please enter your first name as it appears on your ID. Ensure it matches your official documents.
* **Last Name** (`last_name`, `text`, required): Enter your last name as it appears on your ID. Ensure it matches your official documents.
* **Email** (`email`, `email`, required): Enter a valid email address for communication. This will help us contact you regarding your application.
* **Phone** (`phone`, `text`, optional): Enter your phone number for easy communication.
* **Address** (`address`, `text`, required): Provide the address you would like to rent, including street, city, and zip code.
* **Rental Start Date** (`rental_start_date`, `date`, required): Enter the date you would like to start renting the property.
* **Rental End Date** (`rental_end_date`, `date`, optional): Enter the date you would like to end the rental period (if applicable).
* **Rent Amount** (`rent_amount`, `number`, required): Enter the amount you are willing to pay for rent.
* **Rent Frequency** (`rent_frequency`, `select_one`, required): Choose how often you would like to pay rent (Weekly, Monthly, or Quarterly).
* **Rent Term** (`rent_term`, `select_multiple`, required): Select the duration of the rental period (6 months, 12 months, 18 months, or 24 months).
* **Move In Date** (`move_in_date`, `date`, optional): Enter the date you would like to move in.
* **Move In Time** (`move_in_time`, `time`, optional): Enter the time you would like to move in.
* **Property Type** (`property_type`, `select_one`, required): Choose the type of property you are interested in (Apartment, House, or Condo).
* **Property Size** (`property_size`, `text`, required): Enter the size of the property you are interested in.
* **Move Out Date** (`move_out_date`, `date`, optional): Enter the date you would like to move out.
* **Move Out Time** (`move_out_time`, `time`, optional): Enter the time you would like to move out.
* **Landlord Name** (`landlord_name`, `text`, required): Enter the name of the landlord or property manager.
* **Renter Status** (`renter_status`, `select_one`, required): Choose your current renter status (Active, Passive, or Inactive).
* **Move In Location** (`move_in_location`, `text`, optional): Enter the location where you would like to move in.
* **Move Out Location** (`move_out_location`, `text`, optional): Enter the location where you would like to move out.
* **Security Deposit** (`security_deposit`, `number`, required): Enter the amount of security deposit.
* **Lease Agreement** (`lease_agreement`, `text`, optional): Provide any additional lease agreement details.
* **Rental Agreement Date** (`rental_agreement_date`, `date`, optional): Enter the date of the rental agreement.
* **Tenant Signature** (`tenant_signature`, `date`, optional): A digital signature to confirm your rental application.
* **Landlord Signature** (`landlord_signature`, `date`, optional): A digital signature from the landlord or property manager to confirm the rental agreement.
