# Scenario 4 Tasks: Result, Restart & Final Validation

Checklist of deliverables and implementation order:

- [ ] **Backend: Results & Restart Routes**
  - [ ] Implement checks to auto-transition status to `RESULTS` on complete guesses
  - [ ] Implement `POST /rooms/:code/restart` endpoint
  - [ ] Enforce that only the host can restart the room
  - [ ] Clear canvas, guess history, and reset scores to 0 on restart

- [ ] **Frontend: Results Interface**
  - [ ] Render final scoreboard (sorted by score) and final guess history log
  - [ ] Render "Restart Game" button exclusively for the host on Results screen
  - [ ] Call the backend restart endpoint on click
  - [ ] Poll room state and redirect players to Lobby screen once status is `LOBBY`
