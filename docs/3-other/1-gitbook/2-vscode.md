# vscode 配置

### setting.json

```
{
  "editor.selectionHighlight": false,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.formatOnPaste": false,
  "workbench.startupEditor": "newUntitledFile",
  "files.trimTrailingWhitespace": true,
  "editor.formatOnType": false,
  "editor.fontSize": 14,
  "editor.quickSuggestions": {
    "strings": true // 在键入字符串时启用建议
  },
  "workbench.tree.indent": 16, // 树缩进
  "terminal.integrated.defaultProfile.osx": "zsh", // 默认终端
  "terminal.integrated.copyOnSelection": true, // 终端选中复制
  "editor.wordWrap": "on",
  "security.workspace.trust.untrustedFiles": "prompt", // 不显示信任引入提示
  "files.associations": {
    "*.vue": "vue",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  // eslint
  "editor.defaultFormatter": "esbenp.prettier-vscode", // 默认格式化程序
  "editor.formatOnSave": false, // 保存格式化
  "eslint.enable": true,
  "editor.codeActionsOnSave": {
    // For ESLint and StyleLint
    "source.fixAll": true
  },
  "eslint.options": {
    "extensions": [".js", ".vue"]
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue",
    "typescript",
    "typescriptreact"
  ],

  "explorer.confirmDragAndDrop": false,
  "editor.detectIndentation": false,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  // "vetur.format.defaultFormatter.js": "prettier",
  "editor.tabSize": 2,
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist": true
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
    "vue": "html",
    "vue-html": "html"
  },
  "git.confirmSync": false,
  "editor.renderWhitespace": "boundary",
  "editor.cursorBlinking": "smooth",
  "editor.minimap.enabled": true,
  "editor.minimap.renderCharacters": false,
  // "editor.fontFamily": "'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'",
  "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
  "editor.codeLens": true,
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "workbench.iconTheme": "material-icon-theme",
  "editor.lineHeight": 24,
  "editor.fontLigatures": true,
  "editor.fontFamily": "Dank Mono",
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "breadcrumbs.enabled": true,
  "workbench.sideBar.location": "left",
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "leetcode.endpoint": "leetcode-cn",
  "leetcode.workspaceFolder": "/Users/rsl/Desktop/github/FE-Learn-All/leetcode",
  "leetcode.defaultLanguage": "javascript",
  "leetcode.showDescription": "In Webview",
  "editor.snippetSuggestions": "top",

  "files.defaultLanguage": "vue",

  "diffEditor.ignoreTrimWhitespace": false,
  "workbench.colorTheme": "Tokyo Night",
  "leetcode.hint.configWebviewMarkdown": false,
  "leetcode.hint.commentDescription": false,

  "editor.suggestSelection": "first",
  "window.zoomLevel": 1,
  // vim 配置im-select
  "vim.autoSwitchInputMethod.enable": true,
  "vim.autoSwitchInputMethod.defaultIM": "com.apple.keylayout.US",
  "vim.autoSwitchInputMethod.obtainIMCmd": "/usr/local/bin/im-select",
  "vim.autoSwitchInputMethod.switchIMCmd": "/usr/local/bin/im-select {im}",
  // prettier配置
  "prettier.singleQuote": true,
  "prettier.semi": false,
  "prettier.trailingComma": "none", // 随时添加逗号
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 配置文件归类
  // updated 2022-04-01 14:10
  // https://github.com/antfu/vscode-file-nesting-config
  "explorer.experimental.fileNesting.enabled": true,
  "explorer.experimental.fileNesting.expand": false,
  "explorer.experimental.fileNesting.patterns": {
    "*.asax": "$(capture).*.cs, $(capture).*.vb",
    "*.ascx": "$(capture).*.cs, $(capture).*.vb",
    "*.ashx": "$(capture).*.cs, $(capture).*.vb",
    "*.aspx": "$(capture).*.cs, $(capture).*.vb",
    "*.c": "$(capture).h",
    "*.cc": "$(capture).hpp, $(capture).h, $(capture).hxx",
    "*.cpp": "$(capture).hpp, $(capture).h, $(capture).hxx",
    "*.csproj": "*.config, *proj.user, appsettings.*, bundleconfig.json",
    "*.css": "$(capture).css.map, $(capture).*.css",
    "*.cxx": "$(capture).hpp, $(capture).h, $(capture).hxx",
    "*.dart": "$(capture).freezed.dart, $(capture).g.dart",
    "*.ex": "$(capture).html.eex, $(capture).html.heex, $(capture).html.leex",
    "*.java": "$(capture).class",
    "*.js": "$(capture).js.map, $(capture).*.js",
    "*.jsx": "$(capture).js, $(capture).*.jsx",
    "*.master": "$(capture).*.cs, $(capture).*.vb",
    "*.module.ts": "$(capture).resolver.ts, $(capture).controller.ts, $(capture).service.ts",
    "*.pubxml": "$(capture).pubxml.user",
    "*.resx": "$(capture).*.resx, $(capture).designer.cs, $(capture).designer.vb",
    "*.ts": "$(capture).js, $(capture).*.ts",
    "*.tsx": "$(capture).ts, $(capture).*.tsx",
    "*.vbproj": "*.config, *proj.user, appsettings.*, bundleconfig.json",
    "*.vue": "$(capture).*.ts, $(capture).*.js",
    ".clang-tidy": ".clang-format",
    ".env": "*.env, .env.*, .envrc, env.d.ts",
    ".gitignore": ".gitattributes, .gitmodules, .gitmessage, .mailmap, .git-blame*",
    ".project": ".classpath",
    "BUILD.bazel": "*.bzl, *.bazel, *.bazelrc, bazel.rc, .bazelignore, .bazelproject, WORKSPACE",
    "CMakeLists.txt": "*.cmake, *.cmake.in, .cmake-format.yaml, CMakePresets.json",
    "artisan": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, server.php, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, webpack.mix.js, windi.config.*",
    "astro.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "cargo.toml": ".clippy.toml, .rustfmt.toml, cargo.lock, clippy.toml, cross.toml, rust-toolchain.toml, rustfmt.toml",
    "composer.json": ".php*.cache, composer.lock, phpunit.xml*, psalm*.xml",
    "default.nix": "shell.nix",
    "dockerfile": ".dockerignore, docker-compose.*, dockerfile*",
    "flake.nix": "flake.lock",
    "gatsby-config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, gatsby-browser.*, gatsby-node.*, gatsby-ssr.*, gatsby-transformer.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "gemfile": ".ruby-version, gemfile.lock",
    "go.mod": ".air*, go.sum",
    "mix.exs": ".credo.exs, .dialyzer_ignore.exs, .formatter.exs, mix.lock",
    "next.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, next-env.d.ts, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "nuxt.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "package.json": ".browserslist*, .circleci*, .codecov, .commitlint*, .cz-config.js, .czrc, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitpod*, .huskyrc*, .jslint*, .lintstagedrc*, .markdownlint*, .mocha*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .releaserc*, .sentry*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .tool-versions, .travis*, .versionrc*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, Procfile, api-extractor.json, apollo.config.*, appveyor*, ava.config.*, azure-pipelines*, bower.json, build.config.*, commitlint*, crowdin*, cypress.json, dangerfile*, dprint.json, firebase.json, grunt*, gulp*, jasmine.*, jenkins*, jest.config.*, jsconfig.*, karma*, lerna*, lint-staged*, nest-cli.*, netlify*, nodemon*, nx.*, package-lock.json, phpcs.xml, playwright.config.*, pm2.*, pnpm*, prettier*, pullapprove*, puppeteer.config.*, pyrightconfig.json, renovate*, rollup.config.*, stylelint*, tsconfig.*, tsdoc.*, tslint*, tsup.config.*, turbo*, typedoc*, vercel*, vetur.config.*, vitest.config.*, webpack.config.*, workspace.json, xo.config.*, yarn*",
    "pubspec.yaml": ".metadata, .packages, all_lint_rules.yaml, analysis_options.yaml, build.yaml, pubspec.lock",
    "pyproject.toml": ".pdm.toml, pdm.lock, pyproject.toml",
    "quasar.conf.js": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, quasar.extensions.json, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "readme": "authors, backers.md, changelog*, citation*, code_of_conduct.md, codeowners, contributing.md, contributors, copying, credits, governance.md, history.md, license*, maintainers, readme*, security.md, sponsors.md",
    "readme.md": "authors, backers.md, changelog*, citation*, code_of_conduct.md, codeowners, contributing.md, contributors, copying, credits, governance.md, history.md, license*, maintainers, readme*, security.md, sponsors.md",
    "readme.rst": "authors, backers.md, changelog*, citation*, code_of_conduct.md, codeowners, contributing.md, contributors, copying, credits, governance.md, history.md, license*, maintainers, readme*, security.md, sponsors.md",
    "readme.txt": "authors, backers.md, changelog*, citation*, code_of_conduct.md, codeowners, contributing.md, contributors, copying, credits, governance.md, history.md, license*, maintainers, readme*, security.md, sponsors.md",
    "remix.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, remix.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "rush.json": ".browserslist*, .circleci*, .codecov, .commitlint*, .cz-config.js, .czrc, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitpod*, .huskyrc*, .jslint*, .lintstagedrc*, .markdownlint*, .mocha*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .releaserc*, .sentry*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .tool-versions, .travis*, .versionrc*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, Procfile, api-extractor.json, apollo.config.*, appveyor*, ava.config.*, azure-pipelines*, bower.json, build.config.*, commitlint*, crowdin*, cypress.json, dangerfile*, dprint.json, firebase.json, grunt*, gulp*, jasmine.*, jenkins*, jest.config.*, jsconfig.*, karma*, lerna*, lint-staged*, nest-cli.*, netlify*, nodemon*, nx.*, package-lock.json, phpcs.xml, playwright.config.*, pm2.*, pnpm*, prettier*, pullapprove*, puppeteer.config.*, pyrightconfig.json, renovate*, rollup.config.*, stylelint*, tsconfig.*, tsdoc.*, tslint*, tsup.config.*, turbo*, typedoc*, vercel*, vetur.config.*, vitest.config.*, webpack.config.*, workspace.json, xo.config.*, yarn*",
    "shims.d.ts": "*.d.ts",
    "svelte.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, mdsvex.config.js, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "vite.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "vue.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*"
  },
  "sync.gist": "2ce11b7cde5df5744a43cc0ee438f8ec"
}
```

### .eslint

- .eslintignore

  ```
  **/iconfont.js
  ```

- .eslintrc.js

  ```
  module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    env: {
      browser: true,
      node: true,
      es6: true
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],

    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
      'vue/max-attributes-per-line': [
        2,
        {
          singleline: 10,
          multiline: {
            max: 1,
            allowFirstLine: false
          }
        }
      ],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always'
          },
          svg: 'always',
          math: 'always'
        }
      ],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/name-property-casing': ['error', 'PascalCase'],
      'vue/no-v-html': 'off',
      'accessor-pairs': 2,
      'arrow-spacing': [
        2,
        {
          before: true,
          after: true
        }
      ],
      'block-spacing': [2, 'always'],
      'brace-style': [
        2,
        '1tbs',
        {
          allowSingleLine: true
        }
      ],
      camelcase: [
        0,
        {
          properties: 'always'
        }
      ],
      'comma-dangle': [2, 'never'],
      'comma-spacing': [
        2,
        {
          before: false,
          after: true
        }
      ],
      'comma-style': [2, 'last'],
      'constructor-super': 2,
      curly: [2, 'multi-line'],
      'dot-location': [2, 'property'],
      'eol-last': 2,
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'generator-star-spacing': [
        2,
        {
          before: true,
          after: true
        }
      ],
      'handle-callback-err': [2, '^(err|error)$'],
      indent: [
        2,
        2,
        {
          SwitchCase: 1
        }
      ],
      'jsx-quotes': [2, 'prefer-single'],
      'key-spacing': [
        2,
        {
          beforeColon: false,
          afterColon: true
        }
      ],
      'keyword-spacing': [
        2,
        {
          before: true,
          after: true
        }
      ],
      'new-cap': [
        2,
        {
          newIsCap: true,
          capIsNew: false
        }
      ],
      'new-parens': 2,
      'no-array-constructor': 2,
      'no-caller': 2,
      'no-console': 'off',
      'no-class-assign': 2,
      'no-cond-assign': 2,
      'no-const-assign': 2,
      'no-control-regex': 0,
      'no-delete-var': 2,
      'no-dupe-args': 2,
      'no-dupe-class-members': 2,
      'no-dupe-keys': 2,
      'no-duplicate-case': 2,
      'no-empty-character-class': 2,
      'no-empty-pattern': 2,
      'no-eval': 2,
      'no-ex-assign': 2,
      'no-extend-native': 2,
      'no-extra-bind': 2,
      'no-extra-boolean-cast': 2,
      'no-extra-parens': [2, 'functions'],
      'no-fallthrough': 2,
      'no-floating-decimal': 2,
      'no-func-assign': 2,
      'no-implied-eval': 2,
      'no-inner-declarations': [2, 'functions'],
      'no-invalid-regexp': 2,
      'no-irregular-whitespace': 2,
      'no-iterator': 2,
      'no-label-var': 2,
      'no-labels': [
        2,
        {
          allowLoop: false,
          allowSwitch: false
        }
      ],
      'no-lone-blocks': 2,
      'no-mixed-spaces-and-tabs': 2,
      'no-multi-spaces': 2,
      'no-multi-str': 2,
      'no-multiple-empty-lines': [
        2,
        {
          max: 1
        }
      ],
      'no-native-reassign': 2,
      'no-negated-in-lhs': 2,
      'no-new-object': 2,
      'no-new-require': 2,
      'no-new-symbol': 2,
      'no-new-wrappers': 2,
      'no-obj-calls': 2,
      'no-octal': 2,
      'no-octal-escape': 2,
      'no-path-concat': 2,
      'no-proto': 2,
      'no-redeclare': 2,
      'no-regex-spaces': 2,
      'no-return-assign': [2, 'except-parens'],
      'no-self-assign': 2,
      'no-self-compare': 2,
      'no-sequences': 2,
      'no-shadow-restricted-names': 2,
      'no-spaced-func': 2,
      'no-sparse-arrays': 2,
      'no-this-before-super': 2,
      'no-throw-literal': 2,
      'no-trailing-spaces': 2,
      'no-undef': 2,
      'no-undef-init': 2,
      'no-unexpected-multiline': 2,
      'no-unmodified-loop-condition': 2,
      'no-unneeded-ternary': [
        2,
        {
          defaultAssignment: false
        }
      ],
      'no-unreachable': 2,
      'no-unsafe-finally': 2,
      'no-unused-vars': [
        2,
        {
          vars: 'all',
          args: 'none'
        }
      ],
      'no-useless-call': 2,
      'no-useless-computed-key': 2,
      'no-useless-constructor': 2,
      'no-useless-escape': 0,
      'no-whitespace-before-property': 2,
      'no-with': 2,
      'one-var': [
        2,
        {
          initialized: 'never'
        }
      ],
      'operator-linebreak': [
        2,
        'after',
        {
          overrides: {
            '?': 'before',
            ':': 'before'
          }
        }
      ],
      'padded-blocks': [2, 'never'],
      quotes: [
        2,
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true
        }
      ],
      semi: [2, 'never'],
      'semi-spacing': [
        2,
        {
          before: false,
          after: true
        }
      ],
      'space-before-blocks': [2, 'always'],
      'space-before-function-paren': [2, 'always'],
      'space-in-parens': [2, 'never'],
      'space-infix-ops': 2,
      'space-unary-ops': [
        2,
        {
          words: true,
          nonwords: false
        }
      ],
      'spaced-comment': [
        2,
        'always',
        {
          markers: [
            'global',
            'globals',
            'eslint',
            'eslint-disable',
            '*package',
            '!',
            ','
          ]
        }
      ],
      'template-curly-spacing': [2, 'never'],
      'use-isnan': 2,
      'valid-typeof': 2,
      'wrap-iife': [2, 'any'],
      'yield-star-spacing': [2, 'both'],
      yoda: [2, 'never'],
      'prefer-const': 2,
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'object-curly-spacing': [
        2,
        'always',
        {
          objectsInObjects: false
        }
      ],
      'array-bracket-spacing': [2, 'never']
    }
  }
  ```

### prettier

.prettierrc

```
{
  "eslintIntegration": true,
  "singleQuote": true,
  "semi": false,
  "trailingComma": "none"
}
```
