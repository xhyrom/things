#!/bin/bash

# Execute by 'moon :readme'

PACKAGE_JSON=$(cat "$PWD/package.json")

NAME=$(echo $PACKAGE_JSON | jq -r '.name')
DESCRIPTION=$(echo $PACKAGE_JSON | jq -r '.description')
LICENSE=$(echo $PACKAGE_JSON | jq -r '.license')

PACKAGE_NAME="${NAME#*/}"
PACKAGE_SOURCE_URL="https://github.com/xhyrom/things/blob/main/packages/$PACKAGE_NAME"

cat <<EOL > README.md
[$NAME]($PACKAGE_SOURCE_URL) is designed to provide $DESCRIPTION

licensed under [$LICENSE]($PACKAGE_SOURCE_URL/LICENSE)
EOL
