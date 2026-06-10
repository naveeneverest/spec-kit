# Scenario 2 Tasks: Game Start & Drawer Flow

Checklist of deliverables and implementation order:

- [ ] **Backend: Start Game Endpoint**
  - [ ] Implement `POST /rooms/:code/start` endpoint on backend
  - [ ] Authorize that only the host of the room can successfully trigger start
  - [ ] Transition room state status to `active`

- [ ] **Backend: Drawer & Word Assignment**
  - [ ] Select the host as the initial drawer on game start
  - [ ] Select a word from the predefined starter words list
  - [ ] Sanitize room state payload in `GET /rooms/:code` to hide `secretWord` for guessers

- [ ] **Frontend: Trigger Game Start**
  - [ ] Attach click handler to "Start Game" button in Lobby to call backend
  - [ ] Handle error states if the start endpoint fails

- [ ] **Frontend: Game Redirect & Setup**
  - [ ] Polling cycle in Lobby detects `active` room status and redirects to `/room/:code/game`
  - [ ] Verify drawer sees secret word in plaintext
  - [ ] Verify guesser sees underscores instead of secret word
