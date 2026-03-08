<thinking>
The "service_quality_feedback_form" form is designed to collect feedback from customers about their experiences with the service. It's intended for customers to provide their contact information and describe the problem they faced, how it was resolved, and their overall rating of the service. This form is likely used in customer service scenarios where customers need to report incidents or issues they encountered while using the service.
</thinking>

# service_quality_feedback_form - Help Guide
## Purpose
The purpose of this form is to collect feedback from customers about their experiences with the service. It helps us understand how we can improve our service and resolve any issues that customers may have faced.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in your contact information, including your name, email, and phone number.
2.  Describe the problem you faced while using the service.
3.  Explain how the issue was resolved.
4.  Choose how you contacted us (e.g., contact form, email, or phone).
5.  Rate your overall experience with the service.
6.  Add any additional comments about your experience.

## Field-by-Field Explanation

* **Contact Information**: This is where you enter your name, email address, and phone number so we can get in touch with you if needed.
  *  <label> (`contact_name`, `text`, required: false)
* **Describe the issue**: In this field, describe what happened while using the service. 
  *  <label> (`feedback`, `text`, required: false)
* **How was the issue resolved**: Describe how the problem was resolved in this field.
  *  <label> (`resolution`, `text`, required: false)
* **How did you contact us?**: Choose how you contacted us (e.g., contact form, email, phone).
  *  <label> (`contact_method`, `select_one`, options: ["Contact Form", "Email", "Phone"], required: false)
* **Overall rating**: Rate your overall experience with the service on a scale from 1 to 5.
  *  <label> (`rating`, `number`, required: false)
* **Comments**: Add any additional comments about your experience.
  *  <label> (`comment`, `text`, required: false)
* **Name**: Enter your name for us to get in touch with you.
  *  <label> (`contact_name`, `text`, required: false)
* **Email**: Enter your email address so we can get in touch with you.
  *  <label> (`contact_email`, `text`, required: false)
* **Phone**: Enter your phone number so we can get in touch with you.
  *  <label> (`contact_phone`, `text`, required: false)
* **Other contact info**: Enter any other contact information if you prefer not to use the other options above.
  *  <label> (`contact_other`, `text`, required: false)
* **Submit**: Click this button to submit your feedback.
  *  <label> (`submit`, `text`, required: false)
