#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Ec2Stack } from '../lib/ec2Stack';

const app = new cdk.App();
new Ec2Stack(app, 'WebRTC-Android-Builder', {
  keyPairName: app.node.tryGetContext('keyPairName'),
});
