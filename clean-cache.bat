@echo off
echo ==============================
echo 🧹 Cleaning cache (frontend + backend)...
echo ==============================

REM --- FRONTEND ---
if exist frontend\.vite (
  echo Deleting frontend\.vite ...
  rmdir /s /q frontend\.vite
)
if exist frontend\node_modules\.vite (
  echo Deleting frontend\node_modules\.vite ...
  rmdir /s /q frontend\node_modules\.vite
)

REM --- BACKEND ---
if exist backend\.cache (
  echo Deleting backend\.cache ...
  rmdir /s /q backend\.cache
)
if exist backend\build (
  echo Deleting backend\build ...
  rmdir /s /q backend\build
)
if exist backend\node_modules\.strapi\vite (
  echo Deleting backend\node_modules\.strapi\vite ...
  rmdir /s /q backend\node_modules\.strapi\vite
)

echo ==============================
echo ✅ Cache cleaned successfully!
echo ==============================
pause
