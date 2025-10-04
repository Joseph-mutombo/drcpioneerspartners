# Script pour mettre à jour les traductions
$frFile = "src/locales/fr/translation.json"
$enFile = "src/locales/en/translation.json"

# Lire le fichier français
$frContent = Get-Content $frFile -Raw

# Remplacer les clés de service_types
$frContent = $frContent -replace '"quality": "Audit de Qualité \(ISO 9001\)"', '"cx_audit": "Audit Expérience Client"'
$frContent = $frContent -replace '"safety": "Audit de Sécurité \(OHSAS 18001\)"', '"digital_experience": "Audit Expérience Digitale"'
$frContent = $frContent -replace '"strategic": "Consultation Stratégique"', '"employee_wellbeing": "Audit Bien-être Employé"'

# Écrire le fichier français
$frContent | Set-Content $frFile -Encoding UTF8

# Lire le fichier anglais
$enContent = Get-Content $enFile -Raw

# Remplacer les clés de service_types
$enContent = $enContent -replace '"quality": "Quality Audit \(ISO 9001\)"', '"cx_audit": "Customer Experience Audit"'
$enContent = $enContent -replace '"safety": "Safety Audit \(OHSAS 18001\)"', '"digital_experience": "Digital Experience Audit"'
$enContent = $enContent -replace '"strategic": "Strategic Consulting"', '"employee_wellbeing": "Employee Wellbeing Audit"'

# Écrire le fichier anglais
$enContent | Set-Content $enFile -Encoding UTF8

Write-Host "Traductions mises à jour avec succès!"
