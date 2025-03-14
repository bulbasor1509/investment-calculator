import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {inject} from "@angular/core";
import {InvestmentService} from "../investment.service";

@Component({
    selector: 'app-user-input',
    imports: [
        FormsModule
    ],
    templateUrl: './user-input.component.html',
    styleUrl: './user-input.component.css'
})
export class UserInputComponent {
    initialInvestment = signal<string>("");
    annualInvestment = signal<string>("");
    expectedReturns = signal<string>("");
    duration = signal<string>("");
    investmentService = inject(InvestmentService);

    handleFormSubmit() {
        this.investmentService.investmentCalculator({
            initialInvestment: +this.initialInvestment(),
            annualInvestment: +this.annualInvestment(),
            expectedReturns: +this.expectedReturns(),
            duration: +this.duration()
        })

        console.log(this.investmentService.investmentResults())
    }

}
