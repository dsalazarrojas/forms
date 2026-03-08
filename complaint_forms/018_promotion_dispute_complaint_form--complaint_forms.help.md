# promotion_dispute_complaint_form - Help Guide

## Purpose
The "promotion_dispute_complaint_form" is a form used to report and submit complaints or disputes related to promotions or offers provided by businesses.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a clear and concise description of your issue in the "description" field.
2. Select the type of issue you are experiencing from the "issue_type" options:
	* Promotional offer not available
	* Promotional offer not as described
	* Promotional offer not delivered
	* Other (please specify)
3. Enter the name of the business that offered the promotion in the "business_name" field.
4. If you have an order ID related to the issue, enter it in the "order_id" field.
5. If you have a date of purchase for the promotion, enter it in the "purchase_date" field.
6. If you have a time of order, enter it in the "time_ordered" field.
7. Describe the item or offer that was expected but not received in the "item_ordered" field.
8. Describe the issue with the item that was received instead of the expected item in the "item_not_received" field.
9. If the business has addressed the issue and provided a resolution, provide a brief description of the resolution in the "resolution" field.

## Field-by-Field Explanation

* **Promotion Dispute** (`promotion_dispute`, text, required): Enter a clear and concise description of your issue with the promotion or offer.
* **Description** (`description`, text, required): Provide a detailed explanation of the problem you are experiencing.
* **Issue Type** (`issue_type`, select_one, required): Select the type of issue you are experiencing:
	+ Promotional offer not available
	+ Promotional offer not as described
	+ Promotional offer not delivered
	+ Other (please specify)
* **Business Name** (`business_name`, text, required): Enter the name of the business that offered the promotion.
* **Order ID** (`order_id`, number, required): Enter the order ID related to the issue, if applicable.
* **Purchase Date** (`purchase_date`, date, required): Enter the date you purchased the promotion, if applicable.
* **Time Ordered** (`time_ordered`, time, required): Enter the time you ordered the promotion, if applicable.
* **Item Ordered** (`item_ordered`, text, required): Describe the item or offer that was expected but not received.
* **Item Not Received** (`item_not_received`, text, required): Describe the item or offer that was received instead of the expected item.
* **Resolution** (`resolution`, text, required): Provide a brief description of the resolution provided by the business, if applicable.
