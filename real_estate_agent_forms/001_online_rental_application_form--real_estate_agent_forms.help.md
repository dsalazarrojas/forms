<thinking>

This form is designed to collect information from tenants about their rental application. It's meant to be completed by individuals applying to rent a property. The form is divided into several sections, each asking for different types of information, including tenant information, contact information, rental history, employment status, and lease details. The form is likely used by property managers or landlords to assess the suitability of a potential tenant.

The fields are mostly dropdown menus or text fields, with a mix of required and optional fields. Some fields ask for multiple selections, while others are single selections. The form's purpose is to gather enough information to make an informed decision about the rental application.

To the best of my knowledge, this form is designed for a single-page application process, but it's possible that some fields could be related to other pages or sections not present in this schema. Please let me know if I'm incorrect.

</thinking>

# Online Rental Application Form - Help Guide
## Purpose
This form is designed for tenants to provide information about their rental application. It's meant to be completed by individuals applying to rent a property.

## How To Complete This Form

1. Review the form sections and identify the information that needs to be completed.
2. Fill out the form with the requested information.
3. Make sure to submit the completed form to the property manager or landlord for review.

## Field-by-Field Explanation

* **Tenant Information (1)** (`tenant_info`, text, optional)
	+ Enter your name and any other relevant information about yourself.
* **Contact Information (2)** (`contact_info`, text, optional)
	+ Provide your contact details, such as phone number, email, or address.
* **Rental History (3)** (`rental_history`, select_one, optional)
	+ Select 'Yes' if you have rental history, 'No' otherwise.
* **Previous Renters (4)** (`rental_history_1`, select_multiple, optional)
	+ If you answered 'Yes' to the previous question, select all previous renters from the list.
* **Previous Landlords (5)** (`rental_history_2`, select_multiple, optional)
	+ If you answered 'Yes' to the previous question, select all previous landlords from the list.
* **Property History (6)** (`property_history`, text, optional)
	+ Describe your previous rental history, if any.
* **Rental Application (7)** (`rental_application`, select_one, optional)
	+ Select 'Yes' if you're applying for a rental, 'No' otherwise.
* **Rental Application 1 (8)** (`rental_application_1`, select_multiple, optional)
	+ If you answered 'Yes' to the previous question, select all rental applications from the list.
* **Rental Application 2 (9)** (`rental_application_2`, select_multiple, optional)
	+ If you answered 'Yes' to the previous question, select all rental applications from the list.
* **Employment Status (10)** (`employment_status`, select_one, optional)
	+ Select 'Active' if you're currently employed, 'Inactive' otherwise.
* **Employment Status 1 (11)** (`employment_status_1`, select_multiple, optional)
	+ If you answered 'Active' to the previous question, select all employment statuses from the list.
* **Rental Property (12)** (`rental_property`, number, optional)
	+ Enter the address of the rental property you're applying for.
* **Lease Start Date (13)** (`lease_start_date`, date, optional)
	+ Enter the start date of the lease.
* **Lease End Date (14)** (`lease_end_date`, date, optional)
	+ Enter the end date of the lease.
* **Tenant Signature (15)** (`tenant_signature`, text, optional)
	+ Sign the form with your signature.
