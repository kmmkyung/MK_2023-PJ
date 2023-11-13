// 1. 라이브러리 불러오기.
import { createWebHistory, createRouter } from "vue-router";
// 2. 컴포넌트 불러오기.
// import 컴포넌트명 from "컴포넌트위치";

// 3. 경로를 정의하고, 각 경로를 컴포넌트와 매핑.
const routes = [
  // {path: "/경로", component: import해온 컴포넌트명},
  // {path: "/경로", component: import해온 컴포넌트명},
  
];

// 4. 위에 만든 `routes`변수를 전달해 라우터 인스턴스를 생성.
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 