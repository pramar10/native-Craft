import { interviewQuestions } from "@/data/interview-questions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const subject = searchParams.get("subject");
  const id = searchParams.get("id");

  if (!subject || !id) {
    return Response.json(
      { error: "A subject and question ID are required." },
      { status: 400 },
    );
  }

  const question = interviewQuestions[subject]?.find((item) => item.id === id);
  if (!question) {
    return Response.json({ error: "Interview question not found." }, { status: 404 });
  }

  return Response.json(question, {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
