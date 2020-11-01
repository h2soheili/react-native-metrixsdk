package com.reactnativemetrixsdk
import com.facebook.react.bridge.*
import ir.metrix.sdk.Metrix;
class MetrixsdkModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "Metrixsdk"
    }

    // Example method
    // See https://facebook.github.io/react-native/docs/native-modules-android

    // function for send events to metrix with using java sdk + this helper module
   @ReactMethod
   fun sendCustomEvent(slug:String, eventHashMap: ReadableMap, promise: Promise){

     if(slug==null || eventHashMap==null){
       return promise.reject("metrix event error: slug or event ")
     }
     val map = eventHashMap.toHashMap()
     val event = HashMap<String,String>()
     for (entry in map.entries) {
       val key = entry.key
       val value = entry.value
       event[key] = value.toString()
     }
     Metrix.getInstance().newEvent(slug,event)
     promise.resolve(true)
   }
}
