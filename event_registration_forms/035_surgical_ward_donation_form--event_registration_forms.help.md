# surgical_ward_donation_form - Help Guide
## Purpose
This form is designed to collect information from donors, including their personal details, contact information, and donation specifics. It is crucial for processing and tracking donations accurately.

## How To Complete This Form
To complete this form, please fill out the following sections accurately and thoroughly:

## Field-by-Field Explanation

* **Patient Info** (`patient_info`, `text`, required): Enter the patient's name and other relevant personal details as prompted.
* **Contact Info** (`contact_info`, `text`, required): Enter the donor's contact information, including name, address, and phone number.
* **Donation Details** (`donation_details`, `text`, required): Provide a detailed description of the donation being made, including the type and amount of goods or services.
* **Medical Info** (`medical_info`, `text`, required): Share any relevant medical information related to the patient, such as medical conditions or allergies.
* **Payment Info** (`payment_info`, `text`, required): Provide payment details, including the method of payment and any other relevant financial information.
* **Payment Method** (`payment_method`, `select_one`, optional): Choose how the donation was made, such as through Stripe, PayPal, or Bank Transfer.
* **Donation Amount** (`donation_amount`, `number`, required): Enter the amount of the donation, including any applicable discounts or fees.
* **Donation Frequency** (`donation_frequency`, `select_one`, optional): Indicate how frequently the donation will be made, such as Daily, Weekly, or Monthly.
* **Donation Duration** (`donation_duration`, `number`, required): Enter the duration of the donation period.
* **Notes** (`notes`, `text`, required): Add any additional comments or notes related to the donation.
* **Email** (`email`, `email`, required): Enter the donor's email address for contact purposes.
* **Phone** (`phone`, `text`, required): Enter the donor's phone number for contact purposes.
* **Date** (`date`, `date`, required): Enter the date the donation was made.
* **Time** (`time`, `time`, required): Enter the time the donation was made.
* **Time of Day** (`time_of_day`, `time`, required): Enter the time of day the donation was made.
* **Medical History** (`medical_history`, `select_multiple`, optional): Select any relevant medical conditions that may affect the patient's condition.
* **Surgical Details** (`surgical_details`, `text`, required): Provide details about the surgery or medical procedure.
* **Additional Info** (`additional_info`, `text`, required): Add any additional information that may be relevant to the donation.
* **Terms and Conditions** (`terms_conditions`, `select_one`, optional): Accept or reject the terms and conditions of the donation.
* **Acknowledge** (`acknowledgement`, `select_multiple`, optional): Acknowledge that you have read and understand the terms and conditions, and that you are providing this information voluntarily.
* **Submission Status** (`submission_status`, `select_one`, optional): Choose the status of the submission, such as Under Review, Approved, Pending, or Denied.
* **Review Comments** (`review_comments`, `select_multiple`, optional): Select whether there are any review comments about the submission.
* **Submission Comments** (`submission_comments`, `text`, required): Enter any additional comments or feedback about the submission.
* **Submitted By** (`submitted_by`, `text`, required): Enter the name of the person submitting the form.

Note: This help guide assumes that the form fields are self-explanatory and the explanations are provided in the field labels. If additional explanations are needed, please let me know.
