@echo off
echo ================================================
echo   Full-Stack Authentication System - Frontend
echo ================================================
echo.

cd /d "%~dp0"

echo Checking Node.js installation...
node -v >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js 18 or higher
    pause
    exit /b 1
)

echo.
echo Checking if dependencies are installed...
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

echo.
echo ================================================
echo   Starting React Frontend...
echo   Application will run on: http://localhost:5173
echo ================================================
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
