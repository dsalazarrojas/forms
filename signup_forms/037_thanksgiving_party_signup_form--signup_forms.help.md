# Thanksgiving Party Signup Form - Help Guide
## Purpose
The Thanksgiving Party Signup Form is designed to gather information from guests about their plans for the party. This form helps the host to understand who is coming, what dishes and drinks they will bring, and any special requests.

## How To Complete This Form
1. To start, fill out the form with your information as the host.
2. Scroll through each page to review and fill out the fields as instructed.
3. Be sure to fill out all required fields.
4. Once you have completed the form, click the submit button to send it to the host.

## Field-by-Field Explanation

* **Host Name** (`host_name`, text, required): Enter your name as the host of the party.
* **Guest Name** (`guest_name`, text, optional): If you are attending with a guest, enter their name here.
* **Email** (`email`, email, required): Enter your email address to help the host contact you about the party.
* **Phone** (`phone`, text, optional): If you would like the host to have your phone number for any reason, enter it here.
* **Attendee Name** (`attendee_name`, text, required): Enter the name of the person you are attending with (if any).
* **Attendee Email** (`attendee_email`, email, required): Enter the email address of the person you are attending with (if any).
* **Attendee Relationship** (`attendee_relationship`, select_multiple, required): Select all that apply for the relationship to the host:
	+ Yes
	+ No
* **Date** (`date`, date, required): Choose the date of the party.
* **Time** (`time`, time, required): Choose the time of the party.
* **Message** (`message`, note, optional): Add any additional comments or details about your attendance.
* **Dishes** (`dishes`, select_one, required): Select which dish you will bring:
	+ None
	+ Turkey
	+ Ham
	+ Gravy
	+ Stuffing
	+ Pumpkin Pie
* **Sides** (`sides`, select_multiple, required): Select all the sides you will bring:
	+ None
	+ Stuffing
	+ Mashed Potatoes
	+ Green Beans
* **Drinks** (`drinks`, select_multiple, required): Select all the drinks you will serve:
	+ None
	+ Water
	+ Soda
	+ Juice
	+ Wine
	+ Beer
* **Desserts** (`desserts`, select_one, optional): Select which dessert you will bring:
	+ None
	+ Apple Pie
	+ Pumpkin Pie
	+ Cotton Candy
	+ Cheesecake
* **Will Attend** (`attends`, select_one, required): Select whether you will attend the party:
	+ None
	+ Yes
	+ No
* **Comments** (`comments`, note, optional): Add any additional comments or details about your attendance.
* **Other Notes** (`other_notes`, note, optional): Add any other notes or details about your attendance.
* **Special Requests** (`special_requests`, note, optional): Add any special requests you have for the party.
