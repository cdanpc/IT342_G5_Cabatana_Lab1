# Full-Stack Authentication System - Backend Start Script

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Full-Stack Authentication System - Backend" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $PSScriptRoot

Write-Host "Checking Java installation..." -ForegroundColor Yellow
try {
    $javaVersion = java -version 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "Java not found"
    }
    Write-Host "✓ Java is installed" -ForegroundColor Green
} catch {
    Write-Host "✗ ERROR: Java is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Java 21 or higher" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Checking Maven..." -ForegroundColor Yellow
if (Test-Path ".\mvnw.cmd") {
    Write-Host "✓ Maven wrapper found" -ForegroundColor Green
} else {
    Write-Host "✗ ERROR: Maven wrapper not found" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Starting Spring Boot Backend..." -ForegroundColor Cyan
Write-Host "  Server will run on: http://localhost:8080" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

& .\mvnw.cmd spring-boot:run

Read-Host "Press Enter to exit"
