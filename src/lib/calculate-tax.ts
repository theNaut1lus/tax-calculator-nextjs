export const TAX_BRACKETS_BY_YEAR = {
  "2021-2022": [
    { min: 0, max: 18200, rate: 0 },
    { min: 18201, max: 45000, rate: 0.19 },
    { min: 45001, max: 120000, rate: 0.325 },
    { min: 120001, max: 180000, rate: 0.37 },
    { min: 180001, max: Number.POSITIVE_INFINITY, rate: 0.45 },
  ],
  "2022-2023": [
    { min: 0, max: 18200, rate: 0 },
    { min: 18201, max: 45000, rate: 0.19 },
    { min: 45001, max: 120000, rate: 0.325 },
    { min: 120001, max: 180000, rate: 0.37 },
    { min: 180001, max: Number.POSITIVE_INFINITY, rate: 0.45 },
  ],
  "2023-2024": [
    { min: 0, max: 18200, rate: 0 },
    { min: 18201, max: 45000, rate: 0.19 },
    { min: 45001, max: 120000, rate: 0.325 },
    { min: 120001, max: 180000, rate: 0.37 },
    { min: 180001, max: Number.POSITIVE_INFINITY, rate: 0.45 },
  ],
  "2024-2025": [
    { min: 0, max: 18200, rate: 0 },
    { min: 18201, max: 45000, rate: 0.16 },
    { min: 45001, max: 135000, rate: 0.3 }, // Changed from previous years due to tax cuts
    { min: 135001, max: 190000, rate: 0.37 }, // Changed from previous years due to tax cuts
    { min: 190001, max: Number.POSITIVE_INFINITY, rate: 0.45 },
  ],
}

export type FinancialYear = keyof typeof TAX_BRACKETS_BY_YEAR

export function calculateTax(income: number, year: FinancialYear = "2024-2025") {
  const TAX_BRACKETS = TAX_BRACKETS_BY_YEAR[year]
  let totalTax = 0
  const brackets = []

  for (let i = 0; i < TAX_BRACKETS.length; i++) {
    const { min, max, rate } = TAX_BRACKETS[i]

    if (income > min) {
      const taxableAmount = Math.min(income - min, max - min)
      const taxForBracket = taxableAmount * rate

      totalTax += taxForBracket

      brackets.push({
        range: `${min.toLocaleString()} - ${max === Number.POSITIVE_INFINITY ? "+" : max.toLocaleString()}`,
        rate: `${(rate * 100).toFixed(1)}%`,
        taxableAmount,
        tax: taxForBracket,
      })
    }
  }

  return {
    brackets,
    totalTax,
  }
}
