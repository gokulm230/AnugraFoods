export const generateWhatsAppLink = (product) => {
  const message = `
Hello Anugra Food Products,

I would like to order:

📦 Product: ${product.name}
⚖️ Weight: ${product.weight}
💰 Price: ₹${product.price}

Quantity: 1

Please share payment details.

Thank you.
`;

  return `https://wa.me/918667591396?text=${encodeURIComponent(
    message
  )}`;
};