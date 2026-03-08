# Call Center Customer Onboarding Form - Help Guide

## Purpose
This form is designed to gather essential details about a customer's business, including their contact information, service requirements, and billing details. It helps our call center team understand their specific needs and prepare for their onboarding process.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Enter your company's name in the "Company Name" field.
2.  Provide the primary contact person's name in the "Primary Contact Person" field.
3.  Enter the contact email and phone number in the "Email Address" and "Phone Number" fields, respectively.
4.  Fill in your company's address in the "Company Address" field.
5.  Select all applicable service types from the "Type of Service Needed" dropdown menu.
6.  Enter the expected monthly call volume (if applicable).
7.  Specify your business hours on Monday-Friday, and whether weekend and holiday coverage are required.
8.  If necessary, provide details for customized call greetings, call transfer procedures, and emergency contacts.
9.  Finally, select a billing contact and provide their email address (if applicable), and specify your service start date.

## Field-by-Field Explanation
### Company Name (Required)
*   **Company Name (Required)** (`company_name`, text, **required**): Enter your company's name to identify your business.

### Primary Contact Person (Required)
*   **Primary Contact Person (Required)** (`contact_person`, text, **required**): Provide the name of the person to contact for this business.

### Email Address (Required)
*   **Email Address (Required)** (`contact_email`, email, **required**): Enter the email address of the primary contact person.

### Phone Number (Required)
*   **Phone Number (Required)** (`contact_phone`, text, **required**): Enter the phone number of the primary contact person.

### Company Address (Required)
*   **Company Address** (`company_address`, text, **required**): Enter your company's street address, city, state, and zip code.

### Type of Service Needed (Required)
*   **Type of Service Needed (Required)** (`service_type`, select_multiple, **required**): Select all service types your business needs, such as "Call answering," "Message taking," "Customer support," etc.

### Expected Monthly Call Volume (Optional)
*   **Expected Monthly Call Volume (Optional)** (`call_volume`, number, **optional**): If applicable, enter the expected monthly call volume for your business.

### Business Hours (Required)
*   **Monday-Friday Business Hours (Required)** (`business_hours_mon_fri`, text, **required**): Specify your business hours on Monday-Friday.

### Weekend Coverage (Required)
*   **Weekend Coverage (Required)** (`weekend_coverage`, select_one, **required**): Specify if weekend coverage is required.

### Weekend Hours (Optional)
*   **Weekend Hours (Optional)** (`weekend_hours`, text, **optional**): If weekend coverage is required, enter the hours of operation for weekend coverage.

### Holiday Coverage (Optional)
*   **Holiday Coverage (Optional)** (`holiday_coverage`, select_one, **optional**): Specify if holiday coverage is required, or if it's only required on-demand.

### Customized Call Greeting (Optional)
*   **Customized Call Greeting (Optional)** (`call_greeting`, text, **optional**): If needed, specify a customized call greeting for your business.

### Call Transfer Procedure (Optional)
*   **Call Transfer Procedure (Optional)** (`call_transfer_procedure`, text, **optional**): If needed, specify the call transfer procedure for urgent calls.

### Primary Emergency Contact (Required)
*   **Primary Emergency Contact (Required)** (`emergency_contact_1`, text, **required**): Provide the name of the primary emergency contact for your business.

### Emergency Number (Required)
*   **Emergency Number (Required)** (`emergency_number_1`, text, **required**): Enter the emergency contact number for your business.

### Billing Contact (Optional)
*   **Billing Contact (Optional)** (`billing_contact`, text, **optional**): If applicable, enter the billing contact for your business.

### Billing Email (Optional)
*   **Billing Email (Optional)** (`billing_email`, email, **optional**): Enter the billing email for your business (if billing contact is not the primary contact).

### Service Start Date (Required)
*   **Service Start Date (Required)** (`service_start_date`, date, **required**): Specify the date you would like to start service.

### Additional Information or Special Instructions (Optional)
*   **Additional Information or Special Instructions (Optional)** (`additional_info`, text, **optional**): Provide any additional information or special instructions for your business.

Note: Please ensure that all required fields are filled out accurately to avoid any delays or issues with your onboarding process.
