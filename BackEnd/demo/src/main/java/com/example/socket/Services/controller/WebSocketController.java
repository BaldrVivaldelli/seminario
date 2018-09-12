package com.example.socket.Services.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import com.example.socket.Services.entity.MessageData;


@Controller
public class WebSocketController {

	@Autowired
	private SimpMessageSendingOperations messagingTemplate;

	@MessageMapping("/message")
    @SendTo("/topic/reply")
	public MessageData processMessageFromClient(@Payload MessageData message) throws Exception {
		MessageData name = message;
		return name;
	}
	
	@MessageExceptionHandler
    public String handleException(Throwable exception) {
        messagingTemplate.convertAndSend("/errors", exception.getMessage());
	    return exception.getMessage();
    }
}
