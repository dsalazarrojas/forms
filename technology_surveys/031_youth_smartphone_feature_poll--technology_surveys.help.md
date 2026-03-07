<thinking>...</thinking>

# Youth Smartphone Feature Poll - Help Guide

## Purpose
This form is designed to gather information from youth participants to understand their preferences and opinions on various features when choosing a smartphone. The goal is to collect data on the most important features for this demographic.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the top 3 features you think are most important when choosing a smartphone.
2. Choose your age group.
3. If you currently use a smartphone, select the model and operating system you use.
4. Choose how you normally purchase your smartphone.
5. Select if you use social media on your smartphone.
6. Indicate if you purchase phone warranties.
7. If you purchase phone warranties, select the type of warranty you buy.
8. Choose where you heard about this survey.
9. If you heard about this survey through social media or word of mouth, provide more details about where you heard about it.

## Field-by-Field Explanation

* **What features do you think are most important for you when choosing a smartphone?** (`feature_list`, `select_multiple`, required: false)
	+ This question allows you to select the top 3 features that you think are most important when choosing a smartphone. Choose from the list of available features, such as Battery Life, Camera Quality, Price, Processor Speed, Storage Capacity, Screen Size, Customization, and Operating System.
* **How old are you?** (`age_range`, `number`, required: false)
	+ Please enter your age.
* **What model of smartphone do you currently use?** (`phone_model`, `text`, required: false)
	+ If you currently use a smartphone, enter the model of your phone.
* **What operating system does your current smartphone use?** (`phone_os`, `select_one`, required: true)
	+ Select the operating system of your current smartphone. Options are Apple, Huawei, Samsung, and Google.
* **How do you normally purchase your smartphone?** (`phone_purchase`, `select_multiple`, required: false)
	+ Select how you normally purchase your smartphone, such as through a carrier, manufacturer, or authorized dealer.
* **Do you use social media on your smartphone?** (`social_media`, `select_one`, required: false)
	+ Select if you use social media on your smartphone. Options are Facebook, Instagram, Twitter, TikTok, Snapchat, YouTube, and Reddit.
* **Do you purchase phone warranties?** (`phone_warranty`, `select_one`, required: false)
	+ Select if you purchase phone warranties. Options are True and False.
* **If yes, which type of warranty do you purchase?** (`phone_warranty_type`, `select_multiple`, required: false)
	+ If you purchase phone warranties, select the type of warranty you buy. Options are Standard and Extended.
* **Where did you hear about this survey?** (`survey_source`, `select_multiple`, required: false)
	+ Select where you heard about this survey. Options are Friend, Social Media, Online search, Print/TV/Radio, Word of mouth, and Other.
* **Can you provide more details about where you heard about this survey?** (`survey_source_detail`, `text`, required: false)
	+ If you selected a specific source in the previous question, provide more details about where you heard about this survey.
