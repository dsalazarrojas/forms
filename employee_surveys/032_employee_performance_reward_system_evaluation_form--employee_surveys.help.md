# employee_performance_reward_system_evaluation_form - Help Guide
## Purpose
The employee performance reward system evaluation form is a tool used by HR or management personnel to assess and reward employees for their achievements. This form helps evaluate an employee's performance based on their job title, type, and performance rating.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name in the "name" field.
2. Select your job title from the "job_title" field.
3. Choose your employee type from the "employee_type" field.
4. Select your performance rating from the "performance_rating" field. This rating indicates how well you've performed your job. Options are:
	* Exceeded expectations
	* Met expectations
	* Below expectations
5. Choose the reward type you're eligible for from the "reward" field. Options are:
	* Cash
	* Non-cash
	* Bonus
6. Enter a valid email address in the "email" field.
7. Select your category from the "category" field. Options are:
	* Sales
	* Marketing
	* Engineering
	* Finance
	* Operations

## Field-by-Field Explanation
* **name** (`name`, text, required): Enter your name as it appears on your ID or passport.
* **job_title** (`job_title`, text, required): Select your job title to help evaluate your performance based on your role.
* **employee_type** (`employee_type`, text, optional): Enter your type of employee (e.g., full-time, part-time, contractor).
* **performance_rating** (`performance_rating`, select_multiple, required): Select your performance rating based on how well you've performed your job. Options are:
	+ Exceeded expectations
	+ Met expectations
	+ Below expectations
* **reward** (`reward`, select_multiple, required): Choose the reward type you're eligible for. Options are:
	+ Cash
	+ Non-cash
	+ Bonus
* **date** (`date`, date, optional): Enter the date in YYYY-MM-DD format (e.g., 2022-01-01).
* **time** (`time`, time, optional): Enter the time of day in 24-hour format (e.g., 14:30).
* **note** (`note`, note, optional): Enter any additional notes or comments about your performance.
* **email** (`email`, email, required): Enter a valid email address.
* **phone** (`phone`, text, optional): Enter your phone number.
* **category** (`category`, select_one, required): Select your category from the options. Options are:
	+ Sales
	+ Marketing
	+ Engineering
	+ Finance
	+ Operations
