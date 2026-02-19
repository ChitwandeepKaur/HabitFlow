import { getState } from "./store/store.js";
import {renderToday} from './views/todayView.js';
import {getTodayISO, formatPretttyDate} from './domain/date.js';

const todayDateEl = document.getElementById('today-date');
const isoDate = getTodayISO();
todayDateEl.textContent = formatPretttyDate(isoDate);


renderToday(getState(), isoDate);