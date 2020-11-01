# react-native-metrixsdk

metrix sdk for call custom event 

## Installation

```sh
add module to package.json

  "react-native-metrixsdk":"git://github.com/club9822/react-native-metrixsdk.git"
  
npm i

app/build.gradle
  implementation 'ir.metrix:metrix:0.15.5'

MainApplication.java
  import ir.metrix.sdk.Metrix;
  import ir.metrix.sdk.MetrixConfig;
  
  @Override
  public void onCreate() {
  ...
  MetrixConfig metrixConfig = new  MetrixConfig(this, "appId from metrix dashboard");
  Metrix.onCreate(metrixConfig);
  }
```

## Usage

```js
import Metrixsdk from "react-native-metrixsdk";

// ...
          sendCustomEvent(slug:string,event:Record<string,string>)
          {
           string:string,
           string:string,
           ...
          }
Metrixsdk.sendCustomEvent('232323', {key1: 'value2',sdsdsd:'sdsdsdsdsd',d:'sdww'})
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
