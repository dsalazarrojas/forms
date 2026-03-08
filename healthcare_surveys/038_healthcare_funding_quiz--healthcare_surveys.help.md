# healthcare_funding_quiz - Help Guide

## Purpose
This form is designed to collect your experiences and challenges with healthcare funding. Your input will help us improve the healthcare funding system for the community.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide basic patient information on page 1.
2. Select the funding challenge you are currently facing.
3. Choose all the ways you pay for your care on page 2.
4. Provide your contact information, including email and phone number.
5. Choose your preferred method of follow-up support.
6. Write down any next steps or follow-up information about your experience.

## Field-by-Field Explanation
### Page 1: Patient Info
* **Patient Info** (`patient_info`, text, **required**: false): This is the first page where you can enter your name and any other relevant information about yourself.

### Page 2: Funding Challenge
* **Funding Challenge** (`funding_challenge`, select_one, **required**: false): Select one of the funding challenges you are currently facing:
	+ **Cost and insurance coverage**: You are having trouble affording the cost of your care.
	+ **Affordability**: You are experiencing issues with getting insurance to cover your care.
	+ **Other (please specify)**: You have another issue not listed above.

### Page 2: Pay for Care
* **How do you pay for care** (`pay_for_care`, select_multiple, **required**: false): Select all the ways you pay for your care:
	+ **Private insurance**: You have private health insurance that covers some or all of your care costs.
	+ **Medicaid**: You are covered by Medicaid.
	+ **Medicare**: You are covered by Medicare.
	+ **Self-pay**: You pay for your care out-of-pocket.
	+ **Other**: You pay in other ways not listed above.

### Page 3: Contact Info
* **Contact Info** (`contact_info`, text, **required**: false): Enter your contact information so we can get in touch with you.
* **Email** (`email`, email, **required**: false): Enter your email address so we can contact you.
* **Phone** (`phone`, text, **required**: false): Enter your phone number so we can contact you.

### Page 4: Follow-up Support
* **Follow-up support** (`follow_up_support`, select_one, **required**: false): Choose how you would like to be contacted:
	+ **Phone call**: We will contact you via phone.
	+ **Email**: We will contact you via email.
	+ **Mail**: We will contact you via mail.
	+ **In-person**: We will contact you in person.

### Page 5: Next Steps
* **Next steps** (`next_steps`, text, **required**: false): Write down any next steps or follow-up information about your experience.

### Page 6: Follow-up Info
* **Follow-up info** (`follow_up_info`, text, **required**: false): Enter any other information about your experience that you'd like to share.
