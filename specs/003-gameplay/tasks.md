# Scenario 3 Tasks: Gameplay Interaction

Checklist of deliverables and implementation order:

- [ ] **Backend: Canvas Endpoints**
  - [ ] Support saving drawing strokes in memory
  - [ ] Add `PUT /rooms/:code/canvas` endpoint to update canvas data
  - [ ] Support clearing canvas data on the backend

- [ ] **Backend: Guess Verification**
  - [ ] Add `POST /rooms/:code/guess` endpoint
  - [ ] Implement trimming and case-insensitive matching for guesses
  - [ ] Update score on correct guess (100 points) and append to `guessHistory`

- [ ] **Frontend: Drawing Canvas Interaction**
  - [ ] Draw local lines and sync them to the backend
  - [ ] Clear canvas locally and sync clear event to backend

- [ ] **Frontend: Guessing & Synced Logs**
  - [ ] Add client-side validation for guessing input (trim, ignore empty)
  - [ ] Render chat history and scoreboard using polled room state
