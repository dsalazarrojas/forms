<thinking>

To create a user-facing help guide for this form, I need to analyze the form's purpose, structure, and requirements. Based on the provided YAML fields, it appears that this form is designed to register shooters for a range or event, collecting information about the shooter's identity, visit details, and other relevant data. This form likely serves as a registration tool for the range administration to manage shooter records.

The form contains various fields, including text fields for shooter's city, name, phone, and range, select fields for visitor type, target type, and shooter type, and time fields for shoot time and shoot time frame. The form also contains options for shooter visitor type and shooter target.

</thinking>

# Range Time Registration Form - Help Guide
## Purpose
The Range Time Registration Form is a tool designed for shooters to register themselves for a range or event. This form collects information about the shooter's identity, visit details, and other relevant data.

## How To Complete This Form

To complete this form, follow these steps:

1. **Shooting Time**: Enter the shoot time in the format HH:MM.
2. **Shooter City**: Enter the city where you reside or the city where you will be shooting.
3. **Shooter Name**: Enter your full name as it appears on your ID.
4. **Shooter Phone**: Enter your phone number.
5. **Shooter Alarm**: Enter your emergency contact information.
6. **Shooter City (again)**: This field is for the city of the range you are visiting.
7. **Shooter Visitor**:
	* Select **Adult** if you are 18 or older.
	* Select **Senior** if you are 65 or older.
	* Select **Junior** if you are between 12-17 years old.
	* Select **Youth** if you are 11 years old or younger.
8. **Shooter Visitor Type**:
	* Select one or more of the following options:
		+ Adult
		+ Senior
		+ Junior
		+ Youth
9. **Shooter Target**:
	* Select one of the following options:
		+ Archery
		+ Rifle
		+ Shotgun
		+ Pistol
10. **Shoot Time**:
	* Enter the shoot time in the format HH:MM.
11. **Shoot Time Frame**:
	* Enter a number between 0 and 1000 (e.g., 1).
12. **Shooter Type**:
	* Select one of the following options:
		+ Private
		+ Public
13. **Shooter Group**:
	* Enter the name of your group or team.
14. **Shooter Visitor Group**:
	* Enter the name of your group or team.
15. **Shooter Range**:
* Enter the name of the range you are visiting.

## Field-by-Field Explanation

* **<label>** (`shootertime`, `time`, required/optional): Enter the shoot time in the format HH:MM.
* **<label>** (`shootercity`, `text`, required/optional): Enter the city where you reside or the city where you will be shooting.
* **<label>** (`shootername`, `text`, required/optional): Enter your full name as it appears on your ID.
* **<label>** (`shootertel`, `text`, required/optional): Enter your phone number.
* **<label>** (`shooteralarm`, `text`, required/optional): Enter your emergency contact information.
* **<label>** (`shootercity (again)`, `text`, required/optional): Enter the city of the range you are visiting.
* **<label>** (`shootervisitor`, `select_one`, required/optional): Select **Adult** if you are 18 or older, **Senior** if you are 65 or older, **Junior** if you are between 12-17 years old, or **Youth** if you are 11 years old or younger.
* **<label>** (`shootervisitor_type`, `select_multiple`, required/optional): Select one or more of the following options: **Adult**, **Senior**, **Junior**, **Youth**.
* **<label>** (`shootertarget`, `select_one`, required/optional): Select one of the following options: **Archery, Rifle, Shotgun, Pistol**.
* **<label>** (`shootertime`, `time`, required/optional): Enter the shoot time in the format HH:MM.
* **<label>** (`shootertimeframe`, `number`, required/optional): Enter a number between 0 and 1000 (e.g., 1).
* **<label>** (`shootertype`, `select_one`, required/optional): Select one of the following options: **Private, Public**.
* **<label>** (`shootergroup`, `text`, required/optional): Enter the name of your group or team.
* **<label>** (`shootervisitorgroup`, `text`, required/optional): Enter the name of your group or team.
* **<label>** (`shooterrange`, `text`, required/optional): Enter the name of the range you are visiting.

## Tips
* Make sure to enter accurate and complete information to ensure proper registration.
* If you are unsure about any field, please contact the range administration for assistance.
