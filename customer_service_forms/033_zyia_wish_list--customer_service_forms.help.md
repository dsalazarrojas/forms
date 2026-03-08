<thinking>This form is designed to allow customers to create and manage their wish lists. Each field in the form has a specific purpose and requirement for completion. To prevent duplication and ensure accurate information is entered, we should verify that the form purpose is well understood by customers before they start filling it out.</thinking>

# Zyia Wish List - Help Guide
## Purpose
The Zyia Wish List form is used for customers to create and manage their wish lists. It is a tool to help customers organize and track their wishes.

## How To Complete This Form
To complete this form, follow these steps:

* Select whether you have a wish list by choosing "Yes" or "No" from the "wish_list" field.
* If you have a wish list, enter your customer name, email, phone number, and a brief description of your wish list in the "customer", "name", "email", "phone", and "description" fields respectively.
* Indicate the type of items you wish to include in your list by selecting "Yes" or "No" from the "wish_item_type" field.
* Prioritize your wish list by selecting "Yes" or "No" from the "wish_item_priority" field.
* If you have a wish list ID, select "Yes" or "No" from the "wish_list_id" field.
* Enter your customer message and choose a category and subcategory for your wish list from the "customer_message", "customer_service_form_category", and "customer_service_form_subcategory" fields respectively.
* Finally, enter the date and time you created your wish list and the date and time it was last updated in the "created_at", "updated_at", "customer_service_form_last_updated_at", "customer_service_form_created_by", "customer_service_form_updated_by", and "customer_service_form_updated_at" fields.

## Field-by-Field Explanation

* **wish_list**: (`wish_list`, select_multiple, optional) Select whether you have a wish list by choosing "Yes" or "No".
* **customer**: (`customer`, text, optional) Enter your customer name.
* **name**: (`name`, text, optional) Enter the name of your wish list.
* **email**: (`email`, email, optional) Enter your email address associated with your wish list.
* **phone**: (`phone`, text, optional) Enter your phone number associated with your wish list.
* **wish_item**: (`wish_item`, text, optional) Enter a description of your wish list.
* **description**: (`description`, text, optional) Enter a brief description of your wish list.
* **date**: (`date`, date, optional) Enter the date you created your wish list.
* **time**: (`time`, time, optional) Enter the time you created your wish list.
* **note**: (`note`, note, optional) Enter any additional notes about your wish list.
* **wish_item_type**: (`wish_item_type`, select_one, optional) Indicate the type of items you wish to include in your list by selecting "Yes" or "No".
* **wish_item_priority**: (`wish_item_priority`, select_one, optional) Prioritize your wish list by selecting "Yes" or "No".
* **wish_list_id**: (`wish_list_id`, select_one, optional) If you have a wish list ID, select "Yes" or "No".
* **customer_message**: (`customer_message`, text, optional) Enter any additional comments or messages about your wish list.
* **customer_service_form_category**: (`customer_service_form_category`, select_one, optional) Choose a category for your wish list from the options provided.
* **customer_service_form_subcategory**: (`customer_service_form_subcategory`, select_one, optional) Choose a subcategory for your wish list from the options provided.
* **created_by**: (`created_by`, text, optional) Enter the name of the person who created your wish list.
* **updated_by**: (`updated_by`, text, optional) Enter the name of the person who last updated your wish list.
* **created_at**: (`created_at`, date, optional) Enter the date and time you created your wish list.
* **updated_at**: (`updated_at`, date, optional) Enter the date and time your wish list was last updated.
* **customer_service_form_status**: (`customer_service_form_status`, select_one, optional) Choose the status of your wish list from the options provided.
* **customer_service_form_last_updated_at**: (`customer_service_form_last_updated_at`, date, optional) Enter the date and time your wish list was last updated.
* **customer_service_form_created_by**: (`customer_service_form_created_by`, text, optional) Enter the name of the person who created your wish list.
* **customer_service_form_updated_by**: (`customer_service_form_updated_by`, text, optional) Enter the name of the person who last updated your wish list.
* **customer_service_form_updated_at**: (`customer_service_form_updated_at`, date, optional) Enter the date and time your wish list was last updated.
