# Claiming Coupon Form - Help Guide
## Purpose
This form is designed to help us better understand your preferences and interests so we can provide you with the best coupon offers and services. Your input will help us create a more personalized experience for you.

## How To Complete This Form

To complete this form, simply follow these steps:

1.  Enter your **Full Name**, which is your first and last name.
2.  Provide your **Email Address** where you'd like us to send your coupon code.
3.  Select your preferred **Coupon Type** from the list provided.
4.  Choose how **Interested** you are in our products.
5.  Select when you plan to **Make a Purchase**, such as within a specific time frame.
6.  Choose your **Typical Order Budget**.
7.  Select all the **Products** that interest you.
8.  Choose how you **Found Us**, such as through a search engine or social media.
9.  If someone referred you, please enter their **Name**.
10.  Choose whether you'd like to **Join Our Mailing List**.
11.  Select your preferred **Contact Method**, for follow-up on your purchase.
12.  If there's a **Special Occasion**, please let us know.
13.  If you have any **Additional Comments or Questions**, feel free to share.

## Field-by-Field Explanation

* **Full Name** (`full_name`, text, required): Enter your first and last name.
* **Email Address** (`email_address`, email, required): The email address we'll use to send your coupon code.
* **Phone Number** (`phone_number`, text, optional): For order updates.
* **Company Name** (`company_name`, text, optional): If you're a representative of your company, enter your company name.
* **Job Title** (`job_title`, text, optional): Your position, if applicable.
* **Industry** (`industry`, select_one, optional): Select your industry.
	+ Retail
	+ Technology
	+ Healthcare
	+ Finance
	+ Education
	+ Manufacturing
	+ Hospitality
	+ Professional Services
	+ Other
* **Select Your Coupon** (`coupon_type`, select_one, required): Choose your discount offer.
	+ 10 percent off first order
	+ 25 percent off first order
	+ 15 dollars off 50 dollars or more
	+ Free shipping
	+ Buy 2 get 1 free
	+ Free gift with purchase
* **How Interested Are You in Our Products** (`interest_level`, select_one, required): Select your level of interest.
	+ Very interested
	+ Somewhat interested
	+ Neutral
	+ Just browsing
* **When Do You Plan to Make a Purchase** (`purchase_timeframe`, select_one, required): Select your timeframe.
	+ Within 24 hours
	+ Within a week
	+ Within a month
	+ Just saving for later
	+ Not sure
* **What Is Your Typical Order Budget** (`budget_range`, select_one, optional): Select your budget range.
	+ Under 50 dollars
	+ 50 to 100 dollars
	+ 100 to 250 dollars
	+ 250 to 500 dollars
	+ Over 500 dollars
* **Which Products Interest You** (`product_interest`, select_multiple, optional): Select all that apply.
	+ Product line A
	+ Product line B
	+ Product line C
	+ Services
	+ Bundles
	+ New arrivals
	+ Sale items
* **How Did You Find Us** (`how_heard`, select_multiple, required): Select all that apply.
	+ Google search
	+ Social media
	+ Friend referral
	+ Email campaign
	+ Online ad
	+ Blog or article
	+ In-store visit
	+ Other
* **Who Referred You** (`referral_name`, text, optional): If someone referred you, enter their name.
* **Join Our Mailing List** (`mailing_list`, select_one, required): Choose whether you'd like to join.
* **Preferred Contact Method** (`contact_preference`, select_one, required): Select your preferred contact method.
	+ Email
	+ Phone
	+ Text message
	+ No contact needed
* **Is There a Special Occasion** (`special_occasion`, text, optional): If there's a special occasion, let us know.
* **Additional Comments or Questions** (`additional_comments`, text, optional): If you have any additional comments or questions, feel free to share.
