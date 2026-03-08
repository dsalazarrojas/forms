# craft_booth_payment_form - Help Guide
## Purpose
The "craft_booth_payment_form" is used to collect payment information from customers at an event, such as determining payment intent, name, email, product description, and price.

## How To Complete This Form
To complete this form, follow these steps:

1. **Do you want to pay for this event?**: Select "True" if you want to pay for the event, or "False" if you do not.
2. **Customer name**: Enter your full name as you would like it to appear on the receipt.
3. **Customer email**: Enter your email address to ensure we can contact you with order updates and fulfillment details.
4. **Product description**: Briefly describe the product or service you are interested in purchasing.
5. **Price**: Enter the price of the product or service you are interested in purchasing.

## Field-by-Field Explanation
* **Do you want to pay for this event?** (`payment_method`, select_one, required)
	+ This field determines if you intend to pay for the event.
* **Customer name** (`customer_name`, text, required)
	+ Enter your full name as you would like it to appear on the receipt.
* **Customer email** (`email`, email, required)
	+ Enter your email address to receive order updates and fulfillment details.
* **Product description** (`product_description`, text, required)
	+ Briefly describe the product or service you are interested in purchasing.
* **Price** (`price`, number, required)
	+ Enter the price of the product or service you are interested in purchasing.
