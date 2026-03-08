<thinking>
This help guide is to be used in conjunction with the provided YAML fields for the "Color Street Nail Order Form". This form is used to collect information from customers placing an order for nail products. The form is structured into three main sections: customer information, order details, and payment information. The form is designed to gather the necessary information to process the order efficiently and securely. The fields within the form are explained in detail below, following the provided structure.

# Color Street Nail Order Form - Help Guide
## Purpose
This form is used to collect information from customers placing an order for nail products. It is structured into three main sections: customer information, order details, and payment information.

## How To Complete This Form
- To complete this form, please ensure that all required fields are filled out.
- The form is divided into three main sections: customer information, order details, and payment information.
- Fill out the form accurately and completely to ensure that your order is processed correctly.

## Field-by-Field Explanation
- **Full Name** (`full_name`, text, required): Please enter your full name as it appears on your identification.
- **Email Address** (`email`, email, required): Enter your valid email address to ensure we can contact you regarding your order.
- **Mailing Address** (`mailing_address`, text, required): Enter your mailing address to ensure that your order is shipped correctly.
- **Phone Number** (`phone`, text, optional): If you would like to provide your phone number for further contact, please enter it here.
- **-- Order Details --** (`section_order`, note, optional): This section is for additional information about your order. You may leave this blank.
- **Name of Sets Ordered** (`sets_ordered`, text, required): Please list the names of the nail sets you have ordered.
- **Total Number of Sets** (`quantity_of_sets`, number, required): Enter the number of sets you are ordering.
- **Would you like a free sample?** (`sample_request`, select_one, required): Please select whether you would like to receive a free sample.
- **-- Payment Information --** (`section_payment`, note, optional): This section is for additional information about your payment method. You may leave this blank.
- **Payment Method** (`payment_type`, select_one, required): Please select your preferred payment method: PayPal, Venmo, or Credit Card.
- **I understand that sales tax will be added to my total** (`tax_included_consent`, select_one, required): Please confirm that you understand that sales tax will be added to your total.
- **Shipping Speed** (`shipping_speed`, select_one, required): Please select the shipping speed for your order: Standard ($3.00) or Priority ($8.00).
- **Additional Notes** (`additional_notes`, text, optional): If you have any additional comments or instructions for your order, please enter them here.
</thinking>
