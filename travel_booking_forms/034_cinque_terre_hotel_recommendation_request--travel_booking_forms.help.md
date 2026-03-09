# Cinque Terre Hotel Recommendation Request - Help Guide
## Purpose
This form is designed to collect information from travelers to recommend the best hotel for their stay in Cinque Terre. Please fill out this form with your travel details and preferences, and we'll provide you with personalized hotel recommendations.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter your full name, email, and phone number (if available).
2. Choose your planned travel dates and return date.
3. Select the number of guests and rooms you require.
4. Choose your preferred room type and budget range.
5. Select your preferred village in Cinque Terre.
6. Choose the amenities you need for your stay.
7. Specify any accessibility requirements.
8. Choose your travel purpose and interests.
9. Select your preferred contact method.
10. Provide any additional requests or questions you have.

## Field-by-Field Explanation

* **Your Full Name** (`traveler_name`, text, required): Please enter your full name, including first and last name.
* **Email Address** (`email`, email, required): Enter your email address for hotel communications.
* **Phone Number** (`phone`, text, optional): If you have a phone number, please enter it. If not, leave this field blank.
* **Country of Residence** (`country`, text, required): Enter your country of residence.
* **Planned Travel Dates** (`travel_dates`, date, required): Choose your planned travel dates.
* **Return Date** (`return_date`, date, required): Choose your return date.
* **Number of Guests** (`number_guests`, number, required): Select the number of guests, including yourself.
* **Number of Rooms Needed** (`number_rooms`, number, required): Select the number of rooms you need.
* **Preferred Room Type** (`room_type`, select_one, required): Choose your preferred room type, such as Single, Double, Twin, Suite, Apartment, or No preference.
* **Budget Range Per Night** (`budget_range`, select_one, required): Select your budget range per night in Euros. You can choose from Under 100 EUR, 100-150 EUR, 151-200 EUR, 201-300 EUR, or Over 300 EUR.
* **Preferred Village in Cinque Terre** (`village_preference`, select_one, required): Select your preferred village in Cinque Terre, such as Monterosso al Mare, Vernazza, Corniglia, Manarola, or No preference.
* **Required Amenities** (`amenities`, select_multiple, required): Select all the amenities you need for your stay, such as WiFi, Air conditioning, Sea view, etc.
* **Accessibility Requirements** (`accessibility`, select_one, required): Select your accessibility requirements, such as No requirements, Ground floor needed, Elevator required, Wheelchair accessible, or Other.
* **Accessibility Needs** (`accessibility_detail`, text, optional): If you selected "Other" as your accessibility requirement, please specify your needs here.
* **Purpose of Travel** (`travel_purpose`, select_one, required): Choose your travel purpose, such as Vacation, Honeymoon, Family trip, Business, Photography, Hiking, or Other.
* **Interests** (`interests`, select_multiple, required): Select your main interests, such as Beach activities, Hiking trails, Wine tasting, Local cuisine, Photography, History and culture, Swimming, or Boat tours.
* **How Will You Arrive** (`transportation`, select_one, required): Select how you will arrive, such as By car, By train, By plane, By cruise ship, or Other.
* **Do You Need Parking Information** (`parking_needed`, select_one, required): Select whether you need parking information, such as True or False.
* **Is This a Special Occasion** (`special_occasion`, select_one, required): Select whether this is a special occasion, such as an anniversary or birthday.
* **Please Specify Special Occasion** (`special_occasion_detail`, text, optional): If you selected "True" as your special occasion, please specify here.
* **Have You Visited Cinque Terre Before** (`previous_visit`, select_one, required): Select whether you have visited Cinque Terre before, such as Yes, multiple times, Yes, once, or No, first time.
* **Any Additional Requests or Questions** (`additional_requests`, text, optional): If you have any additional requests or questions, please specify here.
* **Preferred Contact Method** (`contact_preference`, select_one, required): Select your preferred contact method, such as Email, Phone, or Either.

## Tips

* Make sure to fill out all required fields to ensure we can provide accurate hotel recommendations.
* If you have any special requests or questions, please provide them in the "Any Additional Requests or Questions" field.
* If you're unsure about any field, feel free to ask, and we'll be happy to help!
