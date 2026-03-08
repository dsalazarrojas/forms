# Business Membership Application Form - Help Guide
## Purpose

This form is intended for businesses to apply for membership to a professional association or organization. It collects information about the business and helps the association determine the most suitable membership package for it.

## How To Complete This Form

1. Start by filling in your business name and registration number (if applicable).
2. Select your business structure and the date it was established.
3. Enter your primary contact name and title, as well as their email address and phone number.
4. Choose if the mailing address differs from the business address, and if so, provide the mailing address.
5. Select the industry category your business falls under.
6. Enter the number of employees and approximate annual revenue.
7. Choose your desired membership tier and select the benefits you are interested in.
8. Finally, indicate how you found out about us and provide any additional information you think would be helpful.

## Field-by-Field Explanation

* **Business Name** (`business_name`, text, required): Enter the legal name of your business.
* **Business Registration Number** (`business_registration_number`, text, optional): If you have a license or registration number, enter it here.
* **Business Structure** (`business_structure`, select_one, required): Select the type of business entity (Sole Proprietorship, Partnership, LLC, Corporation, S-Corporation, Non-profit, Other).
* **Date Business Established** (`business_established_date`, date, required): Enter the date your business was established.
* **Primary Contact Name** (`primary_contact_name`, text, required): Enter the name of the primary contact person authorized to act on behalf of your business.
* **Contact Title** (`primary_contact_title`, text, optional): Enter the job title or position of the primary contact.
* **Email Address** (`primary_contact_email`, email, required): Enter the email address of the primary contact person.
* **Phone Number** (`primary_contact_phone`, text, required): Enter the main contact phone number.
* **Business Address** (`business_address`, text, required): Enter the physical location of your business operations.
* **Is Mailing Address the Same?** (`mailing_address_same`, select_one, required): Check if the mailing address is the same as the business address (Yes, No, Provide different address).
* **Mailing Address** (`mailing_address`, text, optional): If the mailing address is different, enter it here.
* **Industry Category** (`industry_category`, select_one, required): Select the category of industry your business falls under (Technology, Healthcare, Finance, Retail, Manufacturing, Professional Services, Hospitality, Non-profit, Other).
* **Number of Employees** (`number_of_employees`, number, optional): Enter the current number of employees.
* **Annual Revenue** (`annual_revenue`, select_one, optional): Select the approximate yearly revenue (Under $100,000, $100,000 - $500,000, $500,000 - $1,000,000, $1,000,000 - $5,000,000, Over $5,000,000).
* **Membership Tier** (`membership_tier`, select_one, required): Select the desired membership level (Basic, Standard, Premium, Platinum).
* **Interested Benefits** (`membership_benefits`, select_multiple, optional): Select the member benefits you are interested in (Networking Events, Training and Workshops, Business Directory Listing, Discounted Services, Marketing Support, Legal Resources).
* **How Did You Hear About Us?** (`referral_source`, select_one, optional): Select how you found out about us (Existing Member, Web Search, Social Media, Industry Event, Advertisement, Other).
* **Additional Information** (`additional_notes`, text, optional): Enter any other details you think would be helpful for the association.
