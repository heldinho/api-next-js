// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    message: 'Teste de api com next.js',
    headers: { ...req.headers },
    query: { ...req.query },
    body: { ...req.body }
  })
}
