import { Component, OnInit } from '@angular/core';
import {ExclusiveOfferModel} from './exclusiveOfferModel';

@Component({
  selector: 'app-exclusive-offer',
  templateUrl: './exclusive-offer.component.html',
  styleUrls: ['./exclusive-offer.component.css']
})
export class ExclusiveOfferComponent implements OnInit {

  constructor() { }

  public offerList = [];
  public singleOffer = [];
  public offerModel: ExclusiveOfferModel;
  public exclusiveOffer = [
    {
      planType: "PRE-PAY",
      duration: 1,
      discount: 29.95,
      pricePerMonth: 199,
      totalPiece: "6 - 12",
      regularPrice: 228.95,
      extraFeatureMonths: 0,
      color: "#71775C"
    },
    {
      planType: "PRE-PAY",
      duration: 3,
      discount: 359.40,
      pricePerMonth: 199,
      totalPiece: "18 - 36",
      regularPrice: 956.40,
      extraFeatureMonths: 9,
      color: "#CB5625"
    },
    {
      planType: "PRE-PAY",
      duration: 12,
      discount: 1078.20,
      pricePerMonth: 199,
      totalPiece: "72 - 144",
      regularPrice: 3466.20,
      extraFeatureMonths: 24,
      color: "#EEA12F"
    }
  ];

  public singleCard = [
    {
      planType: "PRE-PAY",
      duration: 1,
      discount: 29.95,
      pricePerMonth: 99,
      totalPiece: "4 - 5",
      regularPrice: 128.94,
      extraFeatureMonths: 0,
      color: "#535989"
    }
  ]

  ngOnInit() {
    this.exclusiveOffer.forEach(offer => {
      this.offerModel = new ExclusiveOfferModel();
      this.offerModel.setOffer(offer)
      this.offerList.push(this.offerModel.getOffer())
    })

    this.singleCard.forEach(offer => {
      this.offerModel = new ExclusiveOfferModel();
      this.offerModel.setOffer(offer)
      this.singleOffer.push(this.offerModel.getOffer())
    })
  }
}
