# Accommodation Bulletin - Help Guide
## Purpose
The Accommodation Bulletin form is used to collect essential information from guests staying in a hotel, hostel, or rental property for various purposes such as verifying identities, understanding their stay details, and managing their contact information.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Start by providing your identification details in the "Guest Identification" section.
2. Fill in your Full Name, Nationality, Date of Birth, Gender, Identification Document Type, Document Number, Document Issue Date, and Document Expiry Date.
3. Next, fill in your "Contact Information" details, including your Permanent Address and Phone Number.
4. In the "Stay Details" section, provide information about your Accommodation Name, Check-In Date, Check-Out Date, Purpose of Stay, and Next Destination (if applicable).
5. Please ensure that all fields are filled in accurately and completely.

## Field-by-Field Explanation
* **Full Name** (`full_name`, text, required): Enter your full name as it appears on your identification document.
* **Nationality** (`nationality`, text, required): Select your nationality.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Gender** (`gender`, select_one, required): Select your gender from the options.
* **Identification Document Type** (`id_document_type`, select_one, required): Select the type of identification document you possess.
* **Document Number** (`id_document_number`, text, required): Enter the number on your identification document.
* **Document Issue Date** (`id_issue_date`, date, required): Enter the date your identification document was issued.
* **Document Expiry Date** (`id_expiry_date`, date, required): Enter the expiry date of your identification document.
* **Permanent Address** (`permanent_address`, text, required): Enter your permanent address, including city and country.
* **Email Address** (`email`, email, optional): Enter your email address (if applicable).
* **Phone Number** (`phone_number`, text, required): Enter your phone number, including the country code.
* **Accommodation Name** (`accommodation_name`, text, required): Enter the name of your hotel, hostel, or rental property.
* **Check-In Date** (`check_in_date`, date, required): Enter the date you check-in at the accommodation.
* **Check-Out Date** (`check_out_date`, date, required): Enter the date you check-out from the accommodation.
* **Purpose of Stay** (`purpose_of_stay`, select_one, required): Select the purpose of your stay from the options.
* **Arriving From** (`coming_from`, text, required): Enter the city or country you are coming from.
* **Next Destination** (`next_destination`, text, optional): Enter the city or country you are heading to after your stay.
