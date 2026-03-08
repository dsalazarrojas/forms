<thinking>
The purpose of this form is to gather information about a refund request from a customer. Before filling out this form, please ensure that you have a valid reason for the refund and that it's not a duplicate request. This form is designed to be completed by customers who are requesting a refund for an order that has not yet been fulfilled or that has been fulfilled but not yet received. 
</thinking>

# refund_request_information_form - Help Guide
## Purpose
This form is used to collect information from customers who are requesting a refund for an order that has not yet been fulfilled or that has been fulfilled but not yet received. It's essential to complete this form accurately to ensure that we can process your refund request efficiently.

## How To Complete This Form

1. Fill out the form completely and accurately to the best of your ability.
2. Please make sure to enter the correct information for each field.
3. If a field is optional, only fill it out if it's relevant to your refund request.
4. Review your form before submitting it to ensure that all required fields are filled out.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, optional): Please enter the customer's name as it appears on their account or on the order.
* **Order ID** (`order_id`, number, optional): Enter the ID of the order for which you're requesting a refund. This can usually be found on your order confirmation email or on your order receipt.
* **Reason for Refund** (`reason_for_refund`, text, optional): Describe the reason why you're requesting a refund. Be as specific as possible so we can understand your issue.
* **Date of Purchase** (`date_of_purchase`, date, optional): Enter the date you made the purchase or when you received the order. This helps us determine the status of the order at the time of the request.
* **Amount Requested** (`amount_requested`, number, optional): Enter the amount you are requesting as a refund. Make sure to include any relevant fees or taxes.
* **Refund Method** (`refund_method`, select_one, optional): Choose how you'd like to receive your refund:
	+ Bank Transfer: We will refund the amount to your bank account.
	+ Check: We will mail a refund check to you.
	+ Store Credit: We will credit the amount to your store account for future purchases.
* **Contact Method** (`contact_method`, select_multiple, optional): Choose how you'd like to be contacted about your refund:
	+ Email: We will contact you by email.
	+ Phone: We will contact you by phone.
	+ Text Message: We will contact you by text message.
* **Supporting Documents** (`supporting_documents`, select_multiple, optional): Attach any supporting documents that may be necessary for your refund request. If there are no documents required, select "No".
* **Additional Information** (`additional_information`, text, optional): If there's anything else you'd like to share or that we should know about your refund request, please enter it here.
