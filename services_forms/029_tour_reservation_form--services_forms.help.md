<thinking>
We need to ensure that the tour reservation form is filled out correctly to provide accurate information and avoid confusion.
The form seems to be a general form for reservations, but it's essential to clarify the purpose, required fields, and any potential ambiguities.
</thinking>

# tour_reservation_form - Help Guide
## Purpose
The tour reservation form is designed to collect information from customers about their tour preferences and details. This form will be used to create a record of their tour reservation.

## How To Complete This Form
To complete this form correctly, follow these steps:
1. Fill in the required information (if any).
2. Select your tour package options from the dropdown menu.
3. Enter your tour date and time, if applicable.
4. Add any notes or feedback about your reservation.
5. Review and submit the form.

## Field-by-Field Explanation
* **First name** (`first_name`, `text`, required/optional): Enter your first name here.
* **Last name** (`last_name`, `text`, required/optional): Enter your last name here.
* **Email** (`email`, `email`, required/optional): Enter your email address here. This will help us keep in touch with you regarding your tour reservation.
* **Select Package** (`select_package`, `select_one`, required/optional): Choose one package option from the list to proceed with your reservation.
* **Selected Package** (`selected_package`, `select_multiple`, required/optional): Choose multiple package options from the list, if applicable. Note that this field is not explicitly labeled as "optional" but it seems to be a multiple selection field.
* **Date** (`date`, `date`, required/optional): If you have a specific tour date in mind, enter it here. If not, you can leave this field blank.
* **Time** (`time`, `time`, required/optional): If you have a specific tour time, enter it here. If not, you can leave this field blank.
* **Note** (`note`, `note`, required/optional): Write any notes or special requests regarding your tour reservation here.
* **Feedback** (`feedback`, `text`, required/optional): Share any feedback or comments about your tour experience here.
* **Questions** (`questions`, `text`, required/optional): If you have any questions about your tour, write them here.
* **Comments** (`comments`, `text`, required/optional): Leave any additional comments or information about your tour here.
* **Phone** (`phone`, `text`, required/optional): Enter your phone number here. This will help us contact you about your tour reservation.
* **Comments** (`comments`, `text`, required/optional): This field seems to be a duplicate of the "Comments" field above. If you have any additional comments, consider using the previous field instead.
