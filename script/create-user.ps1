$user=$args[0]

# Vérifier si le script est exécuté en tant qu'administrateur
if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host "Veuillez exécuter le script en tant qu'administrateur."
    exit
}

# Définir le répertoire de travail
$workingDirectory = 'C:\Program Files\OpenVPN\easy-rsa\'
Set-Location -Path $workingDirectory

$command = "EASYRSA_BATCH=1 ./easyrsa build-client-full $user nopass"
Invoke-Expression "echo `"$command`" | bin/sh.exe bin/easyrsa-shell-init.sh"