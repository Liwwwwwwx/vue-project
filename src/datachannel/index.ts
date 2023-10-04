import { dataChannelWebSocket } from "@/websocket";

// 定义全局状态变量
let aSenders: any = []; // 存储各个发送端的信息

// 定义静态状态变量
const SIGNAL_TYPE_PEERJOIN: string = "peer-join"; // peer-join 有新的客户端加入到房间之中
const SIGNAL_TYPE_OFFER: string = "offer"; // offer 发送offer给对端peer
const SIGNAL_TYPE_ANSWER: string = "answer"; // answer 发送answer给对端peer
const SIGNAL_TYPE_CANDIDATE: string = "candidate"; // candidate 发送candidate给对端peer

// Handle websocket onmessage
dataChannelWebSocket.ws.onmessage = (sMsg: any) => {
  let oData = null;

  try {
    oData = JSON.parse(sMsg.data);
  } catch (oError) {
    console.warn("Message parse Json failed:" + oError);
    return;
  }

  switch (oData.cmd) {
    case SIGNAL_TYPE_PEERJOIN:
      handlePeerJoin(oData);
      break;
    case SIGNAL_TYPE_ANSWER:
      handleAnswer(oData);
      break;
    case SIGNAL_TYPE_CANDIDATE:
      handleCandidate(oData);
      break;
  }

  // peer-join
  function handlePeerJoin(jsonMsg: any) {
    // 通知新的接收端加入房间
    const { roomId: sRoomId, uid: sUid, connectType: sConnectType } = jsonMsg;

    console.log(`用户：${sUid}(${sConnectType}) 加入房间：${sRoomId}`);

    if (sConnectType !== "send") {
      // 每新加入一个新的 receive 客户端就创建一个 RTCPeerConnection 对象
      let oLocalConnection: any = new RTCPeerConnection(),
        oSendChannel: any = oLocalConnection.createDataChannel("sendChannel");

      // 保存 RTCPeerConnection 和 DataChannel 对象
      aSenders.push({
        peerConnection: oLocalConnection,
        dataChannel: oSendChannel,
      });

      oLocalConnection
        .createOffer()
        .then((oSession: any) => {
          oLocalConnection
            .setLocalDescription(oSession)
            .then(function () {
              const jsonMsg = {
                cmd: SIGNAL_TYPE_OFFER,
                roomId: "1000",
                uid: sUid,
                msg: JSON.stringify(oSession),
              };
              const sMsg = JSON.stringify(jsonMsg);

              dataChannelWebSocket.send(sMsg);
              console.info("1、localConnection setLocalDescription success~~~");
            })
            .catch(function (oError: any) {
              console.error("offer setLocalDescription failed: " + oError);
            });
        })
        .catch((oError: any) => {
          console.error("handle local offer error: " + oError);
        });
      oLocalConnection.onicecandidate = handleLocalIceCandidate;

      oSendChannel.onopen = function () {
        console.log("Send channels status has changed to open.");
      };

      oSendChannel.onclose = function () {
        console.log("Send channels status has changed to close.");
      };
    }

    // offer
    function handleOfferAndSendMessage() {}
    // ice candidate
    function handleLocalIceCandidate(oEvent: any) {
      if (oEvent.candidate) {
        let jsonCandidate: any = {
          label: oEvent.candidate.sdpMLineIndex,
          id: oEvent.candidate.sdpMid,
          candidate: oEvent.candidate.candidate,
        };
        let jsonMsg: any = {
          cmd: SIGNAL_TYPE_CANDIDATE,
          roomId: "1000",
          connectType: "send",
          msg: JSON.stringify(jsonCandidate),
        };
        let sMsg: any = JSON.stringify(jsonMsg);

        dataChannelWebSocket.send(sMsg);
      }
    }
  }

  // answer
  function handleAnswer(sMsg: any) {
    let oLocalConnection: any = aSenders[aSenders.length - 1].peerConnection;

    oLocalConnection.setRemoteDescription(JSON.parse(sMsg.msg));
    console.info("2、localConnection setRemoteDescription success~~~");
  }

  // candidate
  function handleCandidate(sMsg: any) {
    let jsonMsg: any = JSON.parse(sMsg.msg);
    let jsonCandidateMsg: any = {
      sdpMLineIndex: jsonMsg.label,
      sdpMid: jsonMsg.id,
      candidate: jsonMsg.candidate,
    };
    let oCandidate: any = new RTCIceCandidate(jsonCandidateMsg),
      oLocalConnection: any = aSenders[aSenders.length - 1].peerConnection;

    oLocalConnection.addIceCandidate(oCandidate).catch((e: any) => {
      console.error("AddLocalIceCandidate failed:" + e.name);
    });
    console.info("3、localConnection addIceCandidate success~~~");
  }
};
dataChannelWebSocket.ws.onopen = () => {
  console.log("WebSocket connection opened!");
  dataChannelWebSocket.socket_open = true;
  // 新的连接加入
  const msg = {
    cmd: "join",
    roomId: "1000",
    uid: Math.random().toString(32).substring(2),
    connectType: "send",
  };
  dataChannelWebSocket.send(JSON.stringify(msg));
};

function sendMessage() {
  aSenders.forEach((aSender: any) => {
    let sendChannel: any = aSender.dataChannel,
      sMsg: string = "111111";

    sendChannel.send(sMsg);
    console.log(`发送成功：${sMsg}`);
  });
}
