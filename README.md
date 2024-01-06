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

## EC2 構築

ビルド用の EC2 インスタンスを CDK で構築します。

構築方法については[ec2](./ec2/)を参照してください。

![infra](https://github.com/CASL0/libwebrtc-android-builder/assets/28913760/11dd6e33-e446-4f27-a4ea-d44415b08435)
