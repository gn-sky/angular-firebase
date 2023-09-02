# Kanban Board

`AppModule` should depend only on `Feature` & `BrowserModules` and kept as lean as possible

<ul>
    <li>
        <code>FeatureSwimLanesModule</code> hosts container/smart <code>swim-lanes.component</code> & couple presentation/dumb <code>components</code>. Container component gets data from backend via injected <code>service</code> in <code>DataAccessModule</code>
    </li>
    <li>
        <code>DataAccessSwimLanesModule</code> is responsible for getting data for <code>FeatureSwimLanesModule</code>
    </li>
    <li>
        <code>toolbar.component</code> is extracted into <code>ToolbarModule</code>
    </li>
</ul>

More on code organization at my [blog post](https://www.eugenesky.com/project-graph-in-nx)

# Auto generated content below👇

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
