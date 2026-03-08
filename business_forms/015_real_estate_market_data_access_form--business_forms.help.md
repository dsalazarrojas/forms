<thinking>
This form is designed to collect real estate market data access information from users. It is intended for business use cases, and its purpose is to provide a structured way to gather necessary details for data access requests. Please ensure that each field is relevant and necessary for your specific use case to avoid duplication of effort.

This guide is to help end-users understand the form's purpose and requirements, and to fill it out accurately and efficiently.

</thinking>

# Real Estate Market Data Access Form - Help Guide

## Purpose
This form is used to collect information for real estate market data access requests.

## How To Complete This Form

To complete this form, please follow these steps:

1. Enter the `address` field with the address of the property you are requesting data for.
2. Select the `location` of the property.
3. Select either "Yes" or "No" to indicate whether you are requesting data for a specific `property_type`.
4. Select multiple options for `property_type_options` if applicable.
5. Enter the `price_range` for the property.
6. Check the `contact_details` box to indicate whether you have contact information for the property owner or agent.
7. Select multiple options for `contact_details_options` if applicable.
8. Enter the `contact` email address of the property owner or agent.
9. Select "Yes" or "No" to indicate whether the contact email is verified.
10. Enter the `phone_number` of the property owner or agent.
11. Select multiple options for `phone_number_options` if applicable.

## Field-by-Field Explanation

* **Address** (`address`, `text`, required): The address of the property for which you are requesting data.
* **Location** (`location`, `text`, required): The location of the property.
* **Property Type** (`property_type`, `select_one`, required): Select "Yes" if you are requesting data for a specific property type.
* **Property Type Options** (`property_type_options`, `select_multiple`, optional): Select multiple options if you are requesting data for multiple property types.
* **Price Range** (`price_range`, `number`, required): Enter the price range for the property.
* **Contact Details** (`contact_details`, `text`, optional): Check this box if you have contact information for the property owner or agent.
* **Contact Details Options** (`contact_details_options`, `select_multiple`, optional): Select multiple options if you have multiple contact details.
* **Contact** (`contact`, `email`, required): Enter the email address of the property owner or agent.
* **Contact Options** (`contact_options`, `select_one`, optional): Select "Yes" if the contact email is verified.
* **Phone Number** (`phone_number`, `text`, optional): Enter the phone number of the property owner or agent.
* **Phone Number Options** (`phone_number_options`, `select_multiple`, optional): Select multiple options if you have multiple phone numbers.
