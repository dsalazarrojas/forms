# Rental General Inquiry Form - Help Guide
## Purpose
This form is designed to gather information from potential renters about their rental needs and preferences.

## How To Complete This Form

To complete this form, please follow these steps:

1. Enter your first name and last name in the "First Name" and "Last Name" fields, respectively.
2. Enter a valid email address in the "Email" field to ensure our team can contact you.
3. Enter your phone number in the "Phone" field.
4. Select the type of property you are interested in from the "Property Type" dropdown menu:
	* Single Family
	* Duplex
	* Townhouse
	* Apartment
5. Choose the size of the property you are interested in from the "Property Size" dropdown menu:
	* Less than 1000 sq. ft.
	* 1000-2000 sq. ft.
	* 2000-3000 sq. ft.
	* More than 3000 sq. ft.
6. Enter the city, region, or address of the location you are interested in.
7. Select the move-in date for the rental period you are interested in.
8. Select the move-out date for the rental period you are interested in.
9. Choose the current property status from the "Property Status" dropdown menu:
	* For Sale
	* For Lease
	* For Rent
10. Enter a message to provide more information about your rental needs.
11. If applicable, attach any supporting documents or photos of the property by selecting "Attachments".

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Enter a valid email address for contact purposes.
* **Phone** (`phone`, text, required): Enter your phone number for follow-up calls.
* **Property Type** (`property_type`, select_one, required): Select the type of property you are interested in (e.g., Single Family, Duplex).
* **Property Size** (`property_size`, select_multiple, required): Choose the size of the property you are interested in (e.g., Less than 1000 sq. ft.).
* **Location** (`location`, text, required): Enter the city, region, or address of the location you are interested in.
* **Move In Date** (`move_in_date`, date, required): Select the move-in date for the rental period you are interested in.
* **Move Out Date** (`move_out_date`, date, required): Select the move-out date for the rental period you are interested in.
* **Property Status** (`property_status`, select_one, required): Choose the current property status (e.g., For Sale, For Lease, For Rent).
* **Message** (`message`, text, required): Enter a brief message to provide more information about your rental needs.
* **Attachments** (`attachments`, select_multiple, optional): If applicable, attach any supporting documents or photos of the property.
