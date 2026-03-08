# Risk Manager Information Form - Help Guide
## Purpose
This form is designed to gather information about risks that need to be managed in an organization, helping risk managers provide a clear and concise overview of the risks they are handling.

## How To Complete This Form
To complete this form, follow these steps:

1.  Provide the relevant risk data in the `Risk Manager Form Data` section.
2.  Choose the risk level that best describes the risk from the options provided in the `What is your risk level?` field.
3.  Describe the risk in the `Describe the risk` field. This field is a text area where you can provide as much detail as needed.
4.  Select the types of risk that apply to the risk from the options provided in the `What is the risk type?` field. You can select multiple types of risk.
5.  Choose how often the risk occurs from the options provided in the `How often does this risk occur?` field.
6.  Choose the severity of the risk from the options provided in the `How severe is this risk?` field.
7.  Enter your email address in the `What is your email address?` field.
8.  Enter your phone number in the `What is your phone number?` field.
9.  Choose your status for the risk from the options provided in the `What is your status for this risk?` field.
10. (Optional) Add any comments related to the risk in the `Comments` field.

## Field-by-Field Explanation
* **Risk Manager Form Data** (`risk_manager_form_data`, text, required): This field is where you enter the main risk data, providing a clear overview of the risk you are handling.
* **What is your risk level?** (`risk_level`, select_one, required): This field helps assess the risk level, which can be low, medium, or high.
* **Describe the risk** (`description`, note, required): This field is where you can provide a detailed description of the risk.
* **What is the risk type?** (`risk_type`, select_multiple, required): This field allows you to select multiple types of risk, such as physical, financial, operational, strategic, reputational, legal, regulatory, or technological.
* **How often does this risk occur?** (`frequency`, select_one, required): This field helps determine how often the risk occurs, which can be daily, weekly, monthly, quarterly, or annually.
* **How severe is this risk?** (`severity`, select_one, required): This field determines the severity of the risk, which can be low, medium, high, or critical.
* **What is your email address?** (`risk_manager_email`, email, required): This field is where you enter your email address.
* **What is your phone number?** (`risk_manager_phone`, text, required): This field is where you enter your phone number.
* **What is your status for this risk?** (`status`, select_one, required): This field allows you to choose your status for the risk, which can be open, in progress, or closed.
* **Comments** (`comments`, note, optional): This field is where you can add any additional comments related to the risk.
