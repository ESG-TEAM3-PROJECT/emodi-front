# [포트폴리오] emodi :: 감정분석 일기장

`#감정분석` `#일기장` `#달력` `#회원가입/로그인` `#CRUD`

<aside>
💡 사용자가 각 날짜에 일기를 작성하여 올리면, Naver CLOVA의 감정 분석을 이용해 그날의 감정을 이모지로 표시하여 달력에 띄워주는 서비스입니다.

</aside>

### 개발 기간 : 2024.06.10~2024.06.27 (18일)

### Github Repository Link

> [https://github.com/ESG-TEAM3-PROJECT](https://github.com/ESG-TEAM3-PROJECT)  
[https://github.com/ESG-TEAM3-PROJECT/emodi-front](https://github.com/ESG-TEAM3-PROJECT/emodi-front)  
[https://github.com/ESG-TEAM3-PROJECT/emodi-back](https://github.com/ESG-TEAM3-PROJECT/emodi-back)  
> 

## 💭 개발 동기

> 이번 SW 엔지니어 트랙에서 배운 내용을 바탕으로 기본적인 CRUD 기능이 포함된 웹 서비스를 기획하게 되었습니다.
> 

> 여러 아이디어를 고려한 끝에, 회원가입 및 로그인 기능이 필요한 일기장 서비스를 만들기로 결정했습니다.
> 

> 일반적인 일기장과 차별점을 두기 위해 Naver CLOVA에서 제공하는 Sentiment API를 활용하여 사용자가 작성한 글의 감정을 분석해주는 기능을 추가하였습니다.
> 

## 📹 시연 영상

[https://youtu.be/YgZpJEplCP0](https://youtu.be/YgZpJEplCP0)

## 🪟 주요 기능

1. **로그인 및 회원가입 기능**
    - 회원가입 페이지에서는 이메일, 비밀번호를 입력 받는다.
    - 비밀번호를 재확인하는 입력란을 통해 비밀번호를 제대로 입력했는지 다시 확인한다.
    - 로그인 페이지에서는 이메일과 비밀번호를 입력받아 인증을 수행한다.
    - 로그인 성공 시 메인 페이지로 리다이렉트되며, 사용자는 자신의 일기를 작성 및 관리할 수 있다.
    - 로그아웃 기능을 제공하여 사용자가 언제든지 로그아웃할 수 있다.
2. **메인 페이지에서 달력 페이지로 넘어가서 일기 작성 기능**
    - 사용자가 캘린더의 특정 날짜를 클릭하면 해당 날짜에 일기를 작성할 수 있는 페이지로 이동한다.
    - 일기 작성 페이지에서는 제목과 본문을 입력한다.
    - 작성 완료 버튼을 클릭하면 일기가 저장되고, 감정 분석이 자동으로 수행된다.
    - 감정 분석 결과에 따라 해당 날짜에 기분을 나타내는 이모지가 캘린더에 표시된다.
3. **일기 조회 기능**
    - 사용자는 캘린더에서 특정 날짜를 클릭하여 해당 날짜의 일기를 조회할 수 있다.
    - 일기 조회 페이지에서는 제목, 작성 날짜, 본문 내용이 표시된다.

## 🖥️ 사용한 기술

### Front : Next.js, React, Typescript, Styled-components
![Untitled 1](https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/d841e1e2-a45b-43c0-b645-ff1390e9258b)
![Untitled 2](https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/87fc740b-ea65-4267-b1e0-c3b74d7a396c)
![Untitled](https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/7611dc6a-afc1-433a-8e2a-d33cfde35c07)
![Untitled 3](https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/d26f18f7-f5f7-4d88-bbe8-bef6f15d66b8)



### Back : JAVA Springboot, MySQL
<img width="200" alt="Untitled 4" src="https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/8daa8af6-31e5-4a66-ac33-0411a8eb4e27">  
<img width="200" alt="Untitled 5" src="https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/50bd2857-5e6d-470d-a22e-03f7f08c4e25">  

![Untitled 6](https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/c69a0100-761d-4ec2-a66d-b5a5dcf82eec)

### ThirdParty : CLOVA Sentiment API
![Untitled 7](https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/e096e412-46a6-4d96-b16a-c68272d329c2)
![Untitled 8](https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/3f63d4bb-0c4c-4956-be76-c6bf8fb8718b)


## 🔄 업데이트 계획

1. **일기 삭제 기능**
    - 캘린더에서 특정 날짜 일기의 삭제 버튼을 클릭하면 삭제 확인 메시지가 나타나고, 확인을 누르면 일기가 삭제된다.
    - 일기가 삭제되면 해당 날짜의 이모지도 함께 제거된다.
2. **일기 수정 기능**
    - 캘린더에서 특정 날짜의 일기의 수정 버튼을 클릭하면, 일기 수정 페이지에서는 제목과 본문을 수정할 수 있다.
    - 수정 완료 버튼을 클릭하면 일기가 업데이트되고, 감정 분석이 다시 수행된다.
    - 업데이트된 감정 분석 결과에 따라 캘린더의 이모지가 변경된다.
3. **캘린더에서 이모지와 사용자 작성 제목 보기**
    - 메인 페이지인 캘린더에서는 각 날짜에 작성된 일기의 감정 분석 결과를 이모지로 표시한다.
    - 캘린더 화면에서는 제목과 이모지가 표시된다.
4. **감정 분석 통계 제공 기능**
    - 한 달 동안 분석된 사용자의 감정의 통계를 그래프로 시각화하여 제공한다.

## 💯 느낀 점

- 시험 기간, 강의 수강, 사후 테스트 등으로 인해 짧은 기간에 여러 일정이 겹쳐 있어 아쉬웠습니다.
- SSR과 SEO에서 강점을 가지는 Next.js를 사용할 수 있어 좋았습니다. 특히 Typescript를 처음부터 도입해서 Type 관련 오류가 없는 상태로 계속 진행할 수 있었습니다.
- Git flow와 Commit Convention을 정하고 각 기능별로 issue를 생성하고, issue 번호에 맞는 branch에서 작업한 후 Pull Request을 등록해서 논의하는 방식으로 진행할 수 있어 좋았습니다.

## 👥 팀원

| 이름 | Github |
| --- | --- |
| 김은수 (팀장, 백엔드) | https://github.com/minisyu |
| 김선진 (프론트엔드) | https://github.com/dawncoding |
| 김지환 (프론트엔드) | https://github.com/Turtle-Hwan |
| 김지현 (백엔드) | https://github.com/jyun27 |
| 이재성 (백엔드) | https://github.com/orgs/ESG-TEAM3-PROJECT/people/crLsTofu |

## 🎨 협업 툴

### Figma

[https://www.figma.com/design/7yxODfesEnCCOFNiI9tHbE/emodi?node-id=0-1&t=VSmWT02Kc6UMs1tU-1](https://www.figma.com/design/7yxODfesEnCCOFNiI9tHbE/emodi?node-id=0-1&t=VSmWT02Kc6UMs1tU-1)

![Untitled 9](https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/59c099d4-941b-48af-9f46-d521be88dd1f)

### Notion

![Untitled 10](https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/49016f2b-ced8-4661-a65a-5c0bfa3bfc92)
![Untitled 11](https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/f4b04b23-bb0d-4709-aad7-7f41703435e6)

<img width="300" alt="0" src="https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/9f00be00-bdf9-4611-a7b4-a7f49698647b">

<img width="300" alt="1" src="https://github.com/ESG-TEAM3-PROJECT/emodi-front/assets/67897841/c9d40d7c-9013-4988-a758-2c2371416473">
