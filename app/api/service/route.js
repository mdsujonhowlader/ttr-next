import connectMongo from "@/lib/mongoose";
import service from "@/model/service";
import { NextResponse } from "next/server";
import { serviceSchema } from "../validation/serviceSchema";

export async function POST(request) {
  try {
    await connectMongo();
    const serviceBody = await request.json();
    const parsed = serviceSchema.safeParse(serviceBody);
    if (!parsed.success) {
      const zodErrors = parsed.error?.issues?.map((e) => ({
        path: e.path[0],
        message: e.message,
      }));
      return NextResponse.json(
        { success: false, errors: zodErrors },
        { status: 400 }
      );
    }

    const serviceData = await service.create(parsed.data);

    return NextResponse.json(
      {
        success: true,
        msg: "Service created successfully",
        service: serviceData,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongo();
    const services = await service.find();
    return NextResponse.json(
      { success: true, service: services },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
