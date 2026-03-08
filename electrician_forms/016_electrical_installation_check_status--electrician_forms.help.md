<thinking>...</thinking>

# electrical_installation_check_status - Help Guide
## Purpose
The Electrical Installation Check Status form is designed to gather information about the electrical installation status from users. This form is used to assess the status of electrical installations and ensure that all necessary checks are performed before proceeding with the installation. The form is divided into several sections, each focusing on different aspects of the installation.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select one or multiple options for the "Electrical Panel Rating" section.
2.  Provide any additional notes or comments for the "Electrical Panel Rating" section.
3.  Select one option for the "Electrical Distribution Rating" section.
4.  Provide any additional notes or comments for the "Electrical Distribution Rating" section.
5.  Select one or multiple options for the "Electrical Installation Rating" section.
6.  Provide any additional notes or comments for the "Electrical Installation Rating" section.
7.  List any hazards for the "Electrical Installation Hazards" section.
8.  Provide any additional comments for the "Electrical Installation Hazards" section.
9.  Select one or multiple options for the "Ground Level Rating" section.
10.  List any hazards for the "Ground Level Hazards" section.
11.  Provide any additional comments for the "Ground Level Hazards" section.

## Field-by-Field Explanation

*   **form-status**: (`electrical_installation_check_status`, select_multiple, required) - Select one or multiple options to indicate the current status of the electrical installation.
*   **additional-notes**: (`notes`, text, required) - Enter any additional comments or notes about the electrical installation.
*   **electrical-panel-rating**: (`electrical_panel_rating`, number, required) - Enter a numerical rating for the electrical panel, with 1 being the lowest and 3 the highest.
*   **electrical-panel-rating-hazard**: (`electrical_panel_rating_hazard`, text, optional) - Enter any hazards or concerns about the electrical panel.
*   **electrical-panel-rating-comments**: (`electrical_panel_rating_comments`, text, optional) - Enter any comments about the electrical panel rating.
*   **electrical-panel-number**: (`electrical_panel_number`, text, required) - Enter the number of the electrical panel being checked.
*   **electrical-distribution-rating**: (`electrical_distribution_rating`, select_one, optional) - Select one option to indicate the distribution rating of the electrical installation.
*   **electrical-distribution-rating-hazard**: (`electrical_distribution_rating_hazards`, text, optional) - Enter any hazards or concerns about the electrical distribution.
*   **electrical-distribution-rating-comments**: (`electrical_distribution_rating_comments`, text, optional) - Enter any comments about the electrical distribution rating.
*   **electrical-panel-rating-hazard-hazards**: (`electrical_panel_rating_hazard_hazards`, select_multiple, optional) - Select one or multiple options to indicate any hazards or concerns about the electrical panel.
*   **electrical-panel-rating-hazard-hazards-comments**: (`electrical_panel_rating_hazard_hazards_comments`, text, optional) - Enter any comments about the electrical panel hazards.
*   **electrical-distribution-rating-hazards**: (`electrical_distribution_rating_hazards`, text, optional) - Enter any hazards or concerns about the electrical distribution.
*   **electrical-distribution-rating-hazards-comments**: (`electrical_distribution_rating_hazards_comments`, text, optional) - Enter any comments about the electrical distribution hazards.
*   **ground-level-rating**: (`ground_level_rating`, select_one, optional) - Select one option to indicate the ground level rating of the electrical installation.
*   **ground-level-rating-hazards**: (`ground_level_rating_hazards`, text, optional) - Enter any hazards or concerns about the ground level.
*   **ground-level-rating-comments**: (`ground_level_rating_comments`, text, optional) - Enter any comments about the ground level rating.
*   **electrical-installation-rating**: (`electrical_installation_rating`, select_one, required) - Select one option to indicate the electrical installation rating.
*   **electrical-installation-rating-hazards**: (`electrical_installation_hazards`, text, optional) - Enter any hazards or concerns about the electrical installation.
*   **electrical-installation-rating-comments**: (`electrical_installation_rating_comments`, text, optional) - Enter any comments about the electrical installation rating.
*   **electrical-installation-check-notes**: (`electrical_installation_check_notes`, text, optional) - Enter any general notes or comments about the electrical installation check.
