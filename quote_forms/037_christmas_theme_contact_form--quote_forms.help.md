# Christmas Theme Contact Form - Help Guide
## Purpose
The Christmas Theme Contact Form is designed to gather contact information and inquiry details from users, particularly during the holiday season.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in your contact information, including your first and last name, email address, and phone number (if applicable).
2. Choose the type of inquiry you are making.
3. If inquiring about a specific event, select the type of event and provide the event date and budget range.
4. Write a message describing your holiday needs.
5. Choose your preferred contact method and provide your best available time to contact you.
6. Decide if you would like to subscribe to the holiday newsletter.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email Address** (`email`, email, required): Enter your email address.
* **Phone Number** (`phone`, text, optional): If you have a phone number, enter it.
* **Company Name** (`company_name`, text, optional): Enter your company name, if applicable.
* **Type of Inquiry** (`inquiry_type`, select_one, required): Choose the type of inquiry you are making.
* **Event Type (if applicable)** (`event_type`, select_one, optional): If inquiring about a specific event, choose the type of event.
* **Event Date (if applicable)** (`event_date`, date, optional): If inquiring about a specific event, provide the event date.
* **Budget Range (if applicable)** (`budget_range`, select_one, optional): If inquiring about a specific event, choose the budget range.
* **Subject** (`subject`, text, required): Enter a brief subject for your message.
* **Message** (`message`, text, required): Tell us about your holiday needs.
* **Preferred Contact Method** (`preferred_contact`, select_one, required): Choose your preferred contact method.
* **Best Time to Contact You** (`best_time_contact`, text, optional): Enter the best time to contact you.
* **Subscribe to our holiday newsletter** (`newsletter`, select_one, optional): Check if you would like to subscribe to the holiday newsletter.
