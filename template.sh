#!/bin/sh

while getopts l:d: flag
do
    case "${flag}" in
        l) language=${OPTARG};;
        d) day=${OPTARG};;
    esac
done

cd "$language"
mkdir -p day"$day"
cp -r ./template/. day"$day"
