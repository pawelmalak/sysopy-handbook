import { getData } from './getData';
import 'dayjs/locale/pl';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('pl');
dayjs.extend(relativeTime);

export const displayStatistics = async () => {
  
  const container = document.querySelector('#questions-stats-container');
  let data = await getData('Statistics');
  data = data[0];

  container.innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Ostatnio dodano:<span class="float-right">${dayjs().to(dayjs(data.latest_update, 'YYYY-MM-DD HH:mm:ss'))}</span></li>
      <li class="list-group-item">Pytań w bazie:<span class="float-right">${data.question_count}</span></li>
      <li class="list-group-item">Dodanych dzisiaj:<span class="float-right">${data.added_today}</span></li>
    </ul>
  `;

}