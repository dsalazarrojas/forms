# Fundraising Cookbook Pre Order Form - Help Guide
## Purpose
This form is used for supporters to pre-order cookbooks as part of a fundraising campaign. It collects essential details such as the supporter's contact information, order type, and shipping details.

## How To Complete This Form
1. Please fill out the form with the required information, including your first name, last name, email, phone number, and other relevant details.
2. Select the type of order you would like to place (Book or Cookbook).
3. Enter the quantity of the item you wish to order.
4. Enter the price of the order.
5. Fill out the shipping details, including the shipping address, city, state, zip, and country.
6. Select the payment method you would like to use.
7. Provide any additional comments or notes, if needed.
8. Enter the order date and time.
9. Review your order details before submitting the form.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, optional): Please enter your first name.
* **Last Name** (`last_name`, text, required): Please enter your last name.
* **Email** (`email`, email, required): Enter your supporter email.
* **Phone** (`phone`, text, optional): Enter your supporter phone number.
* **Order Type** (`order_type`, select_one, required): Choose between Book or Cookbook.
* **Quantity** (`quantity`, number, required): Enter the quantity of the order.
* **Price** (`price`, number, required): Enter the price of the order.
* **Total** (`total`, number, required): This field will automatically be calculated based on the price and quantity of the order.
* **Payment Method** (`payment_method`, select_one, required): Choose between Pay with credit card or Pay with PayPal.
* **Comments** (`comments`, note, optional): Provide any additional comments or notes about your order.
* **Order Date** (`order_date`, date, required): Enter the order date.
* **Order Time** (`order_time`, time, required): Enter the order time.
* **Shipping Address** (`shipping_address`, text, required): Enter the shipping address.
* **City** (`city`, text, optional): Enter the city of the shipping address.
* **State** (`state`, text, optional): Enter the state of the shipping address.
* **Zip** (`zip`, text, optional): Enter the zip code of the shipping address.
* **Country** (`country`, text, required): Enter the country of the shipping address.
* **Supporter Email** (`supporter_email`, text, required): Enter the email of the supporter.
* **Supporter Phone** (`supporter_phone`, text, optional): Enter the phone number of the supporter.
* **Supporter Address** (`supporter_address`, text, optional): Enter the address of the supporter.
* **Supporter City** (`supporter_city`, text, optional): Enter the city of the supporter.
* **Supporter State** (`supporter_state`, text, optional): Enter the state of the supporter.
* **Supporter Zip** (`supporter_zip`, text, optional): Enter the zip code of the supporter.
* **Supporter Country** (`supporter_country`, text, required): Enter the country of the supporter.
