# Vehicle Registration Form - Help Guide
## Purpose
The Vehicle Registration Form is used to collect and store information about a vehicle's registration, including its details, owner's information, and license status.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the vehicle's details, such as its make, model, color, and year of production.
2. Provide the vehicle's license plate and license status (active or inactive).
3. Enter the owner's name, address, phone number, and email address.
4. Provide the owner's date of birth and vehicle's license renewal date (if applicable).
5. Enter any additional information required, such as the vehicle's registration fee and tax ID.

## Field-by-Field Explanation

* **Vehicle Details** (`vehicle_registration_form`, text, required/optional): Fill in the vehicle's registration form number or any other unique identifier for the vehicle.
* **Vehicle Details** (`vehicle_details`, text, required/optional): Enter a brief description of the vehicle, including its make, model, and color.
* **License Plate** (`license_plate`, text, required/optional): Enter the vehicle's license plate number.
* **Year** (`year`, number, required/optional): Enter the vehicle's year of production.
* **Vehicle Make** (`vehicle_make`, select_one, required/optional): Select the vehicle's make from the provided options (e.g., Make 1, Make 2, Make 3).
* **Vehicle Model** (`vehicle_model`, select_multiple, required/optional): Select the vehicle's model from the provided options (e.g., Model 1, Model 2, Model 3).
* **Vehicle Color** (`vehicle_color`, text, required/optional): Enter the vehicle's color.
* **Year of Production** (`year_of_production`, date, required/optional): Enter the vehicle's year of production.
* **License Status** (`license_status`, select_one, required/optional): Select the vehicle's license status (e.g., Active, Inactive).
* **License Number** (`license_number`, text, required/optional): Enter the vehicle's license number.
* **Owner Name** (`owner_name`, text, required/optional): Enter the owner's name.
* **Owner Address** (`owner_address`, text, required/optional): Enter the owner's address.
* **Owner Phone** (`owner_phone`, text, required/optional): Enter the owner's phone number.
* **Owner Email** (`owner_email`, email, required/optional): Enter the owner's email address.
* **Owner Date of Birth** (`owner_date_of_birth`, date, required/optional): Enter the owner's date of birth.
* **License Renewal Date** (`license_renewal_date`, date, required/optional): Enter the vehicle's license renewal date.
* **Registration Fee** (`registration_fee`, number, required/optional): Enter the vehicle's registration fee.
* **Tax ID** (`tax_id`, text, required/optional): Enter the vehicle's tax ID.
