import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 30% 30%, #2d1a0f 0%, #0a0503 50%, #000000 100%)",
          borderRadius: "50%",
          boxShadow: "0 10px 30px rgba(0,0,0,0.8), 0 0 0 2px #1a1a1a, 0 0 0 4px #B8860B",
          position: "relative",
        }}
      >
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(184,134,11,0.1) 0%, transparent 50%, rgba(184,134,11,0.1) 100%)",
        }} />
        <div style={{
          position: "absolute",
          width: "88%",
          height: "88%",
          borderRadius: "50%",
          border: "2px solid #B8860B",
          boxShadow: "0 0 15px rgba(184,134,11,0.4), inset 0 0 15px rgba(184,134,11,0.2)",
        }} />
        <div style={{
          position: "absolute",
          width: "78%",
          height: "78%",
          borderRadius: "50%",
          border: "1px solid rgba(218,165,32,0.6)",
        }} />
        <div style={{
          position: "absolute",
          width: "68%",
          height: "68%",
          borderRadius: "50%",
          border: "1px solid rgba(218,165,32,0.4)",
        }} />
        <div style={{
          position: "absolute",
          width: "58%",
          height: "58%",
          borderRadius: "50%",
          border: "1px solid rgba(218,165,32,0.2)",
        }} />
        <span style={{ fontSize: 16, filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.8)) brightness(1.1)" }}>🍕</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
