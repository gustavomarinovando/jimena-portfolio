@echo off
setlocal
cd /d "%~dp0"
set PORT=%1
if "%PORT%"=="" set PORT=3010
node node_modules\next\dist\bin\next dev --hostname 127.0.0.1 --port %PORT%
