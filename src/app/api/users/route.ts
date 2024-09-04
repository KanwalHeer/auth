import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; 
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  try {
    const session = await getServerSession({ req: request, ...authOptions });
    const sessionUser = await User.findOne({ email:session?.user?.email })
    if (!session || sessionUser.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectMongoDB();

    const users = await User.find();

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error("Error fetching users: ", error);
    return NextResponse.json({ message: "An error occurred while fetching users." }, { status: 500 });
  }
}
