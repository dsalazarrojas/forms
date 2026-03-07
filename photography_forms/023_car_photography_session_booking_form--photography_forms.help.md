<thinking>

To avoid duplication and ensure the form's purpose aligns with the intended use case, I will focus on creating a clear and concise help guide for end-users. This form is designed to collect information for car photography sessions, gathering essential details for a successful and efficient experience. The form's primary goal is to gather client information, vehicle details, and session preferences to tailor the photography experience to their needs. It's crucial to provide a clear and easy-to-use guide for end-users to ensure they understand the form's purpose and know what to expect.

</thinking>

# Car Photography Session Booking Form - Help Guide
## Purpose
The Car Photography Session Booking Form is designed to collect essential information for a successful car photography session. This form will help us understand your vehicle and preferences to provide the best experience tailored to your needs.

## How To Complete This Form
1. **Client Information**: Please fill in your personal details, including your first and last name, email address, and phone number.
2. **Vehicle Information**: Provide details about the vehicle you want to photograph, such as its year, make, model, color, and current condition.
3. **Session Preferences**: Select your preferred session type, date, time, duration, and location.
4. **Package Selection**: Choose the package that best fits your needs and budget.
5. **Additional Services**: If you'd like to add any extra services like drone photography or video editing, select them here.
6. **Props Needed**: If you need any props or equipment for the shoot, let us know.
7. **Weather Contingency**: Decide on a plan in case of bad weather.
8. **Payment Information**: Confirm your payment method and status.
9. **Usage Rights**: Determine how you want to use the photos.
10. **Terms Agreement**: Agree to our terms and conditions.

## Field-by-Field Explanation

### Client Information
* **First Name** (`first_name`, `text`, `required`: `true`): Your first name.
* **Last Name** (`last_name`, `text`, `required`: `true`): Your last name.
* **Email Address** (`email`, `email`, `required`: `true`): Your email address for session communications.
* **Phone Number** (`phone`, `text`, `required`: `true`): Your contact number.
* **Company or Organization** (`company_organization`, `text`, `required`: `false`): If you represent a company or organization.

### Vehicle Information
* **Vehicle Information** (`vehicle_information`, `note`, `required`: `false`): Details about the vehicle to photograph.
* **Vehicle Year** (`vehicle_year`, `text`, `required`: `true`): The year of the vehicle.
* **Vehicle Make** (`vehicle_make`, `text`, `required`: `true`): The manufacturer of the vehicle.
* **Vehicle Model** (`vehicle_model`, `text`, `required`: `true`): The model of the vehicle.
* **Vehicle Color** (`vehicle_color`, `text`, `required`: `true`): The exterior color of the vehicle.
* **Vehicle Condition** (`vehicle_condition`, `select_one`, `required`: `true`): The current condition of the vehicle (Showroom/Excellent, Very Good, Good, Fair, Needs detailing).
* **Vehicle Modifications** (`vehicle_modifications`, `text`, `required`: `false`): Any custom modifications on the vehicle.
* **Vehicle Ownership** (`vehicle_ownership`, `select_one`, `required`: `true`): Do you own this vehicle? (Yes - I am the owner, No - I have permission, No - dealer vehicle, No - client vehicle).
* **Vehicle Details** (`session_details`, `note`, `required`: `false`): Additional vehicle details.

### Session Preferences
* **Session Type** (`session_type`, `select_one`, `required`: `true`): The type of shoot you want (Portfolio/Personal, Commercial/Advertising, Social Media, Event Coverage, Dealership Inventory, Magazine/Publication, Other).
* **Preferred Session Date** (`session_date`, `date`, `required`: `true`): Your first choice date for the session.
* **Preferred Session Time** (`session_time`, `time`, `required`: `true`): The time of day for the session.
* **Expected Duration** (`session_duration`, `select_one`, `required`: `true`): The expected duration of the session (30 minutes, 1 hour, 2 hours, 3-4 hours, Full day, Multiple days).
* **Location Preference** (`location_preference`, `select_one`, `required`: `true`): Where you want to shoot (Studio, Urban/City, Natural/Outdoor, Garage/Industrial, Racetrack, Scenic route, Client's location, Other).
* **Backup Date** (`backup_date`, `date`, `required`: `false`): An alternative date in case of bad weather.
* **Photography Style** (`photography_style`, `select_multiple`, `required`: `true`): The desired style of the shoot (Classic/Traditional, Modern/Contemporary, Dramatic/High contrast, Natural/Light, Action/Motion, Detail-focused, Artistic/Creative, Documentary).
* **Shot List** (`shot_list`, `text`, `required`: `false`): Specific shots you want.
* **Session Details** (`session_details`, `note`, `required`: `false`): Additional session details.

### Package Selection
* **Package Selection** (`package_selection`, `select_one`, `required`: `true`): Choose your package (Basic - 10 edited photos - $200, Standard - 25 edited photos - $400, Premium - 50 edited photos - $700, Commercial - 100+ photos - $1,200, Custom package).
* **Deposit Paid** (`deposit_paid`, `select_one`, `required`: `true`): Have you paid the deposit? (Yes - ready to pay, Need invoice, Already paid).
* **Payment Method** (`payment_method`, `select_one`, `required`: `true`): How will you pay? (Credit Card, Debit Card, Bank Transfer, PayPal, Check, Cash).
* **Usage Rights** (`usage_rights`, `select_multiple`, `required`: `true`): Determine how you want to use the photos (Personal use, Social media, Commercial advertising, Print publication, Website, Portfolio, Resale).
* **Usage Rights** (`usage_rights`, `select_multiple`, `required`: `true`): Determine how you want to use the photos (Personal use, Social media, Commercial advertising, Print publication, Website, Portfolio, Resale).

### Additional Services
* **Additional Services** (`additional_services`, `select_multiple`, `required`: `false`): Add any extra services like drone photography or video editing.
* **Props Needed** (`props_needed`, `select_one`, `required`: `false`): Do you need any props or equipment? (No props, Lighting equipment, Backdrop, Smoke/fog effects, Models, Other).
* **Props Details** (`props_details`, `text`, `required`: `false`): Describe the props you need.
* **Weather Contingency** (`weather_contingency`, `select_one`, `required`: `true`): Plan for bad weather (Reschedule, Indoor backup location, Proceed anyway, Undecided).

### Miscellaneous
* **Terms Agreement** (`terms_agreement`, `select_one`, `required`: `true`): Agree to our terms and conditions (I agree to the terms and conditions, I do not agree).
* **How Did You Hear About Us** (`how_heard_about_us`, `select_one`, `required`: `false`): How did you hear about us? (Website, Social media, Referral, Advertisement, Previous client, Other).

Note: The guide is based on the provided YAML fields and is structured to be concrete and concise.
