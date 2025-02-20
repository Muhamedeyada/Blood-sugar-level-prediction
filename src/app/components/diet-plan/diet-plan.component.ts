import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-diet-plan',
  standalone: true,
  imports: [],
  templateUrl: './diet-plan.component.html',
  styleUrl: './diet-plan.component.css'
})
export class DietPlanComponent implements OnInit {
  dietPlan: any = {
    guidelines: [],
    meals: [],
    recommendations: []
  };

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const plan = navigation?.extras?.state?.['plan'];

    if (plan) {
      this.dietPlan = this.formatDietPlan(plan);
    }
  }

  formatDietPlan