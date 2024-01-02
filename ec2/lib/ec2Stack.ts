import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { VpcWithSg } from './vpc';
import { rootVolume } from './blockDevice';
import {
  Instance,
  InstanceClass,
  InstanceSize,
  InstanceType,
  MachineImage,
  UserData,
} from 'aws-cdk-lib/aws-ec2';

export interface Ec2StackProps extends cdk.StackProps {
  keyPairName: string;
}

export class Ec2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: Ec2StackProps) {
    super(scope, id, props);

    // VPC
    const vpcWithSg = new VpcWithSg(this, 'VPC');

    // UserData
    const userData = UserData.forLinux();
    userData.addCommands(
      'apt-get update -y',
      // depot_toolsの依存パッケージ
      'apt-get install -y git python3 curl',
    );

    // EC2キーペア
    const keyName = props?.keyPairName ?? 'id_rsa';

    const host = new Instance(this, 'Ec2Instance', {
      instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.XLARGE),
      // Ubuntu Server 22.04 LTS
      machineImage: MachineImage.genericLinux({
        'ap-northeast-1': 'ami-07c589821f2b353aa',
      }),
      blockDevices: [rootVolume],
      vpc: vpcWithSg.vpc,
      securityGroup: vpcWithSg.sshSecurityGroup,
      userData,
      keyName,
    });

    new cdk.CfnOutput(this, 'sshCommand', {
      value: `ssh ubuntu@${host.instancePublicDnsName}`,
    });

    new cdk.CfnOutput(this, 'KeyPairName', {
      value: keyName,
    });
  }
}
