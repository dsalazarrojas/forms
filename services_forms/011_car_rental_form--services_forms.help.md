# Car Rental Form - Help Guide
## Purpose
This form is designed for car rental customers to provide their information for a successful rental experience. Please fill out the form accurately and comprehensively to ensure a smooth rental process.

## How To Complete This Form
1. Enter the following information:
	* First name and last name
	* Email address
	* Phone number
	* Street address
	* City
	* State
	* Zip code
	* Driver's license number
	* Driver's license state
	* Date of birth
2. Select the pickup and dropoff locations:
	* Pickup location: Choose from "Airport", "Downtown Office", "Suburban Branch", "Hotel Delivery", "Home Delivery", or "Mobile Service"
	* Dropoff location: Select from the same options as the pickup location or choose "One-Way Drop-off"
3. Select the rental details:
	* Pickup date and time
	* Dropoff date and time
	* Vehicle type needed: Choose from "Economy", "Compact", "Mid-Size", "Full-Size", "SUV", "Minivan", "Luxury", or "Premium"
	* Transmission preference: Select "Manual", "Automatic", or "No Preference"
4. Optional fields:
	* Additional driver needed: Select "True" or "False"
	* If "True", enter the additional driver's name
	* Insurance option: Choose from "Company Insurance", "Rental Company Insurance", "My Own Insurance", or "Decline Coverage"
	* Special requests or requirements: Enter any specific needs (e.g., GPS, child seat, accessible vehicle)
	* Payment method: Select "Credit Card", "Debit Card", "Cash", "Corporate Account", "Check", or "Online Booking"

## Field-by-Field Explanation
* **First name** (renter_first_name, text, required): Enter your first name as it appears on your identification.
* **Last name** (renter_last_name, text, required): Enter your last name as it appears on your identification.
* **Email address** (renter_email, email, required): Enter your valid email address.
* **Phone number** (renter_phone, text, required): Enter your phone number.
* **Street address** (renter_address, text, required): Enter your street address.
* **City** (renter_city, text, required): Enter the city where you'll be picking up the vehicle.
* **State** (renter_state, text, required): Enter the state where you'll be picking up the vehicle.
* **Zip code** (renter_zip, text, required): Enter the zip code where you'll be picking up the vehicle.
* **Driver license number** (driver_license_number, text, required): Enter your driver's license number.
* **Driver license state** (driver_license_state, text, required): Enter your driver's license state.
* **Date of birth** (date_of_birth, date, required): Enter your date of birth in MM/DD format.
* **Pickup location** (pickup_location, select_one, required): Choose from the available options for where you'll be picking up the vehicle.
* **Pickup date** (pickup_date, date, required): Enter the date you'll be picking up the vehicle.
* **Pickup time** (pickup_time, time, required): Enter the time you'll be picking up the vehicle.
* **Dropoff location** (dropoff_location, select_one, required): Choose from the available options for where you'll be dropping off the vehicle.
* **Dropoff date** (dropoff_date, date, required): Enter the date you'll be dropping off the vehicle.
* **Dropoff time** (dropoff_time, time, required): Enter the time you'll be dropping off the vehicle.
* **Vehicle type needed** (vehicle_type, select_one, required): Choose the type of vehicle you require.
* **Transmission preference** (transmission_preference, select_one, required): Select the transmission type you prefer.
* **Additional driver needed?** (additional_driver, select_one, required): Select "True" if an additional driver is required, and "False" otherwise.
* **Additional driver name** (additional_driver_name, text, required if "True"): Enter the name of the additional driver.
* **Insurance option** (insurance_option, select_one, required): Choose how you'd like to handle insurance.
* **Special requests or requirements** (special_requests, text, optional): Enter any specific needs or requirements you have.
* **Payment method** (payment_preference, select_one, required): Choose how you'd like to pay for the rental.
* **-- RENTAL INFORMATION --** (rental_information, note, optional): This section is for any additional comments or information about your rental.
