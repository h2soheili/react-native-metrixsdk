import { NativeModules } from 'react-native';


type MetrixsdkType = {
  sendCustomEvent(slug:string,eventHashMap:Record<string, string>):Promise<boolean|object>;
};

const { Metrixsdk } = NativeModules;

export default Metrixsdk as MetrixsdkType;
