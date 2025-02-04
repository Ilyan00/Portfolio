import notion from "@/lib/notion";
import { NextResponse } from "next/server";
import { env } from "node:process";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const date = new Date().toISOString();

  const data = {
    parent: { database_id: process.env.DATABASE_ID },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
      Email: {
        email: email,
      },
      Message: {
        rich_text: [
          {
            text: {
              content: message,
            },
          },
        ],
      },
      DateEnvoie: {
        date: {
          start: date,
        },
      },
    },
  };

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.DATABASE_ID!,
      },
      properties: data.properties,
    });
    return NextResponse.json({
      message: `Message envoyé avec succès`,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: `Une erreur est survenue `,
      status: 500,
    });
  }
}
