# email_list_form - Help Guide
## Purpose
The email list form is used to manage email subscriptions for specific email lists or categories. This form allows users to subscribe or unsubscribe from various email lists and categories, providing a centralized interface for email list management.

## How To Complete This Form
To complete this form, follow these steps:

1. Select whether to subscribe or unsubscribe from a specific email list or category using the "Subscribe to List" dropdown field.
2. If you want to subscribe or unsubscribe from multiple email lists or categories, select the corresponding options in the "Subscribe to Category" and "Email List" fields.
3. Enter your email address in the "Email Address" field for confirmation purposes.
4. Confirm your email address by entering it again in the "Confirm Email" field.
5. Optionally, provide your name in the "Name" field.
6. Select the email type from the "Email Type" field.
7. Enter the name of the email list you want to manage in the "Email List Name" field.
8. Select the category from the "Category" field.

## Field-by-Field Explanation
* **Subscribe to List** (`subscribe_to_list`, select_one, required/optional): Select "Yes" to subscribe to the email list or "No" to unsubscribe.
* **Subscribe to Category** (`subscribe_to_category`, select_multiple, required/optional): Select "Yes" for each category you want to subscribe to.
* **Email Address** (`email_address`, email, required/optional): Enter your email address for confirmation purposes.
* **Confirm Email** (`confirm_email`, email, required/optional): Confirm your email address by re-entering it.
* **Name** (`name`, text, required/optional): Optionally, enter your name for reference purposes.
* **Email Type** (`email_type`, select_one, required/optional): Select the type of email you want to subscribe to.
* **Email List Name** (`email_list_name`, text, required/optional): Enter the name of the email list you want to manage.
* **Category** (`category`, select_multiple, required/optional): Select the category you want to subscribe to.
* **Email List** (`email_list`, select_multiple, required/optional): Select the email list you want to subscribe to.
* **Email Type** (`email_type`, select_one, required/optional): Select the type of email you want to subscribe to.
* **Email List** (`email_list`, text, required/optional): Enter the name of the email list you want to manage.

## Tips
* Make sure to select the correct options for the email list or category you want to manage.
* Enter your email address correctly to confirm your subscription.
* If you are unsure about any field, refer to your email list management documentation for further guidance.
