const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
	currency: 'EUR',
	style: 'currency',
})

export function currencyFormatter(value: number) {
	return CURRENCY_FORMATTER.format(value)
}
