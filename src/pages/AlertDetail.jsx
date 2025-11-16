// src/pages/AlertDetail.jsx
import { useParams } from "react-router-dom";

function AlertDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Cat Case Details</h2>
      <p>Case ID: <strong>{id}</strong></p>
      <p>Here we&apos;ll show the cat&apos;s photo, status timeline, and QR transfer controls.</p>
    </div>
  );
}

export default AlertDetail;
