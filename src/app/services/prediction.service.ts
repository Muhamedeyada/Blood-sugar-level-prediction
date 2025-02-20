// src/app/services/prediction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PredictionData {
  Pregnancies: number;
  Glucose: number;
  BloodPressure: number;
  SkinThickness: number;
  Insulin: number;
  BMI: number;
  DiabetesPedigreeFunction: number;
  Age: number;
}

@Injectable({
  providedIn: 'root',
})
export class PredictionService {
  private baseUrl = 'https://llm-model-fine-tuning.vercel.app/api/v1/llm';

  constructor(private http: HttpClient) {}

  getPrediction(data: PredictionData): Observable<any> {
    return this.http.post(`${this.baseUrl}/deepseek-v3`, data);
  }

  getDietPlan(data: {
    age: number;
    weight: number;
    activity: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/gpt-4o`, {
      ...data,
      prompt: 'Generate diet plan for diabetes control',
    });
  }
}
