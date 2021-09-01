# NX : ANGULAR 
Baseline NX workspace for an Angular project.  
  
---  
  
**Table Of Contents**  
1. [Overview](#overview)  
1. [Getting Started](#getting-started)  
1. [Libraries](#libraries)
1. [ESLinting](#)  
1. [Jest](#)  
1. [Cypress](#)  
1. [References](#references)  
  
---  
  
## Overview  
  
NX allows you to build design systems. Collections of re-useable components and standards. This promotes consistancy between team members and projects.  

### Prerequisites  
  
**Install Nx** (v12.8.0) with NPM  
```  
$ npm install -g nx
```  
  
Install NRWL's **Storybook** schematics 
```  
$ npm i -D @nrwl/storybook
```  

## Getting Started  
  
**Setup a New Nx Workspace** with an Angular app in it.   
1. This will be a project for creating various reports.  
2. Intialize a singular Angular application titled "Adjustment Inspection".  
3. Default to using [SASS](http://sass-lang.com) for the stylesheet.  
4. Use [ESLint](https://eslint.org/) for default linter.    
5. Deline Nx Cloud service(s)
```  
$ npx create-nx-workspace reports --preset=angular  
  
? Application Name: adjustment-inspection  
  
? Default Stylesheet Format: SASS(.scss)  
  
? Default Linter: ESLint  
  
? Use Nx Cloud? No  
```  
  
## Libraries  
A re-useable well encapsulated piece of functionality.  
  
**Generate** a header for our project.  
```  
$ npx ng generate lib header --style=scss  
```  
  
**Generate** a component inside the header for our project.  
```  
$ npx ng generate component components/reportHeader --project=header  
```  
  
**NG BUILD**  
```
$ ng run adjustment-inspection:build
``` 
  
## Storybook  
   
**Generate** a component inside the header for our project.  
```  
$ npx ng generate storybook-configuration header  
  
? Configure a cypress e2e app to run against the storybook instance? Yes    
? Automatically generate *.stories.ts files for components declared in this project?  Yes  
? Automatically generate *.spec.ts files in the generated Cypress e2e app? Yes  

```  

 
  
**Run** in Storybook.  
```  
$ npx ng run header:storybook  

```  
  


## ESLinting  
## Jest   
## Cypress  

**Run end to end test**  
```  
$ npx ng e2e adjustment-inspection-e2e --watch  
```  
  

## References  
  
**NRWL - Narwhal Technologies Inc.**  
1. [NX](https://nx.dev/)
1. [NX : ANGULAR](https://nx.dev/angular)
1. [Youtube: NRWL](https://www.youtube.com/channel/UCF8luR7ORJTCwSNA9yZksCw)
1. [NPM: STORYBOOK](https://www.npmjs.com/package/@nrwl/storybook)  
  
**ESLinting**  
1. [ESLint](https://eslint.org/) statically analyzes your code to quickly find problems.  
  
**Jest**  
1. [Jest](https://jestjs.io/) is a universal testing platform, with the ability to adapt to any JavaScript library or framework  
  
**Cypress**  
1. [Cypress](https://www.cypress.io/) is for fast, easy and reliable front-end testing.  
  