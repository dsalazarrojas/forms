<thinking>Refund Timeframe Exception Request form is used to request an exception to the refund timeframe for a specific purchase. This form is used to communicate with the customer service team and the business team about the refund request. The form is used to provide details about the purchase, reason for refund, and any additional information that may be required. Please ensure that you only submit one request per purchase, and that your request is not already in progress or pending. Before submitting, check that all relevant fields are filled correctly and that you are providing enough information for the customer service team to process your request.</thinking>

# Refund Timeframe Exception Request - Help Guide
## Purpose
The Refund Timeframe Exception Request form is used to request an exception to the refund timeframe for a specific purchase. This form is used to communicate with the customer service team and the business team about the refund request.

## How To Complete This Form
To complete this form, follow the steps below:

1. Select the reason for refund from the available options.
2. Provide a brief message to the customer service team.
3. Provide a response to the customer service team.
4. Select the response status from the available options.
5. Optionally, provide the purchase details, refund reason, document, and refund amount.
6. Optionally, provide a reason for exception and timeframe for exception.

## Field-by-Field Explanation
### 1. Refund Reasons
* **Refund Reasons** (`refund_reasons`, `select_one`, required/true): Select the reason for refund from the available options. This field is required to help the customer service team understand the reason for refund.
### 2. Message to Customer Service Team
* **Message to Customer Service Team** (`customer_message`, `note`, required/false): Provide a brief message to the customer service team about your refund request.
### 3. Customer Service Response
* **Customer Service Response** (`customer_service_response`, `note`, required/false): Provide a response to the customer service team.
### 4. Response to Customer Service Team
* **Response to Customer Service Team** (`customer_service_response`, `note`, required/false): Select the response status from the available options.
### 5. Purchase Date
* **Purchase Date** (`purchase_date`, `date`, required/false): Provide the date of purchase, if available.
### 6. Refund Amount
* **Refund Amount** (`refund_amount`, `number`, required/false): Provide the amount of refund, if available.
### 7. Reason for Refund
* **Reason for Refund** (`reason_for_refund`, `select_multiple`, required/false): Select the reason for refund from the available options.
### 8. Business Response
* **Business Response** (`business_response`, `note`, required/false): Provide a response to the business team.
### 9. Business Response Status
* **Business Response Status** (`business_response_status`, `select_one`, required/true): Select the response status from the available options.
### 10. Reason for Exception
* **Reason for Exception** (`reason_for_exception`, `text`, required/false): Provide a reason for exception, if applicable.
### 11. Timeframe for Exception
* **Timeframe for Exception** (`timeframe_for_exception`, `time`, required/false): Provide a timeframe for exception, if applicable.
