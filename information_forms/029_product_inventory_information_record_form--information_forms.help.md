<thinking>
To create a help guide for the "Product Inventory Information Record Form", we first need to understand its purpose and the fields it contains. This form is used to record information about products, including product ID, description, quantity, location, status, category, color, price, weight, image, and notes. It seems to be used for tracking and managing products in a database.
The form consists of 17 fields, each with its own label, type, and options. We can categorize the fields into different groups, such as "Product ID", "Product Information", "Product Status", "Product Category", "Product Price and Weight", "Product Image and Notes", and "Additional Information". Each group will be explained in detail in the "Field-by-Field Explanation" section.
</thinking>

# Product Inventory Information Record Form - Help Guide
## Purpose
The Product Inventory Information Record Form is used to record and manage product information for tracking and inventory purposes.

## How To Complete This Form
To complete this form, simply fill in the required and optional fields as per the following explanations.

## Field-by-Field Explanation

* **Product ID** (`product_id`, number, required): Enter the unique ID of the product.
* **Product Code** (`product_code`, text, required): Enter a unique code for the product.
* **Product Description** (`product_description`, text, required): Enter a brief description of the product.
* **Product Quantity** (`product_quantity`, number, required): Enter the quantity of the product.
* **Product Location** (`product_location`, text, required): Enter the location of the product.
* **Product Status** (`product_status`, select_one, required): Select the status of the product (Available, On Order, Not Available, Backorder, Discontinued).
* **Product Category** (`product_category`, select_multiple, required): Select one or more categories for the product (Electronics, Clothing, Food, Toys, Sports Equipment).
* **Product Color** (`product_color`, text, required): Enter the color of the product.
* **Product Price** (`product_price`, number, required): Enter the price of the product.
* **Product Weight** (`product_weight`, number, required): Enter the weight of the product.
* **Product Weight Unit** (`product_weight_unit`, text, required): Enter the unit of the product's weight (e.g., kg, lbs).
* **Product Size** (`product_size`, text, required): Enter the size of the product.
* **Product Size Unit** (`product_size_unit`, text, required): Enter the unit of the product's size (e.g., cm, inches).
* **Product Image URL** (`product_image_url`, text, required): Enter the URL of the product's image.
* **Product Video URL** (`product_video_url`, text, required): Enter the URL of the product's video.
* **Product URL** (`product_url`, text, required): Enter the URL of the product's website or manufacturer.
* **Created By** (`created_by`, text, required): Enter the name of the person who created the product.
* **Updated By** (`updated_by`, text, required): Enter the name of the person who updated the product.
* **Created At** (`created_at`, date, required): Enter the date and time the product was created.
* **Updated At** (`updated_at`, date, required): Enter the date and time the product was last updated.
* **Deleted At** (`deleted_at`, date, required): Enter the date and time the product was deleted.
* **Product Image** (`product_image`, text, required): Enter the image of the product.
* **Product Image Alt** (`product_image_alt`, text, required): Enter the alt text for the product's image.
* **Product Notes** (`product_notes`, note, required): Enter any additional notes about the product.
* **Product Notes Alt** (`product_notes_alt`, note, required): Enter the alt text for the product's notes.
