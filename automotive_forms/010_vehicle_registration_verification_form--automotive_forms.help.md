<thinking> This form is designed for vehicle registration verification. The purpose of this form is to collect information about a vehicle for verification purposes. This form is likely used by dealerships, insurance companies, or other industry professionals to verify the details of a vehicle and its owner. The form is intended to be completed with accurate information about the vehicle and its owner, such as VIN, registration number, owner's name and contact details, and verification status.</thinking>

# vehicle_registration_verification_form - Help Guide
## Purpose
This form is used for vehicle registration verification. It helps to collect and verify information about a vehicle and its owner for industry professionals.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the vehicle details section (Vehicle Identification Number, Registration Number, Registration Date, Vehicle Year, Vehicle Make, and Vehicle Model).
2. Enter the vehicle owner's information (Name, Phone Number, Email, and Address).
3. Choose the verification status of the vehicle.

## Field-by-Field Explanation

* **Vehicle Identification Number (VIN)** (`vin`, `text`, required): Enter the Vehicle Identification Number of the vehicle.
* **Registration Number (Reg#)** (`registration_number`, `text`, required): Enter the registration number of the vehicle.
* **Registration Date** (`registration_date`, `date`, required): Enter the date of registration of the vehicle.
* **Vehicle Year** (`vehicle_year`, `number`, required): Enter the year of manufacture of the vehicle.
* **Vehicle Make** (`vehicle_make`, `text`, required): Enter the make of the vehicle (e.g., Toyota, Ford, Honda).
* **Vehicle Model** (`vehicle_model`, `text`, required): Enter the model of the vehicle (e.g., Camry, Civic, Accord).
* **Vehicle Color** (`vehicle_color`, `text`, required): Enter the color of the vehicle.
* **Owner Name** (`owner_name`, `text`, required): Enter the owner's name.
* **Owner Phone Number** (`owner_phone`, `text`, required): Enter the owner's phone number.
* **Owner Email** (`owner_email`, `text`, required): Enter the owner's email address.
* **Owner Address** (`owner_address`, `text`, required): Enter the owner's address.
* **Verification Date** (`verification_date`, `date`, required): Enter the date of verification of the vehicle.
* **Verification Status** (`verification_status`, `select_one`, required): Choose the status of verification of the vehicle (Verified, Not Verified, or Pending).
