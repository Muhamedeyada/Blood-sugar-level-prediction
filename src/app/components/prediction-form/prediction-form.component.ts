import { Component } from '@angular/core';
import { PredictionService, PredictionData } from '../../services/prediction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediction-form',
  standalone: true,
  imports: [],
  templateUrl: './prediction-form.component.html',
  styleUrl: './prediction-form.component.css'
})
export class PredictionFormComponent {
  formData: PredictionData = {
    Pregnancies: 0,
    Glucose: 0,
    BloodPressure: 0,
    SkinThickness: 0,
    Insulin: 0,
    BMI: 0,
    DiabetesPedigreeFunction: 0,
    Age: 0
  };

  formFields = [
    { name: 'Pregnancies', label: 'Number of Pregnancies', type: 'number' },
    { name: 'Glucose', label: 'Glucose Level', type: 'number' },
    { name: 'BloodPressure', label: 'Blood Pressure', type: 'number' },
    { name: 'SkinThickness', label: 'Skin Thickness', type: 'number' },
    { name: 'Insulin', label: 'Insulin Level', type: 'number' },
    { name: 'BMI', label: 'BMI', type: 'number' },
    { name: 'DiabetesPedigreeFunction', label: 'Diabetes Pedigree Function', type: 'number' },
    { name: 'Age', label: 'Age', type: 'number' }
  ];

  constructor(
    private predictionService: PredictionService,
    private router: Router
  ) {}

  onSubmit() {
    this.predictionService.getPrediction(this.formData)
      .subscribe({
        next: (result) => {
          // Store result in a service or state management
          this.router.navigate(['/results'], { state: { result } });
        },
        error: (error) => console.error('Prediction error:', error)
      });
  }
}