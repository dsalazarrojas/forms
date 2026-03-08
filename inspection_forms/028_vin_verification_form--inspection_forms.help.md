# vin_verification_form - Help Guide
## Purpose
The vin_verification_form is designed to collect and validate Vehicle Identification Numbers (VINs) for vehicles being brought in for inspection. This form helps ensure accurate and efficient vehicle identification and validation processes.

## How To Complete This Form
1. Fill out the Vehicle Information page with details about the vehicle being inspected.
2. Enter the VIN number in the VIN Entry field.
3. Select the Vehicle Type and VIN Type from the corresponding drop-down menus.
4. Enter the Vehicle Year if applicable.
5. Confirm the VIN Length.
6. Choose the VIN Check result as per the vehicle details.

## Field-by-Field Explanation
* **Vehicle Information** (`vehicle_information`, text, optional): Enter the make, model and year of the vehicle being inspected.
* **VIN Entry** (`vin_entry`, text, optional): Enter the Vehicle Identification Number (VIN) of the vehicle being inspected.
* **VIN Check** (`vin_check`, select_one, required): Select how the VIN was obtained:
	+ Select: If the VIN was obtained from a valid source.
	+ Clear: If the VIN is not verified.
	+ Check: If the VIN was obtained from a check.
* **Vehicle Type** (`vehicle_type`, select_one, required): Select the type of vehicle being inspected:
	+ Car
	+ Truck
	+ Motorcycle
* **VIN Type** (`vin_type`, select_one, required): Select the type of VIN:
	+ 17-digit VIN
	+ 17-digit VIN with Check
	+ 17-digit VIN without Check
	+ 12-digit VIN
	+ 12-digit VIN with Check
	+ 12-digit VIN without Check
* **VIN Length** (`vin_length`, select_one, required): Select the length of the VIN:
	+ 17
	+ 12
* **Vehicle Year** (`vehicle_year`, number, optional): Enter the year of the vehicle being inspected.
* **Make** (`make`, text, optional): Enter the make of the vehicle being inspected.
* **VIN Check Result** (`vin_check_result`, select_one, required): Select the result of the VIN check:
	+ Valid
	+ Invalid
* **Notes** (`notes`, text, optional): Enter any additional notes about the vehicle being inspected.

## Tips
* Ensure that the VIN number is accurate and complete.
* Verify the VIN type and length according to the vehicle's documentation.
* Enter any additional notes about the vehicle being inspected.
