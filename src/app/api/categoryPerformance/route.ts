import { NextResponse } from 'next/server';

const categories = [
  { name: 'Layer 1s', day: '-2.5%', month: '5.6%', year: '12.3%' },
  { name: 'Modular', day: '-4.8%', month: '2.1%', year: '9.7%' },
  { name: 'Memecoins', day: '3.4%', month: '10.2%', year: '75.3%' },
  // Add other categories as needed
];

export async function GET() {
  return NextResponse.json(categories);
}