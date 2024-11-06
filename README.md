# rt1020-evk-playground
[WIP] My NXP RT1020-EVK tflite-micro 2.4.0 micro_speech playround, with MDK5 AC6 

## Ref  
* (origin) https://github.com/KeilChris/TensorFlow_MIMXRT1064-EVK_Microspeech  
* https://github.com/weimingtom/TensorFlow_MIMXRT1064-EVK_Microspeech  
* EVK-MIMXRT1020-sai_v13_done.rar  
* The project basic template, vendor/EVK-MIMXRT1020-sai.zip, is generated from MCUXpresso SDK  
https://mcuxpresso.nxp.com  

## Debugging and making compiling pass      
* see vendor/debugging.txt
* https://github.com/weimingtom/rt1020-evk-playground/blob/master/vendor/debugging.txt  
```
我测试过，如果替换tflite-micro 2.4.0 micro_speech的micro_frontend的malloc实现，
至少需要13k以上的全局变量数组内存（更正，应该是14k），
没错，我这里测试用的是正点原子的mymalloc函数
（如果玩过正点原子开发板的人都知道会有个malloc目录），
我修改过，改成只有一个内存池，而且去掉里面的线程安全代码（临界区），
我晚上试试能不能在RT1020开发板上运行

我的天，昨天我研究了一晚上，只能勉强在rt1020开发板上运行了tflite-micro的
micro_speech的setup的一半。目前我只解决了printf和complex头文件会导致卡死，
但还是没能跑通，等以后有时间再研究，我要先缓缓了
（现在卡在static静态全局变量导致卡住的问题，可能和内存有关）

```
