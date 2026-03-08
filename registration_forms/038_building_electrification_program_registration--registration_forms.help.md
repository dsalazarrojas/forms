# Building Electrification Program Registration - Help Guide
## Purpose
The Building Electrification Program Registration form is designed to collect information from property owners interested in transitioning their buildings to electric-based heating and cooling systems. This form will help us understand your goals, timelines, and expectations for the electrification process.

## How To Complete This Form
1. Please answer all required questions (indicated by *) to the best of your ability.
2. For select fields, choose all that apply or select one option that best describes your situation.
3. If you need help or clarification on any question, please contact us at <your contact information>.
4. Once you have completed the form, review it carefully to ensure accuracy.

## Field-by-Field Explanation

* **Property Owner Name (Page 1)** (`property_owner`, text, *): Please enter your full name as the property owner.
* **Company Name (Page 1)** (`company_name`, text, optional): If the property is a commercial property, please enter the name of the company.
* **Job Title (Page 1)** (`title`, text, optional): Please enter your job title or position.
* **Email Address (Page 1)** (`email`, email, *): Please enter your contact email address.
* **Phone Number (Page 1)** (`phone`, text, *): Please enter your contact phone number.
* **Registration Date (Page 1)** (`registration_date`, date, *): Please enter the date you are interested in starting the electrification process.
* **Property Name (Page 1)** (`property_name`, text, *): Please enter the name of the property.
* **Property Address (Page 1)** (`property_address`, text, *): Please enter the full address of the property.
* **City (Page 1)** (`city`, text, *): Please enter the city name.
* **State (Page 1)** (`state`, text, *): Please enter the state or province.
* **ZIP Code (Page 1)** (`zip_code`, text, *): Please enter the postal code.
* **Property Type (Page 1)** (`property_type`, select_one, *): Please select the type of property:
	+ Single Family Home
	+ Multi Family Residential
	+ Commercial Office
	+ Retail Building
	+ Industrial Facility
	+ Mixed Use
	+ Institutional
	+ Other
* **Year Built (Page 2)** (`year_built`, number, optional): Please enter the year the property was constructed.
* **Building Size (Page 2)** (`building_size`, number, *): Please enter the square footage of the property.
* **Number of Units (Page 2)** (`number_of_units`, number, optional): Please enter the number of units in the property, if applicable.
* **Current Heating System (Page 2)** (`current_heating`, select_one, *): Please select the primary heating source:
	+ Natural Gas Furnace
	+ Oil Furnace
	+ Propane
	+ Electric Resistance
	+ Heat Pump
	+ Boiler System
	+ Other
* **Current Cooling System (Page 2)** (`current_cooling`, select_one, *): Please select the primary cooling source:
	+ Central Air Conditioning
	+ Heat Pump
	+ Window Units
	+ Evaporative Cooler
	+ No Cooling System
	+ Other
* **Current Water Heater (Page 3)** (`current_water_heater`, select_one, *): Please select the type of water heater:
	+ Natural Gas
	+ Propane
	+ Electric Tank
	+ Electric Tankless
	+ Solar
	+ Other
* **Gas Appliances Present (Page 3)** (`gas_appliances`, select_multiple, *): Please select all gas appliances that apply:
	+ None
	+ Gas Stove/Range
	+ Gas Oven
	+ Gas Dryer
	+ Gas Fireplace
	+ Gas Pool Heater
	+ Gas Outdoor Grill
	+ Other Gas Appliances
* **Electrification Goals (Page 4)** (`electrification_goals`, select_multiple, *): Please select all goals for electrification:
	+ Space Heating
	+ Water Heating
	+ Cooking Appliances
	+ Clothes Drying
	+ Vehicle Charging
	+ Complete Electrification
	+ Other
* **Primary Motivation (Page 4)** (`motivation`, select_one, *): Please select the primary motivation for electrification:
	+ Environmental Concerns
	+ Cost Savings
	+ Rebates and Incentives
	+ Health and Safety
	+ Building Codes
	+ Property Value
	+ Other
* **Implementation Timeline (Page 4)** (`timeline`, select_one, *): Please select the desired start date for the electrification process:
	+ Immediately
	+ Within 3 Months
	+ Within 6 Months
	+ Within 1 Year
	+ Planning for Future
* **Budget Range (Page 4)** (`budget_range`, select_one, optional): Please select the estimated budget for the electrification process:
	+ Under $5,000
	+ $5,000 - $15,000
	+ $15,000 - $30,000
	+ $30,000 - $50,000
	+ Over $50,000
	+ Seeking Financing
* **Electrical Panel Capacity (Page 5)** (`electrical_panel`, text, optional): If known, please enter the electrical panel capacity.
* **Solar Panels Installed (Page 5)** (`solar_installed`, select_one, *): Please select whether you have solar panels installed:
	+ Yes - Owned
	+ Yes - Leased
	+ No - But Interested
	+ No - Not Interested
* **EV Charging Interest (Page 5)** (`ev_charging`, select_one, *): Please select your interest in EV charging:
	+ Yes - Currently Need
	+ Yes - Future Need
	+ No - Not Interested
* **Program Interest (Page 5)** (`program_interest`, select_multiple, *): Please select all support you need for the program:
	+ Energy Audit
	+ System Design
	+ Installation Services
	+ Rebate Assistance
	+ Financing Options
	+ Technical Consultation
	+ All of the Above
* **Preferred Contact Method (Page 6)** (`preferred_contact`, select_one, *): Please select the preferred contact method:
	+ Email
	+ Phone Call
	+ Text Message
	+ Mail
* **Additional Comments (Page 6)** (`additional_comments`, text, optional): Please enter any additional comments or information.
