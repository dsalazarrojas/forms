<thinking>
The purpose of this form is to collect client information for cleaning services. It is designed to gather essential details about the client, including their contact information, property details, cleaning service preferences, and any special requests or instructions.

To ensure accuracy and consistency in the data collected, it is crucial to follow the guidelines below:

* Ensure the client's contact information is accurate and up-to-date.
* Be specific when describing the property type and size.
* Clearly indicate the desired cleaning frequency and type.
* Provide detailed access instructions if necessary.
* Be honest about having pets or not.
* List any special requests or instructions.
* Specify how the client found out about the service.

By following these guidelines, the form will help us better understand the client's needs and provide a more efficient and effective cleaning service.

</thinking>

# Cleaning Client Information Form - Help Guide
## Purpose

The Cleaning Client Information Form is designed to collect essential details about clients seeking cleaning services. This form helps us understand their needs and preferences, enabling us to provide a personalized and efficient cleaning experience.

## How To Complete This Form

1. Fill in the client's personal information, including their first name, last name, email address, and primary phone number.
2. Enter the property address, city, state or province, and postal code.
3. Specify the property type and size.
4. Choose the desired cleaning frequency and type.
5. Select the preferred cleaning time and areas to be cleaned.
6. Indicate how you will be accessing the property.
7. If applicable, provide detailed access instructions or specify if you have pets.
8. List any special requests or instructions.
9. Finally, indicate how you found out about our cleaning services.

## Field-by-Field Explanation

* **First Name** (`client_first_name`, text, required): Enter the client's first name.
* **Last Name** (`client_last_name`, text, required): Enter the client's last name.
* **Email Address** (`client_email`, email, required): Enter a valid email address for communication purposes.
* **Primary Phone Number** (`client_phone`, text, required): Enter the client's primary phone number.
* **Secondary Phone Number** (`client_phone_secondary`, text, optional): Enter the client's secondary phone number (if applicable).
* **Property Address** (`property_address`, text, required): Enter the street address of the property to be cleaned.
* **City** (`city`, text, required): Enter the city of the property.
* **State/Province** (`state_province`, text, required): Enter the state or province of the property.
* **Postal Code** (`postal_code`, text, required): Enter the postal code of the property.
* **Property Type** (`property_type`, select_one, required): Choose the type of property (e.g., Single Family Home, Apartment, etc.).
* **Approximate Property Size** (`property_size_sqft`, text, optional): Enter the approximate square footage or total area of the property.
* **Number of Bedrooms** (`number_bedrooms`, number, optional): Enter the number of bedrooms for residential properties.
* **Number of Bathrooms** (`number_bathrooms`, number, optional): Enter the number of bathrooms for residential properties.
* **Desired Service Frequency** (`service_frequency`, select_one, required): Choose the desired service frequency (e.g., Weekly, Bi-weekly, etc.).
* **Service Type** (`service_type`, select_one, required): Choose the type of cleaning service needed (e.g., Regular Cleaning, Deep Cleaning, etc.).
* **Preferred Cleaning Time** (`preferred_cleaning_time`, select_one, required): Choose the preferred cleaning time (e.g., Morning, Afternoon, etc.).
* **Areas to be Cleaned** (`areas_to_clean`, select_multiple, required): Select all areas that need cleaning (e.g., Kitchen, Bathrooms, etc.).
* **How to Access the Property** (`access_method`, select_one, required): Choose how you will be accessing the property (e.g., I will be home, Hidden key location, etc.).
* **Access Instructions** (`access_instructions`, text, optional): Provide detailed access instructions if necessary.
* **Pets in the Home** (`pets_in_home`, select_one, required): Indicate if you have any pets (e.g., Yes, Dogs, Yes, Cats, etc.).
* **Pet Details** (`pet_details`, text, optional): Provide breed, size, temperament, and special care needs for pets.
* **Special Requests or Instructions** (`special_requests`, text, optional): List any special requests or instructions.
* **How Did You Hear About Us?** (`how_found_us`, select_one, optional): Indicate how you found out about our cleaning services (e.g., Google Search, Social Media, etc.).
* **Date Registered** (`client_date_registered`, date, required): Enter the date of registration.
