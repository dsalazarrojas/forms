<thinking>
To create a user-facing help guide for the "Add A New Product" form, I need to understand the form's purpose and how to complete it step-by-step. 
The form appears to be used for creating a new product listing on an e-commerce platform or inventory management system.
The form has several sections or "pages" with various fields that require input from the user.
Upon reviewing the form YAML, I notice that it requires fields such as product title, name, category, description, pricing, inventory levels, shipping details, and more.
The form seems to be focused on collecting detailed information about the product, including its internal cost price, retail price, wholesale price, shipping class, and image status.
The user will likely need to input accurate and complete information for each field to ensure the product is properly listed and managed.
To avoid duplication, a check may be required to ensure the product is not already in the system.
</thinking>

# Add A New Product - Help Guide
## Purpose
This guide will walk you through the process of completing the "Add A New Product" form to create a new product listing on the e-commerce platform or inventory management system.

## How To Complete This Form
1. Begin by reviewing the form and selecting the "New Product" option.
2. Scroll down to the first section, "Product Identity".
3. Enter the product's name in the "Product Name" field.
4. Enter the "SKU / Stock Keeping Unit" number.
5. Select the product's category from the dropdown menu in the "Product Category" field.
6. Select the product's brand or manufacturer in the "Brand / Manufacturer" field.
7. Move to the second section, "Pricing and Inventory".
8. Enter the product's internal cost price in the "Cost Price (Internal)" field.
9. Enter the product's retail price (MSRP) in the "Retail Price (MSRP)" field.
10. If applicable, enter the product's wholesale price in the "Wholesale Price" field.
11. Enter the initial stock level in the "Initial Stock Level" field.
12. Enter the reorder threshold in the "Reorder Threshold" field.
13. Move to the third section, "Dimensions and Shipping".
14. Enter the product's weight in the "Product Weight (kg/lb)" field.
15. If applicable, enter the package dimensions in the "Package Dimensions (L x W x H)" field.
16. Select the shipping class from the dropdown menu in the "Shipping Class" field.
17. Move to the fourth section, "Product Details".
18. Select the product's image status from the dropdown menu in the "Product Image Status" field.
19. Enter the target launch date in the "Target Launch Date" field.
20. Finally, enter the name of the user who added the product in the "Added By (User Name)" field.
21. Review all fields for accuracy and completeness before submitting the form.

## Field-by-Field Explanation
* **Product Name** (product_name, text, required): Enter the name of the new product.
* **SKU / Stock Keeping Unit** (sku_number, text, required): Enter the Stock Keeping Unit number for the product.
* **Product Category** (product_category, select_one, required): Select the category for the new product.
* **Brand / Manufacturer** (product_brand, text, required): Enter the brand or manufacturer of the product.
* **Product Description** (product_description, text, required): Provide a detailed description of the product for the website listing.
* **Cost Price (Internal)** (cost_price, number, required): Enter the internal cost price of the product.
* **Retail Price (MSRP)** (retail_price, number, required): Enter the retail price (MSRP) of the product.
* **Wholesale Price** (wholesale_price, number, optional): If applicable, enter the wholesale price of the product.
* **Initial Stock Level** (initial_stock_level, number, required): Enter the current stock level for the product.
* **Reorder Threshold** (reorder_point, number, required): Set the minimum stock level to trigger a reorder alert.
* **Package Dimensions (L x W x H)** (package_dimensions, text, optional): If applicable, enter the package dimensions.
* **Shipping Class** (shipping_class, select_one, required): Select the shipping class for the product.
* **Product Weight (kg/lb)** (product_weight, number, required): Enter the product's weight.
* **Product Image Status** (image_status, select_one, required): Select the product image status.
* **Target Launch Date** (launch_date, date, required): Enter the target launch date for the product.
* **Added By (User Name)** (added_by_user, text, required): Enter the name of the user who added the product.

## Tips
* Ensure all fields are accurate and complete before submitting the form.
* Double-check the product's category, brand, and image status to ensure correct placement and presentation on the platform.
* Review the product's details before submitting to ensure it meets the platform's requirements.
* Avoid duplication by ensuring the product is not already in the system.
