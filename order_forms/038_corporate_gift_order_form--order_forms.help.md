<thinking>
The purpose of this form is to allow users to place corporate gifts orders, which may include selecting gifts, specifying recipient details, choosing delivery preferences, and entering gift card details or specifying a delivery method and a gift message. To ensure the form is filled out correctly, we should check that the delivery method field is always filled out and that the form does not contain duplicate options for "Corporate" and "Individual" (in delivery_preferences), and that all other fields should be optional and not duplicated. If there are multiple gift selections, they should all be selected. If there is no selection of delivery method, we should display an error. If a gift card is selected, the gift card details field should be filled out. The form is likely used by employees to order gifts for corporate events or celebrations.
</thinking>

# Corporate Gift Order Form - Help Guide

## Purpose
This form is designed to guide users through the process of placing corporate gift orders, including selecting gifts, specifying recipient details, choosing delivery preferences, and providing gift card details or specifying a delivery method and a gift message.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the gift you would like to purchase by clicking on the "Gift Selections" page.
2. On the "Recipient Details" page, select the options for "Yes" or "No" for whether the gift is for a corporate or individual recipient.
3. On the "Delivery Preferences" page, select the delivery method for your gift (Corporate, Individual, or other options).
4. On the "Gift Card Details" page, enter details for the gift card, if selected.
5. On the "Delivery Method" page, select the method of delivery for your gift (Ground, Air, or Express).
6. On the "Gift Message" page, enter any additional message for the gift, if desired.

## Field-by-Field Explanation

### Gift Selections (Gift Selections) 
- **Gift Selections** (`gift_selections`, note, false): Select up to 2 gifts you would like to purchase from the options provided.

### Recipient Details (Recipient Details) 
- **Recipient Details** (`recipient_details`, select multiple, false): Select "Yes" to confirm the gift recipient is corporate or individual.

### Delivery Preferences (Delivery Preferences) 
- **Delivery Preferences** (`delivery_preferences`, select one, false): Select how you prefer to deliver the gift, either to the office or to the recipient's home.

### Gift Card Details (Gift Card Details) 
- **Gift Card Details** (`gift_card_details`, number, false): Enter details for the gift card if you have selected a gift card as your gift.

### Delivery Method (Delivery Method) 
- **Delivery Method** (`delivery_method`, select one, true): Select the delivery method for your gift, either Ground, Air, or Express. This field is required.

### Gift Message (Gift Message) 
- **Gift Message** (`gift_message`, text, false): Enter any additional message for the gift, if desired.

## Tips
- Make sure to select the delivery method for your gift, as this is a required field.
- If you select a gift card, please enter details for the gift card.
- If you have any questions or concerns, contact the relevant personnel for assistance.
