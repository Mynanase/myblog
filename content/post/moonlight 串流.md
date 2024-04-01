---
tags:
  - technique
created: YYYYMMDD
link:
  - https://qttao.notion.site/moonlight-99361bb3a887459494f6c62e98c33a06
notionID: 99361bb3-a887-4594-94f6-c62e98c33a06
share: true
---

- 确保电脑支持串流
- 设置串流程序

打开 GAMESTREAM 界面，可自行设置串流的软件，建议设置一个桌面菜单，以串流整个桌面。

![image.png|660](https://article.biliimg.com/bfs/article/6aad54c49a165baf53597d2318d217a56b6569d1.png)

桌面的一般位置为
```
C:\Windows\System32\mstsc.exe
```

![image.png|660](https://article.biliimg.com/bfs/article/05769d99b76d127010b946f243056abd0906eeb2.png)

# wiiu 串流

## Moonlight-wiiu 下载
- [GaryOderNichts/moonlight-wiiu: Moonlight Wii U port (github.com)](https://github.com/GaryOderNichts/moonlight-wiiu)

这是插件的 github 界面。

## 配置
将插件解压，打开文件夹，将 wiiu 文件夹复制到 SD 卡根目录
继续打开文件夹，找到 moonlight.config 文件，用来配置 moonlight。

![image.png|660](https://article.biliimg.com/bfs/article/50c1ea6a9b33aa0d7773582f382cd6457fbc1e29.png)

**配置文件一览**
```
## Hostname or IP-address of host to connect to
#address = 1.2.3.4  //设置为电脑ip地址

## Video streaming configuration //设置分辨率
#width = 1280    
#height = 720
#fps = 60

## Disables the gamepad so the other controllers are mapped to players 1 to 4
#disable_gamepad = true

## Swaps the buttons so they match the xbox controller layout
#swap_buttons = true  //调整为 xbox 的键位

## Automatically connect to the host on startup and start the stream
#autostream = true

## Use the absolute touch position for mouse emulation
#absolute_positioning = true

## Bitrate depends by default on resolution and fps //串流码率，根据网速而定
## Set to -1 to enable default
## 20Mbps (20000) for 1080p (60 fps)
## 10Mbps (10000) for 1080p or 60 fps
## 5Mbps (5000) for lower resolution or fps
#bitrate = -1    //串流码率，根据网速而定，默认为 -1.

## Size of network packets should be lower than MTU
## If streaming with WAN optimizations, this will be capped at 1024.
#packetsize = 1392

## Default started application on host
#app = Steam    // 设置串流默认启动项

## Play audio on host instead of streaming to client
#localaudio = false

## Send quit app request to remote after quitting session
#quitappafter = false

## Disable all input processing (view-only mode)
#viewonly = false

## Enable QOS settings to optimize for internet or local network
## yes - optimize for WAN streaming
## no - optimize for LAN streaming
## auto (default) - decide automatically based on target IP address
#remote = auto

## Enable 5.1/7.1 surround sound
#surround = 5.1

```

## 串流
我这里采用有线串流，将 wiiu 主机和 pc 连接在同一个路由器下，打开 wiiu 有限连接到网络。
启动 Homebrew launcher，打开刚刚导入的 moonlight-Wiiu 程序，先进行配对，之后进入可直接连接。

# 安卓串流 
上 Google Play 下载 Moonlight，确保连接在同一个局域网，检测到之后配对，连接即可。

# ipad
下载 Moonlight，确保连接同一个局域网，配对连接即可。