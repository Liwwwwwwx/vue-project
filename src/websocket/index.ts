/*
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-27 14:08:20
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-08 10:21:29
 * @FilePath: /vue-project/src/websocket/index.ts
 * @Description: 二次封装websocket
 */
import { socket } from "@/type";
import { ElMessage } from "element-plus";
import { onMessage } from "./onMessage";

class WebSocketObj implements socket { 
  public ws:any | null; //websocket
  public url: string; // 连接地址
  public socket_open: boolean; // 开启标识
  public is_reconnecting: boolean; // 是否自动重连
  public heartbeat_timer: any; // 心跳定时器
  public heartbeat_interval: number; // 心跳频率
  public reconnect_timer: any; // 重连计时器
  public reconnect_interval: number;  // 重连频率
  public reconnect_current_count: number; // 当前重连次数
  public reconnect_max_count: number; // 最大重连次数

  /**
   * @description: 构造函数
   * @param {*} url 
   */
  constructor(url: string) {
    this.ws = null;
    this.url = url;
    this.socket_open = false;
    this.is_reconnecting = false;
    this.heartbeat_timer = null;
    this.heartbeat_interval = 0;
    this.reconnect_timer = null;
    this.reconnect_interval = 0;
    this.reconnect_current_count = 0;
    this.reconnect_max_count = 3;
  }

  /**
   * @description: 连接
   */
  connect(): void {
    const self = this;
    this.ws = new WebSocket(this.url)

    this.ws.onopen = function() {
      self.is_reconnecting = true;
      self.socket_open = true;
      self.heartBeat()
    }

    this.ws.onclose = function() {
      self.socket_open = false;
      clearInterval(self.reconnect_interval);
      if(self.is_reconnecting) {
        this.reconnect_timer = setInterval(() => {
          if(self.reconnect_current_count >  self.reconnect_max_count) {
            clearInterval(self.reconnect_timer);
            self.is_reconnecting = false;
          }
          self.reconnect_current_count++;
          self.reconnect()
        }, self.reconnect_interval)
      } else {
        ElMessage({
          message: '连接断开',
          type: 'error'
        })
      }
    }
    
    this.ws.onmessage = onMessage;
  }
  /**
   * @description: 断开
   */
  close(): void {
    clearInterval(this.heartbeat_timer)
    this.ws.close()
  }
  /**
   * @description: 心跳
   */ 
  heartBeat():void {
    if(this.heartbeat_timer) {
      clearInterval(this.heartbeat_timer)
    }

    this.heartbeat_timer = setInterval(() => {
      if(this.socket_open) {
        this.ws.send("HEART BEAT")
      }
    }, this.heartbeat_interval)
  }
  /**
   * @description: 重连
   */
  reconnect(): void {
    if(this.is_reconnecting && !this.ws) {
      this.connect()
    } else {
      this.close()
    }
  }
  /**
   * @description: 发送数据
   * @param {*} data 
   */
  send(data: any): void {
    if(this.ws.readyState == WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data))
    } else {
      clearInterval(this.reconnect_timer);
      if(this.reconnect_current_count > this.reconnect_max_count) {
        ElMessage({
          type: 'error',
          message: "网络异常,请刷新页面！"
        })
        this.reconnect_current_count++;
      }
    }
  }
}