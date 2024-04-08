const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": "CG-7cteEQTCaeK4y2UBamAguGKg" },
};

export async function fetchCoins({ pageParam }) {
  try {
    const response = await fetch(
      `/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageParam}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&precision=2`,
      options
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error(error);
  }
}

export async function fetchCoinById(coinId) {
  try {
    const response = await fetch(
      `/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=true`,
      options
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error(error);
  }
}
