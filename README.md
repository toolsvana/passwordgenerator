# Password Generator

A browser-based tool that generates strong, secure passwords. Built with Next.js and uses cryptographically secure random number generation.

🔗 **Live Demo:** [Password Generator](https://toolsvana.com/tool/password-generator)

## What it does

This tool creates strong, random passwords using the Web Crypto API for maximum security. Customize length, character types, and complexity to match your needs.

## Key features

- Generates cryptographically secure passwords
- Customizable length (8-64 characters)
- Control character types (uppercase, lowercase, numbers, symbols)
- Adjustable complexity
- Works offline
- No data sent to servers

## How to use

1. Adjust password length and options
2. Click "Generate Password"
3. Copy the generated password

## Technical details

Built with Next.js 16, TypeScript, and Tailwind CSS. Uses Web Crypto API (crypto.getRandomValues) for secure random number generation.

## Running locally

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

Output directory: `out`
