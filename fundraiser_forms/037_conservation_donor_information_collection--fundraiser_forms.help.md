<thinking>
This form is designed to collect information from donors who are making a one-time or recurring donation to support conservation efforts. The form is intended to gather details about the donor, their donation preferences, and any additional information that may be relevant to the donation. This form is typically used for administrative purposes, such as tracking donations and sending notifications.
</thinking>

# Conservation Donor Information Collection - Help Guide
## Purpose
The Conservation Donor Information Collection form is used to gather information from donors who are making a one-time or recurring donation to support conservation efforts. This form is intended to help us understand the donor's preferences and needs, and to ensure that we provide the best possible experience for them.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Donation Date** in the format `MM/DD/YYYY`.
2. Enter your **Donor Name** in the format `First Name Last Name`.
3. Select your **Donor Type** from the options provided.
4. Enter your **Email Address** in the format `username@example.com`.
5. Enter your **Phone Number** in the format `XXX-XXX-XXXX`.
6. Enter your **Address**, **City**, **State or Province**, and **Postal Code**.
7. Select your **Donation Frequency** from the options provided.
8. Select your **Donation Designation** from the options provided. If you select "Other", please provide a description in the "Donation Designation Other" field.
9. Select your **Payment Method** from the options provided.
10. If you are donating in **Honor or Memory** of someone, select "Yes - In Honor" or "Yes - In Memory".
11. If you are donating in **Honor or Memory**, enter the **Honoree Name** of the person being honored.
12. If you are requesting a **Notification**, select "Yes - In Honor" or "Yes - In Memory".
13. If you are requesting a **Notification**, enter the **Notification Address** for the person to be notified.
14. If your **Employer is Matching Gift**, select "True" and enter the **Employer Name**.
15. If you are interested in **Volunteering**, select "True" and choose the areas you are interested in from the options provided.
16. Select your **Communication Preferences**, such as how you would like to receive updates from us.
17. If you **Hear About Us** through a specific source, select the option from the list.
18. If you are a **Returning Donor**, select "True" or "False".
19. Enter any **Additional Comments** you would like to provide about your donation.
20. If you need a **Tax Receipt**, select "True" or "False".
21. Sign your name in the **Donor Signature** field.
22. Select the **Donation Status** of your donation.

## Field-by-Field Explanation

* **Donation Date** (`donation_date`, date, required): Enter the date of your donation.
* **Donor Name** (`donor_name`, text, required): Enter your full name.
* **Donor Type** (`donor_type`, select_one, required): Select your donor type from the options provided.
* **Email Address** (`donor_email`, email, required): Enter your email address.
* **Phone Number** (`donor_phone`, text, required): Enter your phone number.
* **Address** (`donor_address`, text, required): Enter your mailing address.
* **City** (`donor_city`, text, required): Enter your city.
* **State or Province** (`donor_state`, text, required): Enter your state or province.
* **Postal Code** (`donor_postal_code`, text, required): Enter your postal code.
* **Country** (`donor_country`, text, required): Enter your country.
* **Donation Amount** (`donation_amount`, number, required): Enter the amount of your donation.
* **Donation Frequency** (`donation_frequency`, select_one, required): Select your donation frequency from the options provided.
* **Donation Designation** (`donation_designation`, select_one, required): Select your donation designation from the options provided. If you select "Other", please provide a description in the "Donation Designation Other" field.
* **Other Designation** (`donation_designation_other`, text, optional): If you selected "Other" in the "Donation Designation" field, enter a description of your designation.
* **Payment Method** (`payment_method`, select_one, required): Select your payment method from the options provided.
* **Is This Donation In Honor or Memory** (`honor_memory`, select_one, required): Select "Yes - In Honor" or "Yes - In Memory" if this donation is in honor or memory of someone.
* **Honoree Name** (`honoree_name`, text, optional): If you selected "Yes - In Honor" or "Yes - In Memory", enter the name of the person being honored.
* **Should Notification Be Sent** (`notification_sent`, select_one, optional): Select "Yes - In Honor" or "Yes - In Memory" if you want to send notification to the family of the person being honored.
* **Notification Address** (`notification_address`, text, optional): If you selected "Yes - In Honor" or "Yes - In Memory", enter the address for the notification to be sent to.
* **Is Your Employer Matching Gift** (`employer_match`, select_one, required): Select "True" if your employer is matching your donation.
* **Employer Name** (`employer_name`, text, optional): If you selected "True" in the "Is Your Employer Matching Gift" field, enter the name of your employer.
* **Are You Interested in Volunteering** (`volunteer_interest`, select_one, required): Select "True" if you are interested in volunteering.
* **Volunteer Areas of Interest** (`volunteer_areas`, select_multiple, optional): Select all the areas you are interested in volunteering from the options provided.
* **Communication Preferences** (`communication_preferences`, select_multiple, required): Select how you would like to receive updates from us.
* **How Did You Hear About Us** (`donor_advised`, select_one, optional): Select the source from which you heard about us.
* **Have You Donated Before** (`previous_donor`, select_one, required): Select "True" if you have donated before.
* **Additional Comments** (`additional_comments`, text, optional): Enter any additional information about your donation.
* **Tax Receipt Needed** (`tax_receipt`, select_one, required): Select "True" if you need a tax receipt.
* **Donor Signature** (`donor_signature`, text, required): Sign your name.
* **Donation Status** (`donation_status`, select_one, required): Select the status of your donation.
