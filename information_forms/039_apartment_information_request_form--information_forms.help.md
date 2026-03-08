# Apartment Information Request Form - Help Guide
## Purpose
This form is used to gather information from potential customers or clients who are interested in apartments or rental properties. It helps the property management team understand their needs and provide relevant information and services.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your inquiry date.
2. Provide your full name and contact email address.
3. Enter your phone number.
4. Indicate your preferred contact method (email, phone, text, or any method).
5. Select your best contact time (morning, midday, afternoon, evening, or weekend).
6. Specify the property of interest.
7. Choose the type of information you need.
8. Indicate your desired number of bedrooms.
9. Choose your desired number of bathrooms.
10. Select your budget range.
11. Choose your desired move-in timeframe.
12. If you have a specific move-in date, enter it.
13. Select the length of your desired lease.
14. Enter the number of people who will live in the apartment.
15. Enter the number of adults in your household (18+ years old).
16. If you have children under 18, enter their count.
17. Indicate if you have pets.
18. Specify pet details if applicable.
19. If you own a vehicle, select the number of vehicles you own.
20. Choose your parking needs.
21. Select your employment status.
22. Select your approximate monthly household income.
23. Indicate your credit score range.
24. Specify your current housing situation.
25. Enter the reason for your move.
26. Enter any special requirements.
27. If you have additional questions, enter them.
28. Select if you would like to schedule a viewing.
29. Choose your preferred viewing time.
30. Select where you heard about us.
31. Enter your name and the name of the assigned agent (for internal use only).
32. Select the status of your inquiry (for internal use only).
33. Add internal notes for staff use (for internal use only).

## Field-by-Field Explanation

* **Inquiry Date** (`inquiry_date`, date, required): Enter the date you are inquiring about apartment information.
* **Full Name** (`client_name`, text, required): Enter your full name.
* **Email Address** (`client_email`, email, required): Enter your contact email address.
* **Phone Number** (`client_phone`, text, required): Enter your contact phone number.
* **Preferred Contact Method** (`preferred_contact`, select_one, required): Choose how you would like to be contacted (email, phone, text, or any method).
* **Best Contact Time** (`best_contact_time`, select_one, required): Select your preferred time to be contacted (morning, midday, afternoon, evening, or weekend).
* **Property of Interest** (`property_interest`, text, required): Specify the property you are interested in.
* **Type of Inquiry** (`inquiry_type`, select_one, required): Select the type of information you need (general information, availability, pricing, amenities, application process, schedule viewing, or other).
* **Desired Bedrooms** (`desired_bedrooms`, select_one, required): Choose the number of bedrooms you desire.
* **Desired Bathrooms** (`desired_bathrooms`, select_one, required): Select the number of bathrooms you desire.
* **Budget Range** (`budget_range`, select_one, required): Select your approximate monthly rent range.
* **Move-in Timeframe** (`move_in_timeframe`, select_one, required): Choose your desired move-in timeframe (immediately, within 2 weeks, within 1 month, within 2 months, within 3 months, or just looking).
* **Desired Move-in Date** (`desired_move_in_date`, date, optional): If you have a specific move-in date, enter it.
* **Preferred Lease Duration** (`lease_duration`, select_one, required): Select the length of your desired lease.
* **Number of Occupants** (`number_of_occupants`, number, required): Enter the number of people who will live in the apartment.
* **Number of Adults** (`adults_count`, number, required): Enter the number of adults in your household (18+ years old).
* **Number of Children** (`children_count`, number, optional): If you have children under 18, enter their count.
* **Do you have Pets?** (`pet_ownership`, select_one, required): Indicate if you have pets.
* **Pet Details** (`pet_details`, text, optional): If you have pets, specify their type, size, and breed.
* **Do you own a Vehicle?** (`vehicle_ownership`, select_one, required): If you own a vehicle, select the number of vehicles you own.
* **Parking Requirement** (`parking_requirement`, select_one, required): Choose your parking needs.
* **Employment Status** (`employment_status`, select_one, required): Select your current employment status.
* **Monthly Household Income** (`monthly_income`, select_one, required): Select your approximate monthly household income.
* **Credit Score Range** (`credit_score_range`, select_one, optional): If you prefer not to answer, select "prefer not to say".
* **Current Housing Situation** (`current_housing`, select_one, required): Specify your current housing situation.
* **Reason for Moving** (`reason_for_moving`, text, optional): Enter the reason for your move.
* **Special Requirements** (`special_requirements`, text, optional): Enter any special requirements.
* **Additional Questions** (`additional_questions`, text, optional): If you have additional questions, enter them here.
* **Would you like to schedule a Viewing?** (`viewing_request`, select_one, required): Select if you would like to schedule a viewing.
* **Preferred Viewing Time** (`preferred_viewing_time`, select_multiple, optional): Choose your preferred viewing time.
* **How did you hear about us?** (`how_did_you_hear`, select_one, required): Select where you heard about us.
* **Agent Assigned** (`agent_assigned`, text, optional): For internal use only.
* **Inquiry Status** (`inquiry_status`, select_one, optional): For internal use only.
* **Internal Notes** (`notes`, text, optional): For internal use only.
