System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "apsis:*": "jspm_packages/apsis/*"
  },

  map: {
    "JamieMason/Jasmine-Matchers": "github:JamieMason/Jasmine-Matchers@1.22.3",
    "angular": "github:angular/bower-angular@1.4.7",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.7",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "babel": "npm:babel-core@5.8.33",
    "babel-runtime": "npm:babel-runtime@5.8.29",
    "core-js": "npm:core-js@1.2.3",
    "site": "apsis:site@0.3.2",
    "apsis:shared@1.1.0": {
      "angular-translate-loader-static-files": "github:angular-translate/bower-angular-translate-loader-static-files@2.8.1"
    },
    "apsis:sidebar@0.5.1": {
      "css": "github:systemjs/plugin-css@0.1.19",
      "shared": "apsis:shared@1.1.0",
      "text": "github:systemjs/plugin-text@0.0.2"
    },
    "apsis:site@0.3.2": {
      "css": "github:systemjs/plugin-css@0.1.19",
      "sidebar": "apsis:sidebar@0.5.1",
      "text": "github:systemjs/plugin-text@0.0.2",
      "topbar": "apsis:topbar@0.3.1"
    },
    "apsis:topbar@0.3.1": {
      "css": "github:systemjs/plugin-css@0.1.19",
      "shared": "apsis:shared@1.1.0",
      "text": "github:systemjs/plugin-text@0.0.2"
    },
    "github:angular-translate/bower-angular-translate-loader-static-files@2.8.1": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.8.1"
    },
    "github:angular-translate/bower-angular-translate@2.8.1": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-mocks@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.29": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
