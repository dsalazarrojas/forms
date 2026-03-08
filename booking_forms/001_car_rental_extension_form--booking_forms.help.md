# Car Rental Extension Form - Help Guide

## Purpose
This form is designed for customers to extend their existing car rental reservations. It collects necessary information to confirm the extension and ensure a smooth process.

## How To Complete This Form
1. Fill out the personal information section with your correct name, contact email, and phone number as they appear on your driver's license.
2. Enter the reference number of your current reservation.
3. Select a new return date for your rental car.
4. Indicate the number of additional days you would like to add to your reservation.
5. If you have a preferred vehicle type, select one from the options provided.
6. Confirm if you have a payment method on file that can be used for the extension.
7. If you have any special instructions or additional requests, provide them in the "Additional requests or notes" field.

## Field-by-Field Explanation
* **Customer full name** (`customer_full_name`, text, required): Enter your full name as it appears on your driver's license.
* **Contact email** (`contact_email`, email, required): Provide a valid email address for confirmation purposes.
* **Contact phone number** (`contact_phone`, text, required): Enter your phone number, including your country code, if applicable.
* **Current reservation id** (`current_reservation_id`, text, required): Enter the reference number of your current reservation.
* **New return date** (`extend_until_date`, date, required): Select the date you would like to return the vehicle.
* **Additional days requested** (`additional_days_requested`, number, required): Indicate the number of extra days you want to add to your reservation.
* **Vehicle preference** (`vehicle_preference`, select_one, optional): Choose a vehicle type that suits your needs (if different from the original booking).
* **Payment method on file** (`payment_method_on_file`, select_one, required): Confirm if you have a payment method on file that can be used for this extension.
* **Additional requests or notes** (`additional_requests`, text, optional): Provide any special instructions or additional requirements you may have.

## Tips
- Make sure to enter accurate and valid information to avoid delays or cancellations.
- If you have any special requirements, such as additional equipment or vehicle type changes, specify them in the "Additional requests or notes" field.
- Confirm that your payment method on file is up-to-date and sufficient for the extension.
