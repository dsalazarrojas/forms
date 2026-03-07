<thinking> We need to ensure the form is properly understood by end-users to avoid any misinterpretation. This form is for sales representatives to collect information about color-street stock products. We'll focus on the essential fields that contribute to the sales order process. The form includes sections for selecting stock products, entering order quantities, and specifying fulfillment details. </thinking>

# Color Street Stock Product List - Help Guide
## Purpose
The Color Street Stock Product List form is used by sales representatives to gather information for sales orders. It is a crucial tool for capturing critical details that contribute to the order fulfillment process.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the sales representative's name.
2. Select the relevant sales order date.
3. Enter the customer's name and email address.
4. Select the stock products from the Classic Collection, Glitter Collection, and Matte Collection.
5. Enter the total sets ordered, order subtotal, and discount amount (if applicable).
6. Calculate the tax amount and shipping cost.
7. Enter the shipping address and delivery preference.
8. Add any order notes (optional).

## Field-by-Field Explanation
* **Sales Representative Name** (`sales_rep_name`, text, required): Enter the name of the sales representative handling the order.
* **Order Date** (`order_date`, date, required): Select the date the order was placed.
* **Customer Name** (`customer_name`, text, required): Enter the name of the customer placing the order.
* **Customer Email** (`customer_email`, email, required): Enter the customer's email address.
* **Classic Collection Items** (`classic_collection_items`, select_multiple, required): Select the desired classic collection products.
* **Glitter Collection Items** (`glitter_collection_items`, select_multiple, required): Select the desired glitter collection products.
* **Matte Collection Items** (`matte_collection_items`, select_multiple, optional): Select matte collection products (not required).
* **Total Sets Ordered** (`total_sets_ordered`, number, required): Enter the total number of sets ordered.
* **Subtotal Amount** (`subtotal_amount`, number, required): Calculate the order subtotal before tax and shipping.
* **Discount Applied** (`discount_applied`, number, optional): Enter any discount amount applied (if applicable).
* **Tax Amount** (`tax_amount`, number, required): Calculate the tax amount.
* **Shipping Cost** (`shipping_cost`, number, required): Enter the shipping and handling fee.
* **Total Amount** (`total_amount`, number, required): Calculate the final order total.
* **Shipping Address** (`shipping_address`, text, required): Enter the complete delivery address.
* **Delivery Preference** (`delivery_preference`, select_one, required): Select the preferred delivery timeframe (Standard, Express, Overnight, or Pick Up at Store).
* **Order Notes** (`order_notes`, text, optional): Add any special instructions for the order.

## Tips
* Make sure to double-check the order details before submitting the form to avoid errors.
* Enter accurate and up-to-date information to ensure smooth order fulfillment.
* If you have any questions or concerns, reach out to your sales representative or customer support.
