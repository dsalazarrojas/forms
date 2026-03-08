# Baby Registry Checklist - Help Guide
## Purpose
The Baby Registry Checklist form is designed to help guests RSVP to a baby shower and select a gift for the parents-to-be. It consists of several fields that allow guests to provide their attendance status, select a gift category, and specify the gift they have chosen or want to purchase.

## How To Complete This Form
To complete this form, follow these steps:

1. Read the form carefully and understand what each field is asking for.
2. Fill in your response to each field according to your intentions and plans.
3. Make sure to select "Yes, I'll be there!" if you are attending the baby shower.
4. If you are not attending, select "Sorry, I can't make it" and add an optional message for the parents-to-be.
5. Choose a gift category from the available options.
6. If you have already purchased or selected a specific gift, type it in the "Which item have you purchased or selected?" field.
7. Decide how you will be sending the gift (e.g., bringing it to the shower, sending it directly to the parents' home, or just a gift card).
8. If you have any dietary requirements, type them in the "Any dietary requirements for the shower?" field.
9. Finally, type any message you would like to leave for the parents-to-be in the "Leave a message for the parents-to-be" field.

## Field-by-Field Explanation
### **-- RSVP and Gift Selection --**
* **RSVP and Gift Selection** (`rsvp_section`, `note`, required: false): This is the first section of the form, which serves as an introduction to the rest of the form.
### **Guest Name**
* **Guest Name** (`guest_full_name`, `text`, required: true): Please type your name as you would like it to appear on the gift.
### **Will you be attending the baby shower?**
* **Will you be attending the baby shower?** (`rsvp_status`, `select_one`, required: true): Select "Yes, I'll be there!" if you are attending, or "Sorry, I can't make it" if you are not.
### **Gift Category Selected**
* **Gift Category Selected** (`gift_category`, `select_one`, required: false): Choose a category for your gift from the available options:
	+ Clothing and Textiles
	+ Feeding and Nursing
	+ Diapering and Bath
	+ Nursery and Decor
	+ Toys and Books
	+ Travel and Gear
### **Which item have you purchased or selected?**
* **Which item have you purchased or selected?** (`specific_gift_item`, `text`, required: false): If you have already bought or selected a gift, type it in this field.
### **How will you be sending the gift?**
* **How will you be sending the gift?** (`gift_delivery_method`, `select_one`, required: false): Choose how you will be sending the gift:
	+ Bringing to the shower
	+ Sending directly to parents' home
	+ Gift card only
### **Leave a message for the parents-to-be**
* **Leave a message for the parents-to-be** (`message_for_parents`, `text`, required: false): Type a message for the parents-to-be.
### **Any dietary requirements for the shower?**
* **Any dietary requirements for the shower?** (`dietary_requirements`, `text`, required: false): If you have any dietary requirements, type them in this field.

## Tips
* Make sure to fill in all required fields (Guest Name, Will you be attending the baby shower?, and How will you be sending the gift?).
* If you have any questions or need clarification on any field, feel free to ask the form creator.
* The form is designed to be completed in a few minutes, so take your time and fill it out carefully.
