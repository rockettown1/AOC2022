#!/bin/sh

while getopts l:d: flag
do
    case "${flag}" in
        l) language=${OPTARG};;
        d) day=${OPTARG};;
    esac
done
green='\033[0;32m'
blue='\033[0;34m'

cd "$language"
mkdir -p day"$day"
cp -r ./template/. day"$day"
echo "${green}Created solution directory for day$day in $language"

cd ../_inputs
touch day"$day".txt
echo "${blue}Created txt file for input if it wasn't already there."