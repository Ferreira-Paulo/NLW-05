document.querySelector("#start_chat").addEventListener("click", (event) => {
  const socket = io()
  
  const chat_help = document.getElementById("chat_help")
  chat_help.style.display = "none"
  
  const chat_in_suporte = document.getElementById("chat_in_support")
  chat_in_suporte.style.display = "block"

  const email = document.getElementById("email").value
  const text = document.getElementById("txt_help").value

  socket.on("connect", () => {
    const params = {
      email,
      text
    }
    
    socket.emit("cliente_first_access", params, (call, err) => {
      if(err) {
        console.err(err)
      } else {
        console.log(call)
      }
    })
  })
});
