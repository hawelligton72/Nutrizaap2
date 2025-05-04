export default function handler(req, res) {
  const { phone, message } = req.body;

  if (!phone || !message) {
    return res.status(400).json({ error: "Telefone e mensagem são obrigatórios." });
  }

  console.log(`Simulando envio de mensagem para ${phone}: ${message}`);

  res.status(200).json({
    status: "sent",
    phone,
    message
  });
}
