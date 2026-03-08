# home_insurance_quote - Help Guide
## Purpose
The "home_insurance_quote" form is designed to collect information from individuals seeking home insurance quotes. It's meant to be filled out by users to provide their contact and property details, as well as their insurance coverage preferences.

## How To Complete This Form
1. Start by selecting your contact type: "Home", "Business", or "Other".
2. Choose the type of your home: "Single Family Home", "Condo", "Townhouse", "Duplex", "Apartment", or "Other".
3. Enter your street address in the "Street Address" field.
4. Enter the city where your property is located.
5. Enter the zip code for the property's location.
6. Provide the square footage of your property.
7. Enter the year you purchased your property.
8. Enter the value of your property.
9. If your home type is not listed, provide more details in the "Other Home Type" field.
10. Select the type of insurance coverage you're interested in: "Liability", "Collision", "Comprehensive", or "Other".
11. Choose your insurance provider: "A", "B", or "C".
12. Enter the insurance limit you're looking for.
13. Select the date you purchased your property (in date format).
14. Enter the time of purchase (in 12-hour time format).
15. Enter any additional comments or information in the "Agent Info" field.
16. Enter your phone number.
17. Enter your email address.
18. Confirm your phone number.
19. Confirm your email address.
20. Enter your phone number again for confirmation (note this is the same field as 16, but this ensures the user enters the correct format).
21. Enter your email address again for confirmation (note this is the same field as 18, but this ensures the user enters the correct format).
22. Enter any additional comments in the "Additional Comments" field.
23. Finally, click "Submit" to send your information for processing. If you wish to cancel, click "Cancel".

## Field-by-Field Explanation

* **Contact Info** (`Home`, `Business`, `Other`, `required: true`): Select your contact type from the dropdown menu.
* **Home Type** (`Single Family Home`, `Condo`, `Townhouse`, `Duplex`, `Apartment`, `Other`, `required: true`): Choose the type of your home from the dropdown menu.
* **Street Address** (`Street Address_goals`, `text`, `required: true`): Enter your street address in the text field.
* **City** (`City`, `text`, `required: true`): Enter the city where your property is located.
* **Zip Code** (`Zip Code`, `text`, `required: true`): Enter the zip code for your property's location.
* **Square Footage (sqft)** (`Square Footage (sqft)`, `number`, `required: true`): Enter the square footage of your property.
* **Purchase Year** (`Purchase Year`, `number`, `required: true`): Enter the year you purchased your property.
* **Value of Property** (`Value of Property`, `number`, `required: true`): Enter the value of your property.
* **Other Home Type** (`Other Home Type`, `text`, `optional`): If your home type is not listed, provide more details here.
* **Home Location** (`Home Location`, `note`, `optional`): Add any additional information about your home's location.
* **Insurance Coverage** (`Liability`, `Collision`, `Comprehensive`, `Other`, `required: true`): Select the type of insurance coverage you're interested in from the dropdown menu.
* **Prophets Insurance** (`A`, `B`, `C`, `required: true`): Choose your insurance provider from the dropdown menu.
* **Insurance Limit** (`Insurance Limit`, `number`, `required: true`): Enter the insurance limit you're looking for.
* **Date of Purchase** (`Date of Purchase`, `date`, `required: true`): Select the date you purchased your property (in date format).
* **Time of Purchase** (`Time of Purchase`, `time`, `required: true`): Enter the time of purchase (in 12-hour time format).
* **Agent Info** (`Agent Info`, `note`, `optional`): Enter any additional comments or information about your agent.
* **Phone Number** (`Phone Number`, `text`, `required: true`): Enter your phone number.
* **Email Address** (`Email Address`, `email`, `required: true`): Enter your email address.
* **Confirm Phone** (`Confirm Phone`, `text`, `required: true`): Confirm your phone number to ensure accuracy.
* **Confirm Email** (`Confirm Email`, `email`, `required: true`): Confirm your email address to ensure accuracy.
* **Confirm Phone Number** (`Confirm Phone Number`, `text`, `required: true`): Confirm your phone number again to ensure accuracy.
* **Confirm Email Address** (`Confirm Email Address`, `email`, `required: true`): Confirm your email address again to ensure accuracy.
* **Additional Comments** (`Additional Comments`, `note`, `optional`): Add any additional comments or information about your situation.
* **Submit** (`Submit`, `text`, `required: true`): Click to submit your information for processing. If you wish to cancel, click "Cancel".
* **Cancel** (`Cancel`, `text`, `required: true`): Click to cancel your submission.
