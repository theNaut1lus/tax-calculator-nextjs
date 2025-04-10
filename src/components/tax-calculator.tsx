"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { calculateTax, type FinancialYear, TAX_BRACKETS_BY_YEAR } from "@/lib/calculate-tax"
import { formatCurrency } from "@/lib/utils"

export function TaxCalculator() {
  const [income, setIncome] = useState<string>("")
  const [financialYear, setFinancialYear] = useState<FinancialYear>("2023-2024")
  const [taxData, setTaxData] = useState<{ brackets: any[]; totalTax: number } | null>(null)

  const handleCalculate = () => {
    const incomeValue = Number.parseFloat(income)
    if (!isNaN(incomeValue) && incomeValue >= 0) {
      setTaxData(calculateTax(incomeValue, financialYear))
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Income Tax Calculator</CardTitle>
        <CardDescription>Enter your gross annual income to calculate your tax.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="financial-year">Financial Year</Label>
            <Select
              value={financialYear}
              onValueChange={(value) => {
                setFinancialYear(value as FinancialYear)
                // Recalculate tax if income is already entered
                if (income) {
                  const incomeValue = Number.parseFloat(income)
                  if (!isNaN(incomeValue) && incomeValue >= 0) {
                    setTaxData(calculateTax(incomeValue, value as FinancialYear))
                  }
                }
              }}
            >
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
              <Button onClick={handleCalculate}>Calculate</Button>
            </div>
          </div>
        </div>

        {taxData && (
          <div className="mt-6">
            <Table>
              <TableCaption>
                Tax calculation for {financialYear} based on your annual income of{" "}
                {formatCurrency(Number.parseFloat(income))}
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Income Bracket</TableHead>
                  <TableHead>Tax Rate</TableHead>
                  <TableHead>Taxable Amount</TableHead>
                  <TableHead className="text-right">Tax</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {taxData.brackets.map((bracket, index) => (
                  <TableRow key={index}>
                    <TableCell>{bracket.range}</TableCell>
                    <TableCell>{bracket.rate}</TableCell>
                    <TableCell>{formatCurrency(bracket.taxableAmount)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(bracket.tax)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total Tax</TableCell>
                  <TableCell className="text-right">{formatCurrency(taxData.totalTax)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3}>After-Tax Income</TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(Number.parseFloat(income) - taxData.totalTax)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
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
