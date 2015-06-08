# grunt-closure-service

> Compile JS using the
  [google-closure-service](https://developers.google.com/closure/compiler/docs/gettingstarted_api).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to
check out the [Getting Started](http://gruntjs.com/getting-started)
guide, as it explains how to create a
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install
and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-closure-service --save-dev
```

Once the plugin has been installed, it may be enabled inside your
Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-closure-service');
```

## The "closure_service" task

### Overview
In your project's Gruntfile, add a section named `closure_service` to
the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  closure_service: {
    options: {
      // Task-specific options go here. Available options are
      // described in the Closure Compiler API Reference.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

For a complete set of options, see the [Google Closure Compiler API
Reference](https://developers.google.com/closure/compiler/docs/api-ref).

#### options.compilation_level
Type: `String`
Default value: `'SIMPLE_OPTIMIZATIONS'`

The compilation level, which can be `'WHITESPACE_ONLY'`,
`'SIMPLE_OPTIMIZATIONS'`, or `'ADVANCED_OPTIMIZATIONS'`.

#### options.use_closure_library
Type: `Boolean`
Default value: `false`

Whether to include the Google Closure Library while compiling.

### Usage Examples

#### Default Options
In this example, the default options are used to do compile, which
does simple optimizations on the input.

```js
grunt.initConfig({
  closure_service: {
    options: {},
    files: {
      'dest/output.min.js': ['src/input1.js', 'src/input2.js'],
    },
  },
});
```

#### Custom Options
In this example, we specify that we only want whitespace removed, with
no other optimizations.

```js
grunt.initConfig({
  closure_service: {
    options: {
      compilation_level: 'WHITESPACE_ONLY'
    },
    files: {
      'dest/output.min.js': ['src/input1.js', 'src/input2.js'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing
coding style. Add unit tests for any new or changed
functionality. Lint and test your code using
[Grunt](http://gruntjs.com/).
