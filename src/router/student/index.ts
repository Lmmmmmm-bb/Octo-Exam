import { RouteRecordRaw } from 'vue-router';
import { RouterNameEnum } from '../type';

export const studentRouter: RouteRecordRaw[] = [
  {
    path: '/space/exam-list',
    name: RouterNameEnum.ExamList,
    component: () => import('@/layouts/exam-list/index.vue'),
    meta: {
      title: 'Octo Exam - 试卷列表',
      activeMenu: RouterNameEnum.ExamList
    }
  }
];
