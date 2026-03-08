# windsurf_equipment_rental_application_form - Help Guide
## Purpose
This form is used to apply for windsurf equipment rental. It collects necessary information for the rental process, including agreement selection, payment terms, and other related details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the **Application Information** section (Page 1) with your relevant details.
2. In the **Equipment Details** section (Page 2), provide the necessary information about the equipment you are interested in renting.
3. Select the correct **Rental Agreement** (Page 3) from the available options.
4. Enter the payment terms in the **Payment Terms** section (Page 4), which includes two numerical fields for specific payment details.
5. If applicable, provide the total amount paid and any applicable **Discount**.
6. Finally, fill out the **Equipment Status** field (Page 10) to provide any additional information about the equipment.

## Field-by-Field Explanation

* **Application Information** (Page 1):
  * **Application Info** (`windsurf_application_info`, text, optional): Fill out this field with your application details.
* **Equipment Details** (Page 2):
  * **Equipment Details** (`windsurf_equipment_details`, text, optional): Enter a description or information about the equipment you are interested in renting.
* **Rental Agreement** (Page 3):
  * **Rental Agreement** (`windsurf_rental_agreement`, select_one, required): Select one of the available rental agreements to confirm your rental terms.
* **Payment Terms** (Page 4):
  * **Payment Term 1** (`windsurf_payment_terms_1`, number, required): Enter the first payment term detail.
  * **Payment Term 2** (`windsurf_payment_terms_2`, number, required): Enter the second payment term detail.
* **Payment Information** (Page 6):
  * **Discount** (`windsurf_discount`, number, required): If applicable, enter the discount applied.
  * **Total Amount Paid** (`windsurf_total_amount_paid`, number, optional): Enter the total amount paid.
* **Additional Information** (Page 10):
  * **Equipment Status** (`windsurf_equipment_status`, text, optional): Provide any additional details or status about the equipment.
