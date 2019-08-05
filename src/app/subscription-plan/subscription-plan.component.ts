import { Component, OnInit } from '@angular/core';
import {PlanModel} from './planModel';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.css']
})
export class SubscriptionPlanComponent implements OnInit {

  constructor() { }

  public planList = [];
  public plan: PlanModel;
  public subscriptionPlans = [
    {
      planName: "PLAN 1",
      rentPerPiece: 4,
      swapPiece: 1,
      totalPiece: 5,
      price: 99
    },
    {
      planName: "PLAN 2",
      rentPerPiece: 6,
      swapPiece: "1-6",
      totalPiece: 12,
      price: 199
    }
  ]

  ngOnInit() {
    this.subscriptionPlans.forEach(plan => {
      this.plan = new PlanModel();
      this.plan.setPlan(plan)
      this.planList.push(this.plan.getPlan())
    })
  }
}
