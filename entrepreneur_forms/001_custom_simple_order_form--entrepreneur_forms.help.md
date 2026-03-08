<thinking>As I review the provided YAML fields, I understand that this form is designed to collect order information for custom orders. It appears to be a simple form that allows users to input product IDs, quantities, and delivery instructions for multiple products. The form likely serves as a template for orders that require specific products and quantities. Before proceeding, I confirm that the form's purpose is to streamline the order-taking process and that this guide will cover how to complete it correctly.</thinking>

# Custom Simple Order Form - Help Guide
## Purpose
The Custom Simple Order Form is designed to collect order information for custom orders with multiple products. This form is used to take orders for products with specific IDs, quantities, and delivery instructions.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Product Id** field: Select the product ID(s) that you would like to order.
2. Enter the **Quantity** field: Enter the quantity of the product you would like to order. Please note that this field is optional and is for your convenience.
3. Enter the **Delivery Instructions** field: Provide any special delivery instructions for your order.
4. Select the **Product Ids** field: If you are ordering multiple products, select the corresponding product IDs from the options provided.
5. Select the **Product Quantities** field: If you are ordering multiple products with different quantities, select the corresponding product quantities from the options provided.

## Field-by-Field Explanation
- **Product Id**: A required field that allows you to select the product ID(s) for your order.
  - **Product Id (id: 1)** (`Product Id`, `number`, **Required**): This field is used to select one or more product IDs. Please enter the product IDs separated by commas.
- **Quantity**: An optional field that allows you to enter the quantity of the product you would like to order.
  - **Quantity (id: 2)** (`quantity`, `number`, **Optional**): This field is used to enter the quantity of the product. Please note that if this field is not filled in, the order will be processed with a default quantity.
- **Delivery Instructions**: A field that allows you to provide any special delivery instructions for your order.
  - **Delivery Instructions (id: 3)** (`Delivery Instructions`, `note`, **Optional**): This field is used to provide any special delivery instructions for your order.
- **Product Ids**: A field that allows you to select multiple product IDs for your order.
  - **Product Ids (id: 4)** (`Product Ids`, `select_multiple`, **Optional**): This field is used to select multiple product IDs. Please select the product IDs that you would like to order.
- **Product Quantities**: A field that allows you to select multiple product quantities for your order.
  - **Product Quantities (id: 5)** (`Product Quantities`, `select_multiple`, **Optional**): This field is used to select multiple product quantities. Please select the corresponding product quantities for the products selected in the **Product Ids** field.
