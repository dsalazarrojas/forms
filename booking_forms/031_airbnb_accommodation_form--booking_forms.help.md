# Airbnb Accommodation Form - Help Guide
## Purpose
This form is designed to gather information from guests about their stay at the Airbnb accommodation. The form helps us understand their preferences, requirements, and expectations, allowing us to provide a better experience during their stay.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your personal details (First Name, Last Name, Email Address, Phone Number).
2. Select your country of residence.
3. Choose your arrival and departure dates.
4. Enter the number of guests, adults, and children (if applicable) in your party.
5. Indicate if you'll be bringing pets and describe them (if needed).
6. Select the type of accommodation you'll be staying in (entire home, private room, shared room, or unique space).
7. Choose the reason for your visit (leisure, business, family visit, event, or other).
8. If you have any special requests or needs, please describe them in the special requests field.
9. If you require early check-in or late check-out, please select your preference.
10. If you need transportation, select your required options.
11. If you have any dietary restrictions or accessibility needs, please select your options in the corresponding fields.
12. Indicate how you heard about us (Airbnb platform, direct website, social media, friend referral, search engine, or other).
13. Finally, provide a digital signature.

## Field-by-Field Explanation

* **First Name** (`guest_first_name`, text, required): Please fill in your first name.
* **Last Name** (`guest_last_name`, text, required): Please fill in your last name.
* **Email Address** (`email`, email, required): Enter your contact email address.
* **Phone Number** (`phone`, text, required): Provide your contact phone number.
* **Country of Residence** (`country`, text, required): Enter your country of origin.
* **Check-in Date** (`check_in_date`, date, required): Select your arrival date.
* **Check-out Date** (`check_out_date`, date, required): Select your departure date.
* **Number of Guests** (`number_of_guests`, number, required): Enter the total number of guests in your party.
* **Number of Adults** (`adults`, number, required): Enter the number of adults.
* **Number of Children** (`children`, number, optional): Enter the number of children (if applicable).
* **Number of Infants** (`infants`, number, optional): Enter the number of infants (under 2 years old).
* **Bringing Pets** (`pets`, select_one, required): Select if you'll be bringing pets.
*   *Yes, 1 pet*: You'll be bringing 1 pet.
*   *Yes, 2 pets*: You'll be bringing 2 pets.
*   *Yes, more than 2*: You'll be bringing 3 or more pets.
*   *False*: You won't be bringing any pets.
* **Pet Details** (`pet_details`, text, optional): Provide a description of your pet (if you're bringing any).
* **Property Type** (`property_type`, select_one, required): Select the type of accommodation you're booking.
*   *Entire home*: You'll be booking the entire home.
*   *Private room*: You'll be booking a private room.
*   *Shared room*: You'll be booking a shared room.
*   *Unique space*: You'll be booking a unique space.
* **Purpose of Visit** (`purpose_of_visit`, select_one, required): Select the reason for your visit.
*   *Leisure*: You're visiting for leisure.
*   *Business*: You're visiting for business.
*   *Family visit*: You're visiting family.
*   *Event*: You're attending an event.
*   *Other*: Select this if other options don't apply.
* **Special Requests** (`special_requests`, text, optional): Describe any special requests or needs you may have.
* **Early Check-in Requested** (`early_checkin`, select_one, optional): Select if you prefer early check-in.
*   *False*: You don't require early check-in.
*   *Yes, if available*: You prefer early check-in if it's available.
*   *Yes, required*: You need early check-in.
* **Late Check-out Requested** (`late_checkout`, select_one, optional): Select if you prefer late check-out.
*   *False*: You don't require late check-out.
*   *Yes, if available*: You prefer late check-out if it's available.
*   *Yes, required*: You need late check-out.
* **Transportation Needed** (`transportation_needed`, select_one, optional): Select if you need transportation.
*   *False*: You don't need transportation.
*   *Yes, airport pickup*: You need airport pickup.
*   *Yes, airport dropoff*: You need airport dropoff.
*   *Yes, both*: You need both airport pickup and dropoff.
* **Dietary Requirements** (`dietary_requirements`, select_multiple, optional): Select your dietary requirements.
*   *None*: You don't have any dietary restrictions.
*   *Vegetarian*: You're a vegetarian.
*   *Vegan*: You're vegan.
*   *Gluten-free*: You require gluten-free options.
*   *Halal*: You require halal options.
*   *Kosher*: You require kosher options.
*   *Other*: Select this if other dietary restrictions apply.
* **Accessibility Needs** (`accessibility_needs`, text, optional): Describe any accessibility needs you may have.
* **How Did You Hear About Us** (`how_heard`, select_one, optional): Select how you heard about us.
*   *Airbnb platform*: You heard about us through the Airbnb platform.
*   *Direct website*: You heard about us through our website.
*   *Social media*: You heard about us through social media.
*   *Friend referral*: You heard about us through a friend's referral.
*   *Search engine*: You heard about us through a search engine.
*   *Other*: Select this if other options don't apply.
* **Guest Signature** (`guest_signature`, text, required): Provide a digital signature.
* **Booking Date** (`booking_date`, date, required): Select the date of your booking.
