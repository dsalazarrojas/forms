<thinking>
We should check that the form is only used for its intended purpose, which is for users to request registration counter supplies. If the user tries to use the form for a different purpose (e.g., asking for a non-existent item), we should prevent it from being submitted. We should also prevent the user from submitting the same request form multiple times. To do this, we can check the form's fields for consistency with the expected values. 

The expected values for this form are:
* A valid email address
* A valid phone number
* A category (either "Supply" or "Other")
* A non-zero quantity (if category is "Supply")
* A description that matches the chosen category

We will prevent the form from being submitted if any of these checks fail.
</thinking>

# Registration Counter Supply Request Form - Help Guide
## Purpose
The Registration Counter Supply Request Form is used to request registration counters or supplies from the inventory management system. This form helps ensure that users can request necessary items for upcoming events or meetings.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in your First Name.
2. Fill in your Last Name.
3. Enter a valid email address that we can use to contact you about your request.
4. Enter your phone number so we can contact you if needed.
5. Select the Category of the item you are requesting (either "Supply" or "Other").
6. Enter the quantity of the item you are requesting.
7. Provide a brief Description of the item you are requesting.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Enter a valid email address.
* **Phone Number** (`phone_number`, text, required): Enter your phone number.
* **Category** (`category`, select_one, optional): Choose the category of the item you are requesting:
	+ **Supply**: Select this option if you are requesting a registration counter or supply.
	+ **Other**: Select this option if you are requesting a different type of item.
* **Quantity** (`quantity`, number, optional): Enter the quantity of the item you are requesting.
* **Description** (`description`, note, optional): Provide a brief description of the item you are requesting.
* **Submitted By** (`submitted_by`, email, required): Enter your email address so we can contact you about your request.
