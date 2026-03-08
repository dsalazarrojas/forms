**Provider Approval Form - Help Guide**

## Purpose
The Provider Approval Form is used to collect and manage information about healthcare providers. It allows administrators to verify and update provider details, practices, and onboarded statuses.

## How To Complete This Form
To complete the Provider Approval Form, follow these steps:

1. Fill in the **Provider Details** section with the provider's name, address, and contact information.
2. Select the **Practice License** status as applicable.
3. Enter the **Address**, **Contact Number**, and **Email** details of the provider.
4. Choose the **Provider Status** from the drop-down menu.
5. Select the **Practice Type** from the available options.
6. Select the **Assigned Provider** responsible for the onboard process.
7. Set the **Onboarding Status** by selecting the completed, pending, or in-progress statuses.
8. Enter the **Onboard Date** and **Onboard Time** of the provider.
9. Add any additional **Onboard Comment** or **Provider Notes** as necessary.
10. Choose the **Onboarded** status to indicate whether the provider has been onboarded or not.
11. Select the **Onboarded By** person responsible for the onboard process.
12. Enter the **Onboarded Date** and **Onboarded Time** of the provider.
13. Add any additional **Onboarded Comment**.
14. Enter the **Onboarded Date Time** of the provider.

## Field-by-Field Explanation

- **Provider Details** (`provider_details`, text, required: false): Enter the name, address, and contact information of the healthcare provider.
- **Practice License** (`practice_license`, select_one, required: false): Select whether the provider has an active or inactive practice license.
- **Address** (`address`, text, required: false): Enter the provider's address.
- **Contact Number** (`contact_number`, text, required: false): Enter the provider's contact number.
- **Email** (`email`, email, required: false): Enter the provider's email address.
- **Date** (`date`, date, required: false): Enter the date of the onboard process.
- **Time** (`time`, time, required: false): Enter the time of the onboard process.
- **Provider Status** (`provider_status`, select_multiple, required: false): Select the status of the provider, which can be Active, Inactive, or Pending.
- **Practice Type** (`practice_type`, select_one, required: false): Select the type of practice the provider is associated with.
- **Assigned Provider** (`assigned_provider`, select_one, required: false): Select the person responsible for the onboard process.
- **Onboarding Status** (`onboarding_status`, select_multiple, required: false): Select the onboarding status of the provider, which can be Completed, Pending, or In progress.
- **Onboard Date** (`onboard_date`, date, required: false): Enter the date of the onboard process.
- **Onboard Time** (`onboard_time`, time, required: false): Enter the time of the onboard process.
- **Onboard Comment** (`onboard_comment`, note, required: false): Add any additional comments about the onboard process.
- **Provider Notes** (`provider_notes`, note, required: false): Add any additional notes about the provider.
- **Onboarded** (`onboarded`, select_one, required: false): Indicate whether the provider has been onboarded or not.
- **Onboarded By** (`onboarded_by`, select_one, required: false): Select the person responsible for the onboard process.
- **Onboarded Date** (`onboarded_date`, date, required: false): Enter the date of the onboard process.
- **Onboarded Time** (`onboarded_time`, time, required: false): Enter the time of the onboard process.
- **Onboarded Comment** (`onboarded_comment`, note, required: false): Add any additional comments about the onboard process.
- **Onboarded Date Time** (`onboarded_date_time`, date, required: false): Enter the date and time of the onboard process.

Note: Some fields are optional, and you should only fill them in if necessary.
