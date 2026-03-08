<thinking>
This form is a donation form used to collect information for donations made to a non-profit organization. The form is used to ensure that all necessary information is collected for the donation processing and recognition process. This form should only be completed once a donation has been made, and should not be duplicated or submitted multiple times. 
</thinking>

# Authorize.Net Donation Form - Help Guide

## Purpose
This form is used to collect information from donors for donations made to our organization.

## How To Complete This Form
To complete this form, please follow the instructions below:

1.  Select the type of donation you would like to make and enter the corresponding details.
2.  Fill out all required fields to ensure that your donation can be processed correctly.
3.  If you need to receive a receipt, select your preferred method of receipt delivery.
4.  Read and agree to the donation terms and conditions.

## Field-by-Field Explanation

*   **Donation Date** (`donation_date`, date, required): Enter the date of this donation.
    *   The date will be used to keep track of the donation history.
*   **First Name** (`first_name`, text, required): Enter your first name.
    *   This is the first name of the person making the donation.
*   **Last Name** (`last_name`, text, required): Enter your last name.
    *   This is the last name of the person making the donation.
*   **Email Address** (`email_address`, email, required): Enter your email address.
    *   This will be used for notification and receipt purposes.
*   **Phone Number** (`phone_number`, text, required): Enter your phone number.
    *   This will be used for contact purposes.
*   **Street Address** (`street_address`, text, optional): Enter your street address.
    *   This will be used for mailing purposes.
*   **City** (`city`, text, optional): Enter the city of your address.
    *   This will be used for mailing purposes.
*   **State or Province** (`state`, text, optional): Enter the state or province of your address.
    *   This will be used for mailing purposes.
*   **ZIP or Postal Code** (`zip_code`, text, optional): Enter the postal code of your address.
    *   This will be used for mailing purposes.
*   **Country** (`country`, text, optional): Enter the country of your address.
    *   This will be used for mailing purposes.
*   **Type of Donation** (`donation_type`, select_one, required): Select the type of donation you are making.
    *   Choose the type of donation you are making, such as a general donation or a donation for a specific project.
*   **Donation Amount** (`donation_amount`, number, required): Enter the amount of the donation.
    *   This is the amount of the donation being made.
*   **Donation Frequency** (`donation_frequency`, select_one, required): Select the frequency of the donation.
    *   Choose between one-time, monthly, quarterly, or annual donations.
*   **Recurring Donation Duration** (`recurring_duration`, select_one, optional): Select the duration of recurring donations.
    *   Choose between 6 months, 12 months, or 24 months, or indefinite until cancelled.
*   **Specific Project or Initiative** (`specific_project`, text, optional): If donating for a specific project, enter the project name.
    *   This will be used to track the project being donated for.
*   **In Memory or Honor of Someone** (`in_memory_tribute`, select_one, optional): Select if this is a memorial donation.
    *   Choose between no, in memory of, or in honor of.
*   **Honoree Name** (`honoree_name`, text, optional): Enter the name of the person being honored or remembered.
    *   This will be used to personalize the notification and recognition process.
*   **Send Gift Notification** (`gift_notification`, select_one, optional): Select if you would like to send a notification to the honoree.
    *   Choose between yes, no, or email notification.
*   **Notification Email Address** (`notification_email`, email, optional): Enter the email address to send the notification to.
    *   This will be used to send the notification to the honoree.
*   **Recognition Preference** (`donor_recognition`, select_one, required): Select the preference for donor recognition.
    *   Choose between public recognition, private recognition, name only recognition, or list with full details.
*   **Donor Type** (`donor_type`, select_one, optional): Select the type of donor.
    *   Choose between individual, organization, or other types of donors.
*   **Organization Name** (`organization_name`, text, optional): Enter the name of the organization donating.
    *   This will be used to track the organization making the donation.
*   **Tax Deductible Donation** (`tax_deductible`, select_one, required): Select if this donation is tax deductible.
    *   Choose between yes, or no.
*   **Donation Receipt Requested** (`receipt_requested`, select_one, required): Select if you would like to receive a receipt.
    *   Choose between yes, or not needed.
*   **Consent to Donation Terms** (`donor_consent`, select_one, required): Select to agree to the donation terms and conditions.
    *   Choose between I agree and authorize payment, or I do not agree.
