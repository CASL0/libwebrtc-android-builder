# WebRTC ビルド用の EC2 構築

libwebrtc.aar ビルド用の EC2 インスタンスを構築します。

## Getting Started

以下の環境変数を設定してください。

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_DEFAULT_REGION

Dev Container で本リポジトリを開き、次のコマンドを実行してください。

```sh
cd ec2
# EC2キーペアの作成
aws ec2 create-key-pair --key-name webrtc-android-builder --query 'KeyMaterial' --key-type 'ed25519' --output text > webrtc-android-builder.pem
yarn install
npx cdk bootstrap
# 作成したキーペア名を指定します
npx cdk deploy -c keyPairName='webrtc-android-builder'
```

## 詳細

次の内容を構築します。

- AMI
  - Ubuntu Server 22.04 LTS
- インスタンスタイプ
  - T2.Xlarge
- ストレージ
  - 50GiB
- セキュリティグループ
  - アウトバウンドと 22 番ポートのインバウンドを許可
- VPC
- UserData
  - depot_tools の依存パッケージのインストール
    - git
    - python3
    - curl
