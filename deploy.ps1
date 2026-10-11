# Build and deploy to GitHub Pages
Write-Host "Building project..."
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

New-Item -Path "out\.nojekyll" -ItemType File -Force | Out-Null

Write-Host "Deploying out directory to gh-pages branch..."
Push-Location out
try {
    git init -b gh-pages
    git config user.name "Vishal"
    git config user.email "vishal@users.noreply.github.com"
    git add -A
    git commit -m "Deploy update to GitHub Pages"
    git remote remove origin 2>$null
    git remote add origin "https://github.com/vishakhpoothakkal-dotcom/upavi-website.git"
    git push -f origin gh-pages
}
finally {
    Pop-Location
}

gh api repos/vishakhpoothakkal-dotcom/upavi-website/pages/builds -X POST | Out-Null
Write-Host "Deployment complete! Live at: https://vishakhpoothakkal-dotcom.github.io/upavi-website/"
