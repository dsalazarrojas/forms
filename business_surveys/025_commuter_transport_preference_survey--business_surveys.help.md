<thinking>
The Commuter Transport Preference Survey is designed to gather information about employees' and students' commutes to work or school. This survey aims to understand the challenges and preferences related to transportation, parking, and alternative modes of transportation. It is intended for employees, students, and faculty/staff of a specific organization. The survey will help identify areas for improvement in transportation services and infrastructure to better support the commuting needs of the community.
To ensure accurate and meaningful results, please complete this survey honestly and thoroughly. If you have any questions or concerns, feel free to contact us.
</thinking>

# Commuter Transport Preference Survey - Help Guide
## Purpose
The Commuter Transport Preference Survey is designed to gather information about employees' and students' commutes to work or school. This survey aims to understand the challenges and preferences related to transportation, parking, and alternative modes of transportation.

## How To Complete This Form
1. Please answer all questions to the best of your ability.
2. Select all that apply for multi-select questions.
3. If you have any additional comments or suggestions, please provide them in the "Any additional comments or suggestions?" field.

## Field-by-Field Explanation
* **Your Name** (`commuter_name`, text, optional): Please enter your name.
* **Email Address** (`commuter_email`, email, optional): Enter your email address for follow-up purposes.
* **What is your commuter status?** (`commuter_type`, select_one, required): Select one of the following options:
	+ Employee
	+ Student
	+ Faculty/Staff
	+ Visitor
	+ Contractor
	+ Other
* **Department or Division** (`department_division`, text, optional): Enter your department or division.
* **Home ZIP/Postal Code** (`home_zip_code`, text, required): Enter the ZIP code of your home location.
* **Work Location ZIP/Postal Code** (`work_location_zip`, text, required): Enter the ZIP code of your work location.
* **How far is your commute?** (`commute_distance`, select_one, required): Select one of the following options:
	+ Less than 5 miles
	+ 5-10 miles
	+ 11-20 miles
	+ 21-30 miles
	+ 31-50 miles
	+ Over 50 miles
* **How long does your commute take?** (`commute_time`, select_one, required): Select one of the following options:
	+ Less than 15 minutes
	+ 15-30 minutes
	+ 31-45 minutes
	+ 46-60 minutes
	+ 1-2 hours
	+ Over 2 hours
* **What is your primary mode of transportation?** (`primary_transport`, select_one, required): Select one of the following options:
	+ Drive alone
	+ Carpool (2-3 people)
	+ Vanpool (4+ people)
	+ Public bus
	+ Train/Metro
	+ Bicycle
	+ Walk
	+ Motorcycle/Scooter
	+ Telework/Remote
	+ Other
* **Do you use any secondary transportation?** (`secondary_transport`, select_one, optional): Select one of the following options:
	+ No, single mode only
	+ Yes, park and ride
	+ Yes, bike and ride
	+ Yes, walk and ride
	+ Yes, other combination
* **How often do you commute?** (`commute_frequency`, select_one, required): Select one of the following options:
	+ 1 day per week
	+ 2 days per week
	+ 3 days per week
	+ 4 days per week
	+ 5 days per week
	+ Variable schedule
* **What time do you typically arrive?** (`arrival_time`, time, optional): Enter your typical arrival time in the format HH:MM (24-hour format).
* **What time do you typically depart?** (`departure_time`, time, optional): Enter your typical departure time in the format HH:MM (24-hour format).
* **How satisfied are you with your current commute?** (`transport_satisfaction`, select_one, required): Select one of the following options:
	+ Very Dissatisfied
	+ Dissatisfied
	+ Neutral
	+ Satisfied
	+ Very Satisfied
* **What is your approximate monthly commute cost?** (`commute_cost`, select_one, optional): Select one of the following options:
	+ Under $50
	+ $50-$100
	+ $101-$200
	+ $201-$300
	+ $301-$400
	+ Over $400
* **What challenges do you face with your commute?** (`commute_challenges`, select_multiple, required): Select all that apply:
	+ Traffic congestion
	+ Parking availability
	+ Parking cost
	+ Transit reliability
	+ Transit cost
	+ Safety concerns
	+ Weather conditions
	+ Long commute time
	+ Unpredictable schedule
	+ No challenges
	+ Other
* **Please describe your main challenge** (`challenge_details`, text, optional): If you have a main challenge, please describe it.
* **Would you consider alternative transportation?** (`alternative_interest`, select_one, required): Select one of the following options:
	+ Yes, definitely
	+ Yes, possibly
	+ Maybe
	+ No, not interested
* **What prevents you from using alternative transportation?** (`alternative_barriers`, select_multiple, optional): Select all that apply:
	+ No viable alternatives
	+ Schedule inflexibility
	+ Safety concerns
	+ Convenience
	+ Cost
	+ Physical limitations
	+ Need vehicle for work
	+ Childcare responsibilities
	+ No barriers
	+ Other
* **Would you be interested in carpooling?** (`carpool_interest`, select_one, optional): Select one of the following options:
	+ Yes, as a driver
	+ Yes, as a passenger
	+ Maybe, need more info
	+ No, not interested
* **Would you be interested in vanpooling?** (`vanpool_interest`, select_one, optional): Select one of the following options:
	+ True
	+ Maybe
	+ False
* **Would you use public transit if improved?** (`transit_interest`, select_one, optional): Select one of the following options:
	+ Yes, definitely
	+ Maybe
	+ False
* **Would you consider biking to work?** (`biking_interest`, select_one, optional): Select one of the following options:
	+ Yes, if bike lanes available
	+ Yes, if secure parking provided
	+ Yes, if shower facilities available
	+ No, not interested
* **Would you consider walking to work?** (`walking_interest`, select_one, optional): Select one of the following options:
	+ Yes, if safe pathways
	+ Yes, if closer housing available
	+ No, too far
	+ No, other reasons
* **Would you be interested in teleworking?** (`telework_interest`, select_one, optional): Select one of the following options:
	+ Yes, full-time remote
	+ Yes, part-time remote
	+ No, prefer office
* **What incentives would encourage alternative commuting?** (`incentive_interest`, select_multiple, optional): Select all that apply:
	+ Subsidized transit passes
	+ Carpool matching service
	+ Preferred parking for carpools
	+ Bike purchase reimbursement
	+ Shower/locker facilities
	+ Flexible work hours
	+ Telework options
	+ Cash incentives
	+ None needed
* **Do you currently need parking?** (`parking_needed`, select_one, required): Select one of the following options:
	+ Yes, have parking
	+ Yes, need parking
	+ No, do not need parking
* **How satisfied are you with parking facilities?** (`parking_satisfaction`, select_one, optional): Select one of the following options:
	+ Very Dissatisfied
	+ Dissatisfied
	+ Neutral
	+ Satisfied
	+ Very Satisfied
	+ Not applicable
* **Any additional comments or suggestions?** (`additional_comments`, text, optional): If you have any additional comments or suggestions, please enter them here.
* **Survey Completion Date** (`survey_date`, date, required): This field will automatically be populated with the current date.
