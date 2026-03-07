<thinking>
This form is for configuring browsing restrictions on a network or device. Browsing restrictions are a way to control what websites or content users can access within a network or device. This form is used by requesters to specify the restrictions they want to apply to a specific user, group, or device. The form ensures that the restrictions are properly configured and documented for the requester and the administrator.

This form will only be used for configuring restrictions that are not already in place. If a restriction already exists, please do not fill out this form.

Please note that this form is for configuring restrictions, not for requesting access to restricted resources. To request access to restricted resources, please use the Access Request Form.</thinking>

# Browsing Restrictions Configuration Form - Help Guide
## Purpose
This form allows you to configure browsing restrictions on a network or device. You can specify the user, group, or device to apply the restrictions to, as well as the websites or content to block or allow.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name and email address to identify yourself as the requester.
2. Select the type of restriction you want to apply (Individual User, Group or Team, Device, or Network Level).
3. Specify the target user or group name to apply the restrictions to.
4. List the websites or domains to block.
5. Select which website categories to restrict (e.g., Social Media, Streaming, Gaming, etc.).
6. List any websites that should be allowed or whitelisted.
7. Choose the scope of the restrictions (Office Hours Only, Specific Times, or Always Enforced).
8. If applicable, select the start and end times for the restrictions.
9. Decide how users can request exceptions or bypass the restrictions (Yes, with approval, No, no bypass allowed, or Special cases only).
10. Choose how users will be notified of restriction policies (Email, System Message, In-Person, or All Methods).
11. Specify the date when the restrictions should go live.
12. Optionally, select the date when the restrictions should end.
13. Provide a brief explanation for the business justification for the restrictions.

## Field-by-Field Explanation

* **Requester Name** (`requester_name`, text, required): Enter your full name to identify yourself as the requester.
* **Email Address** (`requester_email`, email, required): Enter your email address to contact you for any further questions or concerns.
* **Department** (`requester_department`, text, required): Enter the department that you belong to, if applicable.
* **Type of Restriction Request** (`request_type`, select_one, required): Select the type of restriction you want to apply (Individual User, Group or Team, Device, or Network Level).
* **Target User or Group Name** (`target_user`, text, required): Enter the name of the user or group to apply the restrictions to.
* **Websites to Block** (`websites_to_block`, text, required): List the URLs or domains to block.
* **Website Categories to Restrict** (`website_categories`, select_multiple, optional): Select all website categories that apply (e.g., Social Media, Streaming, Gaming, etc.).
* **Websites to Allow - Whitelist** (`whitelist_websites`, text, optional): List any websites that should be allowed or whitelisted.
* **Scope of Restrictions** (`restriction_scope`, select_one, required): Choose the scope of the restrictions (Office Hours Only, Specific Times, or Always Enforced).
* **Restriction Start Time** (`restriction_start_time`, time, optional): If applicable, select the start time for the restrictions.
* **Restriction End Time** (`restriction_end_time`, time, optional): If applicable, select the end time for the restrictions.
* **Allow Override or Bypass Authorization** (`bypass_authorization`, select_one, required): Decide how users can request exceptions or bypass the restrictions (Yes, with approval, No, no bypass allowed, or Special cases only).
* **Enable Logging and Monitoring** (`logging_monitoring`, select_one, required): Choose whether to track browsing attempts (Yes, log all, Yes, log violations only, or No logging).
* **How Should User Be Notified** (`notification_method`, select_one, required): Choose how users will be notified of restriction policies (Email, System Message, In-Person, or All Methods).
* **Restriction Start Date** (`start_date`, date, required): Enter the date when the restrictions should go live.
* **Restriction End Date** (`end_date`, date, optional): If the restrictions are not indefinite, enter the date when the restrictions should end.
* **Business Justification for Restrictions** (`business_justification`, text, required): Provide a brief explanation for the business justification for the restrictions.
