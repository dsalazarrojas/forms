# Curbside Pickup Menu - Help Guide
## Purpose
The Curbside Pickup Menu form is designed to allow customers to easily select and order curbside pickup options from a restaurant or store. It provides a user-friendly interface to manage menu items, prices, and other relevant details.

## How To Complete This Form
To complete the Curbside Pickup Menu form, follow these steps:

1. Enter the menu item ID (optional) to identify the item in your store's database.
2. Enter the price of the menu item.
3. Add a brief description of the menu item.
4. Enter the URL of the image associated with the menu item.
5. Select the type of menu item (e.g., type1, type2, or type3).
6. Choose the price range (e.g., range1, range2) for the menu item.
7. Add any special instructions for the menu item.
8. Upload or enter the URL of the menu image.
9. Enter the name of the store.

## Field-by-Field Explanation
- **menu_item_id** (`menu_item_id`, number, optional): Enter the unique ID of the menu item in your store's database.
- **price** (`price`, text, optional): Enter the price of the menu item.
- **description** (`description`, text, optional): Add a brief description of the menu item to help customers make informed decisions.
- **image_url** (`image_url`, text, optional): Enter the URL of the image associated with the menu item.
- **menu_item_type** (`menu_item_type`, select_one, optional): Select the type of menu item (e.g., type1, type2, or type3) to categorize it.
- **price_range** (`price_range`, select_multiple, optional): Choose one or more price ranges (e.g., range1, range2) for the menu item.
- **special_instructions** (`special_instructions`, text, optional): Add any special instructions or notes for the menu item.
- **menu_image** (`menu_image`, text, optional): Upload or enter the URL of the menu image.
- **store_name** (`store_name`, text, optional): Enter the name of the store offering the curbside pickup option.
