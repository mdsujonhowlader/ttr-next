import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongoose";
import Visitor from "@/model/visitor";

export async function POST(request) {
  try {
    const { ip, userAgent, page } = await request.json();
    
    await connectMongo();
    await Visitor.create({ ip, userAgent, page });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}