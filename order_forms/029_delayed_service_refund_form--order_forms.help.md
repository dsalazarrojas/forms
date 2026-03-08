# Delayed Service Refund Form - Help Guide
## Purpose
The Delayed Service Refund Form is used to document the process of refunding a customer for a delayed service. This form gathers relevant information from both the customer and the business side to provide a clear and concise record of the situation.

## How To Complete This Form
To complete this form, please select the status of the service and fill in the necessary fields with the corresponding information.

## Field-by-Field Explanation
### Page 1: Service Status
* **delayed_service_refund_form** (`select_one`, required: false): Select the status of the service that was delayed.
	+ Choose from: Completed, Not Completed, In Progress

### Page 2: Service Details
* **service_details** (`text`, required: false): Enter a brief description of the service that was not delivered on time.
	+ Please provide a short explanation of the delayed service.

### Page 3: Customer Information
* **customer_email** (`email`, required: false): Enter the customer's email address.
	+ Enter the customer's email address for communication.
* **customer_phone** (`text`, required: false): Enter the customer's phone number.
	+ Enter the customer's phone number for further contact.

### Page 4: Order Information
* **order_number** (`number`, required: false): Enter the order number.
	+ Enter the order number to track the order.

### Page 5: Refund Information
* **amount_refunded** (`number`, required: false): Enter the amount that was refunded to the customer.
	+ Enter the amount that was refunded.

### Page 6: Business Information
* **business_name** (`text`, required: false): Enter the name of the business that did not deliver the service on time.
	+ Enter the name of the business involved.
* **business_email** (`email`, required: false): Enter the email address of the business that did not deliver the service on time.
	+ Enter the email address of the business for communication.
* **business_phone** (`text`, required: false): Enter the phone number of the business that did not deliver the service on time.
	+ Enter the phone number of the business for further contact.

### Page 7: Comments and Agreement
* **customer_comments** (`text`, required: false): Enter any comments from the customer.
	+ Enter any comments or concerns from the customer.
* **customer_agreement** (`text`, required: false): Enter the customer's agreement to the refund terms.
	+ Enter agreement or rejection to the refund terms.

### Page 8: Resolution and Follow-up
* **resolution** (`text`, required: false): Enter the resolution of the issue.
	+ Enter a detailed resolution to the issue.
* **follow_up_actions** (`text`, required: false): Enter follow-up actions to be taken.
	+ Enter any further actions to be taken.
* **next_steps** (`text`, required: false): Enter next steps to be taken.
	+ Enter next steps to be taken.

### Page 9: Signature Status
* **customer_signature** (`select_multiple`, required: false): Select the customer signature status.
	+ Choose from: Signed, Unsigned.
* **business_signature** (`select_multiple`, required: false): Select the business signature status.
	+ Choose from: Signed, Unsigned.

### Page 10: Status Updates
* **customer_refund_status** (`text`, required: false): Enter customer refund status.
	+ Enter the current status of the refund.
* **business_refund_status** (`text`, required: false): Enter business refund status.
	+ Enter the current status of the refund.

## Tips
* Please fill in all relevant fields accurately and completely.
* Ensure that you have all necessary information before submitting the form.
* If you need further assistance, please contact our support team.
