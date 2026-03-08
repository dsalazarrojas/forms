<thinking>
The purpose of this form is to collect information from shippers for cargo check-in purposes. This form is used to ensure accurate and efficient cargo check-in, which helps the logistics team to track and manage cargo effectively. To avoid duplication, shippers should only use this form to check in new cargo, not to update existing ones.
</thinking>

# Freight Cargo Check In Form - Help Guide
## Purpose
The Freight Cargo Check In Form is used to collect information from shippers for new cargo check-in purposes.

## How To Complete This Form
To complete this form, follow these steps:
- Enter your name and address as the shipper in the corresponding fields.
- Enter your phone number and email address for contact purposes.
- Provide detailed information about the cargo, including its weight, dimensions, and type.
- If you have any notes about the cargo, enter them in the "Cargo Notes" field.
- Select the cargo type from the provided options.
- Finally, sign and date the form to confirm your information is correct.

## Field-by-Field Explanation

* **Freight Cargo Details** (`cargo_details`, `text`, required: false): Enter a brief description of the cargo, such as its name, product description, or any other relevant information.
* **Shopper Details** (`shipper_details`, `text`, required: false): Enter a brief description of yourself or your company as the shipper, including your role or position.
* **Shopper Address** (`shipper_address`, `text`, required: false): Enter your address in the format "street, city, state, zip".
* **Shopper Phone** (`shipper_phone`, `text`, required: false): Enter your phone number in the format "XXX-XXX-XXXX" or "XXX-XXX-XXXXX" for international numbers.
* **Shopper Email** (`shipper_email`, `text`, required: false): Enter your email address for contact purposes.
* **Cargo Weight** (`cargo_weight`, `number`, required: false): Enter the weight of the cargo in units of pounds or kilograms.
* **Cargo Dimensions** (`cargo_dimensions`, `text`, required: false): Enter the dimensions of the cargo in feet and inches, or any other unit of measurement suitable for your cargo.
* **Cargo Notes** (`cargo_notes`, `note`, required: false): Enter any additional notes or comments about the cargo, such as handling instructions or special requirements.
* **Cargo Type** (`cargo_type`, `select_multiple`, required: false): Select the type of cargo from the provided options, such as "General Cargo", "Perishable", "Hazardous", etc.
* **Shopper Signature** (`shipper_signature`, `text`, required: false): Sign and date the form to confirm your information is correct.
* **Shopper Date** (`shipper_date`, `date`, required: false): Date the form to confirm the date of check-in.
