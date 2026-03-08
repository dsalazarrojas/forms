# Church Sponsorship Form - Help Guide
## Purpose
This form is designed to collect information from individuals or organizations interested in sponsoring the church's programs and activities.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your name and title in the "Sponsor Name" field.
2. Select your type of sponsorship from the "Sponsor Type" dropdown menu.
3. Provide your primary contact person's name and email address in the "Primary Contact Person" and "Contact Email" fields.
4. Enter your contact phone number in the "Contact Phone Number" field.
5. Select your desired sponsorship level from the "Sponsorship Level" dropdown menu.
6. If you selected a custom sponsorship amount, enter it in the "Sponsorship Amount" field.
7. Select all the programs you would like to sponsor from the "Which Program Would You Like to Sponsor" dropdown menu.
8. Choose how often you would like to pay from the "Payment Schedule" dropdown menu.
9. Indicate how you would like to be recognized from the "Recognition Preference" dropdown menu.
10. Select all the ways you would like to be recognized from the "Recognition Options" dropdown menu.
11. Choose how you would like to receive a tax receipt from the "Tax Receipt Information" dropdown menu.
12. If you are a business sponsor, provide additional business information in the "Business Information" field.
13. Indicate if you would like to provide marketing materials from the "Would You Like to Provide Marketing Materials" dropdown menu.
14. Indicate if you would like to volunteer from the "Would You Also Like to Volunteer" dropdown menu.
15. Select your connection to the church from the "What Is Your Connection to Our Church" dropdown menu.
16. Enter any additional comments or questions you have in the "Additional Comments or Questions" field.
17. Sign the form with your full name and date.

## Field-by-Field Explanation

* **Sponsor Name** (`sponsor_name`, text, required): Enter your name and title as the sponsor.
* **Sponsor Type** (`sponsor_type`, select_one, required): Select your type of sponsorship, which can be Individual, Family, Business, Organization, or Foundation.
* **Primary Contact Person** (`contact_person`, text, required): Enter the name of the primary contact person for your organization.
* **Contact Email** (`contact_email`, email, required): Enter the email address of the primary contact person.
* **Contact Phone Number** (`contact_phone`, text, required): Enter the phone number of the primary contact person.
* **Mailing Address** (`address`, text, required): Enter your street, city, state, and zip code.
* **Sponsorship Level** (`sponsorship_level`, select_one, required): Select your desired sponsorship level, which can be Platinum ($10,000+), Gold ($5,000-$9,999), Silver ($2,500-$4,999), Bronze ($1,000-$2,499), Friend ($500-$999), or Custom Amount.
* **Sponsorship Amount** (`sponsorship_amount`, number, optional): If you selected a custom sponsorship amount, enter it here.
* **Which Program Would You Like to Sponsor** (`sponsored_program`, select_multiple, required): Select all the programs you would like to sponsor.
* **Sponsorship Duration** (`sponsorship_duration`, select_one, required): Choose how often you would like to pay, which can be One-time, Monthly, Quarterly, Annually, or Multi-year.
* **Payment Method** (`payment_method`, select_one, required): Select how you would like to pay, which can be Check, Credit Card, Bank Transfer, Stock Transfer, In-Kind Donation, or Other.
* **Payment Schedule** (`payment_schedule`, select_one, required): Choose when you would like to pay, which can be Full payment now, Monthly installments, Quarterly installments, or Split payment.
* **Recognition Preference** (`recognition_preference`, select_one, required): Indicate how you would like to be recognized, which can be Public recognition desired, Anonymous sponsorship, Recognition in program only, or No recognition needed.
* **Recognition Options** (`recognition_options`, select_multiple, optional): Select all the ways you would like to be recognized, which can include Name on website, Name in bulletin, Name on plaque, Social media mention, Event acknowledgment, or None.
* **Tax Receipt Information** (`tax_receipt`, select_one, required): Choose how you would like to receive a tax receipt, which can be Send receipt by email, Send receipt by mail, or No receipt needed.
* **Business Information** (`business_info`, text, optional): If you are a business sponsor, provide additional business information.
* **Would You Like to Provide Marketing Materials** (`marketing_materials`, select_one, optional): Indicate if you would like to provide marketing materials, which can be Yes, will provide or False.
* **Would You Also Like to Volunteer** (`volunteer_interest`, select_one, optional): Indicate if you would like to volunteer, which can be Yes, interested, Maybe, or No, sponsorship only.
* **What Is Your Connection to Our Church** (`church_connection`, select_one, required): Select your connection to the church, which can be Active member, Former member, Friend of church, Business partner, Community supporter, or Other.
* **Additional Comments or Questions** (`additional_comments`, text, optional): Enter any additional comments or questions you have.
* **Authorized Signature** (`signature`, text, required): Sign the form with your full name.
* **Date** (`signature_date`, date, required): Enter the date of your signature.
