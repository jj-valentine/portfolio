import { ImageResponse } from "next/og";
import { getAllPosts } from "@/lib/mdx";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  const title = post?.title ?? "James Valentine";
  const category = post?.category ?? "Blog";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#070707",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px 96px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Author row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 64,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            JV
          </div>
          <div style={{ fontSize: 20, color: "#777777", letterSpacing: "-0.3px" }}>
            James Valentine
          </div>
          <div style={{ fontSize: 20, color: "#333333" }}>·</div>
          <div
            style={{
              fontSize: 14,
              color: "#3b82f6",
              background: "rgba(59,130,246,0.12)",
              padding: "4px 12px",
              borderRadius: 6,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {category}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 50 ? 56 : 68,
            fontWeight: 500,
            color: "#fafafa",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          {title}
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 40,
            borderTop: "1px solid rgba(119,119,119,0.2)",
          }}
        >
          <div style={{ fontSize: 20, color: "#555555", letterSpacing: "-0.3px" }}>
            james-valentine.com/blog
          </div>
          <div style={{ width: 48, height: 3, background: "#3b82f6", borderRadius: 2 }} />
        </div>
      </div>
    ),
    size
  );
}
