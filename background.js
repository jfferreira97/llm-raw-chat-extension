console.log("service worker working");

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (details.requestBody && details.requestBody.raw) {
            const raw = details.requestBody.raw[0].bytes;
            const text = new TextDecoder().decode(raw);
            console.log("Decoded body:", text);
        }
    },
    { urls: ["https://*.claude.ai/api/*/chat_conversations/*/completion"] },
    ["requestBody"]
);

