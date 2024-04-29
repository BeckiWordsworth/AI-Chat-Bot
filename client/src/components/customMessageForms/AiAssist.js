import React, { useEffect, useState } from "react";
import MessageFormUI from "./MessageFormUI";
import { usePostAiAssistMutation } from "../../state/api";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue;
}

const AiAssist = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [triggerAssist] = usePostAiCodeMutation();
  const []

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: at,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    props.onSubmit(form);
    setMessage("");
    setAttachment("");
  };

  const debouncedValue = useDebounce(message, 1000);

  useEffect(() => {
    if (debouncedValue) {
      const form = { text: message};
      triggerAssist(form)
    }
  }, [debouncedValue]);

  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AiAssist;
