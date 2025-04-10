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
import { formatCurrency } from "@/lib/utils"
import type { FinancialYear } from "@/lib/calculate-tax"

interface TaxBracket {
    range: string
    rate: string
    taxableAmount: number
    tax: number
}

interface TaxResultsTableProps {
    income: string
    financialYear: FinancialYear
    brackets: TaxBracket[]
    totalTax: number
}

export function TaxResultsTable({ income, financialYear, brackets, totalTax }: TaxResultsTableProps) {
    const incomeValue = Number.parseFloat(income)

    return (
        <Table>
            <TableCaption>
                Tax calculation for {financialYear} based on your annual income of {formatCurrency(incomeValue)}
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
                {brackets.map((bracket, index) => (
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
                    <TableCell className="text-right">{formatCurrency(totalTax)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={3}>After-Tax Income</TableCell>
                    <TableCell className="text-right">{formatCurrency(incomeValue - totalTax)}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
