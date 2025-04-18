# Tax Calculator

[![Netlify Status](https://api.netlify.com/api/v1/badges/1d622106-42ed-4cab-a865-19d76bec697a/deploy-status)](https://app.netlify.com/sites/tax-calc-sidney/deploys)

A simple and intuitive tax calculator web application built with Next.js that helps users calculate their income tax based on Australian tax brackets for different financial years.

As part of an interview process with an organisation

## Features

- Calculate income tax based on annual gross income
- Support for multiple financial years (2021-2022, 2022-2023, 2023-2024, 2024-2025)
- Detailed breakdown of tax by income brackets
- Responsive design with dark/light mode support
- Simple and user-friendly interface
- Authorisation baked-in using Clerk Auth
- Deployed to Netlify with integrated CI/CD
- Custom CI setup on all branches

## Libraries and Technologies Used

- **Next.js** - React framework for server-rendered applications
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components built with Radix UI and Tailwind
- **next-themes** - Theme management for Next.js
- **clsx** & **tailwind-merge** - Utilities for conditional class names
- **Lucide React** - Icon library
- **TypeScript** - Typed JavaScript
- **Clerk Auth** - Amazing plug and play auth provided by Clerck, generous free tier.
- **GitHub CI Yaml** - Continous Integration with GitHub CI yaml file.
- **Netlify CD** - Netlify for hosting and quick deployment along with it's in-built CD features.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn (pnpm is preferred)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/tax-calculator.git
cd tax-calculator
```

##Auth config

configure your .env as per the .env.example file, setup clerk auth keys, visit [Clerk Dashboard](https://dashboard.clerk.com/apps/) to setup the keys.

```bash
pnpm init
pnpm run dev
```

TODO:

