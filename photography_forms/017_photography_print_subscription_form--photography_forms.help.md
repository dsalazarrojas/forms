# <string> - Help Guide
## Purpose
This form is designed to collect information about print orders. It includes fields to specify the print order details, subscription plans, material, quantity, shipping costs, and billing information.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the required fields with the relevant information.
2. Select the appropriate options for each field according to your needs.
3. Ensure that you have answered all the required fields.

## Field-by-Field Explanation
- **Print Order** (`print_order`, number, required: false): Enter the print order number if it is available.
- **Subscription Plan** (`subscription_plan`, select_multiple, required: false): Choose whether you are subscribed to a plan.
- **Print Size** (`print_size`, select_one, required: false): Select the size of the print.
- **Print Material** (`print_material`, select_one, required: false): Choose the material of the print.
- **Quantity** (`quantity`, number, required: false): Enter the quantity of prints required.
- **Shipping Cost** (`shipping_cost`, number, required: false): Enter the shipping cost.
- **Billing Cycle** (`billing_cycle`, select_one, required: false): Choose the billing cycle.
- **Billing Frequency** (`billing_frequency`, select_one, required: false): Select the billing frequency.
- **Order Frequency** (`order_frequency`, select_one, required: false): Choose the order frequency.
- **Notes** (`notes`, note, required: false): Enter any additional notes about your order.
