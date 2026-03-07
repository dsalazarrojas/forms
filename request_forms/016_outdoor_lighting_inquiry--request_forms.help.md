<thinking>
We will create a user-facing help guide for the "Outdoor Lighting Inquiry" form to ensure that end-users understand its purpose and how to complete it effectively. This guide will cover the form's purpose, the step-by-step process to fill it out, and a detailed explanation of each field to avoid any confusion.
</thinking>

# Outdoor Lighting Inquiry - Help Guide
## Purpose
The "Outdoor Lighting Inquiry" form is designed to gather information from users requesting outdoor lighting services. This form aims to collect relevant details about the user's contact information, address, and service requirements to provide an efficient and effective lighting solution. Fill out this form to initiate a quote or request for outdoor lighting services.
## How To Complete This Form
1. Fill in your Contact Name and Contact Email on the first page.
2. Enter your Address Line 1 and Address Line 2, if applicable.
3. Indicate whether you need a specific service (e.g., "Yes" or "No") on "Type of Service" and choose from the provided options or type in an "Other" service if not listed.
4. If you selected "Other" on "Type of Service", provide a detailed description in the "Other" field.
5. Add any additional Service Notes, if necessary.
## Field-by-Field Explanation
* **Contact Name** (`contact_name`, `text`, required: false): Enter your name as it appears on your identification or business card.
* **Contact Email** (`contact_email`, `email`, required: false): Type in your valid email address to receive updates and quotes from us.
* **Address Line 1** (`address_line1`, `text`, required: false): Enter the first line of your address.
* **Address Line 2** (`address_line2`, `text`, required: false): If your address has multiple lines, enter the second line here.
* **Type of Service** (`service_type`, `select_one`, required: false): Choose one or more services you need:
	+ Exterior
	+ Electrical Work
	+ Lighting Design
	+ Other
* **Type of Service** (`service_type_options`, `select_multiple`, required: false): Select one or more services from the above list.
* **Other** (`service_type_other`, `text`, required: false): If you selected "Other" on "Type of Service", describe the service you need in detail.
* **Other (Additional Description)** (`service_type_other_other`, `text`, required: false): Provide a more detailed description of your service requirements, if necessary.
* **Service Notes** (`service_notes`, `note`, required: false): Add any comments or special requests related to your lighting service inquiry.
