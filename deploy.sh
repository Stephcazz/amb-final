#!/bin/bash

# Build the project
echo "Building project..."
yarn build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

# Create a temporary file for deployment log
LOGFILE=$(mktemp)

# Use curl for FTP upload
echo "Deploying to server..."
cd dist
for file in $(find . -type f); do
    echo "Uploading $file..."
    curl -T "$file" \
         -u "amb-buffaz.com_q9ck09bjjbo:6kMceP3\$ks#zlQp6" \
         "ftp://ftp.amb-buffaz.com/httpdocs/${file#./}" \
         2>> "$LOGFILE"
done

# Check for errors in log
if grep -q "error\|failed" "$LOGFILE"; then
    echo "Deployment encountered errors. Check $LOGFILE for details."
    exit 1
else
    echo "Deployment completed successfully!"
    rm "$LOGFILE"
fi