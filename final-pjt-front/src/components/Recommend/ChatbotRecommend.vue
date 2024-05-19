<template>
    <div>
        <div id="chat-container">
            <div id="chat-messages">
                <div v-for="(message, index) in messages" :key="index" class="message"
                    :class="message.type + '-message'">
                    {{ message.content }}
                </div>
            </div>
            <div id="user-input">
                <input v-model="userInput" @keyup.enter="sendMessage" type="text" placeholder="메시지를 입력하세요..." />
                <button @click="sendMessage">전송</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            userInput: '',
            messages: [],
            OPEN_API_URL: 'https://api.openai.com/v1/chat/completions',
            API_KEY: 'sk-proj-2y5MeZ5AwEShg3zqkkbET3BlbkFJMURTlOkcUQlACUtQ8OdU',
        };
    },
    methods: {
        addChat(type, value) {
            this.messages.push({ type, content: value });
            this.scrollToBottom();
        },
        chatReceive(userMsg) {
            const headers = {
                Authorization: `Bearer ${this.API_KEY}`,
                'Content-Type': 'application/json'
            };

            const messages = [
                { role: 'user', content: userMsg },
                { role: 'system', content: this.messages[this.messages.length - 1]?.content || '' }
            ];

            axios({
                method: 'post',
                url: this.OPEN_API_URL,
                headers,
                data: { model: 'gpt-3.5-turbo', messages }
            })
                .then(res => {
                    const responseMessage = res.data.choices[0].message.content;
                    this.addChat('bot', responseMessage);
                })
                .catch(err => {
                    console.error('Error:', err);
                });
        },
        sendMessage() {
            if (!this.userInput.trim()) return;
            this.addChat('user', this.userInput.trim());
            this.chatReceive(this.userInput.trim());
            this.userInput = '';
        },
        scrollToBottom() {
            this.$nextTick(() => {
                const chatMessages = this.$refs.chatMessages;
                chatMessages.scrollTop = chatMessages.scrollHeight;
            });
        }
    }
};
</script>

<style scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.message {
    border-top: 1px solid #ccc;
    padding: 10px;
    margin-top: 5px;
    background-color: #e6e6e6;
    align-self: flex-end;
}

.bot-message {
    background-color: #f0f0f0;
    align-self: flex-start;
}

#chat-container {
    width: 800px;
    height: 600px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    margin-top: 50px;
}

#chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

#user-input {
    display: flex;
    padding: 10px;
}

#user-input input {
    flex: 1;
    padding: 10px;
    outline: none;
}

#user-input button {
    border: none;
    background-color: #1e88e5;
    color: white;
    padding: 10px 15px;
    cursor: pointer;
}
</style>