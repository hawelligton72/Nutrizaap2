export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    message: "Conexão com a API funcionando corretamente!"
  });
}
