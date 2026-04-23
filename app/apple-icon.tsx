import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#2F6BFF",
          color: "#FFFFFF",
          borderRadius: 44,
          fontSize: 88,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        B
      </div>
    ),
    size,
  );
}
