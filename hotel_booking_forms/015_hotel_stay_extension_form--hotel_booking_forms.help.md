<thinking>
This form is used to request an extension for a hotel stay, allowing guests to provide additional information and details before their stay is extended. It is likely used in a hotel setting where guests have requested a stay extension and need to provide additional context or instructions for the hotel staff to handle the situation.
</thinking>

# Hotel Stay Extension Form - Help Guide
## Purpose
This form is designed to provide guests with a way to request an extension of their hotel stay, allowing them to provide necessary information for the hotel staff to handle their stay accordingly.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in the request_extension field with a detailed explanation of why you would like to extend your stay.
* Select the check_in_date and check_out_date fields to specify the new dates for your extended stay.
* If you are staying in a specific room, enter the room_number in the room_number field.
* Leave any additional comments or instructions in the comments field.
* If you would like to contact the hotel staff directly, you can provide your contact information in the contact_person, contact_phone, and contact_email fields.
* In the assign_to field, select one of the options to specify who you would like to be assigned to handle your stay extension. If you select "assign_to_other", you can specify their name in the assign_to_other field.

## Field-by-Field Explanation
* **Request Extension** (`request_an_extension`, text, optional): Explain why you would like to extend your stay. Be as detailed as possible to ensure the hotel staff can handle your request efficiently.
* **Check In Date** (`check_in_date`, date, optional): Select the new date you would like to check in.
* **Check Out Date** (`check_out_date`, date, optional): Select the new date you would like to check out.
* **Room Number** (`room_number`, text, optional): If you are staying in a specific room, enter its number here.
* **Comments** (`comments`, text, optional): Leave any additional comments or instructions for the hotel staff to handle your stay.
* **Contact Person** (`contact_person`, text, optional): Provide your contact person's name and title.
* **Contact Phone** (`contact_phone`, text, optional): Enter your contact phone number.
* **Contact Email** (`contact_email`, email, optional): Enter your contact email address.
* **Assign to** (`assign_to`, select_one, optional):
	+ **Hotel Staff**: Assign to a general hotel staff member.
	+ **Reception**: Assign to the front reception desk.
	+ **Front Desk**: Assign to the front desk.
	+ **Housekeeping**: Assign to the housekeeping department.
	+ **Management**: Assign to a member of the hotel management team.
	+ **Other**: Select "assign_to_other" to specify another person to be assigned to handle your stay.
* **Assign to Other** (`assign_to_other`, text, optional): If you selected "assign_to_other" in the previous field, enter the name of the person you would like to be assigned to handle your stay extension.
