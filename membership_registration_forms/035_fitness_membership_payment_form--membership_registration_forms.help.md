<thinking>
As a form expert, I understand that the Fitness Membership Payment Form is intended to collect information from users for membership registration and payment purposes. This form likely serves as a crucial step in the membership registration process, ensuring that users provide necessary details such as contact information, payment method and amount, and membership status. The purpose of this form is to streamline the membership registration process and ensure that users understand their payment obligations. Upon reviewing the form schema, I notice that it has several fields that might be unclear or confusing to end-users, such as "payment_terms" and "membership_notes". To provide a helpful guide, I will focus on explaining each field clearly and concisely, avoiding unnecessary business logic.</thinking>

# Fitness Membership Payment Form - Help Guide
## Purpose
This form is designed to facilitate the membership registration process and payment details collection. It requires you to provide necessary information for your membership registration, including contact details, payment method and amount, and membership status.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the "Contact Information" section with your details.
2. Enter your "Email" address for communication purposes.
3. Provide your "Phone" number for additional contact.
4. Select your "Membership Plan" for the type of membership you want to register for (e.g. Gym, Studio).
5. Input the start and end dates for your membership.
6. Choose your "Payment Method" and input "Payment Amount".
7. Select "Payment Status" as "Paid" if you have already paid.
8. Select "Membership Status" as "Active" if you are an active member or "New" if you are a new member.
9. Select "Membership Type" as "Gym" or "Studio" depending on your membership type.
10. Read and agree to the "Payment Terms" and "Membership Notes" by selecting "True" for each.

## Field-by-Field Explanation

* **Form Info** (`form_info`, text, optional): This field is a general description of your membership registration.
* **Contact Information** (`contact_info`, text, optional): Fill in your name and address for contact purposes.
* **Email** (`email`, email, optional): Enter your email address for communication and notification purposes.
* **Phone** (`phone`, text, optional): Provide your phone number for additional contact.
* **Membership Plan** (`membership_plan`, text, optional): Choose the type of membership you want to register for (e.g. Gym, Studio).
* **Start Date** (`start_date`, date, optional): Input the date you want your membership to start from.
* **End Date** (`end_date`, date, optional): Input the date you want your membership to end up.
* **Payment Method** (`payment_method`, text, optional): Select your preferred payment method.
* **Payment Amount** (`payment_amount`, number, optional): Enter the payment amount due for the membership.
* **Payment Status** (`payment_status`, select_one, optional): Choose if you have already paid or not.
* **Membership Status** (`membership_status`, select_one, optional): Select "Active" if you are an active member or "New" if you are a new member.
* **Membership Type** (`membership_type`, select_one, optional): Choose between "Gym" or "Studio" depending on your membership type.
* **Payment Terms** (`payment_terms`, note, optional): Read and acknowledge the payment terms.
* **I Agree to Payment Terms** (`payment_terms_agreement`, select_one, optional): Select "True" if you agree to the payment terms.
* **Membership Notes** (`membership_notes`, note, optional): Read and acknowledge the membership notes.
* **I Agree to Membership Notes** (`membership_notes_agreement`, select_one, optional): Select "True" if you agree to the membership notes.

## Tips
- Double-check your input values for accuracy before submitting the form.
- Ensure that you have read and understood all the fields and their implications before submitting the form.
