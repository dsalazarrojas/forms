# Film Festival Technical Rehearsal Booking Form - Help Guide
## Purpose
This form is for booking technical run-throughs for a film festival. It's a tool for scheduling and coordinating the technical aspects of the event. You will need to complete this form to ensure a smooth and efficient technical rehearsal process.

## How To Complete This Form
1. Start by selecting the main page and fill in the required information, if any.
2. On the **Film Details** page, enter the film's title, description, and director.
3. On the **Contact** page, provide the contact information for the crew member handling the technical run-through, including phone number and email.
4. On the **Film Details** page (different from the previous one), enter the start and end time for the technical run-through.
5. On the **Technical Run-through** page, select the crew member responsible for the technical run-through from the dropdown list, and add any additional note for the event coordinator.

## Field-by-Field Explanation
### Main Page
* **Main Page** (`main_page`, text, optional): This is the introductory page of the form, and you should fill in any information as required or requested.
 
### Film Details 1
* **Film Title** (`title`, text, optional): The title of the film to be rehearsed.
* **Film Description** (`description`, text, optional): A brief description of the film.
* **Director** (`director`, text, optional): The name of the film's director.

### Contact
* **Crew Member** (`crew_member`, select_one, optional): The name of the crew member handling the technical run-through.
* **Phone** (`phone`, text, optional): The phone number of the crew member.
* **Email** (`email`, email, optional): The email address of the crew member.

### Film Details 2
* **Start Time** (`start_time`, time, optional): The start time for the technical run-through.
* **End Time** (`end_time`, time, optional): The end time for the technical run-through.

### Technical Run-through
* **Crew Member** (`crew_member`, select_one, optional): The crew member responsible for the technical run-through.
* **Note** (`note`, note, optional): Any additional note for the event coordinator. 

Note: This form is not for actual bookings; it's for providing information to be used by event coordinators to plan and schedule the technical run-throughs.
