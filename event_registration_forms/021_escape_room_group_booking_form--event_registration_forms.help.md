<thinking>
We need to create a user-facing help guide for the "Escape Room Group Booking Form" that explains its purpose, how to complete it, and what each field means. This form is designed to collect information from groups of people who want to book an escape room experience. We should consider the following:

* The form's purpose is to gather necessary details from groups of people who want to book an escape room experience.
* The form should be completed by the person in charge of the group.
* The form requires some fields to be filled out, while others are optional.
* Some fields have specific options or formats, such as preferred dates or email addresses.
* The form might require some technical knowledge, such as knowing how to format dates or times.
* The form should be clear and concise, with each field explained in detail.

We'll create a clear and concrete help guide with concrete language and minimal technical jargon.
</thinking>

# Escape Room Group Booking Form - Help Guide
## Purpose
This form is designed to collect information from groups of people who want to book an escape room experience. Please fill out the form completely to ensure we have all the necessary details to accommodate your group's needs.

## How To Complete This Form
1. Select the "Group Name" from the list of options provided. If your group's name is not listed, choose "Other".
2. Enter your "Group Size" in the format of an integer, e.g., 5.
3. Select your preferred "Date(s)" for the booking.
4. Specify any "Special Requests" you might have.
5. Enter your "Email" address to contact you.
6. Enter your "Phone" number for additional contact.
7. Provide your "Notes" about the booking.
8. Check the box "Confirm Group" to confirm that this form is being filled out on behalf of your entire group.

## Field-by-Field Explanation
- **Group Name** (`confirm_group`, select_one): Select your group's name from the list provided. If you can't find your group's name, choose "Other" and provide a description.
- **Group Size** (`group_size`, number): Enter the number of people in your group.
- **Preferred Dates** (`preferred_dates`, select_multiple): Choose the dates you'd like to book the escape room experience. You can select multiple dates if needed.
- **Special Requests** (`special_requests`, text): If you have any special requests or requirements for the booking, enter them here.
- **Booking Date** (`booking_date`, date): Enter the date you'd like to book the escape room experience. Use the YYYY-MM-DD format (e.g., 2022-01-01).
- **Start Time** (`start_time`, time): Enter the start time of the escape room experience. Use the HH:MM format (e.g., 09:00).
- **End Time** (`end_time`, time): Enter the end time of the escape room experience. Use the HH:MM format (e.g., 10:00).
- **Email** (`email`, email): Enter your email address so we can contact you.
- **Phone** (`phone`, text): Enter your phone number for additional contact.
- **Notes** (`notes`, note): Provide any additional information about the booking.
- **Confirm Group** (`confirm_group`, select_one): Check this box to confirm that this form is being filled out on behalf of your entire group.
