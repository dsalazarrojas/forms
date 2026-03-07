<thinking>
To avoid duplication, I'll first check if there's a similar form that already exists in the system. If there isn't, I'll create a new one.
The purpose of this form is to collect registration information from participants of the charity fun run event. This form gathers essential details such as name, contact information, race distance, and payment method to ensure a smooth registration process.
</thinking>

# Charity Fun Run Registration Form - Help Guide
## Purpose
The purpose of this form is to collect registration information from participants of the charity fun run event.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your name and contact information (First Name, Last Name, Email Address, Phone Number, and Mailing Address).
2. Select your race distance (5K run, 5K walk, 10K run, Half marathon, or Kids fun run).
3. Choose your T-Shirt size.
4. If you're running with a team, enter the team name (optional).
5. Select your fundraising goal (Under $100, $100 to $500, $501 to $1000, $1001 to $2500, or Over $2500).
6. Choose your payment method (Credit card, Debit card, PayPal, or Check).
7. If you'd like to make an additional donation, select an amount or enter a different amount.
8. Enter your emergency contact name and phone number.
9. Check the waiver agreement box to acknowledge the liability release.
10. Finally, select how you heard about the event (Social media, Website, Friend or family, Email, Poster or flyer, or Other).

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Your first name.
* **Last Name** (`last_name`, text, required): Your last name.
* **Email Address** (`email`, email, required): Contact email address.
* **Phone Number** (`phone`, text, required): Contact phone number.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth for age category purposes.
* **Gender** (`gender`, select_one, required): Select your gender (Male, Female, Non-binary, or Prefer not to say).
* **Mailing Address** (`mailing_address`, text, required): Enter your full address.
* **City** (`city`, text, required): Enter your city.
* **State** (`state`, text, required): Enter your state.
* **ZIP Code** (`zip_code`, text, required): Enter your postal code.
* **Race Distance** (`race_distance`, select_one, required): Choose your race distance (5K run, 5K walk, 10K run, Half marathon, or Kids fun run).
* **T-Shirt Size** (`tshirt_size`, select_one, required): Choose your T-Shirt size (Youth S, Youth M, Youth L, Adult S, Adult M, Adult L, Adult XL, or Adult XXL).
* **Team Name** (`team_name`, text, optional): If you're running with a team, enter the team name.
* **Fundraising Goal** (`fundraising_goal`, select_one, optional): Set your fundraising goal (Under $100, $100 to $500, $501 to $1000, $1001 to $2500, or Over $2500).
* **Registration Fee** (`registration_fee`, select_one, required): Pay the registration fee (25 - Early bird, $35 - Regular, $45 - Late registration, or Free - Youth under 12).
* **Payment Method** (`payment_method`, select_one, required): Choose your payment method (Credit card, Debit card, PayPal, or Check).
* **Additional Donation** (`donation_amount`, select_one, optional): Make an additional donation (No donation, $10, $25, $50, or $100).
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of the emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of the emergency contact.
* **Medical Information** (`medical_info`, text, optional): Enter any medical conditions or allergies.
* **Waiver Agreement** (`waiver_agreement`, select_one, required): Check the waiver agreement box to acknowledge the liability release.
* **How Did You Hear About This Event** (`how_heard`, select_one, optional): Select how you heard about the event (Social media, Website, Friend or family, Email, Poster or flyer, or Other).
