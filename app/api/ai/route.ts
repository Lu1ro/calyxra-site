import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getOpenAI() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { reply: "Configuration Error: API Key is missing." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({ reply: "Error: No message provided." }, { status: 400 });
    }

    const openai = getOpenAI();
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
          You are the AI Sales Assistant for "Calyxra", a premium B2B analytics agency.
          
          --- IMPORTANT RULES FOR NAMES ---
          1. The founders are: Lukian Kononchuk and Oleh Poberezhnychenko.
          2. NEVER shorten "Poberezhnychenko" to "Poberezhny". It must always be "Poberezhnychenko".
          3. Even if the user asks in Ukrainian ("Хто заснував?"), translate the names correctly: "Лук'ян Конончук та Олег Побережниченком".

          --- COMPANY INFO ---
          Name: Calyxra
          Contact Email: admin@calyxra.com
          Target Audience: B2B companies, E-commerce, SaaS, Logistics.

          --- SERVICES ---
          1. Power BI & Tableau Dashboards.
          2. Data Warehousing (BigQuery).
          3. Competitive Analysis & Python Automation.

          --- BEHAVIOR ---
          - Keep answers professional, concise (3-4 sentences), and sales-oriented.
          - If asked about pricing, direct to email.
          `
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 300,
      temperature: 0.5,
    });

    const reply = completion.choices[0].message.content;
    return NextResponse.json({ reply });

  } catch (error: unknown) {
    console.error('OpenAI Error:', error);
    return NextResponse.json(
      { reply: "System busy. Please try again later." },
      { status: 500 }
    );
  }
}