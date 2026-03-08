# NFT Marketplace Inquiry Form - Help Guide
## Purpose
The NFT Marketplace Inquiry Form is used to gather information from users about their non-fungible token (NFT) inquiries.

## How To Complete This Form
To fill out this form, follow these steps:

1. Select the type of NFT you are inquiring about from the list of options.
2. Choose how you would like to be contacted (Email or Phone).
3. Select the date and time you inquired about the NFT.
4. If you have any notes or messages related to your inquiry, type them in the "Notes" field.
5. Finally, submit the form.

## Field-by-Field Explanation
### NFT Inquiries
* NFT Inquiries (`nft_inquiry`, text, optional): This is the main field where you can type in your NFT inquiry.

### Name
* Name (`name`, text, optional): This field is used to capture your name. You can type in your full name or a nickname.

### Contact
* Contact (`contact`, select_one, required): This field is used to choose how you would like to be contacted (Email or Phone).

### NFTs Inquired
* NFTs Inquired (`nfts_inquired`, select_multiple, required): Select all the NFTs you are inquiring about from the list of options.

### Preferred Contact
* Preferred Contact (`preferred_contact`, select_one, required): Choose how you would like to be contacted (Email or Phone).

### NFT Type
* NFT Type (`nft_type`, select_one, required): Select the type of NFT you are inquiring about (Physical or Digital).

### Date Inquired
* Date Inquired (`date_inquired`, date, optional): Type in the date you inquired about the NFT. If not provided, the current date will be used.

### Time Inquired
* Time Inquired (`time_inquired`, time, optional): Type in the time you inquired about the NFT. If not provided, the current time will be used.

### Notes
* Notes (`notes`, text, optional): This field is used for any additional notes or messages related to your inquiry.

### NFT Price
* NFT Price (`nft_price`, number, optional): Type in the price of the NFT you are inquiring about. This is not required.

## Tips
* Please make sure to fill out all the required fields (NFTs Inquired, Preferred Contact, NFT Type, and Contact).
* If you have any issues or concerns, please contact us at your preferred contact method.
* If you have any further questions or clarifications, please add them in the Notes field.
