<Thinking>...</Thinking>

The purpose of the Pet Portrait Order Form is to collect information from customers to create a custom pet portrait. This form is likely intended for pet owners who want to commission a custom painting or drawing of their pet. By completing this form, customers can provide details about themselves and their pet, including contact information, pet details, and special requests. This information will be used to create the portrait.

# Pet Portrait Order Form - Help Guide
## Purpose
The Pet Portrait Order Form is designed to collect information from customers to create a custom pet portrait.

## How To Complete This Form

1. Start by filling in your First Name, Last Name, and Email address in the corresponding fields. These are the primary contact details that will be used to contact you regarding your order.
2. Enter your Phone Number if you would like to be contacted by phone.
3. Provide the name of your pet, as you would like it to be displayed in the portrait.
4. Select the type of pet you have by choosing from the options for Pet Type.
5. Choose whether or not you would like to include a photo of your pet with the order.
6. Select the size and medium options for the photo that will be used as the basis for the portrait. Note that the size options are "Yes" or "No", and medium options are also "Yes" or "No", but you can select multiple medium options.
7. If you have any special requests for the portrait, enter them in the Special Request field.
8. Choose the date you would like to receive the completed order.
9. Choose the date you would like to review the order (if needed).
10. Select the orientation of the portrait. This could be "Yes" for landscape or "No" for portrait orientation.
11. If you have a special orientation preference, provide a description in the Other (please specify) field.

## Field-by-Field Explanation

* **First Name** (`pet_portrait_order_form`, text, required): Enter your first name as you would like it to be displayed on the order.
* **Last Name** (`last_name`, text, required): Enter your last name as you would like it to be displayed on the order.
* **Email** (`email`, email, required): Enter your email address for contact purposes.
* **Phone Number** (`phone`, text, optional): Enter your phone number if you would like to be contacted by phone.
* **Pet's Name** (`pet_name`, text, required): Enter the name of your pet as you would like it to be displayed in the portrait.
* **Pet Type** (`pet_type`, select_one, required): Select the type of pet you have, such as "Yes" for yes or "No" for no.
* **Photo Type** (`photo_type`, select_one, required): Choose whether or not you would like to include a photo of your pet with the order.
* **Photo Size** (`photo_size`, select_multiple, optional): Select the size of the photo, such as "Yes" for yes or "No" for no.
* **Medium** (`photo_medium`, select_multiple, optional): Select the medium of the photo, such as "Yes" for yes or "No" for no.
* **Special Request** (`special_request`, text, optional): Enter any special requests you have for the portrait.
* **Order Date** (`order_date`, date, required): Choose the date you would like to receive the completed order.
* **Review Date** (`review_date`, date, required): Choose the date you would like to review the order.
* **Orientation** (`photo_orientation`, select_one, required): Select the orientation of the portrait, such as "Yes" for yes or "No" for no.
* **Other** (`photo_orientation_other`, text, optional): If you have a specific orientation preference, provide a description in this field.
* **Other (please specify)** (`photo_orientation_other_hint`, text, required): Enter any additional information about your preferred orientation if "Other" was selected.
