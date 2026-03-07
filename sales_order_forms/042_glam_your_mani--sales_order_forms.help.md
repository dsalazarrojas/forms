<thinking>
This form is designed to collect information from customers regarding their orders. It is likely intended for a sales or order tracking system. To ensure that the form is being filled out correctly, it is essential to understand its purpose and each field's requirements. I will now create a user-facing help guide for the form, based on the provided YAML fields.
</thinking>

# Glam Your Mani - Help Guide
## Purpose
This form is designed to collect information from customers regarding their orders.

## How To Complete This Form
To complete this form, follow these steps:

* Fill out each field with the required information.
* Make sure to select the correct product name from the options provided.
* Enter the correct quantity and price for the order.
* Ensure that all required fields are filled out.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, optional): Enter the customer's name.
* **Order Date** (`order_date`, date, optional): Enter the date of the order.
* **Product Name** (`product_name`, select_one, required): Select the correct product from the options provided.
* **Quantity** (`quantity`, number, optional): Enter the number of units ordered.
* **Price** (`price`, number, optional): Enter the price of the order.
* **Order Total** (`order_total`, number, optional): The system will automatically calculate this value based on the order details.
* **Customer Info** (page 1, text, optional): Enter any additional information about the customer.
* **Order Details** (page 2, text, optional): Enter any additional information about the order.
* **Order Total** (page 3, text, optional): This is the total of the order, calculated automatically by the system.

Note: The form has three pages, each with text fields. These pages are not explicitly labelled, so I have used the page IDs to reference them.

## Tips
* Make sure to fill out all required fields to ensure accurate order tracking.
* Double-check the product name and quantity before submitting the form.
* If you have any questions or concerns, contact the sales team for assistance.
