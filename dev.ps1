param(
  [int]$Port = 3010,
  [string]$HostName = "127.0.0.1"
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root

node "node_modules\next\dist\bin\next" dev --hostname $HostName --port $Port
