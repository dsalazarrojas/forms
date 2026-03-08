# exhibit_team_apparel_request_form - Help Guide
## Purpose
The exhibit_team_apparel_request_form is a form designed to capture requests for team apparel needs. This form helps determine if the team needs apparel, select the size and style, and specify the quantity of apparel required.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select "Yes" or "No" to determine if you need team apparel.
2. Choose the size of the apparel you need.
3. Select the style of the apparel you need.
4. Enter the quantity of apparel you need.
5. If desired, add any comments or notes about your request.
6. Enter the email address of your team lead or contact person.
7. Enter the phone number of your team lead or contact person.
8. If applicable, select a date for the request (e.g. for tracking purposes).

## Field-by-Field Explanation
- **team** (`team`, select_multiple, optional): Select "Yes" if you have a team that needs apparel.
  - Choose multiple teams if you need apparel for multiple teams.
  - If you have a team that doesn't need apparel, select "No".
- **size** (`size`, select_one, optional): Select the size of the apparel you need.
  - Choose from options: large, medium, small.
  - If you need a custom size, please contact your team lead or admin.
- **style** (`style`, select_multiple, optional): Select the style of the apparel you need.
  - Choose from options: 'Yes', 'No'.
  - If you need a custom style, please contact your team lead or admin.
- **quantity** (`quantity`, number, optional): Enter the quantity of apparel you need.
  - Enter a whole number (e.g. 2, 5, 10).
  - If you need less than 1, you can enter 0.
- **comments** (`comments`, text, optional): Add any comments or notes about your request.
  - You can use this field to specify any special requests or questions.
  - Keep it brief, we'll get back to you as soon as possible.
- **email** (`email`, email, optional): Enter the email address of your team lead or contact person.
  - Make sure to enter a valid email address.
- **phone** (`phone`, text, optional): Enter the phone number of your team lead or contact person.
  - Enter a valid phone number.
- **date** (`date`, date, optional): Select a date for the request (e.g. for tracking purposes).
  - Choose a date in the format YYYY-MM-DD.
