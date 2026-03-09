# eCheck.net_t_shirt_order_form - Help Guide
## Purpose
This form is used to collect information for the eCheck.net t-shirt order.
## How To Complete This Form
To complete the form, please follow these steps:

1. Provide your eCheck Net preference in the "eCheck Net" field.
2. Enter your customer information in the "customer_info" field.
3. Select your preferred t-shirt size from the "t_shirt_size" dropdown menu.
4. Choose your preferred t-shirt color from the "t_shirt_color" dropdown menu.
5. Select your eCheck Net option from the "echeck_net_option" dropdown menu.
6. If applicable, enter your shipping date in the "shipping" field.
7. If you have any additional comments, please enter them in the "comments" field.

## Field-by-Field Explanation
* **eCheck Net** (`echeck_net`, text, optional): Enter your eCheck Net preference.
* **Customer Info** (`customer_info`, text, optional): Enter your customer information.
* **T-Shirt Size** (`t_shirt_size`, select_one, required): Select your preferred t-shirt size.
  + Options: small, medium, large
* **T-Shirt Color** (`t_shirt_color`, select_multiple, required): Select your preferred t-shirt color.
  + Options: blue, red, green
* **ECheck Net Option** (`echeck_net_option`, select_one, required): Select your eCheck Net option.
  + Options: eCheck Net, other
* **Shipping** (`shipping`, date, optional): If applicable, enter your shipping date.
* **Comments** (`comments`, text, optional): Enter any additional comments you may have.
