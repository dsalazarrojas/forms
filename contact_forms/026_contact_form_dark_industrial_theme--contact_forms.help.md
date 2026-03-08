<thinking>
This help guide is intended to inform users about the purpose and requirements of the contact form, "Contact Form Dark Industrial Theme". The form's purpose is to gather information from users who are interested in staying updated about industrial-related topics. The form is designed to collect relevant details such as name, email, company name, job function, industrial interests, preferred content type, email frequency, and agreement to the privacy policy and terms of use. It is crucial to ensure that users understand the form's intent and how to complete it accurately.
</thinking>

# Contact Form Dark Industrial Theme - Help Guide
## Purpose
This form is designed to gather information from users interested in staying updated about industrial-related topics. We will use this data to send relevant content and news to the email address provided.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **Full Name** in the `Full Name` field, which is a required field.
2. Enter your **Email Address** in the `Email Address` field, which is also required.
3. If you have a business, enter your **Company Name** in the `Company Name` field, but it's not required.
4. Select your **Job Function/Title** from the dropdown menu, which is a required field.
5. Select all that apply from the **Industrial Sectors of Interest** dropdown menu, which is also required.
6. Choose how often you would like to receive emails from us using the **Email Frequency** dropdown menu, which is a required field.
7. Select **I Agree** to the **Privacy Policy and Terms of Use** to proceed, which is a required field.
8. If you have any additional comments or messages, type them in the **Anything else you would like to share?** field.

## Field-by-Field Explanation

* **Full Name** (`subscriber_full_name`, text, required):
	+ Enter your full name as it should be displayed on our newsletters or emails.
* **Email Address** (`subscriber_email`, email, required):
	+ Enter the email address where you would like to receive our updates and news.
* **Company Name** (`company_name`, text, optional):
	+ Enter your company name, if you have one. This field is not required.
* **Job Function/Title** (`job_function`, select_one, required):
	+ Select your role within the industry. Choose from: Engineer, Plant Manager, Procurement Specialist, Maintenance Technician, Executive/Owner, or Other.
* **Industrial Sectors of Interest** (`sectors_of_interest`, select_multiple, required):
	+ Select all the industrial sectors you are interested in learning more about. Choose from: Automation/Robotics, Supply Chain/Logistics, Heavy Machinery, Sustainability/Green Tech, Industrial IoT, Precision Manufacturing.
* **Preferred Content Type** (`preferred_content_type`, select_multiple, required):
	+ Select the type of content you would like to receive from us. Choose from: Industry News/Updates, Product Demonstrations, Case Studies/White Papers, Event/Webinar Invitations, Exclusive Offers.
* **Email Frequency** (`email_frequency`, select_one, required):
	+ Choose how often you would like to receive emails from us. Choose from: Daily Digest, Weekly Roundup, Monthly Newsletter, Only Major Announcements.
* **I Agree to the Privacy Policy and Terms of Use** (`agreement_to_terms`, select_one, required):
	+ Select **I Agree** to continue with your subscription.
* **Anything else you would like to share?** (`additional_message`, text, optional):
	+ If you have any additional comments or messages, type them here.
* **Subscription Date** (`subscription_date`, date, required):
	+ Select today's date to complete the subscription process.
