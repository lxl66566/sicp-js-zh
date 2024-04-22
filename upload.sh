#!/bin/bash
set -f
git add -A
git commit -m $(date "+%Y%m%d-%H:%M:%S")
git push origin master || (echo "push failed" && exec /bin/bash)
