<thinking>
This form is used to submit a lookup request for authorization codes related to a specific merchant account. The purpose of this form is to request a lookup of a particular authorization code, which can help in resolving issues or providing information related to a transaction. To prevent duplicate requests, the system will check for existing requests before processing a new lookup request.
</thinking>

# Authorization Code Lookup Request Form - Help Guide
## Purpose
The Authorization Code Lookup Request Form is used to submit a lookup request for authorization codes related to a specific merchant account. This form helps in providing information and resolving issues related to transactions.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the date of the request in the "Request Date" field.
2. Enter the name of the person requesting the lookup.
3. Enter the email address of the person requesting the lookup.
4. Enter the phone number of the person requesting the lookup (optional).
5. Enter the name of the merchant.
6. Enter the merchant's ID or account number.
7. Select the date of the transaction.
8. Enter the dollar amount of the transaction.
9. Enter the name on the card used for the transaction.
10. Enter the last 4 digits of the card number.
11. Select the type of card used for the transaction (e.g. Visa, Mastercard, etc.).
12. Enter the authorization code to be looked up.
13. Select the reason for the lookup request.
14. Enter a detailed description of the request.
15. Select the current status of the issue.
16. Select whether this is a first or subsequent request.
17. Select the type of dispute or chargeback filed (if applicable).
18. Select the type of documentation attached (if applicable).
19. Enter the preferred resolution (optional).
20. Select the preferred contact method.
21. Select the urgency level of the request.
22. Enter any additional information (optional).

## Field-by-Field Explanation

* **Request Date** (`request_date`, date, required): Enter the date this lookup request is being made.
* **Requestor Name** (`requestor_name`, text, required): Enter the full name of the person requesting the lookup.
* **Requestor Email** (`requestor_email`, email, required): Enter the email address of the person requesting the lookup.
* **Requestor Phone** (`requestor_phone`, text, optional): Enter the phone number of the person requesting the lookup (if applicable).
* **Merchant Name** (`merchant_name`, text, required): Enter the name of the merchant.
* **Merchant ID** (`merchant_id`, text, required): Enter the merchant's ID or account number.
* **Transaction Date** (`transaction_date`, date, required): Enter the date of the transaction.
* **Transaction Amount** (`transaction_amount`, number, required): Enter the dollar amount of the transaction.
* **Cardholder Name** (`cardholder_name`, text, required): Enter the name on the card used for the transaction.
* **Card Last Four Digits** (`card_last_four`, text, required): Enter the last 4 digits of the card number.
* **Card Type** (`card_type`, select_one, required): Select the type of card used for the transaction (e.g. Visa, Mastercard, etc.).
* **Authorization Code to Look Up** (`authorization_code`, text, optional): Enter the authorization code to be looked up.
* **Reason for Lookup Request** (`lookup_reason`, select_one, required): Select the reason for the lookup request (e.g. Transaction Verification, Dispute Resolution, etc.).
* **Detailed Description** (`lookup_description`, text, required): Enter a detailed description of the request.
* **Current Status of Issue** (`issue_status`, select_one, required): Select the current status of the issue (e.g. Open - Unresolved, Partial Resolution, etc.).
* **Previous Lookup Requests Made** (`previous_request`, select_one, required): Select whether this is a first or subsequent request.
* **Dispute or Chargeback Filed** (`dispute_filed`, select_one, required): Select whether there is a formal dispute or chargeback filed.
* **Supporting Documentation** (`documentation_attached`, select_multiple, optional): Select the type of documentation attached (if applicable).
* **Preferred Resolution** (`preferred_resolution`, text, optional): Enter the preferred resolution (if applicable).
* **Preferred Contact Method** (`contact_preference`, select_one, required): Select the preferred contact method.
* **Urgency Level** (`urgency_level`, select_one, required): Select the urgency level of the request (e.g. Routine, Priority, High Priority, etc.).
* **Additional Information** (`additional_information`, text, optional): Enter any additional information (if applicable).
