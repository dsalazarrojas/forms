<thinking>

This form is used for obtaining the consent of users to share their contact information with partner agents. 
The form allows users to select the partner agent and the contact information they wish to share, as well as the purpose of sharing. 
The form should only be used when necessary and for legitimate purposes. 
The user should be aware that sharing contact information may result in increased spam or unwanted solicitations.
</thinking>

# Partner Agent Contact Sharing Consent Form - Help Guide
## Purpose
This form is used to obtain the consent of users to share their contact information with partner agents. It is essential to understand that sharing contact information may result in increased spam or unwanted solicitations.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form purpose and the potential consequences of sharing your contact information.
2. Select whether you wish to share your contact information with partner agents by choosing one of the options in the "Do you wish to share your contact information with partner agents?" field.
3. If you choose to share, select the partner agent you wish to share with from the provided list.
4. Choose the contact information you wish to share, such as phone number, email, or address.
5. Select the purpose of sharing, such as for marketing, support, or other.
6. Finally, confirm your consent by selecting "Yes" or "No" in the "I hereby grant my consent" field.

## Field-by-Field Explanation
### Do you wish to share your contact information with partner agents?
* **Do you wish to share your contact information with partner agents?** (`partner_agent_sharing_consent`, `select_multiple`, optional): This field allows you to decide whether you want to share your contact information with partner agents. You can select "Yes" or "No" to indicate your preference.

### Which partner agent do you wish to share with?
* **Which partner agent do you wish to share with?** (`partner_agent`, `select_one`, optional): If you selected "Yes" in the previous field, you will be presented with a list of partner agents to choose from. Select the agent you wish to share with.

### What contact information do you wish to share?
* **What contact information do you wish to share?** (`contact_information`, `select_multiple`, optional): In this field, you can choose the type of contact information you wish to share, such as phone number, email, or address. You can select "Yes" or "No" to indicate what you want to share.

### What is the sharing purpose?
* **What is the sharing purpose?** (`sharing_purpose`, `select_multiple`, optional): This field allows you to select the reason for sharing your contact information, such as for marketing, support, or other purposes.

### I hereby grant my consent
* **I hereby grant my consent** (`consent`, `select_one`, optional): Finally, you will be asked to confirm your consent by selecting "Yes" or "No". Selecting "Yes" indicates that you grant your consent to share your contact information with the partner agent.

### Shared Partners
* **Shared Partners** (`shared_partners`, `time`, optional): This field is currently empty and not visible in the form. However, it might be used internally to store the partner agents you shared with in the past.
