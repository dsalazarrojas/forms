<thinking>
This form is used for short-term rental guest check out. The purpose of this form is to capture the check out time, additional charges, guest feedback, and other relevant details of the guest when they are checking out. This form is designed to be completed by the guest themselves, and the information collected will be used to record the check out process.
</thinking>

# short_term_rental_guest_check_out_form - Help Guide
## Purpose

This form is used to record the check out details of a short-term rental guest. The information collected will help the rental management team to understand the guest's experience and any additional charges incurred during their stay.

## How To Complete This Form

1. Fill in the check out time when the guest completed their stay.
2. Provide any additional comments or comments about their experience.
3. Select the guest's feedback (Positive, Negative, or Neutral).
4. Enter any estimated check out time if different from the actual check out time.
5. Confirm if there were any additional charges incurred during their stay.
6. Enter any comments or notes about their stay.
7. Select the check out date.
8. Enter the check out time.
9. Confirm if there were any additional charges.
10. Enter any comments or feedback about their stay.

## Field-by-Field Explanation

* **Check Out Time** (`check_out_time`, `time`, required: false): Enter the actual time when the guest completed their stay.
* **Comment** (`comment`, `text`, required: false): Provide any additional comments or feedback about their experience.
* **Additional Charges** (`additional_charges`, `number`, required: false): Confirm if there were any additional charges incurred during their stay.
* **Guest Feedback** (`guest_feedback`, `select_one`, required: false): Select how the guest felt about their stay (Positive, Negative, or Neutral).
* **Check Out Details** (`check_out_details`, `text`, required: false): Enter any comments or details about their stay.
* **Check Out Date** (`check_out_date`, `date`, required: false): Enter the date of their check out.
* **Estimated Check Out Time** (`estimated_check_out_time`, `time`, required: false): Enter the estimated time of their check out if it differs from the actual time.
* **Has Additional Charges** (`has_additional_charges`, `select_one`, required: false): Confirm if there were any additional charges.
* **Comments** (`comments`, `text`, required: false): Enter any comments or feedback about their stay.
