#### 1. git clone 마치시면 VScode Extension에서 'esLint' 'Prettier' 각각 설치해주세요 !

> "eslint는 코드 퀄리티를 보장하도록 도와주고, prettier는 코드 스타일을 깔끔하게 혹은 통일되도록 도와준다."

[참고](https://seogeurim.tistory.com/15?category=981579) 여기 들어가셔서 이미 패키지는 모두 설치했기 때문에 1-1.만 해주시면 됩니다.

#### 2. feat/[기능명 or 컴포넌트명] 으로 branch 생성하기

- `git branch` : _브랜치 목록 확인 하고_

- `git branch feat/navigationBar` : _작업할 내용으로 feat 브랜치 만들고_

- `git checkout feat/navigationBar` : _해당 브랜치로 들어가서 작업을 시작, 완료합니다._

- `git add <파일명>` : _해당 작업을 커밋할 준비합니다._

- `git commit -m "feat: 네비게이션 바 작업 완료"` : _회의 때 정한 방식에 따라 메세지 작성 후 커밋합니다._

- `git push --set-upstream origin <branch name>` : _로컬 브랜치(내 컴퓨터)를 원격 저장소(깃랩 레포)에 추가하고 커밋을 푸쉬합니다._
  - 최초 이 명령어를 실행한 뒤, 이후 작업에서 MR하지 않고 해당 브랜치 업데이트를 위해 push할 경우 `git push`만 입력하셔도 됩니다.

-> 모든 작업이 완료된 이후 "develop"에 merge request한 후 리뷰가 끝나면 develop에 반영됩니다.

-> 특별한 경우가 아니면 mr이 끝나고 개개인이 작업한 feature 원격브랜치는 삭제해주셔도 됩니다.(삭제 이후엔 깃랩에서 조회되지 않습니다.)

-> 로컬브랜치는 `git branch -d 브랜치명` 으로 삭제해주세요.

#### 3. (중요)push한 이후엔 모든 작업 때마다 `git pull` 하는 것을 잊지말아주세요.

#### 4. 기타 git 관련 명령어는 구글링을 통해 쉽게 찾아볼 수 있습니다 !
