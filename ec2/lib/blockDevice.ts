import { BlockDevice, BlockDeviceVolume } from 'aws-cdk-lib/aws-ec2';

export const rootVolume: BlockDevice = {
  deviceName: '/dev/sda1',
  volume: BlockDeviceVolume.ebs(50),
};
