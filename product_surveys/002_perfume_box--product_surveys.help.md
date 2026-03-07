<thinking>

**Perfume Box Form Purpose**
This form is intended to help create, manage, and categorize perfume boxes. It captures metadata for the product, including its title, category, description, ID, category, sale status, visit frequency, size, and color.

To avoid duplication, please check if a similar perfume box with the same category, size, and color already exists in the database. If it does, the form will redirect you to the existing record. To avoid creating a new box with an already existing title or ID, ensure these fields are unique.

**Perfume Box - Help Guide**
## Purpose
The form is used to create, update, or categorize perfume boxes.

## How To Complete This Form
To fill out this form, follow the steps below:

*   Enter the title of the perfume box.
*   Choose the category of the perfume box (Product Surveys or Other).
*   Provide a description of the perfume box in 5-10 sentences.
*   Enter the ID of the perfume box.
*   Select the category for the perfume box.
*   Indicate if the product is for sale.
*   Choose how often you visit the perfume store (Once a week, 2-3 times a week, Daily, or Never).
*   Select the size of the perfume box (Small, Medium, Large).
*   Select the color of the perfume box (Red, Blue, Green, Yellow).

## Field-by-Field Explanation

*   **What is the name of this perfume box?** (`form_title`, `text`, Required): Enter a unique title for the perfume box to distinguish it from other products.
*   **What category does this perfume box belong to?** (`category`, `select_one`, Optional): Choose between Product Surveys and Other to categorize the perfume box.
*   **Describe the product in 5-10 sentences.** (`description`, `text`, Optional): Provide detailed information about the perfume box to facilitate its identification and categorization.
*   **What is the ID of this perfume box?** (`form_id`, `number`, Optional): Enter a unique ID for the perfume box to track it in the database.
*   **What is the category for this perfume box?** (`form_category`, `text`, Optional): Select a category for the perfume box to categorize it with other products.
*   **Is the product for sale?** (`form_is_for_sale`, `checkbox`, Optional): Check the box if the perfume box is available for sale.
*   **How often do you visit our perfume store?** (`form_visit_frequency`, `select_one`, Optional): Select how often you visit the store (Once a week, 2-3 times a week, Daily, or Never).
*   **What is the size of this perfume box?** (`form_size`, `select_multiple`, Optional): Choose the size of the perfume box (Small, Medium, Large).
*   **What is the color of this perfume box?** (`form_color`, `select_multiple`, Optional): Select the color of the perfume box (Red, Blue, Green, Yellow).

**Tips**

*   Ensure the title and ID of the perfume box are unique to avoid duplication.
*   Choose categories and size/color options that accurately describe the product.
*   Be concise and clear in the description to facilitate easy identification.
*   Select accurate and relevant options for the frequency of visits to reflect your actual behavior.
*   Use the checkboxes and select options to provide clear and unambiguous responses.
