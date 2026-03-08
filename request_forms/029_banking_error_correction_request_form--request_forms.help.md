# Banking Error Correction Request Form - Help Guide
## Purpose
The Banking Error Correction Request Form is used to report and correct errors on a customer's banking statement. This form captures necessary details to help our team investigate and resolve the issue efficiently.

## How To Complete This Form

To complete this form, please follow these steps:

1.  Ensure you have all necessary information ready such as the affected customer's details, error date, amount, and any supporting documents.
2.  Fill in all required fields with accurate information.
3.  Attach relevant supporting documents if you have any.
4.  Select your preferred contact method and availability for follow up.
5.  Review your information before submission.

## Field-by-Field Explanation

*  **Customer Full Name** (`customer_full_name`, text, required): Please enter the full name of the account holder.
*  **Email Address** (`customer_email`, email, required): Enter the email address of the account holder for contact purposes.
*  **Phone Number** (`customer_phone`, text, required): Enter the phone number of the account holder for contact purposes.
*  **Mailing Address** (`customer_address`, text, required): Enter the street, city, state, and ZIP of the account holder.
*  **Account Number** (`account_number`, text, required): Enter the affected account number.
*  **Account Type** (`account_type`, select_one, required): Select the type of account that was affected by the error.
*  **Type of Error** (`error_type`, select_one, required): Select the type of error that occurred.
*  **Error Date** (`error_date`, date, required): Enter the date the error occurred.
*  **Transaction Amount** (`transaction_amount`, number, required): Enter the dollar amount involved in the error.
*  **Transaction Description** (`transaction_description`, text, required): Enter a detailed description of the transaction as it appears on the statement.
*  **Error Details** (`error_details`, text, required): Provide a detailed description of what went wrong.
*  **Expected Correction** (`expected_correction`, text, required): Describe what correction you expect from our team.
*  **Supporting Documents** (`supporting_documents`, select_one, required): Select if you have any supporting documents and how you plan to provide them.
*  **Document Type** (`document_type`, select_multiple, optional): Select the type of documents you have to support your claim.
*  **Previous Contact** (`previous_contact`, select_one, required): Select if this is a follow-up issue or first contact.
*  **Previous Contact Date** (`previous_contact_date`, date, optional): Enter the date of previous contact if this is not the first contact.
*  **Urgency** (`urgency`, select_one, required): Select the urgency level of your issue.
*  **Preferred Resolution Method** (`preferred_resolution_method`, select_one, required): Select your preferred method of contact for resolution.
*  **Best Time to Contact** (`best_time_to_contact`, select_one, optional): Select the best time for us to contact you.
*  **Authorization** (`authorization`, select_one, required): Confirm if you authorize our team to investigate and correct the issue.
*  **Request Date** (`request_date`, date, required): Enter the date you submitted this request.
*  **Additional Comments** (`additional_comments`, text, optional): Enter any other information that may aid our team in resolving the issue.
</thinking>

Note: The form's design and fields are based on the provided YAML structure, ensuring that all necessary information is captured for efficient error correction.
