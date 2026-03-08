# Club Sign In - Help Guide
## Purpose
This form is used to track member attendance and participation in club meetings and events. It is essential to fill out this form correctly to receive any club benefits or to be eligible for membership.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your **Full Name** in the "Full Name" field.
2. Enter your **Email Address** in the "Email Address" field.
3. Select the **Date** of the meeting you are attending.
4. Select the **Time of Check-In** when you arrived.
5. Enter your **Club Member ID** (optional, but recommended for returning members).
6. Select the meeting or event you are attending in the "Meeting or Event Name" field.
7. Enter the name of the **Club** you are affiliated with.
8. For new members, select "Yes, First Time" in the "Is This Your First Meeting" field.
9. If applicable, select the **Interested Committees** you are interested in participating with.
10. If you have any **Dietary Restrictions**, select them from the list.
11. Optionally, provide **Quick Feedback or Comments** to help us improve.
12. If you wish to receive the club newsletter, select "True" in the "Sign Up for Newsletter" field.

## Field-by-Field Explanation
* **Full Name** (`member_name`, text, required): Enter your full name as it appears on your official documents.
* **Email Address** (`member_email`, email, required): Enter your email address where you can be contacted.
* **Date** (`check_in_date`, date, required): Select the date of the meeting you are attending.
* **Time of Check-In** (`check_in_time`, time, required): Select the time you arrived for the meeting.
* **Member ID** (`member_id`, text, optional): Enter your club member ID for reference (recommended for returning members).
* **Meeting or Event Name** (`meeting_name`, text, required): Select the meeting or event name from the provided list.
* **Club Name** (`club_name`, text, required): Enter the name of your affiliated club.
* **Is This Your First Meeting** (`first_time`, select_one, required): Select "Yes, First Time" if you are attending your first meeting.
* **Interested in Committee Participation** (`interested_committees`, select_multiple, optional): Select the committees you are interested in participating with.
* **Dietary Restrictions** (`dietary_restrictions`, select_multiple, optional): Select any dietary restrictions you have (e.g., Vegetarian, Vegan, Gluten-Free, etc.).
* **Quick Feedback or Comments** (`feedback_comments`, text, optional): Provide any comments or feedback to help us improve.
* **Sign Up for Newsletter** (`newsletter_signup`, select_one, optional): Select "True" to receive the club newsletter.
