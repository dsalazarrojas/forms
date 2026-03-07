<thinking>
To confirm relevance and prevent duplication: This form is intended for capturing odometer readings and vehicle details for reporting purposes. The form may not be used for other uses or forms of submission. Please ensure all fields are completed truthfully and accurately. If the vehicle details provided do not match the actual vehicle, please use another form.
</thinking>

# Odometer Statement Form - Help Guide
## Purpose
The Odometer Statement Form is designed to capture odometer readings and vehicle details for reporting purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the vehicle details section with accurate and truthful information about the vehicle you are reporting.
2. Record the current odometer reading and odometer mileage on the odometer reading section.
3. Enter the date of the odometer reading in the odometer reading date section.
4. Describe the current condition of the vehicle in the vehicle condition section.
5. Indicate whether regular odometer maintenance is performed on the odometer maintenance record section.
6. Add any additional comments about the vehicle in the additional comments section.
7. Sign and date the form as the seller and buyer to confirm accuracy.

## Field-by-Field Explanation
* **Vehicle Details** (`vehicle_details`, `text`, required: false): Enter accurate and truthful information about the vehicle, including make, model, year, and registration number.
* **Odometer Reading** (`odometer_reading`, `number`, required: false): Record the current odometer reading of the vehicle.
* **Odometer Mileage** (`odometer_mileage`, `number`, required: false): Record the current odometer mileage of the vehicle.
* **Odometer Reading Date** (`odometer_reading_date`, `date`, required: false): Enter the date of the odometer reading.
* **Vehicle Condition** (`vehicle_condition`, `select_one`, required: false, options: Good, Fair, Poor): Describe the current condition of the vehicle (Good, Fair, or Poor).
* **Odometer Maintenance Record** (`odometer_maintenance_record`, `select_multiple`, required: false, options: Yes, No, None): Indicate whether regular odometer maintenance is performed on the vehicle (Yes, No, or None).
* **Additional Comments** (`additional_comments`, `note`, required: false): Add any additional comments about the vehicle.
* **Seller's Signature** (`seller_signature`, `text`, required: false): Sign and date the form as the seller to confirm accuracy.
* **Buyer's Signature** (`buyer_signature`, `text`, required: false): Sign and date the form as the buyer to confirm accuracy.
