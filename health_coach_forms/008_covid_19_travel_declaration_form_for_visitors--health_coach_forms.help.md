# COVID 19 Travel Declaration Form For Visitors - Help Guide
## Purpose
The COVID-19 Travel Declaration Form is a mandatory document that visitors must complete before arrival to ensure their safety and compliance with local health regulations. This form collects information about your travel history, health status, and declaration of accuracy.

## How To Complete This Form
1. Fill out the form carefully and accurately.
2. Make sure you have all the necessary information and documents before starting.
3. If you're unsure about any question or requirement, contact your travel agent or relevant authorities.

## Field-by-Field Explanation

* **Visitor Full Name** (`visitor_name`, text, required): Enter your full name as it appears on your passport or ID.
* **Passport or ID Number** (`visitor_passport`, text, required): Enter your passport or ID number.
* **Date of Birth** (`visitor_dob`, date, required): Enter your date of birth in the required format (DD/MM/YYYY).
* **Nationality or Country of Residence** (`visitor_nationality`, text, required): Enter your nationality or country of residence.
* **Email Address** (`visitor_email`, email, required): Enter your email address.
* **Phone Number** (`visitor_phone`, text, required): Enter your phone number.
* **Travel Details** (`travel_section`, note, required): Please note any additional travel information that may be relevant to your stay.
* **Country of Departure** (`departure_country`, text, required): Enter the country of departure.
* **Arrival Date** (`arrival_date`, date, required): Enter the date of arrival.
* **Planned Departure Date** (`departure_date`, date, required): Enter the planned departure date.
* **Any stops or connections during travel** (`travel_stops`, text, optional): Enter any additional stops or connections during your travel.
* **Primary Mode of Transportation** (`travel_mode`, select_one, required): Select one of the following options: Air, Sea/Cruise, Car/Bus, Train, or Multiple modes.
* **Accommodation Information** (`accommodation_section`, note, optional): Please note any additional information about your accommodation.
* **Type of Accommodation** (`accommodation_type`, select_one, required): Select one of the following options: Hotel, Private residence, Airbnb, Resort, Family/Friends home, or Other.
* **Accommodation Address** (`accommodation_address`, text, required): Enter the address of your accommodation.
* **Accommodation Contact Number** (`accommodation_contact`, text, optional): Enter the contact number of your accommodation.
* **Health Declaration** (`health_section`, note, optional): Please note any health-related information that may be relevant to your stay.
* **Vaccination Status** (`vaccination_status`, select_one, required): Select one of the following options: Fully vaccinated, Partially vaccinated, or Not vaccinated.
* **Date of Last Vaccination** (`vaccination_date`, date, optional): Enter the date of your last vaccination, if any.
* **COVID-19 Vaccine Type** (`vaccine_type`, text, optional): Enter the type of COVID-19 vaccine you've received, if any.
* **Currently experiencing COVID-19 symptoms** (`symptoms_current`, select_one, required): Select one of the following options: True, False.
* **If yes, describe symptoms** (`symptoms_description`, text, optional): Describe any COVID-19 symptoms you're currently experiencing.
* **Tested positive for COVID-19 in past 90 days** (`covid_positive_past`, select_one, required): Select one of the following options: True, False, or Unsure.
* **Date of positive test** (`covid_positive_date`, date, optional): Enter the date of your positive test, if applicable.
* **Declaration and Consent** (`declaration_section`, note, optional): Please read and agree to the declaration and consent terms.
* **All health information provided is true and accurate** (`health_truthfulness`, select_one, required): Select one of the following options: I agree, or I do not agree.
* **I understand quarantine requirements for my destination** (`quarantine_understanding`, select_one, required): Select one of the following options: I agree, or I do not agree.
* **I will comply with testing requirements if requested** (`testing_requirements`, select_one, required): Select one of the following options: I agree, or I do not agree.
