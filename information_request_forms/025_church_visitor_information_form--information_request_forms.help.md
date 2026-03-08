# Church Visitor Information Form - Help Guide
## Purpose
The Church Visitor Information Form is a tool for visitors to provide their contact information, background, and interests, enabling the church to tailor their experience and follow up with them.

## How To Complete This Form
1. Fill in your contact information, including your full name, email address, and phone number (if applicable).
2. Select your age range and marital status.
3. Indicate if you have children and their ages.
4. Choose the date of your visit.
5. Select how you heard about the church and what brought you to visit.
6. Choose your church background and what you're interested in learning about.
7. Share any comments or questions you may have.
8. Let us know if you'd like to receive an information packet and if you'd like to meet with the pastor.

## Field-by-Field Explanation

* **Your Full Name** (`visitor_name`, `text`, required): Please enter your full name as you would like to be known.
* **Email Address** (`email`, `email`, required): Enter the email address you can be reached at for follow up.
* **Phone Number** (`phone`, `text`, optional): Enter your phone number, if you'd like to be contacted by phone.
* **Home Address** (`address`, `text`, optional): Enter your home address, including street, city, state, and zip code.
* **Age Range** (`age_range`, `select_one`, required): Select the range of your age from the list below:
	+ Under 18
	+ 18-24
	+ 25-34
	+ 35-44
	+ 45-54
	+ 55-64
	+ 65+
* **Marital Status** (`marital_status`, `select_one`, optional): Select your marital status from the list below:
	+ Single
	+ Married
	+ Divorced
	+ Widowed
	+ Separated
* **Do You Have Children** (`children`, `select_one`, optional): Indicate if you have children.
* **Children's Ages** (`children_ages`, `text`, optional): If you selected 'yes' to 'Do You Have Children', enter the ages of your children.
* **Date of Visit** (`visit_date`, `date`, required): Select the date of your visit.
* **Is This Your First Visit** (`visit_count`, `select_one`, required): Select if this is your first visit to the church.
* **How Did You Hear About Our Church** (`how_heard`, `select_multiple`, required): Select all that apply from the list below:
	+ Friend or family
	+ Church website
	+ Social media
	+ Online search
	+ Church sign
	+ Drive by
	+ Community event
	+ Newspaper
	+ Other
* **What Brought You to Our Church** (`reason_visiting`, `select_one`, required): Select what brought you to visit the church.
* **What Is Your Church Background** (`church_background`, `select_one`, required): Select your church background from the list below:
	+ Active church member
	+ Former church member
	+ No church background
	+ Different faith tradition
	+ Prefer not to say
* **What Are You Interested In Learning About** (`interested_in`, `select_multiple`, optional): Select all that apply from the list below:
	+ Membership
	+ Baptism
	+ Bible study groups
	+ Youth programs
	+ Children's programs
	+ Volunteer opportunities
	+ Small groups
	+ Prayer ministry
	+ Nothing specific
* **What Was Your Impression of Our Church** (`impression`, `select_one`, required): Select your impression of the church from the list below:
	+ Very positive
	+ Positive
	+ Neutral
	+ Negative
	+ Very negative
* **Do You Plan to Return** (`return_visit`, `select_one`, required): Select your likelihood of returning to the church.
* **Do You Have a Prayer Request** (`prayer_request`, `text`, optional): Share any prayer requests you may have, if you feel comfortable doing so.
* **Would You Like to Receive an Information Packet** (`information_packet`, `select_one`, required): Select how you'd like to receive the information packet:
	+ Yes, by email
	+ Yes, by mail
	+ No, thank you
* **Would You Like to Meet with the Pastor** (`pastor_meeting`, `select_one`, optional): Select if you'd like to meet with the pastor.
* **Any Comments or Questions** (`comments`, `text`, optional): Share any comments or questions you may have.
