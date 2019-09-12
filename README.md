# vue-base-source

VueでWebアプリケーションを開発するときの雛形です。

clone したらリポジトリの向き先を変えて使ってください。

```
$ git remote remove origin
$ git remote add origin <repository_url>
```

## Setup

1. node_moduleをインストールする

```
$ yarn (or npm i)
```

2. VSCode上で `.ts` ファイルと `.vue` ファイルで eslint を有効になるようにして、保存したときに prettier が走るようにするために、 `.vscode/settings.json` に下記を追記する

※ `.vscode/settings.json` がない場合は作成する

```
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ]
}
```
