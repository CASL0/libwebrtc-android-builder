# libwebrtc-android-builder

[![Build & Publish package to GitHub Packages](https://github.com/CASL0/libwebrtc-android-builder/actions/workflows/publish.yaml/badge.svg)](https://github.com/CASL0/libwebrtc-android-builder/actions/workflows/publish.yaml)

libwebrtc.aar をビルドします。

## Getting Started

本リポジトリを（サブモジュール含めて）clone し、VSCode で開いてください。

コマンドパレット（Ctrl+Shift+P）から[Dev Containers: Reopen in Container...]を実行し、次のコマンドを実行してください。

```sh
fetch --nohooks webrtc_android
gclient sync
cd src && ./build/install-build-deps.sh
# Optional 特定のバージョンをビルドする場合はブランチの切り替え
# git checkout branch-heads/6099
tools_webrtc/android/build_aar.py
```

## Usage

スナップショットリリースを Github Packages より配布しています。ビルドした成果物は以下の手順で利用可能です。

1. Github Packages のリポジトリを Gradle の dependencyResolutionManagement に追加します。
   <details open>
   <summary>Kotlin DSL</summary>

   ```kotlin
   repositories {
       maven {
           url = uri("https://maven.pkg.github.com/CASL0/libwebrtc-android-builder")
       }
   }
   ```

   </details>
   <details>
   <summary>Groovy</summary>

   ```groovy
   repositories {
       maven {
           url = uri("https://maven.pkg.github.com/CASL0/libwebrtc-android-builder")
       }
   }
   ```

   </details>

1. Gradle のパッケージ dependencies に本パッケージの成果物を追加してください。
      <details open>
      <summary>Kotlin DSL</summary>

   ```kotlin
   dependencies {
       implementation("com.github.casl0:webrtc-android:<version>")
   }
   ```

      </details>
      <details>
      <summary>Groovy</summary>

   ```groovy
   dependencies {
       implementation "com.github.casl0:webrtc-android:<version>"
   }
   ```

      </details>

[Authenticating to GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)もご覧ください。

## EC2 構築

ビルド用の EC2 インスタンスを CDK で構築します。

構築方法については[ec2](./ec2/)を参照してください。

![infra](https://github.com/CASL0/libwebrtc-android-builder/assets/28913760/11dd6e33-e446-4f27-a4ea-d44415b08435)
