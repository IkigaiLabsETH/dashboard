import { NextResponse } from 'next/server';
import axios from 'axios';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price';

const CRYPTO_IDS = [
  'bitcoin',    // BTC
  'ethereum',   // ETH
  'solana',     // SOL
];

const queryParams = {
  ids: CRYPTO_IDS.join(','),
  vs_currencies: 'usd',
  include_24hr_change: 'true',
};

export async function GET() {
  try {
    const response = await axios.get(COINGECKO_API_URL, {
      params: queryParams,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching data from CoinGecko:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}