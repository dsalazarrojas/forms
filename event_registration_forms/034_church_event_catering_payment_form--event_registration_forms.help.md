# Church Event Catering Payment Form - Help Guide

## Purpose
The Church Event Catering Payment Form is designed to collect essential information for the catering payment process. It helps in calculating the total cost for each event and attendee, and also allows for optional donations to support event costs. The form is meant for individuals to submit their registration details and agree to the calculated payment amount via selected method.

## How To Complete This Form
1. Fill out the required fields with accurate information:
	* Event Name: Provide the name of the event you are attending (e.g., Annual Banquet, Men's Breakfast, Women's Retreat).
	* Lead Attendee Name: Enter the name of the person who will be receiving the payment confirmation.
	* Email Address: Enter the email address where you would like to receive payment confirmation.
	* Number of Meals/Tickets: Enter the total count of meals or tickets for your party.
	* Primary Meal Selection: Choose the primary meal for your party from the options provided.
	* Dietary Allergies: Check any severe food allergies, such as Nut Allergy, Dairy Free, or Shellfish Allergy.
	* Registration Date: Select the date of your registration.
2. (Optional) If you would like to make an additional donation to support event costs, fill out the "Additional Donation to Support Event Costs (Optional)" field with the amount of your choice.

## Field-by-Field Explanation
* **Event Name** (id: 2, type: text): Enter the name of the event you are attending. This helps the event organizers to correctly process your registration and payment.
* **Lead Attendee Name** (id: 3, type: text): Enter the name of the person who will be receiving the payment confirmation. This is crucial for accurate payment processing.
* **Email Address** (id: 4, type: email): Enter the email address where you would like to receive payment confirmation. This ensures you receive the payment details and any updates.
* **Number of Meals/Tickets** (id: 5, type: number): Enter the total count for your party. This affects the calculated payment amount.
* **Primary Meal Selection** (id: 7, type: select_one): Choose the primary meal for your party from the options provided. This helps the organizers provide the correct meal arrangements.
* **Dietary Allergies** (id: 8, type: select_multiple): Check any severe food allergies, such as Nut Allergy, Dairy Free, or Shellfish Allergy. This ensures the organizers accommodate your dietary needs.
* **Registration Date** (id: 16, type: date): Select the date of your registration. This is essential for payment processing and event organization.
* **Price per Person** (id: 10, type: number): This field is pre-filled based on the event type. You may need to review and confirm the price.
* **Additional Donation to Support Event Costs (Optional)** (id: 11, type: number): If you would like to make an additional donation, fill out this field with the amount of your choice.
* **Total Calculated Payment Due** (id: 12, type: number): This field is automatically calculated based on your inputs. Review and confirm the payment amount.
* **Payment Agreement** (id: 13, type: select_one): Agree to pay the total amount via the selected method. This is a crucial step in the payment process.
* **Last 4 digits of Card (for verification)** (id: 14, type: text): Enter the last 4 digits of your card for secure payment processing. This is for verification purposes only.
* **Seating or Other Special Requests** (id: 15, type: text): If you have any special requests, such as seating arrangements, enter them in this field.
* **I Agree** (id: 13, type: select_one): Confirm your agreement to pay the calculated amount. This is the final step in the payment process.
