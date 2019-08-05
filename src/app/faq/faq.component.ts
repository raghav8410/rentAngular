import { Component, OnInit } from '@angular/core';
import {faqModel} from './faqModel';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  public questionList = [];
  public faq : faqModel;
  public questions=[
    {
      question: "How does the subscription service work",
      answer : "Rent frock Repeat is a clothing rental subscription service that allows you to receive a box of curated clothing delivered to your door every month. Wear, return, and repeat the next month with a fresh rotation of pieces.",
      features:[
          "Select your rental pieces or let a stylist pick for you.",
          "Wear, swap out, return, and repeat each month (or just the months you want)",
          "Love something you borrowed? Buy it at special member rates.",
          "Pause or cancel your subscription at any time."
      ]
    },
    {
      question: "How does swapping out work",
      answer : "",
      features:[
         "Depending on the subscription plan you choose, you’ll be able to swap out one or more items during the month, whether it doesn’t fit, you didn’t love it, or you wore it and want something new."
      ]
    },
    {
      question: "Can I buy the items",
      answer : "",
      features:[
         "Yes! If you fall in love with any of your items you can buy your favourites at special member rates. The great thing about the subscription service is that you’ll have the month to really get a sense of what items you'd like to keep in your closet or send back. No more buyer’s remorse from impulse purchases. All purchases made with your member's only discount are final sale."
      ]
    },
    {
      question: "Can I pause or cancel my subscription",
      answer : "",
      features:[
         "Yes! You have the flexibility to pause or cancel your subscription at any time. Whether you are going on vacation or just don’t need the service that month, you have control over your subscription."
      ]
    },
    {
      question: "How are the clothes cleaned",
      answer : "",
      features:[
         "We are working with our dry-cleaning partners to help us achieve two goals. To ensure that each item is cleaned thoroughly (arrives fresh and clean each time) and to ensure that our process is environmentally friendly.",
         "Through a variety of techniques, we ensure that each item is steamed and pressed, inspected for quality, and packaged with care so that it’s ready for you to wear. We will never dry clean with toxic Perchloroethylene. Our solvents are non-hazardous, non-phosphate oil-based chemicals."
      ]
    },
    {
      question: "How do I know the items will fit",
      answer : "",
      features:[
         "New members complete a detailed questionnaire that not only asks for your measurements and size, but how you like things to fit. We ensure that our stylists and technology select the pieces that match your preference. Additionally, each time you send your box back, you’ll be able to give us feedback on each item. We will keep learning about your preferences and our stylists will see the feedback on your profile (and sometimes gently encourage you to step outside of your comfort zone). We’ll just keep getting it better and better for you with each delivery!"
      ]
    },
    {
      question: "How do the stylists help",
      answer : "",
      features:[
         "Members fill out a detailed profile, which you can update at any time. This information will help your stylist understand the sizes, fit, colours, styles and occasions you are looking for. Stylists are on-hand not only to review what’s going in your box every month but also there to answer any questions you might have."
      ]
    },
    {
      question: "Can I alter the items",
      answer : "",
      features:[
         "We do not allow alterations on any of our items. Of course, if it is an item you fall in love with, you have the option to purchase and alter it once it is yours."
      ]
    },
    {
      question: "How do I give you feedback about what I received",
      answer : "",
      features:[
         "After you’ve received your pieces, you will receive a notification asking you to go online and give detailed feedback about the fit of each piece; letting us know precisely where something was too tight, too loose, too short, too long, or if it fit perfectly. This process will be quick and easy."
      ]
    },
    {
      question: "Am I able to change my style profile",
      answer : "",
      features:[
         "If you fall in love with an item and want to keep it, you can either purchase it at our members-only discount or hold on to it for another month, it's up to you. If you keep the pieces for another month, your credit card will be automatically billed for another month."
      ]
    },
    {
      question: "What if I want to keep some or all of the items for another month",
      answer : "",
      features:[
         "We know that things change, so we made sure you are able to update your style profile at any time and even leave notes for the stylists. During our launch phase, your style profile will be locked until September 2019, allowing us to purchase inventory based on your initial profile. Once the launch phase is over, you will be able to update your profile at any time."
      ]
    },
    {
      question: "What sizes do you carry",
      answer : "",
      features:[
         "Our goal is to carry sizes 0-24 as we always have. Because our inventory purchases are based on member style profiles, these profiles will dictate the number of styles we carry in each size. We will continue to work towards carrying a great selection of styles for all our members as we grow."
      ]
    },
    {
      question: "Can I switch plans",
      answer : "",
      features:[
         "Yes! Our service is designed to change based on your needs. If you'd like to switch your membership, simply email info@rentfrockrepeat.com 1 week prior to your next billing cycle, and we will take care of the rest."
      ]
    },
    {
      question: "What if I’m not home",
      answer : "",
      features:[
         "If you are not home, Canada Post will leave you a card letting you know the closest Canada Post outlet they will deliver it to."
      ]
    },
    {
      question: "What if I receive something damaged",
      answer : "",
      features:[
         "We have a rigorous inspection process, but on the rare occasion that an item arrives damaged, please email info@rentfrockrepeat.com as soon as you have received your package. We’ll send you a new piece immediately. After you contact us, return the damaged item in the pre-paid return package provided within 24 hours so we can have the item repaired for the next customer."
      ]
    },
    {
      question: "What if something doesn’t fit",
      answer : "",
      features:[
         "We understand that sometimes pieces don’t fit (or just aren’t flattering). To ensure that you get the most use out of your membership, we give you 48 hours from when your order is delivered to swap out any of your pieces for something different.To complete a fit replacement, contact us at info@rentfrockrepeat.com."
      ]
    },
    {
      question: "Am I able to wash items",
      answer : "",
      features:[
         "No need to clean your pieces on your own! We take care of that for you. We've become dry cleaning experts and always make sure pieces stay in mint condition.",
         "If you absolutely must have a garment cleaned during the month that you have it at home, please follow the care instructions on the tag."
      ]
    },
    {
      question: "When will my credit card be charged",
      answer : "",
      features:[
         "Members are charged a subscription price on a monthly basis. Subscriptions are automatically renewed, and you will be billed on the same day every month at the rate then in effect to your payment method on file. Your membership will not expire unless you sign-in to your account and pause or cancel your subscription."
      ]
    },
    {
      question: "What if I have a previous RfR credit or gift certificate",
      answer : "",
      features:[
         "Please contact us at info@rentfrockrepeat.com"
      ]
    },
    {
      question: "Are there late fees if I don’t return my items on time",
      answer : "",
      features:[
         "There are no late fees for the pieces that are part of your monthly subscription. If you keep those items, you will simply be charged your monthly subscription fee for the following month. If you opted to swap out a piece or asked for a replacement piece due to fit, those items must be returned within 24 hours of contacting \ninfo@rentfrockrepeat.com. If the items you are returning do not arrive within 5 business days to our warehouse, late fees may apply."
      ]
    },
    {
      question: "How do I purchase an item",
      answer : "",
      features:[
         "If you fall in love with an item and want to keep it in your closet, simply sign-in to your account and purchase the items directly online at special member rates."
      ]
    },
    {
      question: "Do you ship outside of Canada",
      answer : "",
      features:[
         "At this time, we ship only within Canada. We encourage you to take RfR with you on your travels, but please be advised that returns must be shipped within Canada."
      ]
    },
    {
      question: "Do you ship to PO boxes",
      answer : "",
      features:[
         "Yes, we do!"
      ]
    },
    {
      question: "How do I return my items",
      answer : "",
      features:[
         "Simply use the pre-paid return envelope provided and drop it off at any Canada Post office or mailbox."
      ]
    },
    {
      question: "Can you deliver to somewhere besides my home",
      answer : "",
      features:[
         "Yes! We are happy to deliver anywhere in Canada, so if you want your box to arrive at your office, a hotel, or somewhere else, we can do that. Simply ensure your shipping address is updated prior to your next shipment. If we are unable to make the change, that is because your item is already on its way and we cannot make the change post shipment."
      ]
    },
    {
      question: "What if my address changes before my first delivery this fall",
      answer : "",
      features:[
         "Yes! We are happy to deliver anywhere in Canada, so if you want your box to arrive at your office, a hotel, or somewhere else, we can do that. Simply ensure your shipping address is updated prior to your next shipment. If we are unable to make the change, that is because your item is already on its way and we cannot make the change post shipment."
      ]
    }
  ]

  ngOnInit() {
    this.questions.forEach(question => {
      this.faq = new faqModel();
      this.faq.setQuestion(question);
      this.questionList.push(this.faq.getQuestion())
    })
    console.log(this.questionList);

  }

  
}
