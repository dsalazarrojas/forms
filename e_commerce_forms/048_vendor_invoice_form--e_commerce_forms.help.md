<thinking>
This form is designed to capture essential information for a vendor invoice, allowing customers to provide details about their purchases, including the customer's and vendor's contact information, invoice date, total amount, payment method, and other relevant details. It's intended to be used for official transactions between customers and vendors. To avoid duplication, ensure that each field is filled out completely and accurately, especially for the required fields. A clear and thorough completion of this form will help in efficient and secure payment processing.
</thinking>

# Vendor Invoice Form - Help Guide
## Purpose
The Vendor Invoice Form is designed to collect essential details about a transaction between a customer and a vendor, ensuring accurate and secure payment processing.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide the **Customer Name**, **Customer Address**, and **Customer Contact** details to ensure the customer's identification and contact information is captured accurately.
2. Enter the **Vendor Name**, **Vendor Address**, and **Vendor Signature** to confirm the vendor's identity and approval.
3. Select the **Payment Method** from the provided options, which can be Bank Transfer, Cash, or Check.
4. Enter the **Invoice Date** to record the date of the invoice.
5. Enter the **Total Amount** of the transaction, which should include any applicable taxes or fees.
6. Finally, review the form for accuracy and completeness, particularly focusing on the required fields.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required): Enter the name of the customer making the purchase.
* **Customer Address** (`customer_address`, text, required): Enter the customer's address to facilitate accurate delivery or contact.
* **Customer Contact** (`customer_contact`, text, required): Provide a point of contact for the customer, such as a phone number or email.
* **Vendor Name** (`vendor_name`, text, required): Enter the name of the vendor providing the goods or services.
* **Vendor Address** (`vendor_address`, text, required): Enter the vendor's address for accurate delivery or contact.
* **Vendor Signature** (`vendor_signature`, text, required): Obtain a signature from the vendor to confirm approval.
* **Invoice Date** (`invoice_date`, date, required): Record the date of the invoice for accurate accounting and payment tracking.
* **Total Amount** (`total_amount`, number, required): Enter the total amount of the transaction, including any applicable taxes or fees.
* **Payment Method** (`payment_method`, select_one, required): Choose from Bank Transfer, Cash, or Check for payment processing.
* **Additional Fields** (`additional_fields`, note, optional): This field is for any additional comments or notes related to the transaction.
* **Vendor Approval** (`vendor_approval`, date, required): The vendor's approval date for the invoice.
* **Vendor Remaks** (`vendor_remarks`, text, optional): Additional comments or remarks from the vendor.
* **Form Footer** (`form_footer`, note, optional): This field can be used to add any additional comments or notes for the transaction.
* **Form Header** (`form_header`, note, required): This field is for the form header, and is not editable by users.
