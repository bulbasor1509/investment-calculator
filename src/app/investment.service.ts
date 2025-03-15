import {Injectable} from "@angular/core";

interface InvestmentType {
    initialInvestment: number
    annualInvestment: number
    expectedReturn: number
    duration: number
}

interface AnnualDataType {
    year: number
    interest: number
    valueEndOfYear: number
    annualInvestment: number
    totalInterest: number
    totalAmountInvested: number
}

@Injectable({providedIn: "root"})
export class InvestmentService {
    private annualData: AnnualDataType[] = []

    investmentCalculator(investment: InvestmentType) {
        this.annualData = []
        let investmentValue = investment.initialInvestment;
        for (let i = 0; i < investment.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (investment.expectedReturn / 100);
            investmentValue += interestEarnedInYear + investment.annualInvestment;
            const totalInterest = investmentValue - investment.annualInvestment * year - investment.initialInvestment;

            this.annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: investment.annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: investment.initialInvestment + investment.annualInvestment * year
            })
        }
    }

    investmentResults(){
        return this.annualData;
    }
}
