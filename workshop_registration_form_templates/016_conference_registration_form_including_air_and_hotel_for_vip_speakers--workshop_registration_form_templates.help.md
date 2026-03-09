# Conference Registration Form Including Air And Hotel For VIP Speakers - Help Guide
## Purpose
This form is designed to collect information from VIP speakers for a conference or workshop. The form covers speaker details, travel and accommodation requirements, and presentation specifics. Fill out this form accurately to ensure a smooth and enjoyable experience for both speakers and the conference organizers.

## How To Complete This Form
1. Start by filling out the speaker's information: name, title, organization, email, phone number, and speaking topic.
2. Provide travel and accommodation details: preferred travel dates, departure city or airport, airline preference, and special requests.
3. Choose your VIP status and select the travel package you require.
4. Specify your dietary requirements and notes.
5. Decide if you'll bring a guest and provide their details.
6. Consent to session recording.
7. Specify any special requests or notes.
8. Accept the speaker agreement.

## Field-by-Field Explanation
* **VIP Speaker Full Name** (`speaker_name`, text, required): Enter your complete name as it should be displayed on conference materials.
* **Professional Title** (`speaker_title`, text, required): Your current position or title.
* **Organization** (`organization`, text, required): Your company or institution.
* **Email Address** (`email`, email, required): Your primary contact email address.
* **Phone Number** (`phone`, text, required): Your contact number.
* **Speaking Topic or Session Title** (`speaking_topic`, text, required): Title of your presentation.
* **Presentation Date** (`presentation_date`, date, required): Scheduled date for your presentation.
* **Presentation Time** (`presentation_time`, time, required): Scheduled time slot for your presentation.
* **VIP Status** (`vip_status`, select_one, required): Select your speaker category: Keynote Speaker, Plenary Speaker, Panel Moderator, Workshop Leader, Distinguished Guest.
* **Travel Arrangements Needed** (`travel_arrangements`, select_one, required): Choose your travel package: Yes Full Travel Package, Yes Flight Only, No Will Book Own Travel, No Local Speaker.
* **Departure City or Airport** (`departure_city`, text, false): Where you will depart from.
* **Departure Country** (`departure_country`, text, false): Your departure country.
* **Travel Dates** (`travel_dates`, text, false): Your preferred travel dates.
* **Airline Preference** (`airline_preference`, select_one, false): Choose your airline preference: No Preference, Business Class Required, First Class Required, Specific Airline - Will Specify.
* **Airline Notes** (`airline_notes`, text, false): Specify any specific airline preferences.
* **Hotel Arrangements Needed** (`hotel_arrangements`, select_one, required): Choose your accommodation package: Yes VIP Hotel Package, Yes Standard Hotel, No Will Book Own Hotel, No Local Speaker.
* **Hotel Check-In Date** (`check_in_date`, date, false): Arrival date.
* **Hotel Check-Out Date** (`check_out_date`, date, false): Departure date.
* **Room Type Preference** (`room_type`, select_one, false): Choose your room type: Executive Suite, Deluxe King Room, Standard King Room, Twin Beds, No Preference.
* **Special Room Requests** (`special_room_requests`, text, false): Any special room requests.
* **Ground Transportation** (`ground_transportation`, select_one, required): Choose your ground transportation needs: Yes Both Arrival and Departure, Yes Arrival Only, Yes Departure Only, No Not Needed.
* **Dietary Requirements** (`dietary_requirements`, select_one, required): Choose your dietary requirements: No Restrictions, Vegetarian, Vegan, Gluten-Free, Kosher, Halal, Other.
* **Dietary Notes** (`dietary_notes`, text, false): Specify any dietary requirements.
* **Will You Bring a Guest** (`guest_attending`, select_one, required): Decide if you'll bring a guest: Yes One Guest, Yes Multiple Guests, No Traveling Alone.
* **Guest Details** (`guest_details`, text, false): Names and relationship of your guest(s).
* **Guest Arrangements** (`guest_arrangements`, select_one, false): Choose your guest travel arrangements: Yes Full Package for Guest, Yes Hotel Only, No Guest Has Own Arrangements, Not Applicable.
* **AV Requirements** (`av_requirements`, text, false): Specify any special AV requirements.
* **Consent to Session Recording** (`session_recording`, select_one, required): Choose your consent status: Yes May Be Recorded, Audio Only, No Recording.
* **Honorarium Payment Details** (`honorarium_details`, text, false): Specify payment information if applicable.
* **Special Requests or Notes** (`special_requests`, text, false): Any other requirements or notes.
* **I Accept VIP Speaker Terms and Conditions** (`terms_accepted`, select_one, required): Accept the speaker agreement: I Accept, I Do Not Accept.

## Tips
- Double-check your answers for accuracy and completeness.
- Use the provided options to make the best choice for each field.
- If you have any questions or concerns, contact the conference organizers for support.
