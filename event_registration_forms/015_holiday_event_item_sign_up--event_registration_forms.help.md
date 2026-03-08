# Holiday Event Item Sign Up - Help Guide
## Purpose
The Holiday Event Item Sign Up form is designed to help you sign up to bring or contribute items to the holiday party. Please fill out this form accurately to ensure everyone's needs are met.

## How To Complete This Form
- Please fill out one form per person attending the event.
- Select the event from the list provided.
- Enter your name and email for contact purposes.
- Select the items you are planning to bring.
- Choose any dietary restrictions that apply to you.
- Optionally, describe what you are giving.

## Field-by-Field Explanation

* **Holiday Event Item** (`holiday_event_item`, text, optional): 
  Describe the type of holiday event you are signing up for (e.g., Christmas, New Year's, Thanksgiving).
* **Event** (`event`, select_one, optional): Select the type of holiday event you are attending (e.g., Christmas, New Year's, Thanksgiving).
* **Name** (`name`, text, optional): Enter your name for contact purposes.
* **Email** (`email`, email, optional): Enter your email address for contact purposes.
* **Contact Number** (`phone`, text, optional): Enter your phone number for contact purposes.
* **Items** (`items`, text, optional): List the food and drink items you plan to bring.
* **Item 1** (`item_1`, text, optional): Enter the item you are bringing.
* **Item 2** (`item_2`, text, optional): Enter another item you are bringing.
* **Dietary Needs** (`dietary_restrictions`, select_multiple, optional): Select any dietary restrictions you have (e.g., Gluten, Vegetarian, Vegan, Dairy, Nut).
* **Contribution** (`contribution`, text, optional): Describe what you are giving (optional).
* **Contribution** (second occurrence `items`, text, optional): This field seems to be a duplicate of "Items", but it's labeled as "Contribution". It's possible that it's meant to be a description of what you are giving, but it's not clear.
