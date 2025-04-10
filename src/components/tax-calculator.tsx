"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { calculateTax, type FinancialYear } from "@/lib/calculate-tax"
import { TaxCalculatorForm } from "./tax-calculator-form"
import { TaxResultsTable } from "./tax-results-table"

export function TaxCalculator() {
  const [income, setIncome] = useState<string>("")
  const [financialYear, setFinancialYear] = useState<FinancialYear>("2023-2024")
  const [taxData, setTaxData] = useState<{ brackets: any[]; totalTax: number } | null>(null)

  // Custom handler for income changes
  const handleIncomeChange = (value: string) => {
    setIncome(value)
    // Clear tax data when income changes
    setTaxData(null)
  }

  const handleCalculate = () => {
    const incomeValue = Number.parseFloat(income)
    if (!isNaN(incomeValue) && incomeValue >= 0) {
      setTaxData(calculateTax(incomeValue, financialYear))
    }
  }

  // Custom handler for financial year changes
  const handleFinancialYearChange = (year: FinancialYear) => {
    setFinancialYear(year)
    // Clear tax data when financial year changes
    setTaxData(null)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Income Tax Calculator</CardTitle>
        <CardDescription>Enter your gross annual income to calculate your tax.</CardDescription>
      </CardHeader>
      <CardContent>
        <TaxCalculatorForm
          income={income}
          setIncome={handleIncomeChange}
          financialYear={financialYear}
          setFinancialYear={handleFinancialYearChange}
          onCalculate={handleCalculate}
        />

        {taxData && (
          <div className="mt-6">
            <TaxResultsTable
              income={income}
              financialYear={financialYear}
              brackets={taxData.brackets}
              totalTax={taxData.totalTax}
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-muted-foreground">
          Note: This is a simplified tax calculator and may not reflect all deductions and credits.
        </p>
      </CardFooter>
    </Card>
  )
}
