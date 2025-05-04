// api/send-message.js
export default function handler(req, res) {
  let body = req.body;

  if (typeof req.body === 'string') {
    try {
      body = JSON.parse(req.body);
    } catch {
      return res.status(400).json({ error: "Requisição malformada. Esperado JSON." });
    }
  }

  const { phone, message } = body;

  if (!phone || !message) {
    return res.status(400).json({ error: "Telefone e mensagem são obrigatórios." });
  }

  console.log(`Mensagem simulada para ${phone}: ${message}`);

  res.status(200).json({
    status: "sent",
    phone,
    message
  });
}
