import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DietService, DietFormData } from '../../services/diet.service';
@Component({
  selector: 'app-diet-form',
  standalone: true,
  imports: [],
  templateUrl: './diet-form.component.html',
  styleUrl: './diet-form.component.css'
})
export class DietFormComponent {
  formData: DietFormData = {
    age: 0,
    weight: 0,
    activityLevel: 'moderate',
    dietaryRestrictions: []
  };

  dietaryRestrictions = {
    vegetarian: false,
    lactose: false,
    gluten: false
  };

  constructor(
    private dietService: DietService,
    private router: Router
  ) {}

  onSubmit() {
    // Convert dietary restrictions to array
    this.formData.dietaryRestrictions = Object.entries(this.dietaryRestrictions)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    this.dietService.getDietPlanRecommendation(this.formData)
      .subscribe({
        next: (result) => {
          this.router.navigate(['/diet-plan'], { state: { plan: result } });
        },
        error: (error) => console.error('Diet plan generation error:', error)
      });
  }
}
