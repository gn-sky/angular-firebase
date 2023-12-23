# Kanban Board

The primary objective of this repo is to showcase code organization principles and the implementation of the container presenter pattern.

<ul>
    <li>
        <code>AppModule</code> is lightweight and depends solely on the <code>FeatureModules</code> and <code>BrowserModule</code>. Keeping it lean to enhance overall application performance. Code is distributed across distinct <code>FeatureModules</code>. Each module encapsulates a specific feature or functionality, promoting a modular and maintainable codebase. Additionally, the modular approach facilitates the seamless integration of new <code>FeatureModules</code> as needed. Each distinct <code>module</code> results in a separate bundle that can be loaded lazily. This dynamic loading strategy optimizes the application's startup time, allowing users to experience faster initial page loads.
    </li>
    <li>
        <code>FeatureSwimLanesModule</code> serves as a host for both container/smart <code>swim-lanes.component</code> and presentation/dumb components. The container component retrieves data from the backend through an injected <code>SwimLanesService</code> located in <code>DataAccessSwimLanesModule</code> and passes via <code>Input</code>s into presentation components.
    </li>
    <li>
        <code>toolbar.component</code>, aka <code>header</code>, is encapsulated into its own <code>ToolbarModule</code>. This modular approach enhances code readability and facilitates easier maintenance & further extension with navigation menu links.
    </li>
    <li>
        Leveraging the power of <code>Angular CDK</code> to enable smooth transition and animation effects between kanban columns. This enhances the overall user experience by providing a visually appealing interface.
    </li>
</ul>

Please refer to my [blog post](https://www.eugenesky.com/project-graph-in-nx) for more insights into code organization.


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
