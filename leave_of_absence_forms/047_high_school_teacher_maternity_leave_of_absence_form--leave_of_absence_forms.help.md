# High School Teacher Maternity Leave Of Absence Form - Help Guide
## Purpose
This form is used by high school teachers to request a maternity leave of absence from work. It is used to provide necessary information for the teacher's leave of absence.

## How To Complete This Form
1. Ensure you are authorized to fill out this form.
2. Select your school from the provided options in the "School" field, if applicable.
3. Enter your name in the "Teacher Name" field.
4. If applicable, select the start date of your leave of absence in the "Start Date" field.
5. If applicable, select the end date of your leave of absence in the "End Date" field.
6. Enter the reason for your leave of absence in the "Reason For Leave" field.
7. If applicable, select the expected return date in the "Expected Return Date" field.
8. Select your department from the provided options in the "Department" field, if applicable.
9. Enter the name of your supervisor in the "Supervisor Name" field, if applicable.

## Field-by-Field Explanation
- **School** (`school_id`, select_one, required: false): Select your school from the provided options. If you do not see your school listed, please contact your HR or school administration for assistance.
- **Teacher Name** (`teacher_name`, text, required: false): Enter your name as it appears on your school records.
- **Start Date** (`start_date`, date, required: false): If you are taking a leave of absence, enter the date you would like to start it. If not, leave this field blank.
- **End Date** (`end_date`, date, required: false): If you are taking a leave of absence, enter the date you would like to end it. If not, leave this field blank.
- **Reason For Leave** (`reason_for_leave`, text, required: true): Enter a brief description of why you are requesting a leave of absence.
- **Expected Return Date** (`expected_return_date`, date, required: false): If you are taking a leave of absence, enter the date you expect to return to work. If not, leave this field blank.
- **Department** (`department_id`, select_one, required: false): Select your department from the provided options. If you do not see your department listed, please contact your HR or school administration for assistance.
- **Supervisor Name** (`supervisor_name`, text, required: false): Enter the name of your supervisor as it appears on your school records.
