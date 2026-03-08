# vendor_satisfaction_survey_form - Help Guide
## Purpose
The "vendor_satisfaction_survey_form" is a tool for us to gather feedback from vendors about their experience with our platform.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer the questions on each page.
2. Fill out the contact information page first, which has a few basic questions that we need for our records.
3. Then, answer the survey questions on the next page, rating the vendor's performance in different areas.
4. If you have any additional comments or thoughts, you can add them in the comments section on the last page.
5. Please rate the vendor's price performance as well, as it's a critical aspect of our relationship.

## Field-by-Field Explanation
* **Contact Information** (`contact_information`, `text`, required): Please fill out your name, email, and phone number to help us get in touch with you.
* **Questions** (`questions`, `select_multiple`, required): We have a few yes and no questions about your experience with the vendor. Choose the options that best apply to you.
* **Comments** (`comments`, `text`, required): Share your thoughts on the vendor's performance with us. This is your chance to give us detailed feedback.
* **Rating for Vendor** (`rating_vendor`, `select_one`, required): Rate the vendor's overall performance from 1 to 5.
* **Rating for Quality of Service** (`rating_quality`, `select_one`, not required): If you want to provide feedback on this specific aspect, please rate the quality of service from 1 to 5.
* **Rating for Response Time** (`rating_response_time`, `select_one`, not required): If you want to give feedback on how quickly the vendor responds to your questions, rate it from 1 to 5.
* **Rating for Price** (`rating_price`, `select_one`, required): Rate the price of the services from 1 to 5.
* **Additional Comments** (`additional_comments`, `note`, not required): Add any extra thoughts or suggestions you might have for the vendor.
