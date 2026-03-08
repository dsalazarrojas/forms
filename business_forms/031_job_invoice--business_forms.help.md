# job_invoice - Help Guide
## Purpose
The job_invoice form is designed to collect necessary details about a job's invoice, which is used to communicate payment terms and schedules to clients. This form will help you accurately capture the required information for smooth and timely processing of payments.
## How To Complete This Form
To complete the job_invoice form, follow these steps:

1. Start by filling out the job_details field, providing a brief description of the job.
2. Select "Yes" or "No" for the job_invoice field, depending on whether an invoice is required.
3. Enter the client's details in the client_details field.
4. Provide payment terms in the payment_terms_details field.
5. Choose the payment terms for the job from the options in the payment_terms_2 field.
6. Select multiple payment terms for the job from the options in the payment_terms_3 field.
7. Enter the payment amount in the payment_terms_4 field (this field is a number field).
8. Add any additional payment terms or comments in the payment_terms_5 field.

## Field-by-Field Explanation
* **job_details** (`job_details`, text, required/optional): Enter a brief description of the job.
* **payment_terms** (`payment_terms`, text, required/optional): Enter any additional payment terms or conditions for the job.
* **job_invoice** (`job_invoice`, select_multiple, required/optional): Select "Yes" to require an invoice for the job, or "No" to exclude it.
* **client_details** (`client_details`, text, required/optional): Enter the client's details, such as name and contact information.
* **payment_terms_details** (`payment_terms_details`, text, required/optional): Enter any specific payment terms or conditions for the job.
* **payment_terms_2** (`payment_terms_2`, select_one, required/optional): Choose the primary payment term for the job from the options: Pay on time, Pay on delivery, Pay on request.
* **payment_terms_3** (`payment_terms_3`, select_multiple, required/optional): Select multiple payment terms for the job from the options: Pay on time, Pay on delivery, Pay on request.
* **payment_terms_4** (`payment_terms_4`, number, required/optional): Enter the payment amount for the job.
* **payment_terms_5** (`payment_terms_5`, text, required/optional): Enter any additional payment terms or comments for the job.
