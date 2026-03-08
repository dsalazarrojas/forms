# promotional_email_consent_form - Help Guide
## Purpose
This form is used to obtain user consent for promotional emails. It allows users to control what type of promotional emails they want to receive, including the frequency and content of those emails.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your Customer Email address.
2.  Select whether or not to send a promotional email to this address.
3.  Choose whether or not to send a newsletter.
4.  If sending a newsletter, select the frequency at which it is sent (Daily, Weekly, Monthly).
5.  Select which newsletters to send from the list (e.g., Monthly, Quarterly).
6.  Fill in the email subject, name, and message content for the newsletter.
7.  Enter the sender's name and email address for the newsletter.
8.  Enter the reply-to email address and any CC or BCC email addresses for the newsletter.
9.  Set a date and time to send the newsletter.
10. If sending a newsletter list, select the frequency and time for sending the list.
11. Enter the CC and BCC lists for the newsletter.

## Field-by-Field Explanation

* **Customer Email** (`customer_email`, `email`, required): Enter your email address to receive promotional emails from us.
* **Send email** (`send_email`, `select_one`, required): Choose whether or not to send a promotional email to your address.
* **Send newsletter** (`send_newsletter`, `select_one`, required): Decide whether or not to send a newsletter.
* **Newsletters frequency** (`send_newsletter_frequency`, `select_one`, required): Select the frequency at which you want to receive the newsletter (Daily, Weekly, Monthly).
* **Newsletters to send** (`send_newsletter_list`, `select_multiple`, required): Choose which newsletters you want to receive from the list (e.g., Monthly, Quarterly).
* **Email subject** (`send_newsletter_subject`, `text`, required): Enter the subject of the newsletter.
* **Name** (`send_newsletter_name`, `text`, required): Enter the name of the newsletter.
* **Message** (`send_newsletter_message`, `text`, required): Enter the content of the newsletter.
* **From Name** (`send_newsletter_from_name`, `text`, required): Enter the name of the sender's name.
* **From email** (`send_newsletter_from_email`, `text`, required): Enter the sender's email address.
* **Reply To** (`send_newsletter_reply_to`, `text`, required): Enter the reply-to email address for the newsletter.
* **CC** (`send_newsletter_cc`, `text`, required): Enter any CC email addresses for the newsletter.
* **BCC** (`send_newsletter_bcc`, `text`, required): Enter any BCC email addresses for the newsletter.
* **Attachments** (`send_newsletter_attachments`, `text`, required): Enter any attachments for the newsletter.
* **Send Date** (`send_newsletter_send_date`, `date`, required): Set a date to send the newsletter.
* **Send Time** (`send_newsletter_send_time`, `time`, required): Set a time to send the newsletter.
* **Frequency Type** (`send_newsletter_frequency_type_list`, `select_multiple`, required): Select the frequency type of the newsletter (Daily, Weekly, Monthly).
* **Frequency Value** (`send_newsletter_frequency_value`, `number`, required): Enter the frequency value of the newsletter (e.g., 1 for Daily).
* **Frequency Unit** (`send_newsletter_frequency_unit`, `text`, required): Enter the unit of the frequency (e.g., days).
* **Frequency Time** (`send_newsletter_frequency_time`, `time`, required): Set the time for the frequency.
* **CC List** (`send_newsletter_cc_list`, `select_multiple`, required): Choose which CC lists to send the newsletter to.
* **BCC List** (`send_newsletter_bcc_list`, `select_multiple`, required): Choose which BCC lists to send the newsletter to.
