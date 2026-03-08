# Donation Tracking Form - Help Guide
## Purpose
The Donation Tracking Form is a tool designed to gather and record donation information from donors. It provides a structured format for administrators to collect relevant details, helping ensure accurate and thorough tracking of donations.

## How To Complete This Form
To complete this form, follow these steps:

* Start by filling in the `Donation Information` page, which includes general details about the donor.
* Proceed to the `Donation Details` page, where you can add any additional notes about the donation.
* On the next page, enter the donor's `Address` and `Phone Number`.
* You can also add any `Donor Notes` you'd like to record.
* If applicable, specify the `Donation Amount` and select the `Donation Frequency` and `Donation Type`.
* Finally, enter the `Donation Date` and `Donation Time` to complete the form.

## Field-by-Field Explanation
* **Donation Information** (`doner_info`, `text`, required: false): Enter the donor's name, contact information, or any other relevant details you'd like to collect.
* **Donation Details** (`donation_details`, `note`, required: false): Add any additional notes or comments about the donation.
* **Donor Address** (`doner_address`, `text`, required: false): Enter the donor's address for future contact or reference.
* **Donor Phone Number** (`doner_phone`, `number`, required: false): Enter the donor's phone number for easy contact.
* **Donor Notes** (`doner_notes`, `note`, required: false): Add any notes or comments about the donor or donation.
* **Donation Amount (optional)** (`doner_amount`, `number`, required: false): Enter the amount donated, if applicable.
* **Donation Frequency** (`doner_frequency`, `select_multiple`, required: false): Select whether this is a one-time or recurring donation.
* **Donation Type** (`doner_type`, `select_multiple`, required: false): Specify the type of donation (monetary, goods/services, or other).
* **Donation Amount** (`donation_amount`, `number`, required: false): Enter the amount donated, if not already specified on the previous field.
* **Donation Date** (`donation_date`, `date`, required: true): Enter the date of the donation.
* **Donation Time** (`donation_time`, `time`, required: true): Enter the time of the donation.

## Tips
* Be sure to fill out all required fields, especially the `Donation Date` and `Donation Time`, which are essential for tracking donations accurately.
* Use the `Donation Amount` field if you've already specified an amount in the `Donation Information` field to avoid duplicates.
* If you're unsure about a field's purpose, consult with the form's administrator for guidance.
