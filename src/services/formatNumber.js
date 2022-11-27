export const numFormat = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
	maximumFractionDigits: 2,
	minimumFractionDigits: 2,
	trailingZeroDisplay: "auto",
});
