import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { GuessForm } from "../components/GuessForm";
import { ResultPanel } from "../components/ResultPanel";
import { RoomCodeBadge } from "../components/RoomCodeBadge";
import { Scoreboard } from "../components/Scoreboard";
import { useRoomState } from "../state/roomStore";

export function GamePage() {
  const navigate = useNavigate();
  const { room, participantId } = useRoomState();

  useEffect(() => {
    if (!room) {
      navigate("/", { replace: true });
    }
  }, [navigate, room]);

  if (!room) {
    return null;
  }

  const viewer = room.participants.find((participant) => participant.id === participantId) ?? null;
  const isDrawer = participantId != null && participantId === room.currentDrawerId;
  const drawerParticipant = room.participants.find((p) => p.id === room.currentDrawerId);

  function renderWordDisplay() {
    if (isDrawer && room?.secretWord) {
      return (
        <div style={{ textAlign: "center", padding: "16px 0" }}>
          <p style={{ fontSize: "0.85em", color: "#6b7280", marginBottom: "4px" }}>Your secret word:</p>
          <p style={{ fontSize: "1.75em", fontWeight: 700, letterSpacing: "0.05em", color: "#3730a3" }}>
            {room.secretWord}
          </p>
        </div>
      );
    }

    // Guesser — show underscores based on actual word length
    // secretWord is null for guessers; backend knows word is one of the 5 starters
    // We still need to show placeholders — use currentDrawerId presence as indicator active
    return (
      <div style={{ textAlign: "center", padding: "16px 0" }}>
        <p style={{ fontSize: "0.85em", color: "#6b7280", marginBottom: "4px" }}>
          {drawerParticipant ? `${drawerParticipant.name} is drawing…` : "Waiting for drawer…"}
        </p>
        <p style={{ fontSize: "1.75em", letterSpacing: "0.25em", color: "#374151" }}>
          {room?.secretWord ?? "_ _ _ _ _"}
        </p>
      </div>
    );
  }

  return (
    <section className="panel game-page">
      <div className="game-page__header">
        <div className="game-page__header-left">
          <span className="section-kicker">Round 1</span>
          <h1 className="game-page__title">{isDrawer ? "You are drawing!" : "Guess the Word!"}</h1>
        </div>
        <RoomCodeBadge code={room.code} />
      </div>

      <div className="game-page__layout">
        <aside className="game-page__sidebar game-page__sidebar--left">
          <Scoreboard />
          <ResultPanel />
        </aside>

        <div className="game-page__main">
          {renderWordDisplay()}
          <Card title="Canvas">
            <div
              className="canvas-placeholder"
              style={{
                minHeight: "500px",
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9ca3af",
                fontSize: "0.9em"
              }}
            >
              {isDrawer ? "Draw here (canvas coming soon)" : "Waiting for drawer…"}
            </div>
          </Card>
        </div>

        <aside className="game-page__sidebar game-page__sidebar--right">
          <Card title="Player Info">
            <dl className="detail-list">
              <div>
                <dt>Name</dt>
                <dd>{viewer?.name ?? "Unknown player"}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{isDrawer ? "🎨 Drawer" : "🔍 Guesser"}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Playing</dd>
              </div>
            </dl>
          </Card>

          {!isDrawer && (
            <Card title="Your Guess">
              <GuessForm />
            </Card>
          )}
        </aside>
      </div>

      <div className="button-row">
        <button className="button button--secondary" onClick={() => navigate("/lobby")}>
          Exit Game
        </button>
      </div>
    </section>
  );
}

