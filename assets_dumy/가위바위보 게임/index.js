const scissors = document.querySelector('#scissors-button > img')
const rock = document.querySelector('#rock-button > img')
const paper = document.querySelector('#paper-button > img')
const player1img = document.querySelector('#player1-img')
const player2img = document.querySelector('#player2-img')



// 이미지 랜덤으로 돌리기
const scissorsImg = './img/scissors.png';
const rockImg = './img/rock.png';
const paperImg = './img/paper.png';
const choices = [scissorsImg, rockImg, paperImg];

const choiceRandom = function () {
    let source = choices[Math.floor(Math.random() * choices.length)];
    player2img.setAttribute('src', source);
};

let timerId = null;

const startRandom = function () {
    timerId = setInterval(choiceRandom, 100);
};

const stopRandom = function () {
    clearInterval(timerId);
};


/// 이미지 비활성화
const disableImages = function() {
    scissors.onclick = null;
    rock.onclick = null;
    paper.onclick = null;
};

// 이미지 활성화
const enableImages = function() {
    scissors.onclick = function (event) {
        event.preventDefault();
        let imgSource = scissors.getAttribute('src');
        player1img.setAttribute('src', imgSource);
        startRandom(); // 가위를 선택할 때 랜덤 선택 시작
        disableImages(); // 이미지 선택 중에 이미지들 비활성화
        setTimeout(function() {
            stopRandom(); // 이미지 선택 후 3초 후에 랜덤 선택 멈춤
            showResult();
            enableImages(); // 이미지 선택 완료 후에 이미지들 다시 활성화
        }, 3000);
    };

    rock.onclick = function (event) {
        event.preventDefault();
        let imgSource = rock.getAttribute('src');
        player1img.setAttribute('src', imgSource);
        startRandom(); // 바위를 선택할 때 랜덤 선택 시작
        disableImages(); // 이미지 선택 중에 이미지들 비활성화
        setTimeout(function() {
            stopRandom(); // 이미지 선택 후 3초 후에 랜덤 선택 멈춤
            showResult();
            enableImages(); // 이미지 선택 완료 후에 이미지들 다시 활성화
        }, 3000);
    };

    paper.onclick = function (event) {
        event.preventDefault();
        let imgSource = paper.getAttribute('src');
        player1img.setAttribute('src', imgSource);
        startRandom(); // 보를 선택할 때 랜덤 선택 시작
        disableImages(); // 이미지 선택 중에 이미지들 비활성화
        setTimeout(function() {
            stopRandom(); // 이미지 선택 후 3초 후에 랜덤 선택 멈춤
            showResult();
            enableImages(); // 이미지 선택 완료 후에 이미지들 다시 활성화
        }, 3000);
    };
};

enableImages(); // 페이지 로드 시 이미지 활성화



//modal 창 띄우기

const modal = document.querySelector('#modal');

const determineWinner = function () {
    const player1Choice = player1img.getAttribute('src');
    const player2Choice = player2img.getAttribute('src');

    if (player1Choice === player2Choice) {
        return "It's a tie!";
    } else if (
        (player1Choice === scissorsImg && player2Choice === paperImg) ||
        (player1Choice === rockImg && player2Choice === scissorsImg) ||
        (player1Choice === paperImg && player2Choice === rockImg)
    ) {
        return 'Player 1 wins!';
    } else {
        return 'Player 2 wins!';
    }
};


// 각 플레이어의 점수를 0으로 초기화
let player1Score = 0;
let player2Score = 0;

// 점수를 표시할 span 요소들을 선택
const countA = document.querySelector('.countA');
const countB = document.querySelector('.countB');

// 가위바위보 결과에 따라 점수 증가 함수
const increaseScores = function (result) {
    if (result === 'Player 1 wins!') {
        player1Score++;
    } else if (result === 'Player 2 wins!') {
        player2Score++;
    }

    // 플레이어들의 점수를 화면에 업데이트
    countA.textContent = player1Score;
    countB.textContent = player2Score;
};

const showModal = function (result) {
    modal.innerText = result;
    modal.parentElement.style.display = 'block';
};

const showResult = function () {
    const result = determineWinner();
    showModal(result);
    increaseScores(result);
};



