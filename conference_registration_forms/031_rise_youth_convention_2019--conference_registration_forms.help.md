<thinking>
To create an effective help guide for the Rise Youth Convention 2019 registration form, we need to understand the purpose of the form and ensure that we're not duplicating any existing help resources. The form is designed to gather information from attendees who are registering for the conference. It asks for personal details, T-shirt preferences, and permission from parents or guardians for minors. This form is likely intended for parents or guardians to register their youth for the convention, ensuring they provide necessary information such as name, contact emails, and preferences.
To avoid duplication, let's assume that we're not referencing any other help guides that cover similar registration processes for this specific convention.
</thinking>

# Rise Youth Convention 2019 - Help Guide

## Purpose
This help guide is designed to assist attendees, particularly parents or guardians, in completing the registration form for the Rise Youth Convention 2019. The form collects essential information for the convention and helps ensure that all necessary permissions and preferences are provided.

## How To Complete This Form
To complete the form, follow these steps:

1.  Select the type of registration (Full Conference or Saturday only).
2.  Choose your registration price (30 or 60).
3.  Enter your name.
4.  Select your T-shirt size (Small, Medium, or Large).
5.  If registering a minor, provide a parent or church leader's email address.
6.  Indicate whether or not you'd like to order a T-shirt.
7.  Grant or decline parental consent for your child's participation.

## Field-by-Field Explanation

*   **Registration Type** (`registration_type`, select_one, required): Select "Full Conference" if you plan to attend the entire event, or "Saturday only" if you can only attend on Saturday.
*   **Registration Price** (`registration_price_id`, select_multiple, required): Choose between "30" or "60", which likely refer to prices for registration in dollars or some other currency.
*   **Name** (`name`, text, required): Enter your name as it should appear on official documents or in convention materials.
*   **T-Shirt Size** (`tshirt_size`, select_one, required): Choose your preferred T-shirt size from "Small", "Medium", or "Large".
*   **Parent Email** (`parent_email`, email, optional): If registering a minor, enter the email address of their parent or guardian so we can contact them about their child's participation in the convention.
*   **Church Leader Email** (`church_leader_email`, email, optional): If registering a minor, enter the email address of their church leader so we can contact them about their child's participation.
*   **T-Shirt Order** (`tshirt_order`, select_multiple, optional): Indicate if you'd like to order a T-shirt for yourself or not.
*   **Parental Consent** (`parental_consent`, select_one, required): Grant "Yes, I grant permission" if you consent to your child's participation in the convention. Choose "No, I do not grant permission" if you do not wish to register your child or grant permission for their participation.
