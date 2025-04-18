#!/bin/bash

# Build the project
npm run build

# Create a temporary directory
mkdir -p tmp

# Copy the build files to the temporary directory
cp -r dist/* tmp/

# Create a .nojekyll file
touch tmp/.nojekyll

# Create a CNAME file
echo "chira603.github.io" > tmp/CNAME

# Clone the gh-pages branch
git clone -b gh-pages git@github.com:chira603/personal_web.git gh-pages

# Remove all files from the gh-pages branch
rm -rf gh-pages/*

# Copy the build files to the gh-pages branch
cp -r tmp/* gh-pages/

# Push the changes
cd gh-pages
git add .
git commit -m "Update website"
git push origin gh-pages

# Clean up
cd ..
rm -rf tmp gh-pages
