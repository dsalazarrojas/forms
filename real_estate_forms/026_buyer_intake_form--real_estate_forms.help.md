<thinking>
To determine the purpose and requirements for this Buyer Intake Form, we should analyze the provided YAML fields. The form appears to be designed for potential homebuyers to provide information about their preferences and needs for buying a property. It covers various aspects such as contact details, desired location, budget, and specific features they are looking for in a property. The form also includes fields for additional notes and preferences, suggesting that it may be used to gather information for personalized recommendations or matching properties. The form has several required fields, indicating that the information is critical for the purpose of the form. However, there are some fields with optional or non-essential attributes, which may be used for secondary purposes such as filtering or categorizing the responses.
</thinking>

# Buyer Intake Form - Help Guide
## Purpose
This form is designed to gather information from potential homebuyers about their preferences and needs for buying a property.

## How To Complete This Form
1. To start, please fill in your contact details: your name, email address, and phone number.
2. If applicable, provide your spouse's name and phone number.
3. Choose your desired purchase timeline and estimated budget for the property.
4. Select your financing status and preferred property type (e.g., single family home, condo, townhouse, etc.).
5. Indicate the importance of commute distance to you.
6. Select your preferred school district quality (if applicable).
7. Choose your preference for homeowners association (HOA) communities.
8. Finally, add any additional notes or preferences about the property or the buying process.

## Field-by-Field Explanation

* **Prospect Name** (`prospect_name`, text, required): Your full name as a potential homebuyer.
* **Email Address** (`prospect_email`, email, required): Enter your email address to contact you for further information.
* **Phone Number** (`prospect_phone`, text, required): Enter your phone number for easy contact.
* **Spouse or Co-Buyer Name** (`spouse_name`, text, optional): If you are buying with someone, enter their name.
* **Spouse Phone Number** (`spouse_phone`, text, optional): Enter your spouse's phone number.
* **Purchase Timeline** (`purchase_timeline`, select one, required): Choose when you plan to buy the property (e.g., within 1 month, 1-3 months, etc.).
* **Estimated Budget** (`estimated_budget`, select one, required): Select your estimated budget for the property.
* **Financing Status** (`financing_status`, select one, required): Indicate your current financing status (e.g., pre-approved, pre-qualified, etc.).
* **Preferred Property Type** (`property_type`, select multiple, required): Choose your preferred type of property (e.g., single family home, condo, townhouse, etc.).
* **Desired Locations or Areas** (`desired_locations`, text, required): Enter the areas or locations where you would like to live.
* **Must Have Features** (`must_have_features`, select multiple, optional): Check any essential features you need in a property (e.g., garage, backyard, pool, etc.).
* **Number of Bedrooms** (`number_bedrooms`, number, required): Enter the number of bedrooms you need in a property.
* **Number of Bathrooms** (`number_bathrooms`, number, required): Enter the number of bathrooms you need in a property.
* **Preferred Square Footage Range** (`square_footage`, text, optional): Enter the approximate size of the property you are looking for.
* **Preferred Lot Size** (`lot_size`, text, optional): Enter the approximate size of the property's lot or area.
* **Commute Importance** (`commute_importance`, select one, required): Indicate how important commute distance is to you.
* **School District Requirements** (`school_district`, select one, required): Select how important school district quality is for you.
* **Homeowners Association Preference** (`homeowners_association`, select one, required): Choose whether you prefer or do not prefer HOA communities.
* **Additional Notes or Preferences** (`additional_notes`, text, optional): Add any other notes or preferences you have about the property or the buying process.
