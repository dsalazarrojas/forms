<thinking>
The form "drumming_battle_tournament_entry_form" is designed to collect information for event participants, either solo or group. It captures personal details such as name, age, and contact information, as well as team-related details like team name, size, and leader's phone number. The form also collects payment and participation status information. It is used for events and tournaments where participants can register as solo or with a team.
</thinking>

# drumming_battle_tournament_entry_form - Help Guide
## Purpose
This guide will walk you through the drumming battle tournament entry form, which is used to collect information for solo or group participants in an event.

## How To Complete This Form
To complete this form, follow these steps:

1. Select whether you are a solo participant or part of a group.
2. Fill in your personal details such as name and age.
3. Enter your contact information.
4. If you are a group participant, fill in team-related details like team name, size, and leader's phone number.
5. Confirm your participation in the event.
6. Fill in the event date and start/end time.
7. Specify the event location.
8. Enter your entry fee and payment method.
9. Confirm your payment status.
10. Add any additional notes about your participation.
11. Click the submit button to complete the form.

## Field-by-Field Explanation

* **Is Solo** (`Is Solo`, select_one, required): Select whether you are a solo participant or part of a group.
* **Name** (`name`, text, required): Enter your name.
* **Age** (`age`, number, required): Enter your age.
* **Email** (`email`, email, required): Enter your email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Team Name** (`team_name`, text, required if group): Enter your team's name if you are a group participant.
* **Team Members** (`team_members`, text, required if group): List the names of all team members.
* **Team Size** (`team_size`, number, required if group): Enter the number of team members.
* **Team Leader** (`team_leader`, text, required if group): Enter the team's leader's name.
* **Team Leader Phone** (`team_leader_phone`, text, required if group): Enter the team's leader's phone number.
* **Team Member** (`team_member`, text, required if group): Enter the team's member's name.
* **Is Registered** (`is_registered`, select_one, required): Confirm whether you are registered for the event.
* **Event Date** (`event_date`, date, required): Enter the event's date.
* **Start Time** (`start_time`, time, required): Enter the event's start time.
* **End Time** (`end_time`, time, required): Enter the event's end time.
* **Location** (`location`, text, required): Enter the event's location.
* **Entry Fee** (`entry_fee`, text, required): Enter the entry fee for the event.
* **Payment Method** (`payment_method`, text, required): Specify the payment method.
* **Payment Status** (`payment_status`, text, required): Confirm the payment status.
* **Notes** (`notes`, note, optional): Add any additional notes about your participation.
* **Submit** (`submit`, text, required): Click the submit button to complete the form.
