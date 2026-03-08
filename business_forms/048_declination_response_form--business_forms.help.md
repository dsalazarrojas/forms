# declination_response_form - Help Guide
## Purpose
This guide is designed to help users complete the declination_response_form.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide the reason for the declination in the **declined_reason** field.
2. Enter the date of the event that was declined in the **event_date** field.
3. If the event is confirmed or not, select the corresponding option in the **is_confirmed** field.
4. If the decline is confirmed, enter the date of confirmation in the **confirm_date** field.
5. Provide any additional details regarding the reason for declination in the **reason_details** field.
6. If necessary, enter the department responsible for the decline in the **department** field.
7. Select the category of the decline in the **reason_category** field.
8. Select the subcategory of the decline in the **subcategory** field.
9. Enter the name of the contact person in the **contact_person** field.
10. Enter the email of the contact person in the **contact_email** field.
11. Enter the phone number of the contact person in the **contact_phone** field.
12. Confirm whether the decline was confirmed or not in the **confirm_by** field.

## Field-by-Field Explanation
* **declined_reason** (`declined_reason`, text, required): Enter the reason for the declination.
* **event_date** (`event_date`, date, required): Enter the date of the event that was declined.
* **is_confirmed** (`is_confirmed`, text, required): Select whether the event is confirmed or not.
* **confirm_date** (`confirm_date`, date, optional): If the event is confirmed, enter the date of confirmation.
* **reason_details** (`reason_details`, text, optional): Provide any additional details regarding the reason for declination.
* **department** (`department`, select_one, optional): Select the department responsible for the decline.
* **reason_category** (`reason_category`, select_one, optional): Select the category of the decline.
* **subcategory** (`subcategory`, select_one, optional): Select the subcategory of the decline.
* **contact_person** (`contact_person`, text, optional): Enter the name of the contact person.
* **contact_email** (`contact_email`, email, optional): Enter the email of the contact person.
* **contact_phone** (`contact_phone`, text, optional): Enter the phone number of the contact person.
* **confirm_by** (`confirm_by`, select_one, optional): Confirm whether the decline was confirmed or not.
