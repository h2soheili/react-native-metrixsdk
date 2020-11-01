import { NativeModules } from 'react-native';

type MetrixsdkType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Metrixsdk } = NativeModules;

export default Metrixsdk as MetrixsdkType;
