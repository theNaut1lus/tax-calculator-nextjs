import { TaxCalculator } from "@/components/tax-calculator"

export default function CalculatorPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight pl-5">Tax Calculator</h1>
      <TaxCalculator />
    </div>
  )
}
