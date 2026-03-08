<thinking>
The form purpose is to collect data from tank inspections. The form is likely used by maintenance or operational teams to document and track tank inspections, ensuring the tanks are inspected at appropriate intervals to maintain their integrity and safety. To create a comprehensive help guide, we should consider the various fields and their potential meanings.

</thinking>

# Tank Inspection Form - Help Guide
## Purpose
The Tank Inspection Form is used to record and document tank inspections, ensuring the tanks are properly maintained and safe to use.

## How To Complete This Form

1. Fill out the form completely, including the required fields.
2. Enter a brief description of the tank being inspected in the form title field.
3. Select the type of tank being inspected (if applicable).
4. Record the date of the inspection.
5. Indicate whether the inspector has inspected the tank (Yes/No).
6. Enter the tank's ID number (if applicable).
7. Enter the tank's capacity (if applicable).
8. Add any relevant notes about the inspection.
9. Enter your email address (if you want to be contacted for further information).
10. Enter your phone number (if you want to be contacted by phone).
11. Indicate whether the tank's vendor is known (Yes/No).
12. Record the timestamp of when the form was submitted.

## Field-by-Field Explanation
- **tank_inspection_form** (`form_title`, text, required/optional): Enter a brief description of the tank being inspected.
- **tank_type** (`tank_type`, text, required/optional): Select the type of tank being inspected (e.g., water tank, oil tank, etc.).
- **inspection_date** (`inspection_date`, date, required/optional): Enter the date of the inspection.
- **inspector** (`inspector`, select_one, required/optional): Indicate whether the inspector has examined the tank (Yes/No).
- **tank_id** (`tank_id`, number, required/optional): Enter the tank's ID number (if applicable).
- **tank_capacity** (`tank_capacity`, number, required/optional): Enter the tank's capacity (if applicable).
- **notes** (`notes`, note, required/optional): Add any relevant notes about the inspection.
- **email** (`email`, email, required/optional): Enter your email address (if you want to be contacted for further information).
- **phone** (`phone`, text, required/optional): Enter your phone number (if you want to be contacted by phone).
- **tank_vendor** (`tank_vendor`, select_one, required/optional): Indicate whether the tank's vendor is known (Yes/No).
- **submitted** (`form_submitted`, time, required/optional): Record the timestamp of when the form was submitted.
