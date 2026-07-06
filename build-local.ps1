$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root

node "node_modules\eslint\bin\eslint.js" .
node "node_modules\typescript\bin\tsc" --noEmit
node "node_modules\next\dist\bin\next" build
