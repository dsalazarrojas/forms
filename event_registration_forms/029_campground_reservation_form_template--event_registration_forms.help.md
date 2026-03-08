<thinking>
This form is designed to be used by individuals and groups who want to reserve a campsite at a campground. It is intended for guests to provide their personal and campsite selection information. This form is likely to be used by campground staff or administrators to process and confirm reservations.
The following fields are required to be filled out: First Name, Last Name, Email Address, Phone Number, Check-In Date, Check-Out Date, Number of Adults, Campsite Type, and Number of Pets. 
This form should not be duplicated or used for purposes other than reservation inquiries. The form is designed to provide the necessary information to efficiently process and confirm reservations.
</thinking>

# Campground Reservation Form Template - Help Guide
## Purpose
This form is designed to help individuals or groups reserve a campsite at the campground. 

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Enter your email address in the "Email Address" field.
4. Enter your phone number in the "Phone Number" field.
5. Select a check-in date in the "Check-In Date" field.
6. Select a check-out date in the "Check-Out Date" field.
7. Enter the number of adults in your party in the "Number of Adults" field.
8. Select the type of campsite you would like to reserve in the "Campsite Type" field.
9. If you are bringing pets, select the option in the "Bringing Pets" field.
10. Enter any special requests or amenities you are interested in.

## Field-by-Field Explanation
### First Name
**First Name** (`guest_first_name`, `text`, required): Enter your first name.
### Last Name
**Last Name** (`guest_last_name`, `text`, required): Enter your last name.
### Email Address
**Email Address** (`guest_email`, `email`, required): Enter your email address.
### Phone Number
**Phone Number** (`guest_phone`, `text`, required): Enter your phone number.
### Check-In Date
**Check-In Date** (`check_in_date`, `date`, required): Select the date you will be checking in.
### Check-Out Date
**Check-Out Date** (`check_out_date`, `date`, required): Select the date you will be checking out.
### Number of Adults
**Number of Adults** (`number_of_adults`, `number`, required): Enter the number of adults in your party.
### Campsite Type
**Campsite Type** (`campsite_type`, `select_one`, required): Select the type of campsite you would like to reserve (Full Hookup RV, Partial Hookup RV, Tent Site, Cabin, Glamping Tent).
### Number of Nights
**Number of Nights** (`number_of_nights`, `number`, optional): Enter the number of nights you would like to reserve.
### Street Address
**Street Address** (`guest_address`, `text`, optional): Enter your street address.
### City
**City** (`guest_city`, `text`, optional): Enter the city of your campsite.
### State
**State** (`guest_state`, `text`, optional): Enter the state of your campsite.
### Zip Code
**Zip Code** (`guest_zip`, `text`, optional): Enter the zip code of your campsite.
### Bringing Pets
**Bringing Pets** (`pets_bringing`, `select_one`, required): If you are bringing pets, select one of the options (False, Yes, one pet, Yes, multiple pets).
### Pet Type and Number
**Pet Type and Number** (`pet_type_details`, `text`, optional): Enter the type and number of pets you are bringing.
### Special Requests
**Special Requests** (`special_requests`, `text`, optional): Enter any special requests or accommodations you have.
### Interested Amenities
**Interested Amenities** (`amenities_interested`, `select_multiple`, optional): Select any amenities you are interested in (WiFi, Picnic Table, Fire Pit, Electric Hookup, Water Hookup, Sewage Hookup, Laundry Facilities).
### How would you like to receive reservation confirmation
**How would you like to receive reservation confirmation** (`confirmation_required`, `select_one`, required): Select how you would like to receive confirmation of your reservation (Email, Phone, SMS).

## Tips
* Please make sure to fill out all required fields to ensure efficient processing of your reservation.
* If you have any special requests or concerns, please include them in the "Special Requests" field.
* If you are unsure of any field, please contact the campground staff for assistance.
