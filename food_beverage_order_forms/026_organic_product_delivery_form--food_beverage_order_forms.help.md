<thinking>
This form is designed to allow users to place orders for organic products. The form is intended for customers to provide information about the products they want to order. To avoid duplication, this form should not be filled out multiple times. 
- Check if a similar form has already been completed for the current customer, and if so, redirect the user to the confirmation page instead of allowing them to fill it out.
- Ensure that customers only have the option to select products that are in stock and available for delivery.
- The form's fields and their types are designed to be user-friendly and intuitive, providing a balance between simplicity and data collection needs.
- The "Select Another Product" fields (select_multiple types) are designed to allow customers to order multiple products in a single order.
- The "Product" fields (select_one types) are designed to allow customers to select a single product to be ordered.
- The "Delivery Date" and "Delivery Time" fields are designed to allow customers to choose a specific delivery date and time for their order.
- The "Address" field is designed to allow customers to enter their delivery address.
- The "Phone" field is designed to allow customers to enter their contact phone number.
- The "Email" field is designed to allow customers to enter their contact email address.
- The "Note" field is designed to allow customers to include any additional comments or notes about their order.
- The "Select Another Product" fields are designed to allow customers to add additional products to their order.
</thinking>

# organic_product_delivery_form - Help Guide
## Purpose
The organic_product_delivery_form is designed to allow customers to place orders for organic products. This form will guide you through the process of selecting products, specifying delivery details, and adding any additional comments or notes.

## How To Complete This Form
1. Select the products you wish to order by choosing from the provided options for each "Select Another Product" field. You can choose multiple products in the "Select Another Product" fields.
2. Fill out the "Delivery Date" field with the specific date you would like to receive your order.
3. Fill out the "Delivery Time" field with the specific time you would like to receive your order.
4. Enter your delivery address in the "Address" field.
5. Enter your contact phone number in the "Phone" field.
6. Enter your contact email address in the "Email" field.
7. Add any additional comments or notes about your order in the "Note" field.
8. Review your order summary to ensure it is accurate before submitting.

## Field-by-Field Explanation
- **1. Product** (`Product`, `select_one`, required): Choose one organic product from the provided options (Organic Milk, Organic Juice, Organic Yogurt).
- **2. Delivery Date** (`Delivery Date`, `date`, required): Enter the specific date you would like to receive your order.
- **3. Delivery Time** (`Delivery Time`, `time`, required): Enter the specific time you would like to receive your order.
- **4. Address** (`Address`, `text`, required): Enter your delivery address.
- **5. Phone** (`Phone`, `text`, required): Enter your contact phone number.
- **6. Email** (`Email`, `email`, required): Enter your contact email address.
- **7. Note** (`Note`, `note`, required): Add any additional comments or notes about your order.
- **8. Select Another Product** (`Select Another Product`, `select_multiple`, required): Choose multiple organic products from the provided options (Organic Cheese, Organic Eggs, Organic Chicken).
- **9. Select Another Product** (`Select Another Product`, `select_one`, required): Choose one organic product from the provided options (Organic Apples, Organic Bananas, Organic Oranges).
- **10. Select Product** (`Select Product`, `select_one`, required): Choose one organic product from the provided options (Organic Carrots, Organic Broccoli, Organic Spinach).
- **11. Select Another Product** (`Select Another Product`, `select_multiple`, required): Choose multiple organic products from the provided options (Organic Rice, Organic Quinoa, Organic Lentils).
- **12. Select Product** (`Select Another Product`, `select_one`, required): Choose one organic product from the provided options ('Yes', 'No').
- **13. Select Another Product** (`Select Another Product`, `select_multiple`, required): Choose multiple organic products from the provided options (Organic Celery, Organic Kale, Organic Tomatoes).
- **14. Select Another Product** (`Select Another Product`, `select_multiple`, required): Choose multiple organic products from the provided options (Organic Avocado, Organic Strawberries, Organic Pears).
