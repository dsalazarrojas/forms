<thinking>
This form is designed to gather information about the network and internet assessment experience of the user. The form is meant to gather data on the quality of the network, any issues with connectivity, the types of devices used, any additional information the user wants to share, and other comments.

To ensure that this form is not used for the same purpose multiple times, we should add some logic to check if the form has been filled by the same user within a certain time frame (e.g., 24 hours).

We should also add a validation to ensure that the user has selected an option for 'network_quality' and 'connectivity_issues' as these are required fields.</thinking>

# network_and_internet_assessment - Help Guide
## Purpose

The 'network_and_internet_assessment' form is a survey designed to assess the quality of network and internet services experienced by users. This form will help in understanding the user's perception of their network and internet services.

## How To Complete This Form

*   To fill out this form, please answer each question to the best of your ability.
*   Make sure to select an option for 'network_quality' and 'connectivity_issues' as they are required fields.
*   You can select multiple options for 'devices' if you have more than one device that applies to you.
*   If you have any additional information you'd like to share, please enter it in the 'additional_info' field.
*   Finally, please enter any comments you have about your network and internet services in the 'comments' field.

## Field-by-Field Explanation

*   **network_quality**: (`network_quality`, select_one, required)
    Choose how you would rate the quality of your network and internet services.
    Please select one of the following options: Excellent, Good, Bad.
*   **connectivity_issues**: (`connectivity_issues`, text, required)
    Describe the problems you are experiencing with your connectivity.
*   **devices**: (`devices`, select_multiple, optional)
    If you have multiple devices that apply, please select them.
    Options: Laptop, Smartphone, Desktop.
*   **email**: (`email`, email, required)
    Please enter your email address.
*   **phone**: (`phone`, text, optional)
    Enter your phone number.
*   **additional_info**: (`additional_info`, text, optional)
    Share any additional information you would like to about your network and internet services.
*   **comments**: (`comments`, text, required)
    Enter any comments about your network and internet services.
