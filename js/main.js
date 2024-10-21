// 'text-buble-container' 클래스를 가진 요소 선택
const container = document.querySelector('.text-buble-container');

// 추가할 텍스트 배열
const bubbleTexts = [
    "공모전", "대회 준비", "발표 예정", "최종 발표", "지치고 힘들 때", 
    "아잉", "괜찮아?", "현주 괜찮아", "난 잘 몰라", "ㅎㅎ", 
    "안녕하세요", "영타는", "그정도", "유진이가", "너랑", 
    "유진이가 다가가는걸", "힘내자", "어떡하지", "곧 끝나", "뭐가 문제지?", 
    "포기하지마", "시간이 부족해", "할 수 있어", "정신 차리자", "지금은 집중", 
    "어디 보자", "조금만 더", "결과는 나중에", "계획을 세우자"
];

// 랜덤하게 배경색을 적용할 개수 (원하는 만큼 설정 가능)
const numberOfRandomBubbles = 8;

// 랜덤 인덱스를 저장할 배열
const randomIndexes = [];

// 랜덤 인덱스 생성 함수 (중복 방지)
while (randomIndexes.length < numberOfRandomBubbles) {
    const randomIndex = Math.floor(Math.random() * bubbleTexts.length);
    if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
    }
}

// 텍스트 배열을 기반으로 div 요소 생성 및 추가
bubbleTexts.forEach((text, index) => {
    const newBubble = document.createElement('div'); // 새로운 div 요소 생성
    newBubble.classList.add('text-buble'); // 클래스 추가
    newBubble.textContent = text; // 텍스트 추가
    
    // 랜덤 인덱스 배열에 해당하는 요소에 배경색 추가
    if (randomIndexes.includes(index)) {
        newBubble.style.background = '#345FFF'; // 배경색 적용
        newBubble.style.color = '#FFFFFF';
    }
    
    container.appendChild(newBubble); // 컨테이너에 div 요소 추가
});