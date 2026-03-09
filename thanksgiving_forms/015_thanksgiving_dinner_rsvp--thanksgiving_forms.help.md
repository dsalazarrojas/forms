# Thanksgiving Dinner RSVP - Help Guide
## Purpose
The Thanksgiving Dinner RSVP form is designed to gather information from guests attending the company's Thanksgiving dinner event. This form is used to record the guest's name, contact email (if provided), number of guests attending, if they are attending, their dietary restrictions, RSVP date, RSVP time, and any additional message they might have.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **Guest Name**, which is a required field. This is where you should enter your full name.
2. If you have a **Contact Email**, you can enter it in this field, which is optional.
3. Enter the **Guest Number**, which is also a required field. This is how many people you are bringing with you.
4. Choose if you are **Attending** by selecting 'True' or 'False' from the dropdown menu.
5. If you have any **Dietary Restrictions**, select all that apply from the dropdown menu, including Vegetarian, Vegan, Gluten-free, or Other (if you have another restriction not listed).
6. Enter your **RSVP Date**, which is the date on which you are RSVPing.
7. Enter your **RSVP Time**, which is the time when you are RSVPing.
8. If you want to **Message** any additional information to the host, you can do so in this text area, but it's not required.

## Field-by-Field Explanation
* **Guest Name** (`guest_name`, text, required): Enter your full name so the host knows who is coming.
* **Contact Email** (`contact_email`, email, optional): If you want to be contacted for any reason, enter your email address here.
* **Guest Number** (`guest_number`, number, required): Indicate how many people are attending with you.
* **Attending** (`attending`, select_one, required): Choose 'True' if you are attending, 'False' otherwise.
* **Dietary Restrictions** (`dietary_restrictions`, select_multiple, optional): Select all the dietary restrictions that apply to you, so the host can plan accordingly.
* **RSVP Date** (`rsvp_date`, date, required): Choose the date you are RSVPing on.
* **RSVP Time** (`rsvp_time`, time, required): Choose the time when you are RSVPing.
* **Message** (`message`, note, optional): Enter any additional information you'd like to share with the host.
