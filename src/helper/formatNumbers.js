export function roundToTwoDecimalPlaces(num) {
  return Math.abs(Number(num).toFixed(2));
}

export function formatNumberWithK(n) {
  if (n === null || n === undefined) return "";
  if (n < 1e3) return n.toFixed(2);
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(2) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B"; // Added support for billions
  if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T"; // Assuming trillion for numbers >= 1e12
}

export function formatProgressBar(first, second) {
  if (first > second) return "100%";
  if (second > first) {
    const innerWidth = Math.ceil((first * 100) / second).toString();
    return innerWidth + "%";
  }
}

export function formatToPrecision(n) {
  if (n < 1) return n.toFixed(8);
  return formatNumberWithK(n);
}

export function currencyFormatter(currency) {
  if (currency === "usd") return "$";
  if (currency === "eur") return "€";
  if (currency === "jpy") return "¥";
}
