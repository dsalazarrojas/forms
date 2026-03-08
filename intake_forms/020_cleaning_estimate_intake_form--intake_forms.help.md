# Cleaning Estimate Intake Form - Help Guide
## Purpose
This form is for clients who need to book a cleaning service for their property. Please fill out this form completely and accurately to ensure an accurate estimate can be provided.

## How To Complete This Form
1. Fill in your full name, email address, and phone number.
2. Provide your property address.
3. Select the type of property you own.
4. Choose the frequency of cleaning services you need.
5. Enter the estimated square footage of your property.
6. Enter the number of bedrooms and bathrooms in your property.
7. Indicate if you have pets.
8. Select any additional areas that require extra attention.
9. Choose a preferred day of service (if applicable).
10. Select how the cleaner will access your property.
11. If you have specific concerns or areas that need extra attention, type them in this field.
12. If you're a new client, let us know how you found us.

## Field-by-Field Explanation

* **Full Name** (`client_name`, text, required): Please enter your full name as it appears on official documents, such as your passport or driver's license.
* **Email Address** (`client_email`, email, required): Enter your email address where we can contact you for any updates or follow-up questions.
* **Phone Number** (`client_phone`, text, required): Enter your phone number so we can contact you if needed.
* **Property Address** (`property_address`, text, required): Enter the address of the property that needs cleaning.
* **Property Type** (`property_type`, select_one, required): Choose the type of property you own, such as Residential (House), Residential (Apartment/Condo), Commercial (Office), Commercial (Retail), or Post-Construction.
* **Desired Frequency** (`service_frequency`, select_one, required): Choose how often you would like your property cleaned, such as One-time Deep Clean, Weekly, Bi-weekly, Monthly, or Move In/Move Out.
* **Estimated Square Footage** (`square_footage`, number, required): Enter the estimated square footage of your property.
* **Number of Bedrooms** (`num_bedrooms`, number, required): Enter the number of bedrooms in your property.
* **Number of Bathrooms** (`num_bathrooms`, number, required): Enter the number of bathrooms in your property.
* **Are there pets in the home?** (`pet_status`, select_one, required): Indicate if you have pets, such as No pets, Yes - Cats, Yes - Dogs, or Yes - Other.
* **Additional areas to clean?** (`special_areas`, select_multiple, required): Select any additional areas that require extra attention, such as Inside Fridge, Inside Oven, Interior Windows, Basement, Garage, or Laundry Service.
* **Preferred Day(s) for Service** (`preferred_days`, select_multiple, required): Choose your preferred days for service, such as Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday (if applicable).
* **How will the cleaner access the property?** (`access_method`, select_one, required): Choose how the cleaner will access your property, such as I will be home, Hidden key, Keypad code, or Concierge/Front desk.
* **Specific concerns or areas that need extra attention?** (`specific_concerns`, text, required): If you have specific concerns or areas that need extra attention, type them in this field.
* **How did you find us?** (`referral_source`, text, required): If you're a new client, tell us how you found us.
* **Thank you!** (`intake_footer`, note, required): This field is not required but provides a friendly message to the client, indicating that we will contact them within 24 hours with an estimate.
