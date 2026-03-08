<thinking>
The form designer is required to create a user-facing help guide for the "Payment Request Form" within the "accountant_forms" category, which should include a brief explanation of the form's purpose, instructions on how to complete it, and a field-by-field explanation of each field. The form's YAML schema is provided, which outlines the fields and their properties. The form is for creating payment requests, and the purpose is to collect information about a payment, including the amount, method, date, term, description, contact information, and any supporting documents. The form should be designed for users who need to make a payment request, such as customers or vendors. Each field's label and hint should be used as a starting point for creating the field-by-field explanation, and any unclear labels should be best-effort explained without inventing business logic. The resulting help guide should be concrete, concise, and practical, and should provide users with the necessary information to complete the form accurately.
</thinking>

# Payment Request Form - Help Guide
## Purpose
The Payment Request Form is designed to collect information about payments that need to be made. Fill out this form to submit a payment request, including the amount, method, date, term, description, contact information, and any supporting documents.

## How To Complete This Form
1. Read through each field and ensure you have all necessary information before submitting the form.
2. Fill out each field according to the instructions provided.
3. Review your completed form for accuracy before submitting it.

## Field-by-Field Explanation
* **Outstanding Debt Amount** (`outstanding_debt_amount`, number, optional): Enter the amount of debt that needs to be paid. If you're unsure, you can leave this field blank.
* **Payment Method** (`payment_method`, select_one, optional): Choose the method of payment you would like to use, such as Visa, MasterCard, or American Express.
* **Payment Date** (`payment_date`, date, optional): Enter the date you would like to make the payment. If you're unsure, you can leave this field blank.
* **Payment Term** (`payment_term`, select_multiple, optional): Select one or more payment terms that apply to your payment request. Choose from the available options.
* **Description** (`description`, note, optional): Enter a brief description of the payment. This can help explain the purpose of the payment.
* **Email** (`email`, email, optional): Enter your email address so we can contact you about your payment request.
* **Phone** (`phone`, text, optional): Enter your phone number so we can contact you about your payment request.
* **Upload File** (`upload_file`, text, optional): If you have any supporting documents, such as receipts or invoices, you can upload them here. Note that this field is optional, but it's recommended that you attach any relevant documents to your payment request.

## Tips
* Ensure that you have all necessary information before submitting the form.
* Double-check your completed form for accuracy before submitting it.
* If you have any questions or concerns, please do not hesitate to contact us.
