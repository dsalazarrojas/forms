# hackathon_registration_form_hackathon_applications - Help Guide
## Purpose
The hackathon registration form is designed to collect information from participants for the hackathon event. This form is used to gather necessary details for event organization and coordination.

## How To Complete This Form
To complete this form accurately and efficiently, follow these steps:

1.  Enter your name and email address in the required fields.
2.  Provide the size of your team and select whether it is an "individual" or "team".
3.  Specify your role in the team.
4.  Provide your contact number and address (if necessary).
5.  Choose your preferred location from the given options.
6.  Select the state where you want to be contacted.
7.  Enter your participant's PIN code.
8.  Select the event type(s) you are interested in.
9.  Enter a brief description of your team and their interests.
10.  Add a short description and image of your idea (optional).
11.  Click "submit" to submit your application.

## Field-by-Field Explanation

* **participant_name** (`participant_name`, `text`, required): Enter your name for the hackathon registration.
* **participant_email** (`participant_email`, `email`, required): Enter your email address for contact purposes.
* **team_size** (`team_size`, `number`, required): Enter the size of your team.
* **team_members** (`team_members`, `select_one`, required): Choose whether your team consists of "individuals" or "teams".
* **role** (`role`, `text`, required): Specify your role in the team.
* **contact_no** (`contact_no`, `text`, required): Enter a contact number for your team.
* **address** (`address`, `text`, required): Provide your team's address.
* **city** (`city`, `text`, required): Enter the city for your team's address.
* **state** (`state`, `select_one`, required): Choose the state where you want to be contacted.
* **pincode** (`pincode`, `text`, required): Enter the participant's PIN code.
* **event_type** (`event_type`, `select_multiple`, required): Select the type(s) of event you're interested in.
* **preferred_location** (`preferred_location`, `text`, required): Enter the location preferred for the hackathon.
* **team_interests** (`team_interests`, `select_one`, required): Choose the interests of your team.
* **tech_stack** (`tech_stack`, `text`, required): Describe the technology stack for your team's interest.
* **team_interested** (`team_interested`, `select_multiple`, required): Select the areas of interest for your team.
* **innovation_focus** (`innovation_focus`, `text`, required): Describe the area of innovation focus for your team.
* **team_experience** (`team_experience`, `text`, required): Describe the team's experience.
* **project_name** (`project_name`, `text`, required): Enter the name of your project.
* **idea** (`idea`, `text`, required): Enter a brief description of your idea.
* **idea_summary** (`idea_summary`, `text`, required): Enter a short summary of your idea.
* **idea_desc** (`idea_desc`, `text`, required): Enter a detailed description of your idea.
* **idea_img** (`idea_img`, `text`, required): Enter a link or upload an image of your idea.
* **submit** (`submit`, `text`, required): Click "submit" to submit your application.
* **cancel** (`cancel`, `text`, required): Click "cancel" to cancel your application.

Note: Some fields are optional and have no effect on the form's functionality.
