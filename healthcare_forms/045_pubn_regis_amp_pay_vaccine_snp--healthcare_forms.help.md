<thinking>
This form appears to be designed for registering and managing payments for vaccines. The purpose of the form is to collect registration and payment information for individuals or organizations receiving vaccinations. The form should be used to track and update payment status, amounts, and other relevant details. It's likely used within a healthcare setting.
</thinking>

# pubn-regis-amp-pay-vaccine-snp - Help Guide
## Purpose
This form is designed to collect and manage payment information for individuals or organizations receiving vaccinations. It includes fields for registration details, payment amounts, status updates, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the registration information (id: 2).
2. Enter the number of vaccine doses administered (id: 3).
3. Provide payment information, including the payment amount (id: 4) and payment method (id: 5).
4. Enter the payment date (id: 6).
5. Enter the name and contact information of the payee (id: 7-9).
6. Update the payment status (id: 13).
7. Record the total amount paid (id: 10).
8. Optional fields: payee information (id: 11), payee address (id: 12), pubn-regis status (id: 15), pubn-regis date (id: 16), pubn-regis time (id: 17), pubn-regis remark (id: 18), pubn-regis status update (id: 19), pubn-regis total remark (id: 21), pubn-regis note (id: 22), pubn-regis file (id: 23), pubn-regis attached file (id: 24), and pubn-regis remark (id: 25).

## Field-by-Field Explanation

* **Registration Info** (id: 2) (`registration_info`, text, required): Enter the registration details, such as the date, time, or other relevant information.
* **Vaccine Dose** (id: 3) (`vaccine_dose`, number, required): Enter the number of vaccine doses administered.
* **Payment Info** (id: 4) (`payment_info`, number, required): Enter the payment amount.
* **Payment Method** (id: 5) (`payment_method`, select_one, required): Choose the payment method (e.g., 'Yes' or 'No').
* **Payment Date** (id: 6) (`payment_date`, date, required): Enter the payment date.
* **Payee Name** (id: 7) (`payee_name`, text, required): Enter the name of the payee.
* **Payee Email** (id: 8) (`payee_email`, email, required): Enter the email address of the payee.
* **Payee Phone** (id: 9) (`payee_phone`, text, required): Enter the phone number of the payee.
* **Total Amt** (id: 10) (`total_amt`, number, required): Enter the total amount paid.
* **Payee Info** (id: 11) (`payee_info`, text, optional): Enter additional information about the payee.
* **Payee Address** (id: 12) (`payee_address`, select_multiple, optional): Check the box if the payee's address is available. 
* **Payment Status** (id: 13) (`payment_status`, select_one, required): Update the payment status (e.g., Active or Inactive).
* **Payee Status Update** (id: 14) (`payee_status_update`, time, required): Enter the time for the payee status update.
* **Pubn Regis Status** (id: 15) (`pubn_regis_status`, text, optional): Enter additional information about the pubn-regis status.
* **Pubn Regis Date** (id: 16) (`pubn_regis_date`, select_one, optional): Check if the pubn-regis date is available.
* **Pubn Regis Time** (id: 17) (`pubn_regis_time`, select_one, optional): Check if the pubn-regis time is available.
* **Pubn Regis Remark** (id: 18) (`pubn_regis_remark`, text, optional): Enter additional information about the pubn-regis remark.
* **Pubn Regis Status Update** (id: 19) (`pubn_regis_status_update`, select_one, optional): Check the box if the pubn-regis status update is available.
* **Total Count** (id: 20) (`total_count`, select_one, required): Check if the total count is available.
* **Pubn Regis Total Remark** (id: 21) (`pubn_regis_total_remark`, text, optional): Enter additional information about the pubn-regis total remark.
* **Pubn Regis Note** (id: 22) (`pubn_regis_note`, text, optional): Enter additional information about the pubn-regis note.
* **Pubn Regis File** (id: 23) (`pubn_regis_file`, text, optional): Enter the pubn-regis file.
* **Pubn Regis Attached File** (id: 24) (`pubn_regis_attached_file`, text, optional): Enter the pubn-regis attached file.
* **Pubn Regis Remark** (id: 25) (`pubn_regis_remark`, text, optional): Enter additional information about the pubn-regis remark.
