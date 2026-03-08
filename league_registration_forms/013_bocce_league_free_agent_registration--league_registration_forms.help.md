# Bocce League Free Agent Registration - Help Guide
## Purpose
The Bocce League Free Agent Registration form is designed to collect information from potential free agents who want to join a Bocce League team but do not already have a team affiliation.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields:
	* First Name
	* Last Name
	* Email Address
	* Phone Number
	* Age
	* Address
	* City - State - Zip
	* Bocce Experience Level
	* Which Season Are You Registering For
	* Do You Have A Preferred Team
	* Preferred Match Days
	* Preferred Match Times
	* Preferred Playing Position
	* Any Medical Conditions
	* I Accept The League Waiver And Rules
	* League Registration Fee
	* Payment Method
2. Select your preferred playing position from the options provided.
3. Choose your preferred match days and times.
4. If you have any medical conditions, please mention them so we can ensure your safety during the league.
5. Review and agree to the league waiver and rules.

## Field-by-Field Explanation

* **First Name** (`player_first_name`, text, required): Enter your first name as it appears on your identification.
* **Last Name** (`player_last_name`, text, required): Enter your last name as it appears on your identification.
* **Email Address** (`player_email`, email, required): Enter your email address where you can be reached.
* **Phone Number** (`player_phone`, text, required): Enter your phone number where you can be reached.
* **Age** (`player_age`, number, required): Enter your age as of the current year.
* **Address** (`player_address`, text, required): Enter your physical address.
* **City - State - Zip** (`player_city_state_zip`, text, required): Enter your city, state, and zip code.
* **Bocce Experience Level** (`bocce_experience`, select_one, required): Select your level of experience in Bocce:
	+ Beginner
	+ Intermediate
	+ Advanced
	+ Professional
	+ Never Played
* **Which Season Are You Registering For** (`league_season`, select_one, required): Select the season you are registering for:
	+ Spring Season
	+ Summer Season
	+ Fall Season
	+ Winter Season
	+ Year-Round
* **Do You Have A Preferred Team** (`team_preference`, select_one, required): Select your preference:
	+ Yes - team name
	+ No - any team
	+ Prefer specific division
* **Preferred Team Name** (`preferred_team_name`, text, optional): If you have a preference, enter the name of the team.
* **Which Days Are You Available** (`availability_days`, select_multiple, required): Select all the days you are available to play:
	+ Monday
	+ Tuesday
	+ Wednesday
	+ Thursday
	+ Friday
	+ Saturday
	+ Sunday
* **Preferred Match Times** (`availability_times`, select_multiple, required): Select all the times you are available to play:
	+ Morning
	+ Afternoon
	+ Evening
	+ Weekend
	+ Flexible
* **Your Bocce Strengths** (`player_strengths`, select_multiple, optional): Select your Bocce strengths:
	+ Accuracy
	+ Strategy
	+ Physical Ability
	+ Teamwork
	+ Leadership
	+ All around player
* **Preferred Playing Position** (`player_position_preference`, select_one, required): Select your preferred playing position:
	+ Lead
	+ Second
	+ Third
	+ Skip
	+ No Preference
	+ Unsure
* **Any Medical Conditions** (`medical_conditions`, text, optional): If you have any medical conditions, please mention them so we can ensure your safety during the league.
* **I Accept The League Waiver And Rules** (`waiver_acceptance`, select_one, required): Review and agree to the league waiver and rules:
	+ I Accept
	+ I Do Not Accept
* **League Registration Fee** (`league_fee_amount`, number, required): Enter the amount due for the league registration.
* **Payment Method** (`payment_method`, select_one, required): Select your payment method:
	+ Cash
	+ Check
	+ Credit Card
	+ Bank Transfer
	+ Online Payment
* **Have You Played In Bocce Leagues Before** (`prior_league_experience`, select_one, required): Select if you have played in Bocce leagues before:
	+ True
	+ False
	+ Competitive only
	+ Casual only

## Tips

* Please fill out the form carefully to ensure your registration is processed correctly.
* If you have any questions or concerns, contact the league administrator.
* Review the league waiver and rules carefully before accepting them.
* Payment methods will be processed separately.
