import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductPage from '../views/ProductPage.vue'

export const routes: RouteRecordRaw[] = [
  { path: '', component: HomePage, name: 'home' },
  { path: '/technology', component: TechnologyPage, name: 'technology' },
  { path: '/schedule', component: FlightSchedulePage, name: 'flightSchedule' },
  { path: '/guarantees', component: GuaranteesPage, name: 'guarantees' },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/contacts', component: ContactsPage, name: 'contacts' },
]
