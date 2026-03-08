# Artisan Skills Training Donation Form - Help Guide
## Purpose
The Artisan Skills Training Donation Form is a tool used to collect information from donors to support the Artisan Skills Training program. It helps us understand the donor's preferences, donation amount, and communication preferences.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the donor information section:
	* Enter your first name and last name.
	* Provide your email address for donation receipt and updates.
	* Enter your phone number (if applicable).
	* If you're representing an organization, enter the name of the organization.
2. Choose your donation details:
	* Select the type of donation (one-time or recurring).
	* If recurring, choose the frequency (3, 6, or 12 months, or ongoing).
	* Choose a suggested donation amount or enter a custom amount.
3. Select a program focus:
	* Choose which Artisan program you'd like to support.
	* If you have a preferred craft area, select it (if applicable).
4. Choose your gift type:
	* Select the type of gift (personal, corporate, in-kind, donor-advised fund, or planned giving).
5. Provide additional details:
	* If your gift is in honor or memory of someone, enter their name.
	* Choose how you'd like to be recognized (publicly, anonymously, or privately).
6. Confirm your tax receipt and address (if needed).
7. Choose your communication preferences:
	* Select how you'd like to receive updates (email, phone, mail, or no preference).
8. Add any special message or comments.

## Field-by-Field Explanation

* **First Name** (`donor_first_name`, text, required): Enter your first name.
* **Last Name** (`donor_last_name`, text, required): Enter your last name.
* **Email Address** (`donor_email`, email, required): Provide your email address for donation receipt and updates.
* **Phone Number** (`donor_phone`, text, optional): Enter your phone number (if applicable).
* **Organization (if applicable)** (`donor_organization`, text, optional): If you're representing an organization, enter its name.
* **Donation Amount (GBP)** (`donation_amount`, number, required): Choose or enter the amount you'd like to donate.
* **Type of Donation** (`donation_type`, select_one, required): Select one-time or recurring donation.
* **If Recurring, How Many Months?** (`donation_frequency`, select_one, optional): If recurring, choose the frequency (3, 6, or 12 months, or ongoing).
* **Or Select a Preset Amount** (`suggested_donations`, select_one, optional): Choose a suggested donation level or enter a custom amount.
* **Which Artisan Program Would You Like to Support?** (`program_focus`, select_one, required): Choose which Artisan program you'd like to support.
* **Preferred Craft Area (if applicable)** (`program_area`, select_one, optional): If you have a preferred craft area, select it (if applicable).
* **Type of Gift** (`gift_type`, select_one, required): Select the type of gift (personal, corporate, in-kind, donor-advised fund, or planned giving).
* **Gift in Honor or Memory Of** (`gift_in_honor`, text, optional): If your gift is in honor or memory of someone, enter their name.
* **Recognition Preference** (`recognize_donor`, select_one, optional): Choose how you'd like to be recognized (publicly, anonymously, or privately).
* **Do You Need a Tax Receipt?** (`tax_receipt_needed`, select_one, required): Confirm if you need a tax receipt.
* **Mailing Address** (`donor_address`, text, optional): If you need a tax receipt, provide your address for documentation.
* **I Would Like to Receive Updates About the Program** (`communications_opt_in`, select_one, optional): Select how you'd like to receive updates (email, phone, mail, or no preference).
* **Impact Report Preference** (`impact_report`, select_one, optional): Choose how you'd like to receive updates (email, phone, mail, or no preference).
* **Special Message or Comments** (`additional_message`, text, optional): Add any special message or comments.
