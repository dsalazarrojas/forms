# detox_prophets_subscription_form - Help Guide

## Purpose
This form is designed to collect subscription information for clients, including their personal details, subscription preferences, and payment information. It is intended for detox_prophets, a business that offers various subscription-based programs. The form is necessary for creating, editing, or viewing client records in the detox_prophets database.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields with accurate information, such as first name, email, phone number, address, city, state, country, and client ID.
2. Select the desired subscription type (Detox or Wellness) and program start date.
3. Choose the payment method (Credit Card or Bank Transfer) and schedule (Monthly, Quarterly, Yearly).
4. Set the total months, total program price, payment amount, and payment frequency for the subscription.
5. Select the subscription status and client notes (if any).

## Field-by-Field Explanation

* **First Name** (`First Name`, `text`, required): Enter the client's first name.
* **Email** (`Email`, `email`, required): Enter the client's email address.
* **Payment Method** (`Payment Method`, `select_multiple`, optional): Choose the payment method for the subscription (Credit Card or Bank Transfer).
* **Subscription Type** (`Subscription Type`, `select_one`, optional): Select the type of subscription (Detox or Wellness).
* **Start Date** (`Start Date`, `date`, required): Enter the client's desired start date for the subscription.
* **End Date** (`End Date`, `date`, required): Enter the end date of the subscription.
* **Program Length** (`Program Length`, `number`, required): Enter the total months of the subscription.
* **Payment Schedule** (`Payment Schedule`, `select_one`, optional): Choose the payment schedule for the subscription (Monthly, Quarterly, Yearly).
* **Payment Status** (`Payment Status`, `select_one`, optional): Select the status of the payment (Pending, Completed, Cancelled).
* **Notes** (`Notes`, `note`, required): Enter any additional notes for the client.
* **Phone Number** (`Phone Number`, `text`, required): Enter the client's phone number.
* **Address** (`Address`, `text`, required): Enter the client's address.
* **City** (`City`, `text`, required): Enter the client's city.
* **State** (`State`, `text`, required): Enter the client's state.
* **Country** (`Country`, `select_one`, required): Select the client's country (USA, Canada, Mexico).
* **Postal Code** (`Postal Code`, `text`, required): Enter the client's postal code.
* **Client ID** (`Client ID`, `text`, required): Enter the client's ID.
* **Total Months** (`Total Months`, `number`, required): Enter the total months of the subscription.
* **Total Program Price** (`Total Program Price`, `number`, required): Enter the total program price.
* **Payment Amount** (`Payment Amount`, `number`, required): Enter the payment amount.
* **Payment Frequency** (`Payment Frequency`, `select_multiple`, required): Choose the payment frequency (Monthly, Quarterly, Yearly).
* **Program Type** (`Program Type`, `select_one`, required): Select the type of program (Detox or Wellness).
* **Program Start Date** (`Program Start Date`, `date`, required): Enter the program start date.
* **Subscription Status** (`Subscription Status`, `select_one`, required): Select the subscription status (Active, Inactive).
* **Last Payment Date** (`Last Payment Date`, `date`, optional): Enter the last payment date (if known).
* **Next Payment Date** (`Next Payment Date`, `date`, optional): Enter the next payment date (if known).
* **Subscription End Date** (`Subscription End Date`, `date`, optional): Enter the subscription end date (if known).
* **Client Notes** (`Client Notes`, `note`, optional): Enter any additional client notes.
* **Client ID (last)** (`Client ID`, `text`, required): Enter the client's ID.

Note: The required fields are marked as "required" in the form and must be filled in for the form to be submitted successfully. The optional fields are for additional information and can be left blank if not needed.
