export default async function handler(req, res) {
  const { url } = req.query;

  if (!url || !url.startsWith("https://api.coingecko.com")) {
    return res.status(400).json({ error: "Invalid or missing CoinGecko URL" });
  }

  try {
    const response = await fetch(url, {
      headers: {
        "x-cg-demo-api-key": "CG-ajwVeEiwCEPqSR3wuPTugoMX",
        "User-Agent": "Mozilla/5.0 MyCryptoApp/1.0",
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Proxy failed" });
  }
}
