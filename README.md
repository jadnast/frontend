<div align="center">
  <p><img width="256" src="https://cdn.hikasami.com/logo.png"/></p>
</div>
<div align="center">
  <img src="https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff">
  <img src="https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white">
  <img src="https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff">
  <img src="https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff">
</div>
<hr />

# Hikasami Front-end part

This website is built using [NextJS](https://nextjs.org/), the React framework for the Web.

## Getting Started

### Installation
```bash
bun install
```

### Local Development
```bash
bun dev
```
> About [bun commands](https://bun.sh/docs/cli/install)

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build
```bash
bun build
```

This command generates static content into the `build` or `dist` directory and can be served using any static contents hosting service.

## FSD (Feature-Sliced Design)
FSD is architectural methodology for frontend projects
> About [FSD with NextJS](https://feature-sliced.design/docs/guides/tech/with-nextjs)

Below is the description of terms from the documentation:

### Layers
The first level of abstraction - according to the scope of influence.

- app - application initialization (init, styles, providers, etc.);
- processes - business processes of the application managing pages (payment, auth, etc.);
- pages - application pages (user-page, etc.);
- features - parts of the application’s functionality (auth-by-oauth, etc.);
- entities - business entities (viewer, order, etc.);
- shared - reusable infrastructure code (UIKit, libs, API, etc.).

### Slices
The second level of abstraction - according to the business domain.

The rules for dividing the code into slices depend on the specific project and its business rules and are not defined by the methodology.

### Segments
The third level of abstraction - according to their role in implementation.

- ui - UI representation of the module (components, widgets, canvas, etc.);
- model - business logic of the module (store, effects/actions, hooks/contracts, etc.);
- lib - auxiliary libraries;
- api - API interaction logic;
- config - application and environment configuration module.

Below is an example of the structure for an authorization feature.

```
# Segments can be either files or directories
|
├── features/auth                # Layer: Business Features
|        |                       #    Slice Group: Structural group "User Authorization"
|        ├── by-phone/           #      Slice: Feature "Authorization by Phone"
|        |     ├── ui/           #         Segment: UI Logic (components)
|        |     ├── lib/          #         Segment: Infrastructure Logic (helpers/utils)
|        |     ├── model/        #         Segment: Business Logic
|        |     └── index.ts      #         [Public API Declaration]
|        |
|        ├── by-oauth/           #      Slice: Feature "Authorization via External Resource"
|   ...
```

In addition to unifying the structure, this methodology provides a clear business logic overview, excellent layer descriptions with examples in popular programming languages. It also offers answers to questions about functionality placement and clear rules for reducing dependencies in the code.

## Storybook
> Please read on as a component [story](https://storybook.js.org/docs/writing-stories/args) creator to get started.
### Start
```bash
bun run storybook
```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
### Build
```bash
bun run build-storybook
```
![image](https://github.com/user-attachments/assets/3ae28e08-6346-43b7-8a89-38fd4687ffb4)
