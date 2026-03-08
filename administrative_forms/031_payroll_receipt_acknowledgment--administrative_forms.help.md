# Payroll Receipt Acknowledgment - Help Guide
## Purpose
The "Payroll Receipt Acknowledgment" form is used to confirm that an employee has received their paycheck.

## How To Complete This Form
1. Select the date of the pay period from the "Pay Date" field.
2. Enter the amount of pay received in the "Pay Amount" field.
3. Select the pay cycle for this pay period from the "Pay Cycle" field.
4. Choose the pay frequency for this pay period from the "Pay Frequency" field.
5. Enter the employee's name in the "Employee Name" field.
6. Enter the manager's name in the "Manager Name" field.
7. Select the pay method for this pay period from the "Pay Method" field.
8. Select any relevant pay types from the "Pay Type" field.
9. Add any comments about the paycheck in the "Comments" field.
9. Select "Confirm Receipt" to acknowledge receipt of the paycheck.

## Field-by-Field Explanation
* **Pay Date** (`pay_date`, date, required): This field should be filled in with the date of the pay period.
* **Pay Amount** (`pay_amount`, number, required): Enter the total amount of pay received for this pay period.
* **Pay Cycle** (`pay_cycle`, select_one, optional): Select the pay cycle for this pay period from the available options.
* **Pay Frequency** (`pay_frequency`, select_multiple, optional): Select the pay frequency for this pay period from the available options.
* **Employee Name** (`employee_name`, text, optional): Enter the employee's name who received the paycheck.
* **Manager Name** (`manager_name`, text, optional): Enter the name of the manager for this pay period.
* **Pay Method** (`pay_method`, select_one, optional): Select the pay method for this pay period from the available options.
* **Pay Type** (`pay_type`, select_multiple, optional): Select any relevant pay types for this pay period from the available options.
* **Comments** (`comments`, note, optional): Add any comments or notes about this pay period.
* **Confirm Receipt** (`confirm_receipt`, select_one, required): Select "Option 1" to confirm receipt of the paycheck.
