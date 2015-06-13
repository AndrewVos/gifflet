#!/bin/bash

set -e
set -u

JS="assets/compiled.js"
CSS="assets/compiled.css"

rm $JS || :
rm $CSS || :

cat "assets/scripts/jquery.min.js" >> $JS
cat "assets/scripts/remodal.min.js" >> $JS
cat "assets/scripts/tweet.js" >> $JS
cat "assets/scripts/navigation.js" >> $JS
cat "assets/scripts/pack.js" >> $JS
cat "assets/scripts/gifs.js" >> $JS

cat "assets/styles/bootstrap.min.css" >> $CSS
cat "assets/styles/main.css" >> $CSS
cat "assets/styles/remodal.css" >> $CSS
cat "assets/styles/remodal-default-theme.css" >> $CSS

minify --output $JS $JS
minify --output $CSS $CSS

go build

exec ./ancientcitadel