# Prerender-loader reprod

Reproduction for an issue in prerender-loader when loading css stylesheets imported by dynamic chunks.

Issues:

* https://github.com/GoogleChromeLabs/prerender-loader/issues/17
* https://github.com/GoogleChromeLabs/critters/issues/7

## Background

There is an error when using `mini-css-extract-plugin` in conjunction with `prerender-loader` and code-splitting.

Depending on the hash strategy, `prerender-loader` may inject non existent css files into the generated html, but this only happens when the css is imported by dynamic chunks.

## Reproduction

1. Run `npm i`.

2. Run `npm start` and verify that everything works just fine, you must see two red `index`, two green `static` a blue `dynamic`.

3. Open webpack.config.js and replace:

    ```js
    const HASH = 'contenthash';
    ```

    by

    ```js
    const HASH = 'hash';
    ```

    Run `npm start` again and verify that the `dynamic.xxx.css` file that is being loaded has a different name that the one in `dist`.

    Go to the browser now, you will see in the network that `Webpack` is loading the correct file at runtime but that
    there is a 404 for the inlined file.

4. If you want to check `Critters` behavior open Webpack configuration file again and uncomment `new Critters()`.

    If you run `npm start` you will see an error generated by `Critters` in the console and in `dist/index.html` content.
