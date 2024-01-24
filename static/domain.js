let semester = ''; // 學期
let year = ''; // 年級 or 科目

const onWordwallHandle = () => {
  const wordwall = document.getElementById('wordwall');
  wordwall.querySelectorAll('.subject').forEach((el) => {
    el.classList.remove('show');

    el.classList.contains('chinese') && el.classList.add('show');
    el.classList.contains('math') && el.classList.add('show');

    if (year === '1年級' || year === '2年級') {
      el.classList.contains('life') && el.classList.add('show');
    }

    if (year === '3年級' || year === '4年級' || year === '5年級' || year === '6年級') {
      el.classList.contains('science') && el.classList.add('show');
      el.classList.contains('socialStudies') && el.classList.add('show');
    }

    if (year === '3年級' || year === '5年級') {
      el.classList.contains('healthAndPhysical') && el.classList.add('show');
      el.classList.contains('integrated') && el.classList.add('show');
    }
  })
}

const onKahootHandle = () => {
  const kahoot = document.getElementById('kahoot');
  kahoot.querySelectorAll('.subject').forEach((el) => {
    el.classList.remove('show');

    el.classList.contains('chinese') && el.classList.add('show');
    el.classList.contains('math') && el.classList.add('show');

    if (year === '1年級' || year === '2年級') {
      el.classList.contains('life') && el.classList.add('show');
    }

    if (year === '3年級' || year === '4年級' || year === '5年級' || year === '6年級') {
      el.classList.contains('science') && el.classList.add('show');
      el.classList.contains('socialStudies') && el.classList.add('show');
    }
  })
}

const onQuizizzHandle = () => {
  const quizizz = document.getElementById('quizizz');
  quizizz.querySelectorAll('.subject').forEach((el) => {
    el.classList.remove('show');

    el.classList.contains('chinese') && el.classList.add('show');
    el.classList.contains('math') && el.classList.add('show');

    if (year === '3年級' || year === '4年級' || year === '5年級' || year === '6年級') {
      el.classList.contains('science') && el.classList.add('show');
      el.classList.contains('socialStudies') && el.classList.add('show');
    }
  })
}

const onQuizletHandle = () => {
  const quizlet = document.getElementById('quizlet');
  quizlet.querySelectorAll('.subject').forEach((el) => {
    el.classList.remove('show');
    el.classList.contains('chinese') && el.classList.add('show');

    if (year === '3年級' || year === '4年級' || year === '5年級' || year === '6年級') {
      el.classList.contains('science') && el.classList.add('show');
      el.classList.contains('socialStudies') && el.classList.add('show');
    }
  })
}

const onCoggleHandle = () => {
  const coggle = document.getElementById('coggle');
  coggle.querySelectorAll('.subject').forEach((el) => {
    el.classList.remove('show');

    el.classList.contains('chinese') && el.classList.add('show');
    if (year === '3年級' || year === '4年級' || year === '5年級') {
      el.classList.contains('socialStudies') && el.classList.add('show');
    }
  })
}

const yearSelector = (id, index) => {
  console.log('id', id)
  console.log('index', index)
  const el = document.getElementById(id);
  el.querySelectorAll('.button').forEach((el, idx) => {
    el.classList.remove('active')
    if (idx === index){ 
      el.classList.add('active');
      if (id === 'semester') semester = el.innerHTML;
      if (id === 'year') year = el.innerHTML;
    }
  })
  
  if (semester && year) {
    document.getElementById('year_options').classList.add('active');
    document.getElementById('subject_options').classList.remove('active');
    
    onWordwallHandle();
    onKahootHandle();
    onQuizizzHandle();
    onQuizletHandle();
    onCoggleHandle();
  }
}

const goToResource = (url) => {
  window.open(url);
}

const clickResource = (subject, resource) => {
  switch (true) {
    case semester === '上學期' && year === '1年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R3mycJ9EzRADvItGWiWICFfscB0SFDIyuS-1ciyEnK8/edit#gid=2022126782')
      break;
    case semester === '上學期' && year === '1年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1uLLi20QdxzZ0-nWkLkZFqPilqxrTy1ER_QmRQHVnzjE/edit#gid=0')
      break;
    case semester === '上學期' && year === '1年級' && subject === '生活' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1aeeEH4huYhexytYZXAGsQaqIoPEASCvmzUCLU1_sKHE/edit#gid=0')
      break;
    case semester === '上學期' && year === '1年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1JXNtjlBnfBkoewF_R9ju9K2Mgaz_NHJbxYUfADo6jfA/edit#gid=0')
      break;
    case semester === '上學期' && year === '1年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1fvtOn7Q7w2Nk1o2-KDWmHL-pKsQawOaLanLwTzLtaxg/edit#gid=0')
      break;
    case semester === '上學期' && year === '1年級' && subject === '生活' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1MlAo8W9fGCI46wzUP8BqppskOj9bmH6H_r4EsKuZqLc/edit#gid=584550200')
      break;
    case semester === '上學期' && year === '1年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1ZqxE7VlvBDhOtS7NYJl0wGwrM6P1_BSFlDNpKXr_bBU/edit#gid=0')
      break;
    case semester === '上學期' && year === '1年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1SyJb-CdHyDQGndgL1aN8IH7qw4YA5sbvJfmYwEWdcQQ/edit#gid=0')
      break;
    case semester === '上學期' && year === '1年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1XjlkQvxRmuDYnYmxEup7WElZkUbCZ8f6i6lWHbMgozA/edit#gid=2022126782')
      break;
    case semester === '上學期' && year === '1年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Bl7-nsZssALYTJiwxvdIj5iQQHXUSPAnYX925TpBgQ0/edit#gid=1871456719')
      break;
    case semester === '下學期' && year === '1年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1Niwb7wbptYr9NyDZjtWNvxuMojHLeRH_-IlXGqtRetQ/edit#gid=0')
      break;
    case semester === '下學期' && year === '1年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/18wOXY5ouBbZTDu07vVBHtYRO_1MHvDr7jL_mXqVnekY/edit#gid=0')
      break;
    case semester === '下學期' && year === '1年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/11uQ5YIfu-62uto6UvT0hsz9c0TrdXbO5c5Uu0dlAbE4/edit#gid=0')
      break;
    case semester === '下學期' && year === '1年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1okfE42GJnGTcNaD0M6px7PeYhEobZwuPs3PNESyVxps/edit#gid=2022126782')
      break;
    case semester === '下學期' && year === '1年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Ih1YuwDMYc7yZqpShY3M8nFGblK_6RpneqAIQ3g5NZs/edit#gid=0')
      break;
    case semester === '下學期' && year === '1年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1nAYesSGsNXIpjpMyoCYPlya7JNdevl8cna7DGBTCYeU/edit#gid=0')
      break;
    case semester === '下學期' && year === '1年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1tNLtPxkF0r6SylprXbr_LTw4ovjvMJ8fkcB4kmYnlCY/edit#gid=0')
      break;
    case semester === '下學期' && year === '1年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/11-bvjg-1QBtHliO8V5EMSg9mTBxPSdDUiJpxL3jK-DY/edit#gid=0')
      break;
    case semester === '下學期' && year === '1年級' && subject === '生活' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1mdSyM1Ppr-e9L-4Obt9aLx8YfYoGaKXpDFg0nb7agoY/edit#gid=584550200')
      break;
    case semester === '下學期' && year === '1年級' && subject === '生活' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1fddgZGME__Wm3tbilPdxz5X80ugK6ZHNaYUBKiefNJA/edit#gid=0')
      break;


    case semester === '上學期' && year === '2年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R3mycJ9EzRADvItGWiWICFfscB0SFDIyuS-1ciyEnK8/edit#gid=1210656762')
      break;
    case semester === '上學期' && year === '2年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1uLLi20QdxzZ0-nWkLkZFqPilqxrTy1ER_QmRQHVnzjE/edit#gid=916856904')
      break;
    case semester === '上學期' && year === '2年級' && subject === '生活' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1aeeEH4huYhexytYZXAGsQaqIoPEASCvmzUCLU1_sKHE/edit#gid=1584925057')
      break;
    case semester === '上學期' && year === '2年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1JXNtjlBnfBkoewF_R9ju9K2Mgaz_NHJbxYUfADo6jfA/edit#gid=169878256')
      break;
    case semester === '上學期' && year === '2年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1fvtOn7Q7w2Nk1o2-KDWmHL-pKsQawOaLanLwTzLtaxg/edit#gid=1714521674')
      break;
    case semester === '上學期' && year === '2年級' && subject === '生活' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1MlAo8W9fGCI46wzUP8BqppskOj9bmH6H_r4EsKuZqLc/edit#gid=807048046')
      break;
    case semester === '上學期' && year === '2年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1ZqxE7VlvBDhOtS7NYJl0wGwrM6P1_BSFlDNpKXr_bBU/edit#gid=1960013821')
      break;
    case semester === '上學期' && year === '2年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1SyJb-CdHyDQGndgL1aN8IH7qw4YA5sbvJfmYwEWdcQQ/edit#gid=916856904')
      break;
    case semester === '上學期' && year === '2年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1XjlkQvxRmuDYnYmxEup7WElZkUbCZ8f6i6lWHbMgozA/edit#gid=1210656762')
      break;
    case semester === '上學期' && year === '2年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Bl7-nsZssALYTJiwxvdIj5iQQHXUSPAnYX925TpBgQ0/edit#gid=816137345')
      break;
    case semester === '下學期' && year === '2年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1nAYesSGsNXIpjpMyoCYPlya7JNdevl8cna7DGBTCYeU/edit#gid=1714521674')
      break;
    case semester === '下學期' && year === '2年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1tNLtPxkF0r6SylprXbr_LTw4ovjvMJ8fkcB4kmYnlCY/edit#gid=916856904')
      break;
    case semester === '下學期' && year === '2年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/11-bvjg-1QBtHliO8V5EMSg9mTBxPSdDUiJpxL3jK-DY/edit#gid=916856904')
      break;
    case semester === '下學期' && year === '2年級' && subject === '生活' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1mdSyM1Ppr-e9L-4Obt9aLx8YfYoGaKXpDFg0nb7agoY/edit#gid=807048046')
      break;
    case semester === '下學期' && year === '2年級' && subject === '生活' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1fddgZGME__Wm3tbilPdxz5X80ugK6ZHNaYUBKiefNJA/edit#gid=1584925057')
      break;


    case semester === '上學期' && year === '3年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R3mycJ9EzRADvItGWiWICFfscB0SFDIyuS-1ciyEnK8/edit#gid=1584925057')
      break;
    case semester === '上學期' && year === '3年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1uLLi20QdxzZ0-nWkLkZFqPilqxrTy1ER_QmRQHVnzjE/edit#gid=1871020819')
      break;
    case semester === '上學期' && year === '3年級' && subject === '自然' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=0')
      break;
    case semester === '上學期' && year === '3年級' && subject === '社會' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=141887502')
      break;
    case semester === '上學期' && year === '3年級' && subject === '健體' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1NXQORBOeZwe2iSLxwOulXFND4aK9fY2Czc4axZ99dvQ/edit#gid=0')
      break;
    case semester === '上學期' && year === '3年級' && subject === '綜合' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1vZ2-ydzVBy72GjBI6Y_IdTT7zQAtBakljIg7IYDflBA/edit#gid=0')
      break;
    case semester === '上學期' && year === '3年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1JXNtjlBnfBkoewF_R9ju9K2Mgaz_NHJbxYUfADo6jfA/edit#gid=1278089206')
      break;
    case semester === '上學期' && year === '3年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1fvtOn7Q7w2Nk1o2-KDWmHL-pKsQawOaLanLwTzLtaxg/edit#gid=1224012546')
      break;
    case semester === '上學期' && year === '3年級' && subject === '自然' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=2080517712')
      break;
    case semester === '上學期' && year === '3年級' && subject === '社會' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=584550200')
      break;
    case semester === '上學期' && year === '3年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1ZqxE7VlvBDhOtS7NYJl0wGwrM6P1_BSFlDNpKXr_bBU/edit#gid=1268599539')
      break;
    case semester === '上學期' && year === '3年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1SyJb-CdHyDQGndgL1aN8IH7qw4YA5sbvJfmYwEWdcQQ/edit#gid=1871020819')
      break;
    case semester === '上學期' && year === '3年級' && subject === '自然' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=1871020819')
      break;
    case semester === '上學期' && year === '3年級' && subject === '社會' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1871020819')
      break;
    case semester === '上學期' && year === '3年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1XjlkQvxRmuDYnYmxEup7WElZkUbCZ8f6i6lWHbMgozA/edit#gid=1584925057')
      break;
    case semester === '上學期' && year === '3年級' && subject === '自然' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=141887502')
      break;
    case semester === '上學期' && year === '3年級' && subject === '社會' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=141887502')
      break;
    case semester === '上學期' && year === '3年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Bl7-nsZssALYTJiwxvdIj5iQQHXUSPAnYX925TpBgQ0/edit#gid=1584925057')
      break;
    case semester === '上學期' && year === '3年級' && subject === '社會' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1tOmn7C0wIP_z4OfozvKaWdJXMPSf89za4qo97Q0jUPk/edit#gid=1584925057')
      break;
    case semester === '下學期' && year === '3年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1nAYesSGsNXIpjpMyoCYPlya7JNdevl8cna7DGBTCYeU/edit#gid=1224012546')
      break;
    case semester === '下學期' && year === '3年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1tNLtPxkF0r6SylprXbr_LTw4ovjvMJ8fkcB4kmYnlCY/edit#gid=1871020819')
      break;
    case semester === '下學期' && year === '3年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/11-bvjg-1QBtHliO8V5EMSg9mTBxPSdDUiJpxL3jK-DY/edit#gid=1871020819')
      break;
    case semester === '下學期' && year === '3年級' && subject === '自然' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1GfIIoQfG1cB_xZCaBGGkeG4dXtx57cBtr8O2bBBTw8U/edit#gid=584550200')
      break;
    case semester === '下學期' && year === '3年級' && subject === '自然' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1-7KvxssZlLnBMFMFq0kXWDGQJr3v6gTqC2HklZ3sV7k/edit#gid=1871020819')
      break;
    case semester === '下學期' && year === '3年級' && subject === '自然' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1mFuiMfnUQceMJqi8_CD_F7oCBK7NpIuoQXecp1BJYHM/edit#gid=141887502')
      break;
    case semester === '下學期' && year === '3年級' && subject === '自然' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1EsIKspEsMxKOiLvnO36OTUHu8tywwlxujEHfmdXxR4o/edit#gid=0')
      break;
    case semester === '下學期' && year === '3年級' && subject === '社會' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1zB_sC_GCKkBRUO6NlBy3dHy3YWOJshkQ8RbyK1obaO8/edit#gid=584550200')
      break;
    case semester === '下學期' && year === '3年級' && subject === '社會' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1XL1KUycAXfa0amk28nXuh_nPnKQCpEGu-ZFC0SF7Yxw/edit#gid=1871020819')
      break;
    case semester === '下學期' && year === '3年級' && subject === '社會' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1BXbNVxpMam8YIzw-xrL3R32RlICWzOCycvZA2iqLUNg/edit#gid=141887502')
      break;
    case semester === '下學期' && year === '3年級' && subject === '社會' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1n_AxK7kLOHSDyenQs6MNwNccqps8-CF8WP9ahpJmPT8/edit#gid=141887502')
      break;
    case semester === '下學期' && year === '3年級' && subject === '社會' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1mjy192TNwUe1sWgAAZbRF8DujrMAg_cm6VT-0zgleOo/edit#gid=1584925057')
      break;
    case semester === '下學期' && year === '3年級' && subject === '健體' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1ZgHxmWNBhSATqfRkXySeFw4sQ2jIuns58XrSaJhtxfU/edit#gid=0')
      break;
    case semester === '下學期' && year === '3年級' && subject === '綜合' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R9e2zA0TdkN0qY1AzURcmvUQwj6lrvbzaaw5SWJy_48/edit#gid=0')
      break;




    case semester === '上學期' && year === '4年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R3mycJ9EzRADvItGWiWICFfscB0SFDIyuS-1ciyEnK8/edit#gid=928332399')
      break;
    case semester === '上學期' && year === '4年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1uLLi20QdxzZ0-nWkLkZFqPilqxrTy1ER_QmRQHVnzjE/edit#gid=2005991381')
      break;
    case semester === '上學期' && year === '4年級' && subject === '自然' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=1584925057')
      break;
    case semester === '上學期' && year === '4年級' && subject === '社會' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=662919757')
      break;
    case semester === '上學期' && year === '4年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1JXNtjlBnfBkoewF_R9ju9K2Mgaz_NHJbxYUfADo6jfA/edit#gid=79428673')
      break;
    case semester === '上學期' && year === '4年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1fvtOn7Q7w2Nk1o2-KDWmHL-pKsQawOaLanLwTzLtaxg/edit#gid=1463111299')
      break;
    case semester === '上學期' && year === '4年級' && subject === '自然' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=1658324078')
      break;
    case semester === '上學期' && year === '4年級' && subject === '社會' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=807048046')
      break;
    case semester === '上學期' && year === '4年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1ZqxE7VlvBDhOtS7NYJl0wGwrM6P1_BSFlDNpKXr_bBU/edit#gid=1997495420')
      break;
    case semester === '上學期' && year === '4年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1SyJb-CdHyDQGndgL1aN8IH7qw4YA5sbvJfmYwEWdcQQ/edit#gid=2005991381')
      break;
    case semester === '上學期' && year === '4年級' && subject === '自然' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=2005991381')
      break;
    case semester === '上學期' && year === '4年級' && subject === '社會' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1668464697')
      break;
    case semester === '上學期' && year === '4年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1XjlkQvxRmuDYnYmxEup7WElZkUbCZ8f6i6lWHbMgozA/edit#gid=928332399')
      break;
    case semester === '上學期' && year === '4年級' && subject === '自然' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=1261575536')
      break;
    case semester === '上學期' && year === '4年級' && subject === '社會' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=245821822')
      break;
    case semester === '上學期' && year === '4年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Bl7-nsZssALYTJiwxvdIj5iQQHXUSPAnYX925TpBgQ0/edit#gid=940029605')
      break;
    case semester === '上學期' && year === '4年級' && subject === '社會' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1tOmn7C0wIP_z4OfozvKaWdJXMPSf89za4qo97Q0jUPk/edit#gid=416490095')
      break;
    case semester === '下學期' && year === '4年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1nAYesSGsNXIpjpMyoCYPlya7JNdevl8cna7DGBTCYeU/edit#gid=1463111299')
      break;
    case semester === '下學期' && year === '4年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1tNLtPxkF0r6SylprXbr_LTw4ovjvMJ8fkcB4kmYnlCY/edit#gid=2005991381')
      break;
    case semester === '下學期' && year === '4年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/11-bvjg-1QBtHliO8V5EMSg9mTBxPSdDUiJpxL3jK-DY/edit#gid=2005991381')
      break;
    case semester === '下學期' && year === '4年級' && subject === '自然' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1GfIIoQfG1cB_xZCaBGGkeG4dXtx57cBtr8O2bBBTw8U/edit#gid=807048046')
      break;
    case semester === '下學期' && year === '4年級' && subject === '自然' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1-7KvxssZlLnBMFMFq0kXWDGQJr3v6gTqC2HklZ3sV7k/edit#gid=2005991381')
      break;
    case semester === '下學期' && year === '4年級' && subject === '自然' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1mFuiMfnUQceMJqi8_CD_F7oCBK7NpIuoQXecp1BJYHM/edit#gid=1261575536')
      break;
    case semester === '下學期' && year === '4年級' && subject === '自然' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1EsIKspEsMxKOiLvnO36OTUHu8tywwlxujEHfmdXxR4o/edit#gid=1584925057')
      break;
    case semester === '下學期' && year === '4年級' && subject === '社會' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1zB_sC_GCKkBRUO6NlBy3dHy3YWOJshkQ8RbyK1obaO8/edit#gid=807048046')
      break;
    case semester === '下學期' && year === '4年級' && subject === '社會' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1XL1KUycAXfa0amk28nXuh_nPnKQCpEGu-ZFC0SF7Yxw/edit#gid=1668464697')
      break;
    case semester === '下學期' && year === '4年級' && subject === '社會' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1BXbNVxpMam8YIzw-xrL3R32RlICWzOCycvZA2iqLUNg/edit#gid=573244975')
      break;
    case semester === '下學期' && year === '4年級' && subject === '社會' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1n_AxK7kLOHSDyenQs6MNwNccqps8-CF8WP9ahpJmPT8/edit#gid=2090638246')
      break;
    case semester === '下學期' && year === '4年級' && subject === '社會' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1mjy192TNwUe1sWgAAZbRF8DujrMAg_cm6VT-0zgleOo/edit#gid=416490095')
      break;




    case semester === '上學期' && year === '5年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R3mycJ9EzRADvItGWiWICFfscB0SFDIyuS-1ciyEnK8/edit#gid=235818073')
      break;
    case semester === '上學期' && year === '5年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1uLLi20QdxzZ0-nWkLkZFqPilqxrTy1ER_QmRQHVnzjE/edit#gid=1343481458')
      break;
    case semester === '上學期' && year === '5年級' && subject === '自然' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=1934389515')
      break;
    case semester === '上學期' && year === '5年級' && subject === '社會' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=1244559183')
      break;
    case semester === '上學期' && year === '5年級' && subject === '健體' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1NXQORBOeZwe2iSLxwOulXFND4aK9fY2Czc4axZ99dvQ/edit#gid=1584925057')
      break;
    case semester === '上學期' && year === '5年級' && subject === '綜合' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1vZ2-ydzVBy72GjBI6Y_IdTT7zQAtBakljIg7IYDflBA/edit#gid=1584925057')
      break;
    case semester === '上學期' && year === '5年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1JXNtjlBnfBkoewF_R9ju9K2Mgaz_NHJbxYUfADo6jfA/edit#gid=1475000600')
      break;
    case semester === '上學期' && year === '5年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1fvtOn7Q7w2Nk1o2-KDWmHL-pKsQawOaLanLwTzLtaxg/edit#gid=736026928')
      break;
    case semester === '上學期' && year === '5年級' && subject === '自然' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=751359880')
      break;
    case semester === '上學期' && year === '5年級' && subject === '社會' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=741572221')
      break;
    case semester === '上學期' && year === '5年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1ZqxE7VlvBDhOtS7NYJl0wGwrM6P1_BSFlDNpKXr_bBU/edit#gid=1797921997')
      break;
    case semester === '上學期' && year === '5年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1SyJb-CdHyDQGndgL1aN8IH7qw4YA5sbvJfmYwEWdcQQ/edit#gid=1343481458')
      break;
    case semester === '上學期' && year === '5年級' && subject === '自然' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=1343481458')
      break;
    case semester === '上學期' && year === '5年級' && subject === '社會' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1768453216')
      break;
    case semester === '上學期' && year === '5年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1XjlkQvxRmuDYnYmxEup7WElZkUbCZ8f6i6lWHbMgozA/edit#gid=235818073')
      break;
    case semester === '上學期' && year === '5年級' && subject === '自然' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=2025731435')
      break;
    case semester === '上學期' && year === '5年級' && subject === '社會' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=1558318885')
      break;
    case semester === '上學期' && year === '5年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Bl7-nsZssALYTJiwxvdIj5iQQHXUSPAnYX925TpBgQ0/edit#gid=1318573361')
      break;
    case semester === '上學期' && year === '5年級' && subject === '社會' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1tOmn7C0wIP_z4OfozvKaWdJXMPSf89za4qo97Q0jUPk/edit#gid=812247135')
      break;
    case semester === '下學期' && year === '5年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1nAYesSGsNXIpjpMyoCYPlya7JNdevl8cna7DGBTCYeU/edit#gid=736026928')
      break;
    case semester === '下學期' && year === '5年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1tNLtPxkF0r6SylprXbr_LTw4ovjvMJ8fkcB4kmYnlCY/edit#gid=1343481458')
      break;
    case semester === '下學期' && year === '5年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/11-bvjg-1QBtHliO8V5EMSg9mTBxPSdDUiJpxL3jK-DY/edit#gid=1343481458')
      break;
    case semester === '下學期' && year === '5年級' && subject === '自然' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1GfIIoQfG1cB_xZCaBGGkeG4dXtx57cBtr8O2bBBTw8U/edit#gid=741572221')
      break;
    case semester === '下學期' && year === '5年級' && subject === '自然' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1-7KvxssZlLnBMFMFq0kXWDGQJr3v6gTqC2HklZ3sV7k/edit#gid=1343481458')
      break;
    case semester === '下學期' && year === '5年級' && subject === '自然' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1mFuiMfnUQceMJqi8_CD_F7oCBK7NpIuoQXecp1BJYHM/edit#gid=2025731435')
      break;
    case semester === '下學期' && year === '5年級' && subject === '自然' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1EsIKspEsMxKOiLvnO36OTUHu8tywwlxujEHfmdXxR4o/edit#gid=1934389515')
      break;
    case semester === '下學期' && year === '5年級' && subject === '社會' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1zB_sC_GCKkBRUO6NlBy3dHy3YWOJshkQ8RbyK1obaO8/edit#gid=741572221')
      break;
    case semester === '下學期' && year === '5年級' && subject === '社會' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1XL1KUycAXfa0amk28nXuh_nPnKQCpEGu-ZFC0SF7Yxw/edit#gid=1768453216')
      break;
    case semester === '下學期' && year === '5年級' && subject === '社會' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1BXbNVxpMam8YIzw-xrL3R32RlICWzOCycvZA2iqLUNg/edit#gid=1695506235')
      break;
    case semester === '下學期' && year === '5年級' && subject === '社會' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1n_AxK7kLOHSDyenQs6MNwNccqps8-CF8WP9ahpJmPT8/edit#gid=1833055741')
      break;
    case semester === '下學期' && year === '5年級' && subject === '社會' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1mjy192TNwUe1sWgAAZbRF8DujrMAg_cm6VT-0zgleOo/edit#gid=1670972641')
      break;
    case semester === '下學期' && year === '5年級' && subject === '健體' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1ZgHxmWNBhSATqfRkXySeFw4sQ2jIuns58XrSaJhtxfU/edit#gid=1584925057')
      break;
    case semester === '下學期' && year === '5年級' && subject === '綜合' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R9e2zA0TdkN0qY1AzURcmvUQwj6lrvbzaaw5SWJy_48/edit#gid=1584925057')
      break;




    case semester === '上學期' && year === '6年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R3mycJ9EzRADvItGWiWICFfscB0SFDIyuS-1ciyEnK8/edit#gid=117915105')
      break;
    case semester === '上學期' && year === '6年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1uLLi20QdxzZ0-nWkLkZFqPilqxrTy1ER_QmRQHVnzjE/edit#gid=694640157')
      break;
    case semester === '上學期' && year === '6年級' && subject === '自然' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=263286272')
      break;
    case semester === '上學期' && year === '6年級' && subject === '社會' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=1401154126')
      break;
    case semester === '上學期' && year === '6年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1JXNtjlBnfBkoewF_R9ju9K2Mgaz_NHJbxYUfADo6jfA/edit#gid=1992757129')
      break;
    case semester === '上學期' && year === '6年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1fvtOn7Q7w2Nk1o2-KDWmHL-pKsQawOaLanLwTzLtaxg/edit#gid=1639676729')
      break;
    case semester === '上學期' && year === '6年級' && subject === '自然' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=158759695')
      break;
    case semester === '上學期' && year === '6年級' && subject === '社會' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=158759695')
      break;
    case semester === '上學期' && year === '6年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1ZqxE7VlvBDhOtS7NYJl0wGwrM6P1_BSFlDNpKXr_bBU/edit#gid=2097448188')
      break;
    case semester === '上學期' && year === '6年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1SyJb-CdHyDQGndgL1aN8IH7qw4YA5sbvJfmYwEWdcQQ/edit#gid=694640157')
      break;
    case semester === '上學期' && year === '6年級' && subject === '自然' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=694640157')
      break;
    case semester === '上學期' && year === '6年級' && subject === '社會' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1823763126')
      break;
    case semester === '上學期' && year === '6年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1XjlkQvxRmuDYnYmxEup7WElZkUbCZ8f6i6lWHbMgozA/edit#gid=117915105')
      break;
    case semester === '上學期' && year === '6年級' && subject === '自然' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=1144388412')
      break;
    case semester === '上學期' && year === '6年級' && subject === '社會' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=829978289')
      break;
    case semester === '上學期' && year === '6年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Bl7-nsZssALYTJiwxvdIj5iQQHXUSPAnYX925TpBgQ0/edit#gid=1665130720')
      break;
    case semester === '下學期' && year === '6年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1nAYesSGsNXIpjpMyoCYPlya7JNdevl8cna7DGBTCYeU/edit#gid=1639676729')
      break;
    case semester === '下學期' && year === '6年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1tNLtPxkF0r6SylprXbr_LTw4ovjvMJ8fkcB4kmYnlCY/edit#gid=694640157')
      break;
    case semester === '下學期' && year === '6年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/11-bvjg-1QBtHliO8V5EMSg9mTBxPSdDUiJpxL3jK-DY/edit#gid=694640157')
      break;
    case semester === '下學期' && year === '6年級' && subject === '自然' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1GfIIoQfG1cB_xZCaBGGkeG4dXtx57cBtr8O2bBBTw8U/edit#gid=158759695')
      break;
    case semester === '下學期' && year === '6年級' && subject === '自然' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1-7KvxssZlLnBMFMFq0kXWDGQJr3v6gTqC2HklZ3sV7k/edit#gid=694640157')
      break;
    case semester === '下學期' && year === '6年級' && subject === '自然' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1mFuiMfnUQceMJqi8_CD_F7oCBK7NpIuoQXecp1BJYHM/edit#gid=1144388412')
      break;
    case semester === '下學期' && year === '6年級' && subject === '自然' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1EsIKspEsMxKOiLvnO36OTUHu8tywwlxujEHfmdXxR4o/edit#gid=263286272')
      break;
    case semester === '下學期' && year === '6年級' && subject === '社會' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1zB_sC_GCKkBRUO6NlBy3dHy3YWOJshkQ8RbyK1obaO8/edit#gid=158759695')
      break;
    case semester === '下學期' && year === '6年級' && subject === '社會' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1XL1KUycAXfa0amk28nXuh_nPnKQCpEGu-ZFC0SF7Yxw/edit#gid=1823763126')
      break;
    case semester === '下學期' && year === '6年級' && subject === '社會' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1BXbNVxpMam8YIzw-xrL3R32RlICWzOCycvZA2iqLUNg/edit#gid=217098870')
      break;
    case semester === '下學期' && year === '6年級' && subject === '社會' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1n_AxK7kLOHSDyenQs6MNwNccqps8-CF8WP9ahpJmPT8/edit#gid=1738499245')
      break;
    default:
      break;
  }
}

const subjectSelector = (id , index) => {
  console.log('semester', semester)
  console.log('year', year)
  const el = document.getElementById(id);
  el.querySelectorAll('.button').forEach((el, idx) => {
    el.classList.remove('active')
    if (idx === index){
      el.classList.add('active');
      if (id === 'semester') semester = el.innerHTML;
      if (id === 'year') year = el.innerHTML;
    }
  })

  if (semester && year) {
    document.getElementById('subject_options').classList.add('active');
    document.getElementById('year_options').classList.remove('active');

    showHideOption();
  }

}

const showHideOption = () => {
  const treeYearOption = document.getElementById('3year');
  const fourYearOption = document.getElementById('4year');
  const fiveYearOption = document.getElementById('5year');
  yearOptionRemoveScience(treeYearOption);
  yearOptionRemoveScience(fourYearOption);
  yearOptionRemoveScience(fiveYearOption);

}

const yearOptionRemoveScience = (el) => {
  el.querySelectorAll('.subject').forEach((el) => {
    el.classList.add('show');
    if (year === "自然") {
      el.classList.contains('coggle') && el.classList.remove('show');
    }
  });
}


const onSocialStudiesHandle = () => {}

const clickSubjectResource = (resource, schoolYear) => {
  if (year === '自然') {
    switch (true) {
      case semester === '上學期' && resource === 'wordwall' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=0')
        break;
      case semester === '上學期' && resource === 'kahoot' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=2080517712')
        break;
      case semester === '上學期' && resource === 'quizizz' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=1871020819')
        break;
      case semester === '上學期' && resource === 'quizlet' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=141887502')
        break;
      case semester === '下學期' && resource === 'kahoot' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1GfIIoQfG1cB_xZCaBGGkeG4dXtx57cBtr8O2bBBTw8U/edit#gid=584550200')
        break;
      case semester === '下學期' && resource === 'quizizz' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1-7KvxssZlLnBMFMFq0kXWDGQJr3v6gTqC2HklZ3sV7k/edit#gid=1871020819')
        break;
      case semester === '下學期' && resource === 'quizlet' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1mFuiMfnUQceMJqi8_CD_F7oCBK7NpIuoQXecp1BJYHM/edit#gid=141887502')
        break;
      case semester === '下學期' && resource === 'wordwall' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1EsIKspEsMxKOiLvnO36OTUHu8tywwlxujEHfmdXxR4o/edit#gid=0')
        break;
  
      case semester === '上學期' && resource === 'wordwall' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=1584925057')
        break;
      case semester === '上學期' && resource === 'kahoot' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=1658324078')
        break;
      case semester === '上學期' && resource === 'quizizz' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=2005991381')
        break;
      case semester === '上學期' && resource === 'quizlet' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=1261575536')
        break;
      case semester === '下學期' && resource === 'kahoot' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1GfIIoQfG1cB_xZCaBGGkeG4dXtx57cBtr8O2bBBTw8U/edit#gid=807048046')
        break;
      case semester === '下學期' && resource === 'quizizz' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1-7KvxssZlLnBMFMFq0kXWDGQJr3v6gTqC2HklZ3sV7k/edit#gid=2005991381')
        break;
      case semester === '下學期' && resource === 'quizlet' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1mFuiMfnUQceMJqi8_CD_F7oCBK7NpIuoQXecp1BJYHM/edit#gid=1261575536')
        break;
      case semester === '下學期' && resource === 'wordwall' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1EsIKspEsMxKOiLvnO36OTUHu8tywwlxujEHfmdXxR4o/edit#gid=1584925057')
        break;
  
    
      case semester === '上學期' && resource === 'wordwall' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=1934389515')
        break;
      case semester === '上學期' && resource === 'kahoot' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=751359880')
        break;
      case semester === '上學期' && resource === 'quizizz' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=1343481458')
        break;
      case semester === '上學期' && resource === 'quizlet' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=2025731435')
        break;
      case semester === '下學期' && resource === 'kahoot' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1GfIIoQfG1cB_xZCaBGGkeG4dXtx57cBtr8O2bBBTw8U/edit#gid=741572221')
        break;
      case semester === '下學期' && resource === 'quizizz' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1-7KvxssZlLnBMFMFq0kXWDGQJr3v6gTqC2HklZ3sV7k/edit#gid=1343481458')
        break;
      case semester === '下學期' && resource === 'quizlet' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1mFuiMfnUQceMJqi8_CD_F7oCBK7NpIuoQXecp1BJYHM/edit#gid=2025731435')
        break;
      case semester === '下學期' && resource === 'wordwall' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1EsIKspEsMxKOiLvnO36OTUHu8tywwlxujEHfmdXxR4o/edit#gid=1934389515')
        break;
  
  
      case semester === '上學期' && resource === 'wordwall' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=263286272')
        break;
      case semester === '上學期' && resource === 'kahoot' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=158759695')
        break;
      case semester === '上學期' && resource === 'quizizz' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=694640157')
        break;
      case semester === '上學期' && resource === 'quizlet' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=1144388412')
        break;
      case semester === '下學期' && resource === 'kahoot' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1GfIIoQfG1cB_xZCaBGGkeG4dXtx57cBtr8O2bBBTw8U/edit#gid=158759695')
        break;
      case semester === '下學期' && resource === 'quizizz' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1-7KvxssZlLnBMFMFq0kXWDGQJr3v6gTqC2HklZ3sV7k/edit#gid=694640157')
        break;
      case semester === '下學期' && resource === 'quizlet' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1mFuiMfnUQceMJqi8_CD_F7oCBK7NpIuoQXecp1BJYHM/edit#gid=1144388412')
        break;
      case semester === '下學期' && resource === 'wordwall' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1EsIKspEsMxKOiLvnO36OTUHu8tywwlxujEHfmdXxR4o/edit#gid=263286272')
        break;
      default:
        break;
    }
  }

  if (year === '社會') {
    switch (true) {
      case semester === '上學期' && resource === 'wordwall' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=141887502')
        break;
      case semester === '上學期' && resource === 'kahoot' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=584550200')
        break;
      case semester === '上學期' && resource === 'quizizz' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1871020819')
        break;
      case semester === '上學期' && resource === 'quizlet' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=141887502')
        break;
      case semester === '上學期' && resource === 'coggle' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1tOmn7C0wIP_z4OfozvKaWdJXMPSf89za4qo97Q0jUPk/edit#gid=1584925057')
        break;
      case semester === '下學期' && resource === 'kahoot' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1zB_sC_GCKkBRUO6NlBy3dHy3YWOJshkQ8RbyK1obaO8/edit#gid=584550200')
        break;
      case semester === '下學期' && resource === 'quizizz' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1XL1KUycAXfa0amk28nXuh_nPnKQCpEGu-ZFC0SF7Yxw/edit#gid=1871020819')
        break;
      case semester === '下學期' && resource === 'quizlet' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1BXbNVxpMam8YIzw-xrL3R32RlICWzOCycvZA2iqLUNg/edit#gid=141887502')
        break;
      case semester === '下學期' && resource === 'wordwall' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1n_AxK7kLOHSDyenQs6MNwNccqps8-CF8WP9ahpJmPT8/edit#gid=141887502')
        break;
      case semester === '下學期' && resource === 'coggle' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1mjy192TNwUe1sWgAAZbRF8DujrMAg_cm6VT-0zgleOo/edit#gid=1584925057')
        break;
  
  
      case semester === '上學期' && resource === 'wordwall' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=662919757')
        break;
      case semester === '上學期' && resource === 'kahoot' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=807048046')
        break;
      case semester === '上學期' && resource === 'quizizz' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1668464697')
        break;
      case semester === '上學期' && resource === 'quizlet' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=245821822')
        break;
      case semester === '上學期' && resource === 'coggle' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1tOmn7C0wIP_z4OfozvKaWdJXMPSf89za4qo97Q0jUPk/edit#gid=416490095')
        break;
      case semester === '下學期' && resource === 'kahoot' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1zB_sC_GCKkBRUO6NlBy3dHy3YWOJshkQ8RbyK1obaO8/edit#gid=807048046')
        break;
      case semester === '下學期' && resource === 'quizizz' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1XL1KUycAXfa0amk28nXuh_nPnKQCpEGu-ZFC0SF7Yxw/edit#gid=1668464697')
        break;
      case semester === '下學期' && resource === 'quizlet' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1BXbNVxpMam8YIzw-xrL3R32RlICWzOCycvZA2iqLUNg/edit#gid=573244975')
        break;
      case semester === '下學期' && resource === 'wordwall' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1n_AxK7kLOHSDyenQs6MNwNccqps8-CF8WP9ahpJmPT8/edit#gid=2090638246')
        break;
      case semester === '下學期' && resource === 'coggle' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1mjy192TNwUe1sWgAAZbRF8DujrMAg_cm6VT-0zgleOo/edit#gid=416490095')
        break;
  
    
      case semester === '上學期' && resource === 'wordwall' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=1244559183')
        break;
      case semester === '上學期' && resource === 'kahoot' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=741572221')
        break;
      case semester === '上學期' && resource === 'quizizz' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1768453216')
        break;
      case semester === '上學期' && resource === 'quizlet' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=1558318885')
        break;
      case semester === '上學期' && resource === 'coggle' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1tOmn7C0wIP_z4OfozvKaWdJXMPSf89za4qo97Q0jUPk/edit#gid=812247135')
        break;
      case semester === '下學期' && resource === 'kahoot' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1zB_sC_GCKkBRUO6NlBy3dHy3YWOJshkQ8RbyK1obaO8/edit#gid=741572221')
        break;
      case semester === '下學期' && resource === 'quizizz' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1XL1KUycAXfa0amk28nXuh_nPnKQCpEGu-ZFC0SF7Yxw/edit#gid=1768453216')
        break;
      case semester === '下學期' && resource === 'quizlet' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1BXbNVxpMam8YIzw-xrL3R32RlICWzOCycvZA2iqLUNg/edit#gid=1695506235')
        break;
      case semester === '下學期' && resource === 'wordwall' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1n_AxK7kLOHSDyenQs6MNwNccqps8-CF8WP9ahpJmPT8/edit#gid=1833055741')
        break;
      case semester === '下學期' && resource === 'coggle' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1mjy192TNwUe1sWgAAZbRF8DujrMAg_cm6VT-0zgleOo/edit#gid=1670972641')
        break;
  
  
      case semester === '上學期' && resource === 'wordwall' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=1401154126')
        break;
      case semester === '上學期' && resource === 'kahoot' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=158759695')
        break;
      case semester === '上學期' && resource === 'quizizz' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1823763126')
        break;
      case semester === '上學期' && resource === 'quizlet' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=829978289')
        break;
      case semester === '下學期' && resource === 'kahoot' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1zB_sC_GCKkBRUO6NlBy3dHy3YWOJshkQ8RbyK1obaO8/edit#gid=158759695')
        break;
      case semester === '下學期' && resource === 'quizizz' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1XL1KUycAXfa0amk28nXuh_nPnKQCpEGu-ZFC0SF7Yxw/edit#gid=1823763126')
        break;
      case semester === '下學期' && resource === 'quizlet' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1BXbNVxpMam8YIzw-xrL3R32RlICWzOCycvZA2iqLUNg/edit#gid=217098870')
        break;
      case semester === '下學期' && resource === 'wordwall' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1n_AxK7kLOHSDyenQs6MNwNccqps8-CF8WP9ahpJmPT8/edit#gid=1738499245')
        break;
      default:
        break;
    }
  }
}

window.onscroll = () => {
  onScrollHandle()
}

const onScrollHandle = () => {
  const topBtn = document.getElementById("scrollTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
}

const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}