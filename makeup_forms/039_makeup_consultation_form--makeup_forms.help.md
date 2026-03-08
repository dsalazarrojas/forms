# makeup_consultation_form - Help Guide
## Purpose
The Makeup Consultation Form is a tool used to request a consultation with a makeup expert for a specific service. Staff members can use this form to book a consultation with a makeup expert for any needed service such as makeup, skin care, or product recommendations.

## How To Complete This Form
To complete the form, simply follow these steps:
1. Fill out your details (Customer Name, email, and Phone) 
2. Choose the desired service (Date and Time for the consultation)
3. Select the type of makeup service you need (Desired Makeup Service, e.g. "Yes" for yes, "No" for no)
4. Specify the type of makeup you are interested in (Makeup Type)
5. Provide a brief description of your needs or preferences (Description)
6. Select the assigned tool or equipment used for the consultation (Assigned Tool)

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required): Please enter your name as it should be listed on the consultation records.
* **Email** (`email`, email, required): Enter your work email address.
* **Phone** (`phone`, text, required): Enter your work phone number.
* **Date and Time** (`date_and_time`, date, required): Choose the date and time for the consultation.
* **Desired Makeup Service** (`desired_makeup_service`, select_one, required): Select the type of service you need, e.g. "Yes" for yes, "No" for no.
* **Makeup Type** (`makeup_type`, select_multiple, optional): Select the type of makeup you are interested in (if applicable).
* **Description** (`description`, text, optional): Provide a brief description of your needs or preferences.
* **Assigned Tool** (`assigned_tool`, text, optional): Select the tool or equipment used for the consultation (if applicable).

**Tips**:
* Please ensure that you select all relevant fields and provide accurate information to help our expert provide the best service possible.
* Please note that duplicate submissions may be deleted to ensure efficient service delivery.
