# Damaged Goods Refund Form - Help Guide
## Purpose
This form is used to process damaged goods refunds.

## How To Complete This Form
To complete this form, please follow these steps:

1. Ensure you fill out the correct section (customer or business) depending on who you are representing.
2. Fill out the customer section if you are the customer, or the business section if you are the business representative.
3. Select the reason for the return in the "Return Reason" field.
4. Provide proof of purchase if required.
5. Sign and date the form as needed.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, optional): Enter the customer's name.
* **Order ID** (`order_id`, number, optional): Enter the 5-digit order ID number.
* **Product Name** (`product_name`, select_one, optional): Select the product that is being returned.
* **Damage Description** (`damage_description`, text, optional): Describe the damage or issue with the product.
* **Images** (`images`, text, optional): Attach images of the damaged product if necessary.
* **Refund Request Date** (`refund_request_date`, date, optional): Enter the date the refund was requested.
* **Return Reason** (`return_reason`, select_multiple, optional): Select the reason for the return (Damaged, Defective, or Not as Described).
* **Customer Signature** (`customer_signature`, note, optional): Sign and date the form as proof of customer acknowledgment.
* **Customer Signature Required** (`customer_signature_required`, select_one, required): Select whether or not the customer signature is required.
* **Business Signature** (`business_signature`, note, optional): Sign and date the form as proof of business acknowledgment.
* **Business Signature Required** (`business_signature_required`, select_one, optional): Select whether or not the business signature is required.
* **Email** (`email`, email, optional): Enter the customer's email address.
* **Phone** (`phone`, text, optional): Enter the customer's phone number.
* **Business Name** (`business_name`, text, optional): Enter the business name.
* **Business Name Required** (`business_name_required`, select_one, required): Select whether or not the business name is required.
* **Business Address** (`business_address`, text, optional): Enter the business address.
* **Business Address Required** (`business_address_required`, select_one, optional): Select whether or not the business address is required.
* **Business Phone** (`business_phone`, text, optional): Enter the business phone number.
* **Business Email** (`business_email`, email, optional): Enter the business email address.
* **Notes** (`notes`, text, optional): Enter any additional notes about the return.
* **Notes Required** (`notes_required`, select_one, optional): Select whether or not additional notes are required.
* **Date of Purchase** (`date_of_purchase`, date, optional): Enter the date of the purchase.
* **Proof of Purchase** (`proof_of_purchase`, select_multiple, optional): Select what proof of purchase is required (Proof of Payment, Proof of Delivery, or Proof of Return).
* **Additional Notes** (`additional_notes`, text, optional): Enter any additional notes about the return.
* **Additional Notes Required** (`additional_notes_required`, select_one, optional): Select whether or not additional notes are required.
