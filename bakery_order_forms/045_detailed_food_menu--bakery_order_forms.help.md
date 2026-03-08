<thinking>
To create a user-facing help guide for the "detailed_food_menu" form, I'll first review the provided YAML fields and consider how users will interact with the form. The form has multiple pages or groups, each containing a series of fields with varying types (text, number, select_one, select_multiple, date, time, email, and note). The form appears to be used for creating and managing items in a bakery or food-related business.

To determine the purpose of the form, I'll consider the field types and names. It seems to be a general form for creating and listing food items with various attributes like name, price, description, image, and status. The form also includes fields for contact information, dates, and time, which might be for scheduling or follow-up purposes. The status fields might be used for tracking the availability or stock status of items.

The form has no explicit "required" field that indicates a mandatory field for form submission. However, based on the context, I'd assume that the form is intended to create and store detailed information about food items. The presence of date and time fields suggests that the form might also be used for scheduling or listing events. Given this, I'll assume that users need to complete all the fields to ensure accurate item listing and potential follow-up actions.

To create a user-facing help guide that's concrete, concise, and practical, I'll break down the guide into sections as instructed. Here's the final output:

# detailed_food_menu - Help Guide
## Purpose
The detailed_food_menu form is used to create and manage food items in a bakery or food-related business. It includes fields for item attributes like name, price, description, image, and status, as well as contact information and dates/time for scheduling or follow-up purposes.

## How To Complete This Form
To complete the form, follow these steps:

1. Select the "Menu" page.
2. Fill in the item attributes like "Item Number", "Name", "Price", "Description", "Category", and "Status".
3. Add contact information for follow-up, such as "Email" and "Phone".
4. Schedule events or dates/time for item listing using "Date" and "Time" fields.
5. Save your changes.

## Field-by-Field Explanation

* **Menu** (`form_group_1`, text, optional): Select the "Menu" page to start.
* **Item Number** (`item_number`, text, optional): Enter a unique identifier for the food item.
* **Name** (`item_name`, text, optional): Enter the name of the food item.
* **Price** (`item_price`, number, optional): Enter the price of the food item.
* **Description** (`item_description`, text, optional): Enter a brief description of the food item.
* **Category** (`item_category`, select_one, optional): Select a category for the food item (e.g., Bakery, Confectionery, Pastry, Cakes, Cookies).
* **Status** (`item_status`, select_multiple, optional): Select the status of the food item (e.g., Available, Sold Out, Discontinued, Backordered).
* **Image** (`item_image`, text, optional): Enter an image URL or description for the food item.
* **Notes** (`item_notes`, note, optional): Add any additional notes about the food item.
* **Weight** (`item_weight`, number, optional): Enter the weight of the food item.
* **Date** (`item_date`, date, optional): Schedule an event or listing date for the food item.
* **Time** (`item_time`, time, optional): Schedule an event or listing time for the food item.
* **Email** (`item_email`, email, optional): Enter a contact email for follow-up purposes.
* **Phone** (`item_phone`, text, optional): Enter a contact phone number for follow-up purposes.
* **Date 2** (`item_date_2`, date, optional): Schedule another event or listing date for the food item.
* **Time 2** (`item_time_2`, time, optional): Schedule another event or listing time for the food item.
* **Email 2** (`item_email_2`, email, optional): Enter another contact email for follow-up purposes.
* **Phone 2** (`item_phone_2`, text, optional): Enter another contact phone number for follow-up purposes.
* **Status 2** (`item_status_2`, select_multiple, optional): Select another status for the food item (e.g., Available, Sold Out, Discontinued, Backordered).
* **Status 3** (`item_status_3`, select_multiple, optional): Select another status for the food item (e.g., Available, Sold Out, Discontinued, Backordered).
* **Status 4** (`item_status_4`, select_multiple, optional): Select another status for the food item (e.g., Available, Sold Out, Discontinued, Backordered).
* **Status 5** (`item_status_5`, select_multiple, optional): Select another status for the food item (e.g., Available, Sold Out, Discontinued, Backordered).
* **Status 6** (`item_status_6`, select_multiple, optional): Select another status for the food item (e.g., Available, Sold Out, Discontinued, Backordered).
* **Status 7** (`item_status_7`, select_multiple, optional): Select another status for the food item (e.g., Available, Sold Out, Discontinued, Backordered).
* **Status 8** (`item_status_8`, select_multiple, optional): Select another status for the food item (e.g., Available, Sold Out, Discontinued, Backordered).
