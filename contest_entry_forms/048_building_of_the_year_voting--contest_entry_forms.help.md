<thinking>Before creating the user-facing help guide, let's consider the purpose and context of the "Building Of The Year Voting" form. This form is likely used for a building design or architecture competition, where users are voting on their favorite building from a list of nominees. The form aims to collect information from voters about their selection process, including their choice of building, reasons for selecting it, and evaluation criteria.

To confirm, the form seems to be collecting data for two main purposes:

1.  To gather information about the voter's selection process, including their reasons for choosing a particular building.
2.  To evaluate the selected building against a set of criteria, such as design innovation, functionality, sustainability, and aesthetic appeal.

The form also seems to be collecting additional demographic information about the voter, such as their professional affiliation, location, and level of familiarity with the building.

To confirm, the form is not meant to be a straightforward voting form, but rather a more detailed survey that aims to provide insights into the voter's thought process and preferences.

Please let me know if this understanding is correct, and I'll proceed with creating the user-facing help guide.</thinking>

# Building Of The Year Voting - Help Guide
## Purpose
The Building Of The Year Voting form is a survey designed to gather information about your selection process when choosing a building from a list of nominees. We want to understand why you chose a particular building and how it fits with our evaluation criteria.

## How To Complete This Form
To complete this form, follow these steps:

1.  Provide your name and email address to verify your identity.
2.  Select the category that best fits the building you have chosen.
3.  Choose the building you think deserves the award.
4.  Explain why you chose this building, including its outstanding features or design elements.
5.  Rate the building on a set of criteria, such as design innovation, functionality, and sustainability.
6.  Provide additional feedback or comments about your selection.

## Field-by-Field Explanation

* **Full name** (`voter_name`, `text`, required): Please enter your full name to identify yourself.
* **Email address** (`voter_email`, `email`, required): Enter your email address for verification purposes.
* **Professional affiliation** (`voter_affiliation`, `select_one`, required): Choose your professional affiliation to help us understand your perspective.
* **City or region** (`voter_location`, `text`, required): Enter the city or region where the building is located.
* **Voting category** (`voting_category`, `select_one`, required): Select the category that best fits the building you have chosen.
* **My vote for Building of the Year** (`building_choice`, `text`, required): Choose the building you think deserves the award.
* **Building location** (`building_location`, `text`, required): Enter the city or region where the building is located.
* **Why I chose this building** (`why_chosen`, `text`, required): Explain why you chose this building, including its outstanding features or design elements.
* **Design innovation rating** (`design_innovation`, `select_one`, required): Rate the building's design innovation, from exceptional to average.
* **Functionality and usability** (`functionality`, `select_one`, required): Evaluate the building's functionality and usability, from excellent to poor.
* **Sustainability and environmental features** (`sustainability`, `select_one`, required): Rate the building's sustainability and environmental features, from exemplary to absent.
* **Aesthetic appeal and beauty** (`aesthetic_appeal`, `select_one`, required): Evaluate the building's aesthetic appeal, from outstanding to poor.
* **Positive community impact** (`community_impact`, `select_one`, required): Rate the building's positive community impact, from exceptional to none.
* **Familiarity level with building** (`familiarity_level`, `select_one`, required): Choose how familiar you are with the building, from very familiar to just discovered.
* **Additional feedback or comments** (`additional_feedback`, `text`, optional): Provide any additional feedback or comments about your selection.
