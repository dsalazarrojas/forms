# Commuter Transport Preference Survey - Help Guide
## Purpose
This form is used to gather information on commuter preferences for transportation improvements. It is designed to be completed by employees, students, or residents who commute to work or school.

## How To Complete This Form
To complete this form, simply follow the instructions below:

1. Respond to the questions as accurately and honestly as possible.
2. Select the most relevant options for each question.
3. If you have any additional comments or suggestions, feel free to add them in the designated fields.

## Field-by-Field Explanation
### Respondent role
* Respondent role (`respondent_role`, `text`, required: false): Please select your role from the options provided.

### Usual Commute Mode
* Usual commute mode (`usual_commute_mode`, `select_one`, required: true): Choose the primary mode of transport you usually use for your commute.
	+ Car: I drive or ride in a car.
	+ Public transit: I use public transportation (bus, train, etc.).
	+ Bike: I ride a bike.
	+ Walk: I walk.
	+ Carpool: I ride in a carpool.
	+ Remote: I work from home or remotely.

### Average Commute Distance
* Average commute distance (`commute_distance`, `text`, required: false): Enter the approximate one way distance in miles or kilometers.

### Satisfaction with Current Transport Options
* Satisfaction with current transport options (`satisfaction_with_transit`, `select_one`, required: false): Rate your satisfaction with the current transport options.
	+ Very satisfied: I am very satisfied with the current transport options.
	+ Satisfied: I am satisfied with the current transport options.
	+ Neutral: I have no strong feelings about the current transport options.
	+ Dissatisfied: I am dissatisfied with the current transport options.
	+ Very dissatisfied: I am very dissatisfied with the current transport options.

### Preferred Improvements
* Preferred improvements to commute (`preferred_improvements`, `select_multiple`, required: false): Select the improvements you would like to see implemented in the commute.
	+ More frequent transit: More frequent buses or trains.
	+ Safer bike lanes: More dedicated bike lanes.
	+ More parking: More parking spaces or facilities.
	+ Flexible hours: Flexible or varied hours of operation.

### Willingness to Shift Commute Mode
* Willingness to shift commute mode (`willingness_to_shift`, `select_one`, required: false): Consider shifting to a different mode of transport if incentives are provided.
	+ True: Yes, I would shift.
	+ Maybe: Maybe, it depends.
	+ False: No, I would not shift.
