module.exports = {
 config: {
   name: "prefix2",
   version: "1.0",
   author: "Nyx",
   countDown: 5,
   role: 0,
   category: "prefix"
 },

 onStart: async function () { },
 onChat: async function ({ event, message, getLang }) {
   if (event.body && event.body.toLowerCase() === "prefix") {
     return message.reply({
       body: `Hello! 🌊𝙼𝚊𝚔𝚒𝚖𝚊 𝙱𝚋𝚢🥰
🌟 **My Prefix:** [ + ]  
📜 **How to get started:**  
➡️ Type *help to view all available commands.  

💬 **Need Help?**  
👉 Feel free to ask!  

🚀 Have a great day!\n Creator: https://www.facebook.com/share/19jKp8u7th/`, attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Db5PzmY.mp4"),
     });
   }
 }
};
