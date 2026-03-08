# Booking Form With Image Background - Help Guide
## Purpose
This form is designed to collect information from tourists for booking purposes. The form is divided into multiple pages, each page containing fields that are relevant to the corresponding section.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your full name, email address, and phone number in the first page.
2. Select your country of origin and number of tourists in the second page.
3. Choose your preferred tour package, tour start and end dates, and accommodation preference in the third page.
4. Select your preferred meal plan and transportation option in the fourth page.
5. Choose your special interests and budget estimate in the fifth page (optional).
6. Add any special requirements or additional comments in the sixth page (optional).

## Field-by-Field Explanation

### Page 1: Full Name
* **Full Name** (`tourist_name`, `text`, required): Enter your full name for booking purposes.

### Page 2: Contact Information
* **Email Address** (`tourist_email`, `email`, required): Enter your email address for booking purposes. We will send tour details to this email.
* **Phone Number** (`tourist_phone`, `text`, required): Enter your phone number for contact purposes.

### Page 3: General Information
* **Country of Origin** (`country_of_origin`, `text`, optional): Enter the country you are from.
* **Number of Tourists** (`number_of_tourists`, `number`, required): Enter the number of people in your group.

### Page 4: Tour Preferences
* **Tour Package** (`tour_package`, `select_one`, required): Select the type of tour you are interested in (e.g. City tour, Mountain expedition, etc.).
* **Tour Start Date** (`start_date`, `date`, required): Choose the date you would like to start the tour.
* **Tour End Date** (`end_date`, `date`, required): Choose the date you would like to end the tour.
* **Accommodation Preference** (`accommodation_type`, `select_one`, required): Select the type of accommodation you prefer (e.g. Budget hotel, Mid-range hotel, etc.).

### Page 5: Meal and Transportation
* **Meal Plan** (`meal_plan`, `select_one`, required): Select whether you want meals included in your tour (e.g. Breakfast only, Breakfast and lunch, etc.).
* **Transportation Option** (`transportation`, `select_one`, required): Select how you would prefer to travel (e.g. Coach/bus, Private van, etc.).

### Page 6: Special Interests and Budget
* **Special Interests** (`special_interests`, `select_multiple`, optional): Select any special interests you have (e.g. Historical sites, Nature and wildlife, etc.).
* **Budget Estimate** (`budget_estimate`, `select_one`, optional): Estimate your budget per person.
* **Additional Comments** (`additional_comments`, `text`, optional): Enter any additional information about your tour preferences.

### Additional Information
* **Special Requirements** (`special_requirements`, `text`, optional): Enter any special needs or requests you have.
* **Additional Comments** (`additional_comments`, `text`, optional): Enter any other information about your tour preferences.
