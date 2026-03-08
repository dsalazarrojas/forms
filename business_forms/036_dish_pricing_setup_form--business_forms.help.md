# dish_pricing_setup_form - Help Guide
## Purpose
This form is designed to setup pricing information for dishes, including setting a dish's name, price, status, and other relevant details. It allows users to configure the price and status of a dish, track who last updated it, and assign it to a specific user.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the name of the dish in the "Dish Name" field.
2. Enter the price of the dish in the "price" field.
3. Select the status of the dish from the options "Active", "Disabled", or "Removed".
4. Optionally, select the user who last updated the price from the "Price Updated By" field.
5. Enter the date the price was last updated in the "Price Update Date" field.
6. Enter a brief description of the dish in the "Dish Description" field.
7. Enter the time the price was last updated in the "Price Updated Time" field.
8. Add any notes or comments about the dish in the "notes" field.
9. Optionally, select the user assigned to manage the dish from the "Assigned User" field.
10. Enter the name and email of the assigned user in the "Assigned User Name" and "Assigned User Email" fields, respectively.
11. Enter the phone number of the assigned user in the "Assigned User Phone" field.
12. Enter the user who created the dish in the "Created By" field.
13. Enter the date the dish was created in the "Created Date" field.
14. Enter the user who last updated the dish in the "Updated By" field.
15. Enter the date the dish was last updated in the "Updated Date" field.
16. Optionally, select the user who created the dish from the "Created By User" field.
17. Optionally, select the user who last updated the dish from the "Updated By User" field.
18. Enter the time the dish was created in the "Created Time" field.
19. Enter the time the dish was last updated in the "Updated Time" field.

## Field-by-Field Explanation
* **Dish Name** (`dish_name`, text, required): Enter the name of the dish you want to setup the pricing for.
* **price** (`price`, number, required): Enter the price of the dish.
* **status** (`status`, select_one, required): Select the status of the dish as "Active", "Disabled", or "Removed".
* **Price Updated By** (`price_updated_by`, select_multiple, required): Optionally, select the user who last updated the price.
* **Price Update Date** (`price_update_date`, date, required): Enter the date the price was last updated.
* **Dish Description** (`dish_description`, text, required): Enter a brief description of the dish.
* **Price Updated Time** (`price_updated_time`, time, required): Enter the time the price was last updated.
* **notes** (`notes`, note, required): Add any notes or comments about the dish.
* **Assigned User** (`assigned_user`, select_one, required): Optionally, select the user assigned to manage the dish.
* **Assigned User Name** (`assigned_user_name`, text, required): Enter the name of the assigned user.
* **Assigned User Email** (`assigned_user_email`, email, required): Enter the email of the assigned user.
* **Assigned User Phone** (`assigned_user_phone`, text, required): Enter the phone number of the assigned user.
* **created_by** (`created_by`, text, required): Enter the user who created the dish.
* **Created Date** (`created_date`, date, required): Enter the date the dish was created.
* **updated_by** (`updated_by`, text, required): Enter the user who last updated the dish.
* **Updated Date** (`updated_date`, date, required): Enter the date the dish was last updated.
* **Created By User** (`created_by_user`, select_one, required): Optionally, select the user who created the dish.
* **Updated By User** (`updated_by_user`, select_one, required): Optionally, select the user who last updated the dish.
* **Created Time** (`created_time`, time, required): Enter the time the dish was created.
* **Updated Time** (`updated_time`, time, required): Enter the time the dish was last updated.
