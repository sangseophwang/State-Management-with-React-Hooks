# 원리

- Redux의 Store, Action, Dispatch의 개념을 활용해 훅을 제작한다.
- Store는 Dispatch가 작동할 때마다 값이 바뀐다.
- Dispatch는 작동할 때마다 Store를 작동시킨다.
- Redux에서는 Action이라는 Dispatch를 실행시키는 일종의 스위치가 있지만, 여기서는 인자로 보내서 작동시킨다.

# 코드 설명

- 먼저 데이터를 저장할 store와 호출을 감지하는 listeners라는 Set을 만든다.

dispatch

- dispatch를 실행하면 인자로 받아온 action이 함수인지 여부에 따라 그에 맞게 store 값을 변경해준다.
- 그리고 listeners 안에 있는 호출 요소인 listener를 실행한다.
- 여기서 listener는 useStore에서 listeners Set 내부에 넣은 setState이다.

useStore

- useStore는 변화를 감지해 store를 반환하는 함수이다.
- const [,listener] = useState(); 에서 첫번째 요소가 없는데, 여기서 setState는 다음과 같은 용도로 사용한다.
  const listener: React.Dispatch<(prevState:undefined) => undefined>
- 일종의 함수이자 useStore를 실행시킬 수 있는 스위치 역할을 한다.
- dispatch의 요청을 감지한 listener는 useStore를 실행시키고 listeners를 업데이트한 다음 store 값을 반환해준다.

정리하자면 변화를 요청하는 dispatch, 그리고 그 변화 요청을 감지해 변화한 값을 반환하는 useStore로 일종의 전역 관리를 할 수 있게 된다.
