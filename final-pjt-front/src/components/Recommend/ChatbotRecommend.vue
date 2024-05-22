<template>
    <div id="app-container">
        <div id="chat-container">
            <div id="chat-messages" ref="chatMessages">
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
        <div id="info-container">
            <h3>Movie Search Option</h3>
            <p>아래 항목들을 선택하면 그에 맞춰 영화를 추천해 드려요!</p>
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

            const data = {
                model: 'gpt-4', // api_key의 접근권한이 아직 gpt-3까지라, gpt-4로 설정해도 버전은 3이 실행됨
                messages: [
                    { role: 'user', content: userMsg }
                ]
            };

            axios({
                method: 'post',
                url: this.OPEN_API_URL,
                headers,
                data
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

#app-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: 90vh;
    margin: 0;
    width: 100%;
}

#chat-container {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
}

#info-container {
    width: 30%;
    height: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-left: none;
    background-color: #f9f9f9;
    overflow-y: auto;
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

.message {
    border-top: 1px solid #ccc;
    padding: 15px;
    margin-top: 5px;
    background-color: #e6e6e6;
    align-self: flex-end;
    max-width: 60%; /* 최대 너비 */
    min-width: auto; /* 최소 너비 */
    border-radius: 25px;
    word-wrap: break-word; /* 단어가 너무 길 경우 줄 바꿈 */
}

.bot-message {
    background-color: #faea8f;
    padding: 15px;
    align-self: flex-start;
    max-width: 60%;
    min-width: auto;
    border-radius: 25px;
    word-wrap: break-word;
}
</style>
