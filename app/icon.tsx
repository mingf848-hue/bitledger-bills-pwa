import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2F6BFF 0%, #7EB6FF 100%)",
          borderRadius: 120,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 288,
            height: 288,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 84,
            background: "rgba(255,255,255,0.18)",
            color: "#FFFFFF",
            fontSize: 172,
            fontWeight: 800,
            fontFamily: "sans-serif",
          }}
        >
          B
        </div>
      </div>
    ),
    size,
  );
}
