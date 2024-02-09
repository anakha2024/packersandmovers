@echo off

REM Change directory to frontend and start React dev server
start cmd /k "cd frontend && npm install && npm start"

REM Change directory to backend and start Express server
start cmd /k "cd backend && npm install && npm start"

exit