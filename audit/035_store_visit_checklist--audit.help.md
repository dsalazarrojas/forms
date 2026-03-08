<thinking>
  This form is designed to gather information about a store's visit, inspection, or review. It is likely used for auditing purposes to collect data about the store's condition, management, and operations. The form should only be filled out when a store visit is conducted, and it may be used to prevent duplication by checking for existing records of the same store. If a store visit is already recorded, it is best not to fill out this form again.
</thinking>

# store_visit_checklist - Help Guide
## Purpose
The store_visit_checklist form is used to gather information about a store's visit, inspection, or review.

## How To Complete This Form
1. Select the type of store visit that applies to your audit:
   - Choose "Store Inspection" for a thorough examination of the store's condition.
   - Choose "Store Audit" for a review of the store's operations.
   - Choose "Store Review" for a general evaluation of the store.
   - Choose "Store Analysis" for a detailed analysis of the store's performance.
2. Enter the store's address in the text box. This is the physical location of the store, including the street address and any additional information.
3. Enter the store's contact information in the text box. This may include the store's phone number, email, or other contact details.
4. Enter the store's hours of operation in the "hh:mm AM/PM" format.
5. Select the store managers from the list of options. This is not required, so you can leave it blank if not applicable.
6. Enter any additional notes about the store visit in the text box.
7. Rate the store's condition on a scale of 1-5.
8. Select the date of the store visit.
9. Enter any additional details about the store visit in the text box.

## Field-by-Field Explanation
* **store_inspection** (`store_inspection`, select_one, required: false): Choose the type of store visit that applies to your audit.
* **store_address** (`store_address`, text, required: false): Enter the store's address.
* **store_contact** (`store_contact`, text, required: false): Enter the store's contact information.
* **store_hours** (`store_hours`, time, required: false): Enter the store's hours of operation in the "hh:mm AM/PM" format.
* **store_manager** (`store_manager`, select_multiple, required: false): Select the store managers from the list of options.
* **store_notes** (`store_notes`, note, required: false): Enter any additional notes about the store visit.
* **store_rating** (`store_rating`, number, required: false): Rate the store's condition on a scale of 1-5.
* **store_review_date** (`store_review_date`, date, required: false): Select the date of the store visit.
* **store_visit_details** (`store_visit_details`, text, required: false): Enter any additional details about the store visit.

## Tips
* Make sure to select the correct type of store visit for accurate reporting.
* Enter the store's address and contact information correctly for accurate records.
* Rate the store's condition honestly and fairly.
* Select the correct date of the store visit for accurate records.
* Enter any additional notes or details about the store visit for further context.
