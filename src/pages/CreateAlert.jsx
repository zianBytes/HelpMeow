// src/pages/CreateAlert.jsx
import { useState } from "react";

function CreateAlert() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [locationDetails, setLocationDetails] = useState("");
  const [urgency, setUrgency] = useState("Seems urgent");

  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");

  async function handleRefineWithAI() {
    if (!description.trim()) {
      setAiError("Please describe what’s happening first.");
      return;
    }

    setAiError("");
    setAiLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/gemini/refine-alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();
      if (data.refinedDescription) {
        setDescription(data.refinedDescription);
      } else {
        throw new Error("No refined text returned");
      }
    } catch (err) {
      console.error(err);
      setAiError("Gemini couldn’t refine this alert right now. Try again.");
    } finally {
      setAiLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For now, just log it. Later, we can store to localStorage or mock backend.
    console.log("Submitted alert (demo):", {
      title,
      description,
      locationDetails,
      urgency,
    });
    alert("Your alert has been submitted!");
  }

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "20px", marginBottom: "4px", textAlign: "center",borderBottom: "2px solid #bf2323ff", paddingBottom: "8px" }}>
        Report a Cat
      </h2>
      <p
        style={{
          fontSize: "12px",
          color: "var(--text-muted)",
          marginBottom: "12px",
        }}
      >
      
      </p>

      <div className="card">
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div>
            <label className="field-label">Alert title</label>
            <input
              className="field-input"
              type="text"
              placeholder="E.g., Injured cat near park"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="field-label">What&apos;s happening?</label>

            <textarea
              className="field-textarea"
              rows={4}
              placeholder="Where is the cat? Any visible injury, collar, or tag? Is it safe to approach?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div
              style={{
                marginTop: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  maxWidth: "220px",
                }}
              >
                New: Try not to panic! Our Gemini AI can help refine your
                description for rescuers.
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={handleRefineWithAI}
                disabled={aiLoading}
              >
                {aiLoading ? "Refining with Gemini..." : "Refine with Gemini ✨"}
              </button>
            </div>

            {aiError && (
              <p
                style={{
                  marginTop: "4px",
                  fontSize: "11px",
                  color: "#dc2626",
                }}
              >
                {aiError}
              </p>
            )}
          </div>

          <div>
            <label className="field-label">Cat photo</label>
            <div
              style={{
                borderRadius: "14px",
                border: "1px dashed var(--border-subtle)",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
                background: "#dedbd7ff",
              }}
            >
              <div style={{ fontSize: "12px" }}>
                <div> Click to upload</div>
                <div
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "11px",
                    marginTop: "4px",
                  }}
                >
                  In the real app, this will send the photo to our backend.
                </div>
              </div>
              <button type="button" className="btn btn-ghost">
                Choose file
              </button>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.1fr)",
              gap: "10px",
            }}
          >
            <div>
              <label className="field-label">Location details</label>
              <input
                className="field-input"
                type="text"
                placeholder="Street / landmark (optional)"
                value={locationDetails}
                onChange={(e) => setLocationDetails(e.target.value)}
              />
              <p
                style={{
                  marginTop: "4px",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                }}
              >
                We&apos;ll attach your GPS location automatically later.
              </p>
            </div>

            <div>
              <label className="field-label">Urgency</label>
              <select
                className="field-select"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
              >
                <option>Seems urgent</option>
                <option>Critical (visible injury)</option>
                <option>Non-urgent (healthy stray)</option>
              </select>
            </div>
          </div>

          <div
            style={{
              marginTop: "4px",
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                maxWidth: "190px",
              }}
            >
              Only submit alerts when you genuinely believe a cat may need help.
              In emergencies, contact local animal control or emergency services.
            </p>
            <button type="submit" className="btn btn-primary">
              Submit alert (demo)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAlert;
