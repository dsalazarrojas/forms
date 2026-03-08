# Vendor Payment Cycle Survey - Help Guide
## Purpose
The Vendor Payment Cycle Survey is a form designed to collect feedback and information about your experience with payment cycles from vendors. The survey aims to gather data that can help improve relationships and streamline payment processes with vendors.

## How To Complete This Form
To complete this form, simply select the options that best describe your experience with each question. You can choose from the provided options or add additional comments if necessary. For multiple-choice questions, select one or multiple options as instructed. For text fields, provide a brief description of your experience. Make sure to review and submit your answers when finished.

## Field-by-Field Explanation
* **What is your experience with payment cycles** (`payment_cycle_survey`, `select_one`, required: false): 
  This question helps us understand your overall satisfaction with payment cycles. Choose the option that best fits your experience: Very Dissatisfied, Dissatisfied, Neutral, Satisfied, or Very Satisfied.

* **Invoices** (`payment_cycle_survey_invoices`, `select_multiple`, required: false):
  Select all the types of invoices you have encountered during payment cycles. Choose from: Late, On Time, Unknown.

* **Vendor Payments** (`vendor_payments`, `date`, required: false): 
  Please enter the date of the last vendor payment you received or made. This will help us understand the timing of payments.

* **What is your feedback on vendor payment cycle** (`vendor_payment_cycle_survey`, `text`, required: false): 
  Share any thoughts or observations you have about the payment cycle process. This is an open-ended question, so feel free to provide as much or as little information as you like.

* **Vendor feedback** (`vendor_feedback`, `email`, required: false): 
  If you have any feedback or concerns about a specific vendor, please enter their email address so we can follow up with them directly.

* **Payment Method** (`payment_method`, `select_one`, required: false): 
  Select the method you used to make or receive payments: Bank Transfer, Cash, or Other.

* **Other payment method** (`other_payment_method`, `text`, required: false): 
  If you selected "Other" as your payment method, please specify what that method is.

* **Describe your experience** (`payment_cycle_survey_description`, `note`, required: false): 
  Share any details or anecdotes about your experience with payment cycles.

* **Additional comments** (`payment_cycle_survey_additional_comments`, `note`, required: false): 
  Is there anything else you'd like to add or mention that hasn't been covered by the other questions? Provide any additional comments or thoughts here.
