# Book Fair Exhibitor RSVP Form - Help Guide

## Purpose
This form is used to collect information from book fair exhibitors to ensure they can participate in the event. By filling out this form, you will provide details about your organization, booth preferences, and any special requirements you may have.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your name and email address in the "Exhibitor Name" and "Email Address" fields, respectively.
2. Provide your organization's name and type in the "Organization Name" and "Organization Type" fields.
3. Select the book fair date and your preferred booth size in the "Book Fair Date" and "Booth Size" fields.
4. Choose the types of materials you will be displaying at your booth from the "Display Materials" field.
5. Select the number of representatives that will staff your booth.
6. List the names of your representatives in the "Representative Names" field.
7. Confirm your setup time preferences and any special requirements.
8. Check if you are interested in sponsoring the event.
9. Make any additional comments or requests.

## Field-by-Field Explanation

* **Full Name** (`exhibitor_name`, text, required): Enter your first and last name.
* **Email Address** (`email_address`, email, required): We will send event details here.
* **Phone Number** (`phone_number`, text, required): For event coordination.
* **Organization Name** (`organization_name`, text, required): Name of your organization.
* **Organization Type** (`organization_type`, select_one, required): Select your organization type.
	+ Publisher
	+ Bookstore
	+ Author
	+ Illustrator
	+ Library
	+ School
	+ Nonprofit
	+ Vendor
	+ Other
* **Website URL** (`website`, text, optional): Your website address.
* **Social Media Handle** (`social_media_handle`, text, optional): Your main social media handle.
* **Book Fair Date** (`fair_date`, select_one, required): Select the fair date.
* **RSVP Status** (`rsvp_status`, select_one, required): Will you be exhibiting
	+ Yes Attending
	+ No Cannot Attend
	+ Maybe Tentative
* **Booth Size** (`booth_size`, select_one, required): Select your booth size.
	+ Small Table 6ft
	+ Medium Booth 10x10 ft
	+ Large Booth 10x20 ft
	+ Extra Large 20x20 ft
	+ No Booth Needed
* **Booth Location Preference** (`booth_location_preference`, select_one, optional): Any location preference.
	+ No Preference
	+ Near Entrance
	+ High Traffic Area
	+ Quiet Corner
	+ Near Food Area
	+ Near Stage
* **Do You Need Electricity** (`electricity_needed`, select_one, required): Select if you need power.
	+ Yes Required
	+ No Not Needed
	+ Would Be Nice
* **Table and Chairs Needed** (`table_chairs_needed`, select_one, required): Select if provided by organizer.
	+ Yes Please Provide
	+ No I Will Bring
	+ Table Only
	+ Chairs Only
* **Display Materials** (`display_materials`, select_multiple, optional): What will you be displaying.
	+ Books for Sale
	+ Books for Display
	+ Promotional Materials
	+ Digital Presentations
	+ Interactive Displays
	+ Signage
* **Number of Representatives** (`number_of_representatives`, number, required): How many people will staff your booth.
* **Representative Names** (`representative_names`, text, optional): List all staff names.
* **Setup Time Needed** (`setup_time_needed`, select_one, required): When do you need to setup.
	+ Day Before Event
	+ Early Morning Same Day
	+ Standard Setup Time
	+ Minimal Setup
* **Special Requirements** (`special_requirements`, text, optional): Any special needs or requests.
* **Participating in Activities** (`participating_in_activities`, select_multiple, optional): Select activities you will join.
	+ Author Readings
	+ Panel Discussions
	+ Book Signings
	+ Workshops
	+ Networking Events
	+ None
* **Interested in Sponsoring** (`sponsorship_interest`, select_one, optional): Would you like to sponsor the event.
	+ Yes Please Send Info
	+ Maybe
	+ No Thanks
* **Payment Method for Booth Fee** (`payment_method`, select_one, optional): How will you pay.
	+ Credit Card
	+ Debit Card
	+ Check
	+ Bank Transfer
	+ Invoice Requested
* **Dietary Requirements** (`dietary_requirements`, select_multiple, optional): For provided refreshments.
	+ Vegetarian
	+ Vegan
	+ Gluten-Free
	+ Dairy-Free
	+ Nut Allergy
	+ None
* **Additional Comments** (`additional_comments`, text, optional): Any other information to share.
* **I Agree to Exhibitor Terms** (`terms_agreement`, select_one, required): By selecting yes, you agree to all terms.
	+ Yes I agree
	+ No I do not agree
* **RSVP Date** (`rsvp_date`, date, required): Date of this RSVP
