# libwebrtc-android-builder

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
