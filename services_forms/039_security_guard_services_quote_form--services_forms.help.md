<thinking>

This form appears to be designed for customers or clients to request quotations from security guard services for various services they might require, such as event or facility security, security consulting, etc. The purpose of this form is likely for the security guard services company to gather necessary information for a quote, which includes the contact information, the services needed, the dates of the services, an expected quote, assigned contact information, and additional comments or notes.

To ensure this form serves its intended purpose, it's essential to verify that the "services_needed" field is correctly set as "true" (required) to ensure that users are aware that they need to specify what services they require. The "assigned_to" and "contact_method" fields are both required to be filled in for the form to be complete. It's also a good practice to set a minimum and maximum limit for the "quote" field to avoid potential issues with numeric data.

To prevent duplication and improve the user experience, it would be beneficial to validate user input, for example, by checking for invalid date formats or ensuring that the "quote" field only accepts numbers within a valid range.

</thinking>

# Security Guard Services Quote Form - Help Guide
## Purpose
The Security Guard Services Quote Form is designed to gather essential information for a quote from customers or clients for security guard services they might need.

## How To Complete This Form
To complete this form, please follow these steps:
- Fill in your contact information in the `contact_info` field. This will include your name, email address (for the assigned contact person), and any other relevant contact method.
- Specify the services you require in the `services_needed` field by selecting the services you need from the list provided.
- Enter the dates for the services required in the `dates` field.
- Enter your expected quote for the services in the `quote` field. Please note that this field is required.
- Enter your assigned contact person's email address in the `assigned_to` field.
- Enter the company you are representing (if applicable) in the `company` field.
- Enter your address in the `address` field.
- Enter your city in the `city` field.
- Enter your state in the `state` field.
- Enter your zip code in the `zip` field.
- Fill in any additional comments or notes in the `notes` field.

## Field-by-Field Explanation
- **Contact Info (contact_info)** (`text`, required): Enter your contact information, including name, email address, and any other relevant contact method.
- **Services Needed (services_needed)** (`select_multiple`, required): Specify the services you require from security guard services by selecting from the list provided.
- **Dates (dates)** (`time`, required): Enter the dates for the services required.
- **Expected Quote (quote)** (`number`, required): Enter your expected quote for the services.
- **Assigned To (assigned_to)** (`email`, required): Enter the email address of the assigned contact person.
- **Contact Method (contact_method)** (`text`, required): Enter any other contact method, such as phone number or fax.
- **Company (company)** (`text`, optional): Enter the name of the company you are representing (if applicable).
- **Address (address)** (`text`, optional): Enter your physical address.
- **City (city)** (`text`, optional): Enter the city you are located in.
- **State (state)** (`text`, optional): Enter the state you are located in.
- **Zip (zip)** (`text`, optional): Enter your zip code.
- **Notes (notes)** (`note`, optional): Enter any additional comments or notes for the security guard services.
