# Carpet Order Request Form - Help Guide
## Purpose
This form is designed to collect detailed information from customers to process their carpet orders efficiently and effectively.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Fill in your **Customer Details** section with accurate information about yourself, including your full name, email address, and phone number.
2.  In the **Product Selection** section, select the right carpet product and enter its ID or SKU.
3.  Choose your **Order Options** according to your needs:
    *   **Materials Only**: You will receive the carpet materials without installation.
    *   **Materials and Installation**: You will receive the carpet materials and installation services.
    *   **Samples Only**: You will receive carpet samples only.
4.  If you require custom cutting, select **Yes** in the **Custom Cutting Required?** field.
5.  In the **Payment and Shipping** section, choose your preferred payment method and shipping method.

## Field-by-Field Explanation

*   **Full Name** (`customer_name`, text, required): Enter your full name.
*   **Email Address** (`customer_email`, email, required): Enter your email address.
*   **Phone Number** (`customer_phone`, text, required): Enter your phone number.
*   **Billing Address** (`billing_address`, text, required): Enter your billing address for the invoice.
*   **Shipping Address** (`shipping_address`, text, optional): Enter your shipping address if different from your billing address.
*   **Carpet Product ID or SKU** (`product_id`, text, required): Enter the carpet product's ID or SKU found on the sample or catalog.
*   **Quantity Ordered (Square Yards)** (`quantity_ordered_sqyd`, number, required): Enter the quantity of carpet ordered in square yards.
*   **Roll Width Preference** (`roll_width`, select\_one, required): Choose your preferred roll width (12ft, 13ft 6in, 15ft, or Other).
*   **Selected Color Name** (`carpet_color`, text, required): Confirm the color name from the provided sample.
*   **Padding SKU** (`padding_sku`, text, optional): Choose the padding product SKU if needed.
*   **Padding Quantity (Square Yards)** (`padding_quantity_sqyd`, number, optional): Enter the padding quantity in square yards if needed.
*   **Include Installation Kit?** (`installation_kit`, select\_one, required): Choose whether to include the installation kit (True or False).
*   **Order Type** (`order_type`, select\_one, required): Choose how you want to handle the installation (Materials Only, Materials and Installation, or Samples Only).
*   **Custom Cutting Required?** (`custom_cutting_required`, select\_one, required): Choose whether custom cutting is required (True, False, or Needs Discussion).
*   **Preferred Payment Method** (`payment_method`, select\_one, required): Choose your preferred payment method (Credit Card, Bank Transfer, Financing, or Pay on Delivery).
*   **Shipping Method** (`shipping_method`, select\_one, required): Choose your preferred shipping method (Standard Freight, Priority, or Customer Pickup).
*   **Target Delivery Date** (`estimated_delivery_date`, date, optional): Enter your target delivery date if applicable.
*   **Special Delivery Instructions** (`additional_instructions`, text, optional): Enter any special delivery instructions.
*   **I Confirm My Order Details and Agree to the Sales Terms** (`order_ack`, select\_one, required): Confirm your order details and agree to the sales terms by typing "True".

Please ensure that you fill in all required fields to avoid any errors or delays in processing your order.
