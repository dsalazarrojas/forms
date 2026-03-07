<thinking>...</thinking>

## Cargo Booking Form - Help Guide

## Purpose
This form is used to request cargo bookings for shipping and delivery services. It collects essential information about the shipment, including shipper and consignee details, cargo specifications, and logistics preferences. Completing this form ensures that all relevant information is gathered for efficient and accurate shipping processing.

## How To Complete This Form
To fill out the form, follow these steps:

1. Ensure you have all required information handy, including shipper and consignee details, cargo specifications, and logistics preferences.
2. Select the correct shipping speed and payment method.
3. Fill in all required fields, which are marked as such in the form.
4. Review the form carefully to ensure accuracy before submission.

## Field-by-Field Explanation

* **Booking Reference Number** (`booking_reference`, text, optional): Enter a unique reference number for the booking if you have one. If not, it will be auto-generated.
* **Booking Date** (`booking_date`, date, required): Enter the date of the booking request.
* **Shipper Information** (`shipper_info`, note, optional): Enter any additional details about the shipper, such as their contact information.
* **Shipper Company Name** (`shipper_name`, text, required): Enter the full legal name of the shipper company.
* **Shipper Contact Person** (`shipper_contact`, text, required): Enter the primary contact person's name.
* **Shipper Email Address** (`shipper_email`, email, required): Enter the email address for booking confirmations.
* **Shipper Phone Number** (`shipper_phone`, text, required): Enter the direct contact number for the shipper.
* **Pickup Address** (`pickup_address`, text, required): Enter the complete address for pickup.
* **Consignee Information** (`consignee_info`, note, optional): Enter any additional details about the consignee, such as their contact information.
* **Consignee Company Name** (`consignee_name`, text, required): Enter the full legal name of the consignee company.
* **Consignee Contact Person** (`consignee_contact`, text, required): Enter the primary contact person's name.
* **Consignee Email Address** (`consignee_email`, email, required): Enter the email address for delivery notifications.
* **Consignee Phone Number** (`consignee_phone`, text, required): Enter the direct contact number for the consignee.
* **Delivery Address** (`delivery_address`, text, required): Enter the complete address for delivery.
* **Cargo Details** (`cargo_details`, note, optional): Enter any additional information about the shipment, such as specifications.
* **Type of Cargo** (`cargo_type`, select_one, required): Select the primary type of cargo.
* **Total Weight in Kilograms** (`total_weight`, number, required): Enter the combined weight of all items in kilogrammes.
* **Total Volume in Cubic Meters** (`total_volume`, number, required): Enter the combined volume measurement in cubic meters.
* **Number of Packages** (`number_of_packages`, number, required): Enter the total package count.
* **Package Dimensions** (`package_dimensions`, text, optional): Enter the length x width x height for the largest packages.
* **Special Handling Requirements** (`special_handling`, select_multiple, optional): Select any special handling requirements, such as fragile, signature required, etc.
* **Transportation Schedule** (`transport_schedule`, note, optional): Enter any preferred transportation schedule.
* **Preferred Pickup Date** (`preferred_pickup_date`, date, required): Enter the preferred pickup date.
* **Expected Delivery Date** (`preferred_delivery_date`, date, required): Enter the expected delivery date.
* **Service Type** (`service_type`, select_one, required): Select the shipping speed.
* **Payment Information** (`payment_info`, note, optional): Enter any billing details or payment information.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method.
* **Account Number** (`account_number`, text, optional): Enter the account number if using a company account.
* **Additional Instructions or Comments** (`additional_instructions`, text, optional): Enter any special requests or information.

## Tips
* Double-check all fields for accuracy before submitting the form.
* Ensure you have all required information before completing the form.
* If you are unsure about any field, please ask for clarification.
