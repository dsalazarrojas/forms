# Recurring Task Management Form - Help Guide
## Purpose
This form is designed for managing recurring tasks, allowing you to create, edit, or delete tasks that occur on a regular schedule. It's meant for administrators or users who need to track and schedule repetitive tasks, ensuring that such tasks are properly managed and executed as needed.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the task you want to manage from the task list.
2. Fill in the required fields, such as assignee, start date, and end date.
3. Choose the reminder and priority levels as needed.
4. Select the recurrence options, including whether the task should repeat, the recurrence interval, frequency, and type.
5. Set the due date and repeat until options as necessary.
6. Review and adjust your settings as needed.

## Field-by-Field Explanation
### Page 1: Recurring Task Form
* **Recurring Task Form** (`recurring_task_form`, text, required): This is the main form field where you enter the task details.
* **Assignee** (`assignee`, select_one, required): Select the person or team responsible for the task.
* **Start Date** (`start_date`, date, required): Enter the start date for the task.
* **End Date** (`end_date`, date, required): Enter the end date for the task.
* **Reminder** (`reminder`, select_one, required): Choose how often you want to receive reminders for this task. Options are: 0 (no reminders), 1 (daily), 7 (weekly), or 30 (monthly).
* **Repeat** (`repeat`, select_one, required): Select whether this task should repeat. Options are: Yes, No.
* **Priority** (`priority`, select_one, required): Choose the priority level for this task. Options are: low, medium, high.

### Page 2: Recurrence Options
* **Recur Daily** (`recur_daily`, select_one, required): Select how often the task should recur. Options are: 1 (daily), 2 (every 2 days), 3 (every 3 days), 4 (every 4 days).
* **Recur Weekly** (`recur_weekly`, select_one, required): Select how often the task should recur. Options are: daily, weekly, bi-weekly, monthly.
* **Repeat Type** (`repeat_type`, select_one, required): Choose how the task should repeat. Options are: minute, hour, day, week.
* **Repeat Until** (`repeat_until`, select_one, required): Select when the task should repeat. Options are: never, next occurrence, next available.
* **Repeat By** (`repeat_by`, select_one, required): Select how the task should repeat. Options are: never, next occurrence, next available.
* **Repeat Frequency** (`repeat_frequency`, select_one, required): Select how often the task should repeat. Options are: Yes, No.

### Page 3: Additional Options
* **Recur Interval** (`recur_interval`, select_one, required): Select how often the task should recur. Options are: 1 (daily), 2 (every 2 days), 3 (every 3 days), 4 (every 4 days).
* **Recur Frequency** (`recur_frequency`, select_one, required): Select how often the task should recur. Options are: daily, weekly, monthly.
* **Due By** (`due_by`, date, required): Enter the due date for the task.
* **Repeat Time** (`repeat_time`, time, required): Enter the time at which the task should repeat.
* **Repeat Time** (`repeat_frequency`, select_one, required): Select how often the task should repeat. Options are: Yes, No.

### Tips
* Be sure to select the correct reminder and priority levels as needed.
* Choose the correct recurrence options to fit your task needs.
* Double-check your settings before saving the task.
