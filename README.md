# 📝 To-Do List App

간단한 할 일 관리 웹 애플리케이션입니다. 프론트엔드와 백엔드를 직접 만들고 연결하며 웹 개발의 기본 흐름(화면 ↔ 서버 ↔ 데이터 저장)을 배우기 위한 첫 번째 프로젝트입니다.

## 🔗 데모

- 프론트엔드: `https://songhj9311.github.io/Example/`
- 백엔드 API: `https://example-fwqw.onrender.com/todos`

## ✨ 주요 기능

- 할 일 추가
- 할 일 완료 체크 (체크박스 클릭 시 텍스트에 줄긋기)
- 할 일 삭제
- 새로고침해도 데이터 유지 (서버에 저장됨)

## 🛠 사용 기술

**Frontend**
- HTML / CSS
- JavaScript (Vanilla JS, Fetch API)

**Backend**
- Python
- Flask
- Flask-CORS

**Deployment**
- Frontend: GitHub Pages
- Backend: Render

## 📁 프로젝트 구조

```
todo-app/
├── index.html      # 화면 구조
├── style.css        # 디자인
├── script.js         # 프론트엔드 로직 (서버와 데이터 주고받기)
├── app.py            # 백엔드 서버 (API)
├── todos.json        # 할 일 데이터 저장 파일
└── requirements.txt   # Python 패키지 목록
```

## ⚙️ 동작 원리

```
[브라우저 화면 (index.html)]
        ↕ fetch (HTTP 요청)
[Flask 서버 (app.py)]
        ↕ 파일 읽기/쓰기
[todos.json (데이터 저장)]
```

1. 페이지를 열면 서버(`GET /todos`)에서 저장된 할 일 목록을 불러와 화면에 표시합니다.
2. 할 일을 추가하면 서버(`POST /todos`)에 데이터를 보내 `todos.json`에 저장합니다.
3. 할 일을 삭제하면 서버(`DELETE /todos/<id>`)에 요청을 보내 해당 항목을 제거합니다.

## 🚀 로컬에서 실행하기

### 1. 백엔드 서버 실행

```bash
pip install -r requirements.txt
python app.py
```

서버가 `http://localhost:5000`에서 실행됩니다.

### 2. 프론트엔드 실행

`index.html`을 VS Code의 **Live Server** 확장으로 열면 됩니다.

> ⚠️ `script.js`의 `SERVER_URL`을 로컬 서버 주소(`http://localhost:5000/todos`)로 맞춰주세요.

## 🌐 배포

- **백엔드**: Render에 GitHub 저장소를 연결하여 배포 (Build: `pip install -r requirements.txt`, Start: `python app.py`)
- **프론트엔드**: GitHub Pages를 통해 정적 파일 배포

> 무료 호스팅 특성상 일정 시간 사용하지 않으면 서버가 잠들 수 있으며, 첫 요청 시 응답이 느릴 수 있습니다.

## 📚 배운 점

- HTML/CSS/JavaScript로 동적인 화면 구성하기
- Fetch API로 프론트엔드와 백엔드가 데이터를 주고받는 방법
- Flask로 REST API(GET/POST/DELETE) 만들기
- JSON 파일을 이용한 간단한 데이터 영속성 구현
- CORS 개념과 설정 방법
- 프론트엔드/백엔드를 각각 다른 플랫폼(GitHub Pages, Render)에 배포하는 방법

## 📌 향후 개선 아이디어

- 할 일 수정 기능 추가
- 카테고리/마감일 기능 추가
- 데이터베이스(SQLite 등)로 전환