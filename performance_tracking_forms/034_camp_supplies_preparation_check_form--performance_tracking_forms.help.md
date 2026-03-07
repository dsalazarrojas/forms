<thinking>
**Context:** This form is used to track and manage the preparation of camp supplies, ensuring that the necessary items are in stock and ready for use. The purpose of this form is to verify that the required quantities of supplies are available, and if not, to trigger the need for reordering. The form is typically filled out by staff members responsible for inventory management.

**Duplicate checking:**

* Before filling out the form, please ensure that you have not recently filled it out for the same item or category of supplies.
* If you are unsure whether to fill out the form, refer to your supervisor or the inventory management team for guidance.

</thinking>

# Camp Supplies Preparation Check Form - Help Guide
## Purpose
The Camp Supplies Preparation Check Form is a critical document used to track and manage the preparation of camp supplies. It ensures that the necessary items are in stock and ready for use, and triggers the need for reordering if quantities are low.

## How To Complete This Form

1. Select the current date and time of preparation from the "Checklist Date" field.
2. Enter your name in the "Preparer Name" field, so your supervisor knows who completed the form.
3. Enter the name of the supply item in the "Item Name" field.
4. In the "Quantity On Hand" field, enter the current number of units available.
5. In the "Minimum Required" field, enter the minimum quantity required for the operation.
6. Check the "Reorder Needed" field to indicate if a reorder is required. Choose 'True' if the quantity on hand is below the minimum required.
7. If a reorder is needed, enter the preferred vendor in the "Preferred Vendor" field.
8. In the "Expected Delivery Time" field, enter the estimated time it will take for the reordered items to arrive.
9. In the "Notes" field, enter any remarks about the supply condition or substitutions.
10. Finally, sign and date your verification in the "Verifier Signature" field.

## Field-by-Field Explanation

* **Checklist Date** (`id: 1`): The date and time when the preparation check was conducted.
  * Type: date
  * Required: true
* **Preparer Name** (`id: 2`): The name of the staff member completing the form.
  * Type: text
  * Required: true
* **Item Name** (`id: 3`): The name of the supply item being checked.
  * Type: text
  * Required: true
* **Quantity On Hand** (`id: 4`): The current number of units of the supply item available.
  * Type: number
  * Required: true
* **Minimum Required** (`id: 5`): The minimum quantity required for the operation.
  * Type: number
  * Required: true
* **Reorder Needed** (`id: 6`): Whether a reorder is required.
  * Type: select_one
  * Required: true
* **Preferred Vendor** (`id: 7`): The preferred vendor to order from.
  * Type: text
  * Required: false
* **Expected Delivery Time** (`id: 8`): The estimated time for the reordered item to arrive.
  * Type: text
  * Required: false
* **Notes** (`id: 9`): Any remarks about the supply condition or substitutions.
  * Type: text
  * Required: false
* **Verifier Signature** (`id: 10`): The name of the staff member verifying the form.
  * Type: text
  * Required: false
