import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Submission from "@/models/submission";
export async function GET() {
  try {
    await connectDB();

    const submissions = await Submission.find()
      .sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        data: submissions,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch submissions",
      },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    await connectDB();

    const body = await req.json();

    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required",
        },
        { status: 400 }
      );
    }

    // Find submission
    const existingSubmission = await Submission.findOne({
      email: email.toLowerCase(),
    });

    if (!existingSubmission) {
      return NextResponse.json(
        {
          success: false,
          message: "Submission not found",
        },
        { status: 404 }
      );
    }

    // Delete submission
    await Submission.findOneAndDelete({
      email: email.toLowerCase(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Submission deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    console.log(body);

    const { name, email, role, message } = body;

    // Validation
    if (!name || !email || !role || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }
    const existingSubmission = await Submission.findOne({
  email: email.toLowerCase(),
});

if (existingSubmission) {
  return NextResponse.json(
    {
      success: false,
      message: "You have already submitted the form.",
    },
    { status: 409 }
  );
}

    // Save to DB
    const submission = await Submission.create({
      name,
      email,
      role,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        data: submission,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}