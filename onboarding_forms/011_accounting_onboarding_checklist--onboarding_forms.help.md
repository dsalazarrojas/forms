<thinking>
To create a comprehensive help guide for the "Accounting Onboarding Checklist" form, we must first understand the context in which it is used. This form is likely an internal tool used by accounting departments or teams to onboard new clients or employees, ensuring they are properly set up and integrated into the organization's accounting processes. The form's primary purpose is to facilitate a standardized, efficient, and thorough onboarding process, which is crucial for effective financial management and compliance. 

The form's structure, as reflected in its YAML schema, suggests it is designed to collect information and confirm completion of various steps necessary for a new client or employee's account to be fully functional and compliant with organizational policies. It includes fields for selecting the type of onboarding (new client or new employee), details about the onboarding process (name of onboardee, start date, identity verification documents received, financial setup tasks completed, tax documents received, administrative tasks completed, primary account manager assigned, and the completion of the onboarding process), and a field to verify the accuracy of the information collected. This guide is aimed at helping users understand the purpose and the step-by-step process of filling out this form accurately and efficiently.
</thinking>

# Accounting Onboarding Checklist - Help Guide
## Purpose
The Accounting Onboarding Checklist is designed to ensure that all necessary steps for a new client or employee's account are completed during the onboarding process. This process is crucial for effective financial management and compliance. The form guides through key steps to finalize the onboarding process.

## How To Complete This Form
To complete this form, follow these steps:

1. **Select the Onboarding Type**: Choose between "New Client" and "New Employee" to indicate the type of onboarding you are completing.
2. **Enter the Name of Onboardee**: Type in the name of the individual or company undergoing onboarding.
3. **Enter the Start Date**: Input the official commencement date of the onboarding process.
4. **Identity Verification**: Select the identity verification documents received for the onboardee, such as driver’s license, passport, Social Security Card, or EIN Confirmation Letter.
5. **Financial Setup**: Select the completed financial setup tasks, which include linking a bank account and granting software access if applicable.
6. **Tax Documents**: Confirm that the tax documents required by the onboarding process, such as W-9/W-4 Form, Prior Year Tax Returns, or Articles of Incorporation, have been received.
7. **Administrative Tasks**: Select any administrative tasks completed as part of the onboarding process, like signing the NDA, executing a contract, and providing emergency contacts.
8. **Assign Primary Account Manager**: Enter the name of the internal supervisor assigned to the onboardee.
9. **Finalize Onboarding**: Input the completion date of the onboarding process.
10. **Verify Completion**: Confirm that the onboarding process has been completed by providing your name and the date.

## Field-by-Field Explanation

- **Onboarding Type** (`onboarding_type`, `select_one`, required): This field determines the type of onboarding you are initiating, either new client or new employee.
- **Name of Onboardee** (`name_of_onboardee`, `text`, required): Enter the name of the individual or company undergoing the onboarding process.
- **Start Date** (`start_date`, `date`, required): Input the official start date of the onboarding process.
- **Identity Verification** (`identity_verification`, `select_multiple`, required): This field lists the identity verification documents received, which helps in securing the onboardee’s identity and status in the organization.
- **Financial Setup Tasks** (`financial_setup`, `select_multiple`, optional): Confirm the financial setup tasks completed as part of the onboarding process, which includes linking a bank account and granting access to software if necessary.
- **Tax Documents Received** (`tax_documents`, `select_multiple`, required): This field confirms that all tax-related documents required by the onboarding process have been received.
- **Administrative Tasks** (`administrative_tasks`, `select_multiple`, optional): List any administrative tasks completed as part of the onboarding process, including signing the NDA, executing a contract, and providing emergency contacts.
- **Primary Account Manager Assigned** (`primary_account_manager_assigned`, `text`, required): Enter the name of the internal supervisor assigned to the onboardee.
- **Completion Date** (`completion_date`, `date`, required): Input the completion date of the onboarding process.
- **Verified By** (`verified_by_name`, `text`, required): Confirm the name of the person verifying the onboarding process completion.

## Tips
- Make sure to complete each field accurately to ensure the onboarding process is thorough and compliant.
- If a field does not apply, select "None" or mark it accordingly to avoid confusion.
- Double-check the completion date to ensure it reflects the actual completion of the onboarding process.
