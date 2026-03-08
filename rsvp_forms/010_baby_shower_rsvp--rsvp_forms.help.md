# Baby Shower RSVP - Help Guide
## Purpose
The Baby Shower RSVP form is a crucial tool for hosts to gather necessary information from guests to plan a successful and enjoyable baby shower event. By filling out this form, you will help us ensure that we have enough food, drinks, and space for everyone.

## How To Complete This Form
To complete this form, simply follow these steps:

1.  Read the instructions and questions carefully.
2.  Fill out your name, indicating whether you will be attending or not.
3.  If attending, select your preferred meal option.
4.  If you have any food allergies, please mention them.
5.  If you have a favorite memory or a special message for the mom-to-be, share it with us.
6.  If there are any other guests attending with you, enter their email addresses.
7.  Finally, if you'd like, add any special song requests for the playlist.

## Field-by-Field Explanation

*   **-- Baby Shower RSVP --** (`rsvp_header`, `note`, required: false): This is a welcome message from the host. It's not a field that requires an answer, but rather a header to set the tone for the rest of the form.
*   **Guest Full Name** (`guest_full_name`, `text`, required: true): Please fill in the full name of the guest, including any middle initials if applicable.
*   **Will you be attending?** (`rsvp_attendance`, `select_one`, required: true): Choose between "Joyfully Accept" and "Regretfully Decline" to indicate your attendance status.
*   **How many guests are attending?** (`number_of_guests`, `number`, required: false): If you are attending, please indicate how many guests will be joining you, including children.
*   **Meal Selection** (`meal_preference`, `select_one`, required: true): Choose your preferred lunch option from the list provided.
*   **Any food allergies we should know about?** (`food_allergies`, `text`, required: false): If you have any dietary restrictions or allergies, please let us know so we can accommodate your needs.
*   **Share your favorite memory with the parents-to-be** (`favorite_baby_memory`, `text`, required: false): This is an optional field where you can share a special memory or message for the mom-to-be.
*   **Baby-themed song request for the playlist** (`song_request`, `text`, required: false): If there's a particular song that's meaningful to you and your group, let us know and we'll make sure to add it to the playlist.
*   **Email Address** (`guest_email`, `email`, required: true): Please provide your email address so we can keep you updated on any event changes or updates.
*   **A special message for the Mom-to-be** (`message_to_mom`, `text`, required: false): This is your chance to leave a heartfelt message for the mom-to-be, something that will make her feel loved and appreciated.
