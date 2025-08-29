module.exports = {
  name: "lid",
  description: "Devuelve el LID (identificador único) del usuario que envía el comando.",
  async execute(sock, msg, args) {
    // En Baileys, el identificador del usuario está en msg.key.participant para grupos, o msg.key.remoteJid para chats directos
    const lid = msg.key.participant || msg.key.remoteJid;

    // Envía el LID al usuario
    await sock.sendMessage(
      msg.key.remoteJid, 
      { text: `Tu LID es: ${lid}` }, 
      { quoted: msg }
    );
  }
};