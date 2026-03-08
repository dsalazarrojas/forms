# Acting School Material Request Form - Help Guide
## Purpose
The Acting School Material Request Form is a tool for students to submit their material needs for a specific class or course. By completing this form, you will provide essential information about the materials you require for your project, helping the staff to better serve you.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your full name, student ID, and class or course name.
2. Choose the type of material you are requesting from the available options.
3. Provide a detailed list of the specific materials you need.
4. Indicate the quantity of each item required.
5. Describe how you intend to use the materials.
6. Specify when you need the materials by.
7. If applicable, provide any special requirements or instructions.
8. Answer whether you have requested similar materials in the past month.
9. Indicate how you plan to fund the materials.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required): This is your full name as a student.
* **Student ID** (`student_id`, text, required): Your unique identification number.
* **Class or Course** (`class_course`, text, required): Provide the name of the class or course for which the materials are needed.
* **Instructor Name** (`instructor_name`, text, required): The name of the instructor for the class.
* **Type of Material Requested** (`material_type`, select_one, required): Choose from the following options:
	+ Scripts
	+ Props
	+ Costumes
	+ Set pieces
	+ Audio equipment
	+ Video equipment
	+ Textbooks
	+ Other
* **Specific Materials Needed** (`specific_materials`, text, required): List the specific materials you need for your project.
* **Quantity Needed** (`quantity_needed`, number, required): Indicate how many of each item you need.
* **Intended Use** (`intended_use`, text, required): Describe how the materials will be used in your project.
* **Project Deadline** (`project_deadline`, date, required): Specify when you need the materials by.
* **Special Requirements or Instructions** (`special_requirements`, text, optional): Provide any special requirements or instructions for the materials.
* **Have You Made Similar Requests Recently** (`previous_requests`, select_one, required): Answer whether you have requested similar materials in the past month:
	+ 'Yes'
	+ 'No'
* **Funding Source** (`funding_source`, select_one, required): Indicate how you plan to fund the materials:
	+ Class budget
	+ Personal funds
	+ Grant funding
	+ Department allocation
	+ Other
