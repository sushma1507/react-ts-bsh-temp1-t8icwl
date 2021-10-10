******************************************
The files attached here are for your reference.

You can follow below steps to setup same structure as given here

******************************************
Sample steps used to create template :
> Create react APP 
(If you have created already then you can skip this)
    npx create-react-app task-tracker
> cd task-tracker

> After that use below commands to add all necessary packages:
    npm i --save-dev node-sass typescript antd
    npm i --save-dev @types/react @types/react-dom @types/node
(You are free to use LESS or scss or any apart from css)

******************************************
Change file extensions to all files:
js to tsx
css to scss
Ex: App.js to App.tsx
Ex: index.css to index.scss

After changing extensions please copy App.tsx from
https://stackblitz.com/edit/react-ts-bsh-temp1?file=ForLocalSetupFiles%2Fsrc%2FApp.tsx

(Optional) If you using vscode then use below tsconfig.json

******************************************
(Optional)
Folder structure:
Not mandatory to follow same as shown, if you have better solution.
******************************************
(Mandatory)*
All variables and functions should mention their types by using interface.
******************************************
(Mandatory)*
Try to create custom hooks and custom components by passing required props with types.
******************************************
(Mandatory)*
Antd provides most of the components but it is recomanded to customize thier default design.
We want to know how you override styles and behavior of default components.
******************************************
(Mandatory)*
Try to avoid inline styles in all components. 
(mention in comments if you really want to use inline style and why)
******************************************
Try to handle hooks and make use more to know how well you handle.
******************************************





