import { createApp } from "vue"

const MessageBox = {
  props: {
    msg:{
      type:String,
      required:true
    }
  },
  render(ctx:any):any {
    const { $props, $emit } = ctx;
    return () => (
      <div>
      <p>{$props.msg}</p>
      <Button click={$emit("click")}>确定</Button>
    </div>
    )  
  }
}

export function showMsg(msg:any,onClick:any):void {
  const div = document.createElement("div"); 
  document.body.appendChild(div);

  const app = createApp(MessageBox,{
    msg,
    onClick() {
      onClick(() => {
        app.unmount()
        div.remove()
      })
    }
  });
  app.mount(div)
}