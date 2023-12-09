let semester = ''; // 學期
let year = ''; // 年級 or 科目

const yearSelector = (id, index) => {
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
  }

  if (semester === '112上' && year) {
    const wordwall = document.getElementById('wordwall');
    wordwall.querySelectorAll('.subject').forEach((el) => {
      el.classList.contains('chinese') && el.classList.add('show');
      el.classList.contains('math') && el.classList.add('show');
      el.classList.contains('life') && el.classList.add('show');

      if (year === '3年級' || year === '4年級' || year === '5年級' || year === '6年級') {
        el.classList.contains('life') && el.classList.remove('show');

        el.classList.contains('science') && el.classList.add('show');
        el.classList.contains('socialStudies') && el.classList.add('show');
      }
    })
  }

  if (semester === '112上' && year) {
    const kahoot = document.getElementById('kahoot');
    kahoot.querySelectorAll('.subject').forEach((el) => {
      el.classList.contains('chinese') && el.classList.add('show');
      el.classList.contains('math') && el.classList.add('show');
      el.classList.contains('life') && el.classList.add('show');

      if (year === '3年級' || year === '4年級' || year === '5年級' || year === '6年級') {
        el.classList.contains('life') && el.classList.remove('show');

        el.classList.contains('science') && el.classList.add('show');
        el.classList.contains('socialStudies') && el.classList.add('show');
      }
    })
  }

  if (semester === '112上' && year) {
    const quizizz = document.getElementById('quizizz');
    quizizz.querySelectorAll('.subject').forEach((el) => {
      el.classList.contains('chinese') && el.classList.add('show');
      el.classList.contains('math') && el.classList.add('show');

      if (year === '3年級' || year === '4年級' || year === '5年級' || year === '6年級') {
        el.classList.contains('life') && el.classList.remove('show');

        el.classList.contains('science') && el.classList.add('show');
        el.classList.contains('socialStudies') && el.classList.add('show');
      }
    })
  }

  if (semester === '112上' && year) {
    const quizlet = document.getElementById('quizlet');
    quizlet.querySelectorAll('.subject').forEach((el) => {
      el.classList.contains('chinese') && el.classList.add('show');

      if (year === '3年級' || year === '4年級' || year === '4年級' || year === '5年級' || year === '6年級') {
        el.classList.contains('science') && el.classList.add('show');
        el.classList.contains('socialStudies') && el.classList.add('show');
      }
    })
  }

  if (semester === '112上' && year) {
    const coggle = document.getElementById('coggle');
    coggle.querySelectorAll('.subject').forEach((el) => {
      el.classList.contains('chinese') && el.classList.add('show');
    })
  }
  
}

const goToResource = (url) => {
  window.open(url);
}

const clickResource = (subject, resource) => {
  switch (true) {
    case semester === '112上' && year === '1年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R3mycJ9EzRADvItGWiWICFfscB0SFDIyuS-1ciyEnK8/edit#gid=2022126782')
      break;
    case semester === '112上' && year === '1年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1uLLi20QdxzZ0-nWkLkZFqPilqxrTy1ER_QmRQHVnzjE/edit#gid=0')
      break;
    case semester === '112上' && year === '1年級' && subject === '生活' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1aeeEH4huYhexytYZXAGsQaqIoPEASCvmzUCLU1_sKHE/edit#gid=0')
      break;
    case semester === '112上' && year === '1年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1JXNtjlBnfBkoewF_R9ju9K2Mgaz_NHJbxYUfADo6jfA/edit#gid=0')
      break;
    case semester === '112上' && year === '1年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1fvtOn7Q7w2Nk1o2-KDWmHL-pKsQawOaLanLwTzLtaxg/edit#gid=0')
      break;
    case semester === '112上' && year === '1年級' && subject === '生活' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1MlAo8W9fGCI46wzUP8BqppskOj9bmH6H_r4EsKuZqLc/edit#gid=584550200')
      break;
    case semester === '112上' && year === '1年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1ZqxE7VlvBDhOtS7NYJl0wGwrM6P1_BSFlDNpKXr_bBU/edit#gid=0')
      break;
    case semester === '112上' && year === '1年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1SyJb-CdHyDQGndgL1aN8IH7qw4YA5sbvJfmYwEWdcQQ/edit#gid=0')
      break;
    case semester === '112上' && year === '1年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1XjlkQvxRmuDYnYmxEup7WElZkUbCZ8f6i6lWHbMgozA/edit#gid=2022126782')
      break;
    case semester === '112上' && year === '1年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Bl7-nsZssALYTJiwxvdIj5iQQHXUSPAnYX925TpBgQ0/edit#gid=1871456719')
      break;

    case semester === '112上' && year === '2年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R3mycJ9EzRADvItGWiWICFfscB0SFDIyuS-1ciyEnK8/edit#gid=1210656762')
      break;
    case semester === '112上' && year === '2年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1uLLi20QdxzZ0-nWkLkZFqPilqxrTy1ER_QmRQHVnzjE/edit#gid=916856904')
      break;
    case semester === '112上' && year === '2年級' && subject === '生活' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1aeeEH4huYhexytYZXAGsQaqIoPEASCvmzUCLU1_sKHE/edit#gid=1584925057')
      break;
    case semester === '112上' && year === '2年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1JXNtjlBnfBkoewF_R9ju9K2Mgaz_NHJbxYUfADo6jfA/edit#gid=169878256')
      break;
    case semester === '112上' && year === '2年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1fvtOn7Q7w2Nk1o2-KDWmHL-pKsQawOaLanLwTzLtaxg/edit#gid=1714521674')
      break;
    case semester === '112上' && year === '2年級' && subject === '生活' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1MlAo8W9fGCI46wzUP8BqppskOj9bmH6H_r4EsKuZqLc/edit#gid=807048046')
      break;
    case semester === '112上' && year === '2年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1ZqxE7VlvBDhOtS7NYJl0wGwrM6P1_BSFlDNpKXr_bBU/edit#gid=1960013821')
      break;
    case semester === '112上' && year === '2年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1SyJb-CdHyDQGndgL1aN8IH7qw4YA5sbvJfmYwEWdcQQ/edit#gid=916856904')
      break;
    case semester === '112上' && year === '2年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1XjlkQvxRmuDYnYmxEup7WElZkUbCZ8f6i6lWHbMgozA/edit#gid=1210656762')
      break;
    case semester === '112上' && year === '2年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Bl7-nsZssALYTJiwxvdIj5iQQHXUSPAnYX925TpBgQ0/edit#gid=816137345')
      break;


    case semester === '112上' && year === '3年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R3mycJ9EzRADvItGWiWICFfscB0SFDIyuS-1ciyEnK8/edit#gid=1584925057')
      break;
    case semester === '112上' && year === '3年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1uLLi20QdxzZ0-nWkLkZFqPilqxrTy1ER_QmRQHVnzjE/edit#gid=1871020819')
      break;
    case semester === '112上' && year === '3年級' && subject === '自然' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=0')
      break;
    case semester === '112上' && year === '3年級' && subject === '社會' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=141887502')
      break;
    case semester === '112上' && year === '3年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1JXNtjlBnfBkoewF_R9ju9K2Mgaz_NHJbxYUfADo6jfA/edit#gid=1278089206')
      break;
    case semester === '112上' && year === '3年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1fvtOn7Q7w2Nk1o2-KDWmHL-pKsQawOaLanLwTzLtaxg/edit#gid=1224012546')
      break;
    case semester === '112上' && year === '3年級' && subject === '自然' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=2080517712')
      break;
    case semester === '112上' && year === '3年級' && subject === '社會' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=584550200')
      break;
    case semester === '112上' && year === '3年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1ZqxE7VlvBDhOtS7NYJl0wGwrM6P1_BSFlDNpKXr_bBU/edit#gid=1268599539')
      break;
    case semester === '112上' && year === '3年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1SyJb-CdHyDQGndgL1aN8IH7qw4YA5sbvJfmYwEWdcQQ/edit#gid=1871020819')
      break;
    case semester === '112上' && year === '3年級' && subject === '自然' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=1871020819')
      break;
    case semester === '112上' && year === '3年級' && subject === '社會' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1871020819')
      break;
    case semester === '112上' && year === '3年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1XjlkQvxRmuDYnYmxEup7WElZkUbCZ8f6i6lWHbMgozA/edit#gid=1584925057')
      break;
    case semester === '112上' && year === '3年級' && subject === '自然' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=141887502')
      break;
    case semester === '112上' && year === '3年級' && subject === '社會' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=141887502')
      break;
    case semester === '112上' && year === '3年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Bl7-nsZssALYTJiwxvdIj5iQQHXUSPAnYX925TpBgQ0/edit#gid=1584925057')
      break;


    case semester === '112上' && year === '4年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R3mycJ9EzRADvItGWiWICFfscB0SFDIyuS-1ciyEnK8/edit#gid=928332399')
      break;
    case semester === '112上' && year === '4年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1uLLi20QdxzZ0-nWkLkZFqPilqxrTy1ER_QmRQHVnzjE/edit#gid=2005991381')
      break;
    case semester === '112上' && year === '4年級' && subject === '自然' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=1584925057')
      break;
    case semester === '112上' && year === '4年級' && subject === '社會' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=662919757')
      break;
    case semester === '112上' && year === '4年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1JXNtjlBnfBkoewF_R9ju9K2Mgaz_NHJbxYUfADo6jfA/edit#gid=79428673')
      break;
    case semester === '112上' && year === '4年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1fvtOn7Q7w2Nk1o2-KDWmHL-pKsQawOaLanLwTzLtaxg/edit#gid=1463111299')
      break;
    case semester === '112上' && year === '4年級' && subject === '自然' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=1658324078')
      break;
    case semester === '112上' && year === '4年級' && subject === '社會' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=807048046')
      break;
    case semester === '112上' && year === '4年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1ZqxE7VlvBDhOtS7NYJl0wGwrM6P1_BSFlDNpKXr_bBU/edit#gid=1997495420')
      break;
    case semester === '112上' && year === '4年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1SyJb-CdHyDQGndgL1aN8IH7qw4YA5sbvJfmYwEWdcQQ/edit#gid=2005991381')
      break;
    case semester === '112上' && year === '4年級' && subject === '自然' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=2005991381')
      break;
    case semester === '112上' && year === '4年級' && subject === '社會' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1668464697')
      break;
    case semester === '112上' && year === '4年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1XjlkQvxRmuDYnYmxEup7WElZkUbCZ8f6i6lWHbMgozA/edit#gid=928332399')
      break;
    case semester === '112上' && year === '4年級' && subject === '自然' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=1261575536')
      break;
    case semester === '112上' && year === '4年級' && subject === '社會' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=245821822')
      break;
    case semester === '112上' && year === '4年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Bl7-nsZssALYTJiwxvdIj5iQQHXUSPAnYX925TpBgQ0/edit#gid=940029605')
      break;




    case semester === '112上' && year === '5年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R3mycJ9EzRADvItGWiWICFfscB0SFDIyuS-1ciyEnK8/edit#gid=235818073')
      break;
    case semester === '112上' && year === '5年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1uLLi20QdxzZ0-nWkLkZFqPilqxrTy1ER_QmRQHVnzjE/edit#gid=1343481458')
      break;
    case semester === '112上' && year === '5年級' && subject === '自然' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=1934389515')
      break;
    case semester === '112上' && year === '5年級' && subject === '社會' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=1244559183')
      break;
    case semester === '112上' && year === '5年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1JXNtjlBnfBkoewF_R9ju9K2Mgaz_NHJbxYUfADo6jfA/edit#gid=1475000600')
      break;
    case semester === '112上' && year === '5年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1fvtOn7Q7w2Nk1o2-KDWmHL-pKsQawOaLanLwTzLtaxg/edit#gid=736026928')
      break;
    case semester === '112上' && year === '5年級' && subject === '自然' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=751359880')
      break;
    case semester === '112上' && year === '5年級' && subject === '社會' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=741572221')
      break;
    case semester === '112上' && year === '5年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1ZqxE7VlvBDhOtS7NYJl0wGwrM6P1_BSFlDNpKXr_bBU/edit#gid=1797921997')
      break;
    case semester === '112上' && year === '5年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1SyJb-CdHyDQGndgL1aN8IH7qw4YA5sbvJfmYwEWdcQQ/edit#gid=1343481458')
      break;
    case semester === '112上' && year === '5年級' && subject === '自然' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=1343481458')
      break;
    case semester === '112上' && year === '5年級' && subject === '社會' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1768453216')
      break;
    case semester === '112上' && year === '5年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1XjlkQvxRmuDYnYmxEup7WElZkUbCZ8f6i6lWHbMgozA/edit#gid=235818073')
      break;
    case semester === '112上' && year === '5年級' && subject === '自然' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=2025731435')
      break;
    case semester === '112上' && year === '5年級' && subject === '社會' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=1558318885')
      break;
    case semester === '112上' && year === '5年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Bl7-nsZssALYTJiwxvdIj5iQQHXUSPAnYX925TpBgQ0/edit#gid=1318573361')
      break;


    case semester === '112上' && year === '6年級' && subject === '國語' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1R3mycJ9EzRADvItGWiWICFfscB0SFDIyuS-1ciyEnK8/edit#gid=117915105')
      break;
    case semester === '112上' && year === '6年級' && subject === '數學' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1uLLi20QdxzZ0-nWkLkZFqPilqxrTy1ER_QmRQHVnzjE/edit#gid=694640157')
      break;
    case semester === '112上' && year === '6年級' && subject === '自然' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=263286272')
      break;
    case semester === '112上' && year === '6年級' && subject === '社會' && resource === "wordwall":
      goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=1401154126')
      break;
    case semester === '112上' && year === '6年級' && subject === '國語' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1JXNtjlBnfBkoewF_R9ju9K2Mgaz_NHJbxYUfADo6jfA/edit#gid=1992757129')
      break;
    case semester === '112上' && year === '6年級' && subject === '數學' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1fvtOn7Q7w2Nk1o2-KDWmHL-pKsQawOaLanLwTzLtaxg/edit#gid=1639676729')
      break;
    case semester === '112上' && year === '6年級' && subject === '自然' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=158759695')
      break;
    case semester === '112上' && year === '6年級' && subject === '社會' && resource === "kahoot":
      goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=158759695')
      break;
    case semester === '112上' && year === '6年級' && subject === '國語' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1ZqxE7VlvBDhOtS7NYJl0wGwrM6P1_BSFlDNpKXr_bBU/edit#gid=2097448188')
      break;
    case semester === '112上' && year === '6年級' && subject === '數學' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1SyJb-CdHyDQGndgL1aN8IH7qw4YA5sbvJfmYwEWdcQQ/edit#gid=694640157')
      break;
    case semester === '112上' && year === '6年級' && subject === '自然' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=694640157')
      break;
    case semester === '112上' && year === '6年級' && subject === '社會' && resource === "quizizz":
      goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1823763126')
      break;
    case semester === '112上' && year === '6年級' && subject === '國語' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1XjlkQvxRmuDYnYmxEup7WElZkUbCZ8f6i6lWHbMgozA/edit#gid=117915105')
      break;
    case semester === '112上' && year === '6年級' && subject === '自然' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=1144388412')
      break;
    case semester === '112上' && year === '6年級' && subject === '社會' && resource === "quizlet":
      goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=829978289')
      break;
    case semester === '112上' && year === '6年級' && subject === '國語' && resource === "coggle":
      goToResource('https://docs.google.com/spreadsheets/d/1Bl7-nsZssALYTJiwxvdIj5iQQHXUSPAnYX925TpBgQ0/edit#gid=1665130720')
      break;
    default:
      break;
  }
}

const subjectSelector = (id , index) => {
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
  }

}

const clickSubjectResource = (resource, schoolYear) => {

  if (year === '自然') {
    switch (true) {
      case semester === '112上' && resource === 'wordwall' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=0')
        break;
      case semester === '112上' && resource === 'kahoot' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=2080517712')
        break;
      case semester === '112上' && resource === 'quizizz' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=1871020819')
        break;
      case semester === '112上' && resource === 'quizlet' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=141887502')
        break;
  
  
      case semester === '112上' && resource === 'wordwall' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=1584925057')
        break;
      case semester === '112上' && resource === 'kahoot' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=1658324078')
        break;
      case semester === '112上' && resource === 'quizizz' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=2005991381')
        break;
      case semester === '112上' && resource === 'quizlet' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=1261575536')
        break;
  
    
      case semester === '112上' && resource === 'wordwall' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=1934389515')
        break;
      case semester === '112上' && resource === 'kahoot' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=751359880')
        break;
      case semester === '112上' && resource === 'quizizz' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=1343481458')
        break;
      case semester === '112上' && resource === 'quizlet' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=2025731435')
        break;
  
  
      case semester === '112上' && resource === 'wordwall' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1gFNvjTPAaKi3iygqjbTPyeyOKySDFJ6Ud9CJZt7V8Yw/edit#gid=263286272')
        break;
      case semester === '112上' && resource === 'kahoot' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1qMEsGEHaiyYbx9-8hCljDYqR_m90qiyz0T72qFaVvSg/edit#gid=158759695')
        break;
      case semester === '112上' && resource === 'quizizz' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1zbNirPxt236Wop2OmxXxqwFstPigBAITbWkk0pceMjA/edit#gid=694640157')
        break;
      case semester === '112上' && resource === 'quizlet' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1fnRurs3T5vZA4fOH06EBuRqv0vWiIrQ8W2tw_07gT4k/edit#gid=1144388412')
        break;
      default:
        break;
    }
  }

  if (year === '社會') {
    switch (true) {
      case semester === '112上' && resource === 'wordwall' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=141887502')
        break;
      case semester === '112上' && resource === 'kahoot' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=584550200')
        break;
      case semester === '112上' && resource === 'quizizz' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1871020819')
        break;
      case semester === '112上' && resource === 'quizlet' && schoolYear === 3:
        goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=141887502')
        break;
  
  
      case semester === '112上' && resource === 'wordwall' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=662919757')
        break;
      case semester === '112上' && resource === 'kahoot' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=807048046')
        break;
      case semester === '112上' && resource === 'quizizz' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1668464697')
        break;
      case semester === '112上' && resource === 'quizlet' && schoolYear === 4:
        goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=245821822')
        break;
  
    
      case semester === '112上' && resource === 'wordwall' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=1244559183')
        break;
      case semester === '112上' && resource === 'kahoot' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=741572221')
        break;
      case semester === '112上' && resource === 'quizizz' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1768453216')
        break;
      case semester === '112上' && resource === 'quizlet' && schoolYear === 5:
        goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=1558318885')
        break;
  
  
      case semester === '112上' && resource === 'wordwall' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1yQqlKnu2MzO_sJ7kjViZiMVWihJcg2-qI2cDCujXCNI/edit#gid=1401154126')
        break;
      case semester === '112上' && resource === 'kahoot' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/10nyOcGSj-R9rYbsqHKxtqXJcUUXmErgGtozmHQy0nDU/edit#gid=158759695')
        break;
      case semester === '112上' && resource === 'quizizz' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/1Q8tBOTk1cP7wN0yqfGIuOJhSyklJIDTEfkJ72-iSZTM/edit#gid=1823763126')
        break;
      case semester === '112上' && resource === 'quizlet' && schoolYear === 6:
        goToResource('https://docs.google.com/spreadsheets/d/11N3nUB8-wkCLcWkYjUe6pen4aC-B9pCxLwOvXOjYV6A/edit#gid=829978289')
        break;
      default:
        break;
    }
  }
}