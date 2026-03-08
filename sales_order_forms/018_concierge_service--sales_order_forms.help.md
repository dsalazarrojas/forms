# Concierge Service - Help Guide
## Purpose
The "Concierge Service" form is designed to gather information about the client's personal details, service preferences, and payment options to provide a tailored concierge service experience.

## How To Complete This Form
1. Begin by filling out the "Service Category" field with the type of concierge service you require.
2. Select the "Service Level" that suits your needs, which determines the tier of service you'll receive.
3. Choose the "Service Duration" that fits your schedule, which specifies how long you'll require the service.
4. Fill out your "Client Information" section, providing your full name, title, company name (if applicable), email address, primary phone number, and secondary phone number (if needed).
5. Provide your "Address Information," including your street address, city, state, ZIP code, and country of residence.
6. In the "Priority Services" section, list the most important tasks you'd like the concierge service to assist with.
7. Select your "Preferred Contact Time" for communication.
8. In the "Special Instructions" section, provide any additional notes or instructions for the concierge service.
9. If applicable, select your "Monthly Budget" range to help us understand your budget.
10. Choose your preferred "Payment Method" for the service.
11. Finally, accept the "Contract Terms" to proceed with the service.

## Field-by-Field Explanation
* **Service Category** (`service_category`, select_one, required): Select the type of concierge service you require (e.g., Personal Shopping, Travel Planning, etc.).
* **Service Level** (`service_level`, select_one, required): Choose the tier of service that suits your needs (e.g., Basic, Premium, Executive, etc.).
* **Service Duration** (`service_duration`, select_one, required): Select the duration of the service (e.g., One Time Service, Weekly, Monthly, etc.).
* **Client Name** (`client_name`, text, required): Provide your full name.
* **Title or Prefix** (`client_title`, select_one, optional): Select your title or prefix (e.g., Mr, Mrs, Ms, Dr, etc.).
* **Company Name** (`company_name`, text, optional): If applicable, provide your company name.
* **Email Address** (`email_address`, email, required): Enter your primary contact email address.
* **Primary Phone** (`phone_primary`, text, required): Enter your main contact phone number.
* **Secondary Phone** (`phone_secondary`, text, optional): Enter an alternate phone number (if needed).
* **Address Information** (`address_information`, note, optional): Provide any additional address details.
* **Street Address** (`street_address`, text, required): Enter your full street address.
* **City** (`city`, text, required): Enter your city name.
* **State/Province** (`state`, text, required): Enter your state or province name.
* **ZIP Code** (`zip_code`, text, required): Enter your postal code.
* **Country** (`country`, select_one, required): Select your country of residence.
* **Service Requirements** (`service_requirements`, note, optional): If needed, provide any specific service requirements.
* **Priority Services** (`priority_services`, text, required): List the most important tasks you'd like the concierge service to assist with.
* **Preferred Contact Time** (`preferred_contact_time`, select_one, optional): Select the best time to contact you.
* **Special Instructions** (`special_instructions`, text, optional): Provide any additional notes or instructions.
* **Pricing Information** (`pricing_information`, note, optional): If needed, provide pricing information.
* **Monthly Budget** (`monthly_budget`, select_one, optional): Select your estimated budget range.
* **Payment Method** (`payment_method`, select_one, required): Choose your preferred payment method (e.g., Credit Card, Bank Transfer, etc.).
* **Contract Terms** (`contract_terms`, select_one, required): Accept the contract terms to proceed with the service.
