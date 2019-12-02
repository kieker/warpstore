export function formatPrice(cents) {
    return (cents / 10).toLocaleString("en-ZA", {
      style: "currency",
      currency: "ZAR"
    });
  }
  export default formatPrice