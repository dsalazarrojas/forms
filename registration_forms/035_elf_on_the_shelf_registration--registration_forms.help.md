<thinking>...</thinking>

To confirm the form purpose and ensure relevance, I've reviewed the provided YAML form structure. The "Elf On The Shelf Registration" form appears to be designed for managing participant registrations and schedules for an Elf On The Shelf program. It includes fields for organization information, school details, schedule dates and times, participant registration, and participant contact information.

</thinking>

# Elf On The Shelf Registration - Help Guide
## Purpose
This form is for registering an organization or school for the Elf On The Shelf program and scheduling events. You will be able to register participants for the events and provide their contact information.

## How To Complete This Form
Follow these steps to complete the registration form:

1. Enter the name of your organization or school.
2. Select your school from the list of options (if applicable).
3. Choose the start and end dates for your scheduled event.
4. Select the start and end times for your scheduled event.
5. Register participants for your event, selecting from the available options.
6. Enter each participant's name, email address, and phone number.

## Field-by-Field Explanation

* **Organization** (`elf_on_the_shelf_organization`, text, required): This is the name of your organization or school.
* **School** (`elf_on_the_shelf_school`, text, required): Select your school from the available options.
* **Schedule Start Date** (`elf_on_the_shelf_schedule_start_date`, date, required): Choose the start date for your scheduled event.
* **Schedule End Date** (`elf_on_the_shelf_schedule_end_date`, date, required): Choose the end date for your scheduled event.
* **Schedule Time Start** (`elf_on_the_shelf_schedule_time_start`, time, required): Select the start time for your scheduled event.
* **Schedule Time End** (`elf_on_the_shelf_schedule_time_end`, time, required): Select the end time for your scheduled event.
* **Participants** (`elf_on_the_shelf_participants`, select_multiple, required): Select the participants you would like to register for your event.
* **Participant Name** (`elf_on_the_shelf_participant_name`, text, required): Enter the name of each participant.
* **Participant Email** (`elf_on_the_shelf_participant_email`, email, required): Enter the email address of each participant.
* **Participant Phone** (`elf_on_the_shelf_participant_phone`, text, required): Enter the phone number of each participant.
