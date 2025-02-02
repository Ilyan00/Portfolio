import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const date = new Date().toISOString();

  const NOTION_API_KEY = "ntn_XzP930318938gnnCznaD4hBNfMhoTxyH6S8JulIho1P85R";
  const DATABASE_ID = "18d0058b8dd580cda478e3a8520fa8e9";

  const data = {
    parent: { database_id: DATABASE_ID },
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
    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      return NextResponse.json({
        message: "Message envoyé avec succès",
        data: result,
      });
    } else {
      const error = await response.json();
      return NextResponse.json({
        message: `Erreur de l'API Notion`,
        status: 500,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: `Une erreur est survenue `,
      status: 500,
    });
  }
}
