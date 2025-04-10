"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { type FinancialYear, TAX_BRACKETS_BY_YEAR } from "@/lib/calculate-tax"

interface TaxCalculatorFormProps {
    income: string
    setIncome: (income: string) => void
    financialYear: FinancialYear
    setFinancialYear: (year: FinancialYear) => void
    onCalculate: () => void
}

export function TaxCalculatorForm({
    income,
    setIncome,
    financialYear,
    setFinancialYear,
    onCalculate,
}: TaxCalculatorFormProps) {
    return (
        <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="financial-year">Financial Year</Label>
                <Select value={financialYear} onValueChange={(value) => setFinancialYear(value as FinancialYear)}>
                    <SelectTrigger id="financial-year">
                        <SelectValue placeholder="Select financial year" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.keys(TAX_BRACKETS_BY_YEAR).map((year) => (
                            <SelectItem key={year} value={year}>
                                {year}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="income">Gross Annual Income (AUD)</Label>
                <div className="flex gap-2">
                    <Input
                        id="income"
                        placeholder="Enter your income"
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                    />
                    <Button onClick={onCalculate}>Calculate</Button>
                </div>
            </div>
        </div>
    )
}
