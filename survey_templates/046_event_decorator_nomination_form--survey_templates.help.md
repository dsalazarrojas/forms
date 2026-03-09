# event_decorator_nomination_form - Help Guide

## Purpose
This form is used to nominate an event decorator for an award. The form collects information about the nominee, nominator, and event details.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Enter the **Event Planner Name** in the first field. This is the person who is nominating the event decorator.
2.  Enter the **Attendee** field with the name of the person attending the event.
3.  Enter the **Nominee Name** field with the name of the event decorator being nominated.
4.  Enter the **Nominator Name** field with the name of the person nominating the event decorator.
5.  Select the **Award Category** from the dropdown list. Choose the category that best fits the event decorator's achievements.
6.  Optionally, enter the **Event Name** field if the event is related to the nomination.
7.  Enter the **Nomination Date** if the nomination is for a specific event or date.
8.  Enter the **Nominator Email** field with the email of the person nominating the event decorator.
9.  Optionally, enter the **Nominee Email** field with the email of the nominee if available.
10.  Enter the **Nominator Phone** field with the phone number of the person nominating the event decorator.
11.  Enter the **Nominator Comment** field with any additional comments about the nominee.
12.  Enter the **Nominator Note** field with any additional notes about the nomination.
13.  Enter the **Event Date** if the nomination is for a specific event or date.
14.  Optionally, enter the **Event Time** field with the start and end times of the event.
15.  Select the **Nomination Type** from the dropdown list. Choose the type of nomination that best fits the event decorator's achievements.
16.  Select the **Nominator** field to indicate if the nominator is the same person as the event planner.

## Field-by-Field Explanation
- **Event Planner Name** (`event_planner_name`, text, required): Enter the name of the event planner.
- **Attendee** (`attendee_name`, text, required): Enter the name of the person attending the event.
- **Nominee Name** (`nominee_name`, text, required): Enter the name of the event decorator being nominated.
- **Nominator Name** (`nominator_name`, text, required): Enter the name of the person nominating the event decorator.
- **Award Category** (`award_category`, select_multiple, required): Select the award category that best fits the event decorator's achievements.
- **Event Name** (`event_name`, text, optional): Enter the name of the event.
- **Nomination Date** (`nomination_date`, date, optional): Enter the date of the nomination.
- **Nominator Email** (`nominator_email`, email, required): Enter the email of the person nominating the event decorator.
- **Nominee Email** (`nominee_email`, email, optional): Enter the email of the nominee.
- **Nominator Phone** (`nominator_phone`, text, optional): Enter the phone number of the person nominating the event decorator.
- **Nominator Comment** (`nominator_comment`, text, optional): Enter any comments about the nominee.
- **Nominator Note** (`nominator_note`, note, optional): Enter any additional notes about the nomination.
- **Event Date** (`event_date`, date, optional): Enter the date of the event.
- **Event Time** (`event_time`, time, optional): Enter the start and end times of the event.
- **Nomination Type** (`nomination_type`, select_one, required): Select the type of nomination that best fits the event decorator's achievements.
- **Nominator** (`nominator`, select_one, required): Select whether the nominator is the same person as the event planner.

## Tips
- Make sure to provide accurate information to help the award committee evaluate the nomination.
- Ensure the nominator and nominee are two different people.
- If the nominator and event planner are the same person, select "Yes" for Nominator.
- If the nominator and event planner are different people, select "No" for Nominator.
