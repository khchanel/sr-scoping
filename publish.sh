#!/bin/sh

rsync --del -azv ./dist/ nelson@castor:/home/nelson/public_html/sr-scoping
