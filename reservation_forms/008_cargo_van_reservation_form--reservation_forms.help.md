# Cargo Van Reservation Form - Help Guide
## Purpose
This form is used to create a reservation for a cargo van. It gathers information about the reservation date, customer details, vehicle type, and other necessary information to ensure a smooth and efficient reservation process.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the required fields marked as "required".
2. Choose the correct van type and pickup and return locations from the provided options.
3. Enter the correct pickup and return dates and times.
4. Select the purpose of your rental and any additional services you need.
5. Choose your payment method and any special requests or comments you have.

## Field-by-Field Explanation

* **Reservation Number** (`reservation_number`, text, optional): A confirmation number for future reference, if you are modifying a reservation.
* **Reservation Date** (`reservation_date`, date, required): The date of the booking.
* **Customer Information** (`customer_info`, note, optional): A note about the primary renter's details.
* **Full Name** (`customer_name`, text, required): The legal name of the renter.
* **Email Address** (`customer_email`, email, required): The email address for reservation confirmation.
* **Phone Number** (`customer_phone`, text, required): The primary contact number of the renter.
* **Street Address** (`customer_address`, text, required): The complete address of the renter.
* **City** (`customer_city`, text, required): The city name.
* **State or Province** (`customer_state`, text, required): The state or province where the renter resides.
* **Zip or Postal Code** (`customer_zip`, text, required): The postal code.
* **Date of Birth** (`date_of_birth`, date, required): Must meet the minimum age requirement for renting a van.
* **Driver License Information** (`driver_license`, note, optional): A note about the driver's license.
* **Driver License Number** (`license_number`, text, required): The license number.
* **License State or Province** (`license_state`, text, required): The state or province where the license was issued.
* **License Expiration Date** (`license_expiry`, date, required): Must be current.
* **Rental Details** (`rental_details`, note, optional): A note about the reservation specifics.
* **Pickup Location** (`pickup_location`, select_one, required): The location where you will collect the van.
* **Pickup Date** (`pickup_date`, date, required): The date you want to collect the van.
* **Pickup Time** (`pickup_time`, time, required): The preferred time for collection.
* **Return Location** (`return_location`, select_one, required): The location where you will return the van.
* **Return Date** (`return_date`, date, required): The date you want to return the van.
* **Return Time** (`return_time`, time, required): The preferred return time.
* **Van Type Needed** (`van_type`, select_one, required): The size of the cargo van you need.
* **Purpose of Rental** (`rental_purpose`, select_one, required): The reason you are renting the van.
* **Will There Be Additional Drivers** (`additional_drivers`, select_one, required): If there are additional drivers, select "True".
* **Additional Driver Names** (`additional_driver_names`, text, optional): List the names of additional drivers.
* **Insurance Information** (`insurance_info`, note, optional): A note about the insurance coverage.
* **Insurance Coverage Type** (`insurance_type`, select_one, required): The type of insurance coverage you have.
* **Insurance Provider Name** (`insurance_provider`, text, optional): The company name of the insurance provider.
* **Policy Number** (`policy_number`, text, optional): The insurance policy number.
* **Additional Services** (`additional_services`, select_multiple, optional): Optional services you may need.
* **Payment Information** (`payment_info`, note, optional): A note about the billing method.
* **Payment Method** (`payment_method`, select_one, required): The method of payment.
* **Special Requests or Comments** (`special_requests`, text, optional): Any special requests or comments.
