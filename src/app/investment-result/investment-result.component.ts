import {Component, inject} from '@angular/core';
import {InvestmentService} from "../investment.service";
import {CurrencyPipe} from "@angular/common";

@Component({
    selector: 'app-investment-result',
    imports: [
        CurrencyPipe
    ],
    templateUrl: './investment-result.component.html',
    styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
    investmentService = inject(InvestmentService);
}
