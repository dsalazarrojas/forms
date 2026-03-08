<thinking>

This form, called "Affidavit Of Non Operation", seems to be used for individuals to declare that a vehicle is not being operated on public highways. This could be for various reasons such as storage, repair, non-insurance, or other reasons. The form is designed to gather information about the vehicle owner, vehicle details, and declaration of non-operation.

From what I can see, this form is intended for situations where a vehicle is not being used for an extended period. It's likely used for administrative purposes, such as updating vehicle status, reporting a change in ownership, or meeting specific regulatory requirements. Before starting, make sure this is the correct form for your use case and that you have all necessary details to complete it accurately.

This guide is for user-facing guidance, so please be concrete and clear in your explanations.</thinking>

# Affidavit Of Non Operation - Help Guide
## Purpose
This form is for declaring that a vehicle is not being operated on public highways. This includes situations where the vehicle is in storage, being repaired, or not insured.
## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the vehicle owner information section, including full name and current address.
2. Enter the driver's license number and vehicle details, such as make, model, year, and vehicle identification number (VIN).
3. Specify the reason for non-operation, choosing from the options provided or selecting "Other" if the reason is not listed.
4. Provide the storage location and non-operation start date.
5. Make the sworn statement, certifying that the vehicle has not been operated on public highways during the specified period.
6. Sign the form digitally, confirming that the information provided is accurate.

## Field-by-Field Explanation
### Vehicle Owner Information
* **Full Name (Registered Owner)** (`full_name`, text, required): Enter the full name of the vehicle's registered owner.
* **Current Address** (`address`, text, required): Enter the current address where the vehicle is kept.
### Vehicle Details
* **Driver's License Number** (`driver_license`, text, required): Enter the driver's license number associated with the vehicle.
* **Vehicle Make** (`make`, text, required): Enter the vehicle's make, e.g., Toyota, Ford.
* **Vehicle Model** (`model`, text, required): Enter the vehicle's model, e.g., Camry, F-150.
* **Vehicle Year** (`year`, number, required): Enter the vehicle's year of manufacture.
* **Vehicle Identification Number (VIN)** (`vin`, text, required): Enter the vehicle's 17-character Vehicle Identification Number (VIN).
* **License Plate Number** (`license_plate`, text, required): Enter the vehicle's license plate number.
### Declaration of Non-Operation
* **Reason for Non-Operation** (`reason_non_op`, select_one, required): Choose the reason for non-operation from the provided options or select "Other" if not listed.
* **Storage Location Address** (`storage_location`, text, required): Enter the address where the vehicle is kept while not in operation.
* **Non-Operation Start Date** (`non_op_start_date`, date, required): Enter the date when the vehicle stopped being operated.
### Sworn Statement
* **Oath** (`oath`, select_one, required): Select "I Certify" to confirm that the vehicle has not been operated on public highways during the specified period.
* **Date Signed** (`signature_date`, date, required): Enter the date of signing.
* **Signature** (`signature`, select_one, required): Select "Signed" to confirm that the information provided is accurate.
