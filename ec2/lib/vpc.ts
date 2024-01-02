import {
  IpAddresses,
  Peer,
  Port,
  SecurityGroup,
  SubnetType,
  Vpc,
} from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class VpcWithSg extends Construct {
  public sshSecurityGroup: SecurityGroup;
  public vpc: Vpc;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.vpc = new Vpc(this, 'VPC', {
      natGateways: 0,
      ipAddresses: IpAddresses.cidr('10.0.0.0/24'),
      subnetConfiguration: [
        {
          name: 'public',
          subnetType: SubnetType.PUBLIC,
        },
      ],
      maxAzs: 1,
    });

    this.sshSecurityGroup = new SecurityGroup(this, 'SSHSecurityGroup', {
      vpc: this.vpc,
      description: 'Security Group for SSH',
      allowAllOutbound: true,
    });

    this.sshSecurityGroup.addIngressRule(Peer.anyIpv4(), Port.tcp(22));
  }
}
