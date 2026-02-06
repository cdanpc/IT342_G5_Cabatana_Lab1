@echo off
echo ================================================
echo   Full-Stack Authentication System - Backend
echo ================================================
echo.

cd /d "%~dp0"

echo Checking Java installation...
java -version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Java is not installed or not in PATH
    echo Please install Java 21 or higher
    pause
    exit /b 1
)

echo.
echo Checking Maven...
call mvnw.cmd -version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Maven wrapper not found
    pause
    exit /b 1
)

echo.
echo ================================================
echo   Starting Spring Boot Backend...
echo   Server will run on: http://localhost:8080
echo ================================================
echo.
echo Press Ctrl+C to stop the server
echo.

call mvnw.cmd spring-boot:run

pause
