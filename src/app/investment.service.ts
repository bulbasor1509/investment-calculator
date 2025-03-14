import {Injectable} from "@angular/core";

interface InvestmentType {
    initialInvestment: number
    annualInvestment: number
    expectedReturns: number
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
        let investmentValue = investment.initialInvestment;
        for (let i = 0; i < investment.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (investment.expectedReturns / 100);
            investmentValue += interestEarnedInYear + investment.annualInvestment;
            const totalInterest = investmentValue * year - investment.initialInvestment;

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
