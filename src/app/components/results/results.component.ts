import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {
  predictionResult: string = '';
  resultDetails: Array<{label: string, value: string}> = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const result = navigation?.extras?.state?.['result'];

    if (result) {
      this.predictionResult = result.prediction;
      this.resultDetails = [
        { label: 'Risk Level', value: result.riskLevel || 'N/A' },
        { label: 'Confidence Score', value: result.confidenceScore || 'N/A' },
        { label: 'Recommendations', value: result.recommendations || 'N/A' }
      ];
    }
  }

  getDietPlan() {
    this.router.navigate(['/diet-form']);
  }

  newPrediction() {
    this.router.navigate(['/prediction']);
  }
}