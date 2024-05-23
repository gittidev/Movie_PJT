<template>
    <div id="app-container" class='container' style="margin: auto;">
        <div class="row">
            <div id="chat-container" class='col-6 col-md-8'>
            <div id="chat-messages" ref="chatMessages">
                <div v-for="(message, index) in messages" :key="index" class="message"
                    :class="message.type + '-message'">
                    {{ message.content }}
                </div>
            </div>
        </div>
        <div id="info-container" class="col-6 col-md-4">
            <h3>Movie Search Option</h3>
            <p>아래 항목들을 선택하면 그에 맞춰 영화를 추천해 드려요!</p>
            <br>
            <h3>장르(1개 이상)</h3>
            <div id="checkbox-container">
                <div class="checkbox-group">
                    <input type="checkbox" id="action" value="액션" v-model="selectedGenres">
                    <label for="action">액션</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="adventure" value="모험" v-model="selectedGenres">
                    <label for="adventure">모험</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="animation" value="애니메이션" v-model="selectedGenres">
                    <label for="animation">애니메이션</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="comedy" value="코미디" v-model="selectedGenres">
                    <label for="comedy">코미디</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="crime" value="범죄" v-model="selectedGenres">
                    <label for="crime">범죄</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="documentary" value="다큐멘터리" v-model="selectedGenres">
                    <label for="documentary">다큐멘터리</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="drama" value="드라마" v-model="selectedGenres">
                    <label for="drama">드라마</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="family" value="가족" v-model="selectedGenres">
                    <label for="family">가족</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="fantasy" value="판타지" v-model="selectedGenres">
                    <label for="fantasy">판타지</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="history" value="역사" v-model="selectedGenres">
                    <label for="history">역사</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="horror" value="공포" v-model="selectedGenres">
                    <label for="horror">공포</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="music" value="음악" v-model="selectedGenres">
                    <label for="music">음악</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="romance" value="로맨스" v-model="selectedGenres">
                    <label for="romance">로맨스</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="SF" value="SF" v-model="selectedGenres">
                    <label for="SF">SF</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="thriller" value="스릴러" v-model="selectedGenres">
                    <label for="thriller">스릴러</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="war" value="전쟁" v-model="selectedGenres">
                    <label for="war">전쟁</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="western" value="서부" v-model="selectedGenres">
                    <label for="western">서부</label>
                </div>
            </div>
            <br>
            <h3>나이(선택)</h3>
            <div id="age-container">
                <label for="age">나이 :</label>
                <input type="text" id="age" v-model="age">
            </div>
            <br>
            <h3>성별(선택)</h3>
            <div id="gender-container">
                <div>
                    남성 <input type="radio" name="gender" value="남성" v-model="selectedGender">
                </div>
                <div>
                    여성 <input type="radio" name="gender" value="여성" v-model="selectedGender">
                </div>
            </div>
            <br>
            <h3>오늘의 기분(선택)</h3>
            <div id="checkbox-container">
                <div class="checkbox-group">
                    나쁨 <input type="radio" name="mood" value="나쁨" v-model="selectedMood">
                </div>
                <div class="checkbox-group">
                    보통 <input type="radio" name="mood" value="보통" v-model="selectedMood">
                </div>
                <div class="checkbox-group">
                    좋음 <input type="radio" name="mood" value="좋음" v-model="selectedMood">
                </div>
            </div>
            <br>
            <button class="submitBtn btn btn-primary" @click="sendDataQuery">제출</button>
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
            selectedGenres: [],
            age: '',
            selectedGender: '',
            selectedMood: '',
            OPEN_API_URL: 'https://api.openai.com/v1/chat/completions',
            API_KEY: import.meta.env.VITE_APP_OPEN_AI_KEY,
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
                model: 'gpt-4', // api_key의 접근권한이 버전 3이라, 실제로는 3이 실행됨
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
                    if (res.data && res.data.choices && res.data.choices[0] && res.data.choices[0].message) {
                        const responseMessage = res.data.choices[0].message.content;
                        this.addChat('bot', responseMessage);
                    } else {
                        console.error('Unexpected response structure:', res.data);
                    }
                })
                .catch(err => {
                    console.error('Error:', err);
                });
        },
        sendDataQuery() {
            const genres = this.selectedGenres.length > 0 ? this.selectedGenres.join(', ') : '장르를 선택하지 않음';
            const mood = this.selectedMood ? this.selectedMood : '기분을 선택하지 않음';
            const gender = this.selectedGender ? this.selectedGender : '성별을 선택하지 않음';
            const age = this.age ? `${this.age}살` : '나이를 선택하지 않음';

            const queryDetails = `선택한 장르: ${genres}, 오늘의 기분: ${mood}, 나이: ${age}, 성별: ${gender}. 영화 추천해줘!`;
            const displayMessage = '선택한 조건에 부합하는 영화 찾아줘!';
            
            this.addChat('user', displayMessage);
            this.chatReceive(queryDetails);
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
    padding: 30px;
    font-family: 'KCC-Hanbit';
}


#chat-container {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px 0px 0px 10px;
}

#info-container {
    width: 30%;
    height: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-left: none;
    background-color: #f9f9f9;
    overflow-y: auto;
    border-radius: 0px 10px 10px 0px;
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

#checkbox-container {
    display: flex;
    flex-wrap: wrap;
}

.checkbox-group {
    width: 33%;
    box-sizing: border-box;
    padding: 5px;
}

#age-container {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

#age-container label {
    margin-right: 10px;
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
