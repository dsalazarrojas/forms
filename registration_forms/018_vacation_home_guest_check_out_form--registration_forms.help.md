# Vacation Home Guest Check Out Form - Help Guide
## Purpose

The purpose of this form is to collect information from guests who are checking out of a vacation home. This form is used to track the guest's details, payment information, and any feedback about their stay.

## How To Complete This Form

1. Fill in the guest's name.
2. Enter the guest's arrival date.
3. Enter the guest's departure date.
4. Enter the guest's contact number.
5. Enter the guest's email address.
6. Enter any feedback about their stay.
7. Enter the guest's check out date.
8. Enter the length of their stay.
9. Select the purpose of the guest's visit (e.g. Holiday, Business, etc.).
10. Enter any special requests.
11. Enter any comments about their stay.
12. Enter the guest's check out time.
13. Enter the guest's arrival time (if applicable).
14. Enter the name of the contact person (if applicable).
15. Select the type of accommodation the guest used.
16. Select the type of guest (if applicable).
17. Select if there are any additional guests.
18. Select any extra services used.
19. Enter any comments about their stay.
20. Select the payment method used.
21. Enter the payment amount.
22. Enter the total stay cost.
23. Select the payment status.
24. Enter any notes about the guest's stay.
25. Sign your name to confirm the information.

## Field-by-Field Explanation

* **Guest Name** (`guest_name`, text, required): Enter the guest's full name.
* **Arrival Date** (`arrival_date`, date, required): Enter the date the guest arrived at the vacation home.
* **Departure Date** (`departure_date`, date, required): Enter the date the guest departed from the vacation home.
* **Contact Number** (`contact_number`, text, required): Enter the guest's contact number.
* **Email Address** (`email_address`, email, required): Enter the guest's email address.
* **Feedback** (`feedback`, text, required): Enter any feedback about their stay.
* **Check Out Date** (`check_out_date`, date, required): Enter the date the guest checked out of the vacation home.
* **Stay Length** (`stay_length`, number, required): Enter the length of the guest's stay.
* **Purpose Of Visit** (`purpose_of_visit`, select_one, required): Select the purpose of the guest's visit (e.g. Holiday, Business, etc.).
* **Special Requests** (`special_requests`, text, optional): Enter any special requests the guest had during their stay.
* **Comments** (`comments`, text, optional): Enter any comments about their stay.
* **Check Out Time** (`check_out_time`, time, required): Enter the time the guest checked out of the vacation home.
* **Arrival Time** (`arrival_time`, time, optional): Enter the time the guest arrived at the vacation home (if applicable).
* **Contact Person** (`contact_person`, text, optional): Enter the name of the contact person (if applicable).
* **Accommodation Type** (`accommodation_type`, select_one, required): Select the type of accommodation the guest used.
* **Guest Type** (`guest_type`, select_one, optional): Select the type of guest (if applicable).
* **Additional Guests** (`additional_guests`, select_multiple, required): Select if there are any additional guests.
* **Extra Services** (`extra_services`, select_multiple, required): Select any extra services used.
* **Comments** (`comments`, text, required): Enter any comments about their stay.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method used.
* **Payment Amount** (`payment_amount`, number, required): Enter the payment amount.
* **Total Stay Cost** (`total_stay_cost`, number, required): Enter the total cost of the guest's stay.
* **Payment Status** (`payment_status`, select_one, required): Select the payment status.
* **Notes** (`notes`, text, optional): Enter any notes about the guest's stay.
* **Signature** (`signature`, note, required): Sign your name to confirm the information.

Note: The following fields are required: Guest Name, Arrival Date, Departure Date, Contact Number, Email Address, Feedback, Check Out Date, Stay Length, Purpose Of Visit, Accommodation Type, Payment Method, Payment Amount, Total Stay Cost, Payment Status, and Signature.
