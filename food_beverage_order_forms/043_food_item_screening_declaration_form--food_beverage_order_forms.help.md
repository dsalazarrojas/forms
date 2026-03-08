# Food Item Screening Declaration Form - Help Guide
## Purpose
This form is designed to collect information about food items for screening purposes. It is used in the context of a specific event or situation where certain food items need to be screened or checked for certain characteristics.

## How To Complete This Form
1. Fill in the "Event Details" field with the relevant information about the event or situation where the screening is taking place.
2. For each food item, select "Yes" or "No" for the "item_to_screen" field to indicate whether the item is to be screened or not.
3. Provide a brief description of the food item in the "Item Description" field.
4. Select the category and subcategory of the food item from the provided options.

## Field-by-Field Explanation

* **Event Details** (`event_info`): This field is meant to provide context about the event or situation where the screening is taking place. Please provide a brief description of the event.
* **Item to Screen** (`item_to_screen`): This field asks to confirm whether the food item is to be screened or not. Select "Yes" if the item is to be screened, and "No" otherwise.
* **Item Description** (`item_description`): A brief description of the food item to be screened.
* **Item Name** (`item_name`): The name of the food item.
* **Item Name English** (`item_name_english`): The English name of the food item. (Note: This field seems to be redundant with "Item Name")
*   **Food Item Category** (`food_item_category`): Select the category of the food item from the provided options.
*   **Item Subcategory** (`item_subcategory_1`-`item_subcategory_82`): Select the subcategory of the food item from the provided options.

Please note that the fields `item_subcategory_1` to `item_subcategory_82` are repeated many times with no apparent reason. This may be due to the original YAML data structure but it's recommended to review and merge or eliminate them for better usability. 

It is also recommended to consider using more descriptive and less ambiguous labels for these fields. 

Also, consider providing more detailed guidance on the purpose and context of this form for users unfamiliar with it. 

The provided form structure may benefit from being reviewed for better usability and efficiency. 

Please provide feedback and suggest improvements if you need further assistance.
