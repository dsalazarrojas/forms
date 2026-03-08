<thinking>
This form is used for users to sign up for food gatherings, allowing them to provide their name, email, and other relevant information. The form is likely used for internal management purposes, such as tracking attendee information. To ensure accurate completion, please review the form carefully. Note that some fields are marked as required, which means they must be filled in for the form to be submitted successfully. 
</thinking>

# Food Signup for Gatherings - Help Guide
## Purpose
This form is used to collect information from users for food gatherings.

## How To Complete This Form
1. Fill in the required information, which includes your name, email, dish, serving size, date, time, and the person who created and updated the form.
2. Choose your dietary preferences (Vegetarian, Vegan, Gluten-free, or None) from the options for the "diet" field.
3. Select whether you want to save or not save your entry in the "save" field.
4. Confirm that your entry is correct in the "confirm" field.
5. Provide any additional comments or notes in the "comments" field.
6. Choose the category and tags for your entry in the "category" and "tags" fields.
7. Finally, submit the form to complete your signup for the food gathering.

## Field-by-Field Explanation
* **Name** (`name`, `text`, required): Enter your name as you would like it to be displayed.
* **Email** (`email`, `email`, required): Enter your email address for contact purposes.
* **Dish** (`dish`, `text`, required): Select the dish you plan to bring to the gathering.
* **Serving Size** (`serving_size`, `number`, required): Indicate how many people the dish serves.
* **Diet** (`diet`, `select_multiple`, optional): Choose your dietary preferences (Vegetarian, Vegan, Gluten-free, or None).
* **Note** (`note`, `text`, optional): Provide any additional comments or notes about your dish.
* **Save** (`save`, `select_one`, required): Select whether you want to save your entry in the form.
* **Confirm** (`confirm`, `select_one`, required): Confirm that your entry is correct.
* **Date** (`date`, `date`, required): Select the date of the food gathering.
* **Time** (`time`, `time`, required): Select the time of the food gathering.
* **Category** (`category`, `text`, optional): Choose a category for your dish.
* **Tags** (`tags`, `text`, optional): Add any relevant tags for your dish.
* **Created At** (`created_at`, `time`, optional): This field is for internal management purposes and is not applicable to users.
* **Updated At** (`updated_at`, `time`, optional): This field is for internal management purposes and is not applicable to users.
* **Deleted At** (`deleted_at`, `time`, optional): This field is for internal management purposes and is not applicable to users.
* **Deleted By** (`deleted_by`, `select_one`, required): Select who deleted the form (Self or Others).
* **Comments** (`comments`, `text`, optional): Add any comments or notes about the food gathering.
* **Deleted By At** (`deleted_by_at`, `time`, optional): This field is for internal management purposes and is not applicable to users.
* **Created By** (`created_by`, `select_one`, required): Select who created the form (Self or Others).
* **Updated By** (`updated_by`, `select_one`, required): Select who last updated the form (Self or Others).
* **Comments By** (`comments_by`, `select_one`, required): Select who made the comments on the food gathering (Self or Others).
