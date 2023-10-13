# sitebuilder
![image](https://github.com/tzrn/sitebuilder/assets/108811530/a9362223-7de2-47f0-9448-1a86d618146f)
![image](https://github.com/tzrn/sitebuilder/assets/108811530/82c3f8b3-ee85-4d33-90d7-320484202030)

# usage
Install nodejs, tailwind, daisyui
```
sudo apt install nodejs #or whatever works on your os
npx i tailwindcss
npx i daisyui
```
generate css file into 'static' dir and start the main.js. you need to host css because i didn't find other way for preview iframe to use local css file.
```
mkdir static
npx tailwindcss -o static/styles.css
node main.js
```
then just open main.html.

The html builder part works but needs more elements and properties for them.
The sql part can only write code for creating tables and select queries.
It was supposed to write nodejs for sql api and client js for filling elements with that data.
