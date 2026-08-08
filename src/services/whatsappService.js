const axios = require("axios");

async function sendWhatsAppWelcomeMessage (fullName,playerId,phoneNumber) {
  try {
    const accessToken = process.env.WHATSAPP_VERIFY_TOKEN;

    const url = `https://graph.facebook.com/v26.0/1306356359220626/messages`;

    const payload = {
      messaging_product: "whatsapp",
      to: phoneNumber,
      type: "template",
      template: {
        name: "sn_kannur_premier_league_welcome",
        language: {
          code: "en_US",
        },
        components: [
          {
            type: "header",
            parameters: [
              {
                type: "image",
                image: {
                  link: "https://storage.googleapis.com/rajas_pl/sn_kpl_banner.jpeg",
                },
              },
            ],
          },
          {
            type: "body",
            parameters: [
              {
                type: "text",
                parameter_name: "fullname",
                text: fullName,
              },
              {
                type: "text",
                parameter_name: "id",
                text: String(playerId),
              },
            ],
          },
        ],
      },
    };

    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    console.log("WhatsApp message sent:", response.data);

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error(
      "WhatsApp message failed:",
      error.response?.data || error.message
    );

    return {
      success: false,
      error: error.response?.data || error.message,
    };
  }
};

module.exports = {
  sendWhatsAppWelcomeMessage : sendWhatsAppWelcomeMessage,
};