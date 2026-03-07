<thinking>
The form is a product order form, used to capture information for merchandising mannequins. The form is used to collect order details such as form information, customer information, shipping details, and product order information. This form is likely used for a retail or e-commerce business that sells mannequins. The purpose of this form is to ensure accurate and complete order information is captured for processing and fulfillment. This form is not a duplicate or redundant form, and its purpose is well-defined in the provided YAML.
</thinking>

# merchandising_mannequin_order_form - Help Guide
## Purpose
This form is used to capture order details for merchandising mannequins, ensuring accurate and complete information is collected for processing and fulfillment.

## How To Complete This Form

1. Fill out the **Form Info** page with any relevant details about the order.
2. On the **Custom Requests** page, enter any special requests or instructions for the order.
3. On the **Customer Info** page, enter the customer's contact information.
4. On the **Shipping Info** page, enter the shipping details, including the shipping method and date.
5. On the **Mannequin Orders** page, select the type of mannequin being ordered.
6. On the **Mannequin Orders** page, select the shipping method for the mannequin.
7. Enter the **Shipping Date** for the order.
8. Select the **Shipping Time** for the order.
9. Enter the **Shipping Address** for the order.
10. Enter any **Customer Notes** for the order.
11. Enter any **Order Notes** for the order.
12. On the **Mannequin Details** page, enter the height of the mannequin.
13. On the **Mannequin Details** page, select the type of mannequin being ordered.
14. On the **Mannequin Details** page, select the color of the mannequin.
15. On the **Mannequin Details** page, select the material of the mannequin.
16. On the **Mannequin Details** page, select the size of the mannequin.
17. On the **Mannequin Details** page, select the brand of the mannequin.
18. On the **Mannequin Details** page, select the model of the mannequin.
19. Enter the **Mannequin Price** for the order.
20. Enter the quantity of mannequins being ordered.
21. Enter the **Total Amount** for the order.
22. On the **Payment Details** page, select the payment method.
23. On the **Payment Details** page, select the payment terms.
24. Enter any **Additional Info** for the order.

## Field-by-Field Explanation

* **Form Info** (`form_info`, text, optional): Enter any relevant details about the order.
* **Custom Requests** (`custom_requests`, text, optional): Enter any special requests or instructions for the order.
* **Customer Info** (`customer_info`, text, optional): Enter the customer's contact information.
* **Shipping Info** (`shipping_info`, text, optional): Enter the shipping details, including the shipping method and date.
* **Mannequin Orders** (`mannequin_orders`, select_one, required): Select the type of mannequin being ordered.
* **Shipping Method** (`shipping_method`, select_one, optional): Select the shipping method for the mannequin.
* **Shipping Date** (`shipping_date`, date, optional): Enter the shipping date for the order.
* **Shipping Time** (`shipping_time`, time, optional): Select the shipping time for the order.
* **Shipping Address** (`shipping_address`, text, optional): Enter the shipping address for the order.
* **Customer Notes** (`customer_notes`, text, optional): Enter any customer notes for the order.
* **Order Notes** (`order_notes`, text, optional): Enter any order notes for the order.
* **Mannequin Height** (`mannequin_height`, text, optional): Enter the height of the mannequin.
* **Mannequin Type** (`mannequin_type`, select_multiple, optional): Select the type of mannequin being ordered.
* **Mannequin Color** (`mannequin_color`, select_multiple, optional): Select the color of the mannequin.
* **Mannequin Material** (`mannequin_material`, select_multiple, optional): Select the material of the mannequin.
* **Mannequin Size** (`mannequin_size`, select_multiple, optional): Select the size of the mannequin.
* **Mannequin Brand** (`mannequin_brand`, select_one, optional): Select the brand of the mannequin.
* **Mannequin Model** (`mannequin_model`, select_one, optional): Select the model of the mannequin.
* **Mannequin Price** (`mannequin_price`, number, required): Enter the price of the mannequin.
* **Mannequin Quantity** (`mannequin_quantity`, number, required): Enter the quantity of mannequins being ordered.
* **Total Amount** (`total_amount`, number, required): Enter the total amount for the order.
* **Payment Method** (`payment_method`, select_multiple, optional): Select the payment method.
* **Payment Terms** (`payment_terms`, select_multiple, optional): Select the payment terms.
* **Additional Info** (`additional_info`, text, optional): Enter any additional information for the order.
