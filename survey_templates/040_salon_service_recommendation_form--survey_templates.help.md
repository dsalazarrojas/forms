<thinking>
This form is designed to collect information from users about their salon services, including client information, service type, service details, and other relevant details. The form is meant to help the salon staff make recommendations to clients based on their preferences and needs.

The form will be used for internal purposes only, and the information collected will be used to improve the salon's services and customer experience. It is expected that users will complete the form only once and only if they have a specific appointment scheduled. 

This guide will only cover the basic fields, and additional explanations will be provided for each field if they are unclear or need further clarification.
</thinking>

# salon_service_recommendation_form - Help Guide
## Purpose
This form is designed to gather information about clients' salon services preferences to provide tailored recommendations.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name and contact information (email, phone, and address).
2. Select the type of service you are interested in (Hair Salon Services, Nail Salon Services, Skin Care, or Other).
3. Provide additional details about your service preferences.
4. Select any additional services you are interested in.
5. Enter the date and time for follow-up (if applicable).
6. Add any comments or notes about your visit.

## Field-by-Field Explanation
* **Client Info** (`client_info`, `text`, required: false): 
  Enter your name and any other relevant contact information.
* **Service Type** (`service_type`, `select_one`, required: false): 
  Select the type of service you are interested in. Options include Hair Salon Services, Nail Salon Services, Skin Care, and Other.
* **Service Details** (`service_details`, `text`, required: false): 
  Enter any additional details about the service you are interested in.
* **Recommended Service** (`recommended_service`, `select_multiple`, required: false): 
  Select any additional services you are interested in (up to 2 options).
* **Follow Up** (`follow_up`, `date`, required: false): 
  Enter the date you would like to schedule a follow-up appointment (if applicable).
* **Follow Up Time** (`follow_up_time`, `time`, required: false): 
  Enter the time you would like to schedule a follow-up appointment (if applicable).
* **Note** (`note`, `note`, required: false): 
  Add any additional comments or notes about your visit.
* **Email** (`email`, `email`, required: false): 
  Enter your email address.
* **Phone** (`phone`, `text`, required: false): 
  Enter your phone number.
* **Address** (`address`, `text`, required: false): 
  Enter your address.
* **Additional Services** (`additional_services`, `select_multiple`, required: false): 
  Select any additional services you are interested in (up to 2 options).
* **Comments** (`comments`, `text`, required: false): 
  Add any additional comments or notes about your visit.
