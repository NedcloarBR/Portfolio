import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { project: string } }
) {
  const { project } = await params;

  if (!project) {
    return NextResponse.json(
      { error: "Project name is required" },
      { status: 400 }
    );
  }

  const imagesPath = path.join(process.cwd(), "public", "images", project);

  try {
    const files = fs.readdirSync(imagesPath);
    const images = files
      .filter((file) => /\.(png|jpg|jpeg|gif|svg)$/i.test(file))
      .map((file, index) => ({
        id: index,
        src: `/images/${project}/${file}`,
        alt: `${project} ${file}`,
      }));

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to fetch images" },
      { status: 500 }
    );
  }
}
