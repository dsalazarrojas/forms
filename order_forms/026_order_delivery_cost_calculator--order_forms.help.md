<thinking>
This form is for calculating delivery cost estimates for orders. 
Before proceeding, confirm that you have all required information to complete the form accurately.
This form does not duplicate any existing functionality.
</thinking>

# Order Delivery Cost Calculator - Help Guide
## Purpose
This form is designed to calculate delivery cost estimates for orders. It collects information on delivery cost, shipping method, estimated delivery time, and other relevant details to provide a total cost breakdown.

## How To Complete This Form
1. Fill in the following details:
	* **Delivery Cost**: Enter the cost of delivery for your order.
	* **Shipping Method**: Select the shipping method you prefer (Delivery Cost, Standard Delivery, or Express Delivery).
	* **Estimated Delivery Time**: Enter the estimated time for delivery.
	* **Estimated Delivery Day**: Enter the estimated delivery day.
	* **Delivery Address**: Enter the delivery address.
	* **Shipping Cost**: Enter the shipping cost.
	* **Total Cost**: This field will be populated automatically based on your input.
	* **Payment Method**: Select the payment method you prefer (Bank Transfer, Credit/Debit Card, or PayPal).
	* **Order Notes**: Enter any additional notes about your order.

## Field-by-Field Explanation
* **Delivery Cost** (`delivery_cost`, number, required): Enter the cost of delivery for your order.
* **Shipping Method** (`shipping_method`, select_one, optional): Select the shipping method you prefer:
	+ **Delivery Cost**: A custom delivery option with its own cost.
	+ **Standard Delivery**: A standard delivery option with a fixed cost.
	+ **Express Delivery**: An expedited delivery option with a higher cost.
* **Estimated Delivery Time** (`estimated_delivery_time`, time, optional): Enter the estimated time for delivery.
* **Estimated Delivery Day** (`estimated_delivery_day`, date, optional): Enter the estimated delivery day.
* **Delivery Address** (`delivery_address`, text, optional): Enter the delivery address.
* **Shipping Cost** (`shipping_cost`, number, optional): Enter the shipping cost.
* **Total Cost** (`total_cost`, number, optional): This field will be populated automatically based on your input.
* **Payment Method** (`payment_method`, select_multiple, optional): Select the payment method you prefer:
	+ **Bank Transfer**
	+ **Credit/Debit Card**
	+ **PayPal**
* **Order Notes** (`order_notes`, text, optional): Enter any additional notes about your order.

## Tips
* Make sure to enter accurate information to get an accurate total cost estimate.
* If you select a payment method, ensure it is accepted by your organization.
* You can add additional notes about your order if required.
* The total cost will be calculated based on your input.
