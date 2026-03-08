# summer_camp_transport_logistics_survey - Help Guide
## Purpose
This form is used to collect information from users regarding their transportation needs and logistics for the summer camp. It is essential to provide accurate and complete data to ensure smooth transportation arrangements.

## How To Complete This Form
1. Please select all applicable transportation modes from the "Transportation Needs" page.
2. Choose one or multiple pickup locations from the list provided on the "Pickup Locations" page.
3. Select a pickup time from the available options or specify a different time if needed using the "Other Pickup Time" field.
4. Enter any special requirements in the "Special Requirements" field.
5. Enter your email address and phone number in their respective fields.

## Field-by-Field Explanation
- **Transportation Needs (transportation_needs)** (`transportation_needs`, `text`, `true`): This field allows you to describe your transportation needs, such as carpooling, public transport, or other modes of transportation.
- **Pickup Locations (pickup_locations)** (`pickup_locations`, `select_multiple`, `true`): Select one or multiple pickup locations from the available options to inform the camp staff about where you will be picked up.
- **Pickup Times (pickup_times)** (`pickup_times`, `time`, `true`): This field lets you choose from the available pickup times or select 'Other' and provide a specific time if none of the listed times work for you.
- **Special Requirements (special_requirements)** (`special_requirements`, `note`, `true`): Enter any special requirements that the camp staff should be aware of to ensure safe and smooth transportation.
- **Email (email)** (`email`, `email`, `true`): Enter your email address so the camp staff can contact you about your transportation arrangements.
- **Phone (phone)** (`phone`, `text`, `true`): Provide your phone number so the staff can reach you in case of any last-minute changes or updates.
- **Notes (notes)** (`notes`, `note`, `false`): This field is optional and allows you to add any additional comments or information about your transportation needs.
- **Other Pickup Time (other_pickup_time)** (`other_pickup_time`, `time`, `false`): If none of the available times suit you, select 'Other' and provide a specific time for pickup.
- **Other Transportation Needs (other_transportation_needs)** (`other_transportation_needs`, `text`, `false`): This field is for any other transportation requirements you may have, such as specific vehicle preferences.
 
## Tips
- Ensure that all fields with the 'required' property set to `true` are completed accurately and completely.
- Double-check that your email and phone number are correct and up-to-date.
- If you need to provide 'Other' as your pickup location or time, be specific and provide details about why this choice was made.
