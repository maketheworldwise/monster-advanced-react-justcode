# monster-advanced-react-justcode

> Lectures/UrlParameters, Lecture/Pagination 코드를 이용하여 라우팅 및 페이지네이션 실습

## 🚀 Mission 1

**Dynamic Routing**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

- Lectures/UrlParameters 에 컴포넌트가 어떻게 나뉘어 있는지 확인
- npm start 를 한 후, /monsters 으로 이동하여 몬스터 카드가 나오는 것을 확인
- 몬스터 카드를 눌렀을 때, /monsters/detail/ 로 이동하도록 구현
- 각 카드에 해당하는 id 의 몬스터가 나타나도록 구현

![](./docs/images/detail.gif)

- MonsterDetail 페이지에 있는 Previous, Next, Back to Monsters List 버튼을 구현

![](./docs/images/detail-btn.gif)

- 백엔드 API 명세서
  - Base Url: `https://jsonplaceholder.typicode.com`
  - End Point:
    1. `/users/` → 전체 데이터
    2. `/users/:id` → 특정 데이터

</div>
</details>

## 🚀 Mission 2

**Pagination**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

- npm start 를 한 후, /pagination 으로 이동하여 유저의 정보가 담긴 카드들과 5개의 버튼 확인
- 총 100개의 데이터가 5개의 버튼에 나뉘어서 20개씩 보여질 수 있도록 구현
  - 예를 들어, 1번 버튼을 누르면 첫 20개의 데이터가 화면에 출력되고, 2번 버튼을 누르면 두번째 데이터를 화면에 출력

![](./docs/images/pagination.gif)

- 백엔드 API 명세서
  - Base Url: `https://node-pagnation.herokuapp.com`
  - End Point: `/users`
  - 사용가능한 Query Parameter
    - `limit` : 한 페이지에서 보여줄 데이터의 개수.
    - `offset` : 데이터의 시작 index
    - ex) `?offest=10&limit=10` : 10 ~ 19 번째의 데이터. (총 10개)

</div>
</details>
