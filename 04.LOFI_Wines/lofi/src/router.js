// 1. 라이브러리 불러오기.
import { createWebHistory, createRouter } from "vue-router";

// 2. 컴포넌트 불러오기.
// import 컴포넌트명 from "컴포넌트위치";
import main from './components/com-Main.vue'
import contact from './components/com-Contact.vue'
import producers from './components/com-Producers.vue'
import theWineList from './components/com-Thewinelist.vue'
import company from './components/com-Company.vue'
import about from './components/com-About.vue'

// 3. 경로를 정의하고, 각 경로를 컴포넌트와 매핑.
const routes = [
  // {path: "/경로", component: import해온 컴포넌트명},
  {path: "/PJ-LOFI", component: main},
  {path: "/producers", component: producers, name:'producersPage'},
  {path: "/company/:id", component: company, name:'companyPage'},
  {path: "/company/:id/:wineName/", component: about, name:'aboutPage'},
  {path: "/theWineList", component: theWineList, name:'theWineListPage'},
  {path: "/contact", component: contact, name:'contactPage'},
];

// 4. 위에 만든 `routes`변수를 전달해 라우터 인스턴스를 생성.
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 