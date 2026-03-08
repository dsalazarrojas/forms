# Booking Cancellation Form - Help Guide
## Purpose
This form is for guests to provide details about their cancelled booking, allowing us to process the cancellation efficiently and ensure that any necessary refunds are made.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your **Booking Reference Number**, which is provided in your original booking confirmation.
2. Provide your **Guest Name** and **Email Address** for contact purposes.
3. If you'd like, you can optionally enter your **Phone Number** for confirmation.
4. Select the **Original Check-in Date** and **Original Check-out Date** for which you are cancelling your booking.
5. Specify the **Number of Rooms** that were booked.
6. Select the reason for **Cancellation** from the provided list (e.g., Travel plans changed, Work conflict, etc.).
7. Provide a **Detailed Explanation** of the cancellation, if you feel it's necessary.
8. Choose your preferred **Cancellation Urgency** (e.g., Immediate, As soon as possible, etc.).
9. Select how you would like to receive your **Refund** (e.g., Original payment method, Credit card, etc.).
10. If you have chosen a refund method that requires **Refund Account Details**, please provide the relevant information.
11. Confirm that you have read and understood the **Cancellation Policy** by selecting the corresponding option.
12. Finally, add any **Additional Notes or Comments** if you'd like to provide further information.

## Field-by-Field Explanation

### 1. **Booking Reference Number** (`booking_reference`, `text`, required)
	* Enter your original booking confirmation number for identification purposes.

### 2. **Guest Name** (`guest_name`, `text`, required)
	* Type in the full name of the person who made the booking.

### 3. **Email Address** (`guest_email`, `email`, required)
	* Enter the email associated with the booking.

### 4. **Phone Number** (`guest_phone`, `text`, optional)
	* If you'd like, you can provide your contact phone number for confirmation.

### 5. **Original Check-in Date** (`reservation_date_from`, `date`, required)
	* Enter the date you were scheduled to arrive.

### 6. **Original Check-out Date** (`reservation_date_to`, `date`, required)
	* Enter the date you were scheduled to leave.

### 7. **Number of Rooms** (`number_of_rooms`, `number`, required)
	* Enter the number of rooms that were booked.

### 8. **Reason for Cancellation** (`reason_for_cancellation`, `select_one`, required)
	* Select the reason for your cancelled booking from the provided list.

### 9. **Detailed Explanation** (`detailed_reason`, `text`, optional)
	* Provide more information about the cancellation if you feel it's necessary.

### 10. **Cancellation Urgency** (`cancellation_urgency`, `select_one`, required)
	* Choose your preferred timing for the cancellation.

### 11. **Refund Preference** (`refund_preference`, `select_one`, optional)
	* Select how you would like to receive your refund.

### 12. **Refund Account Details** (`refund_account_details`, `text`, optional)
	* If you've chosen a refund method that requires additional details, provide the relevant information.

### 13. **Acknowledgement of Cancellation Policy** (`acknowledgement`, `select_one`, required)
	* Confirm that you have read and understood the cancellation policy.

### 14. **Additional Notes or Comments** (`additional_notes`, `text`, optional)
	* Provide any additional information or comments you'd like to share.
