// welcome page step text

const step1 = 'Урамшуулалд хамрагдсан кино театраар SocialPay ашиглан үйлчлүүлнэ.';
const step2 = 'Худалдан авалтаа SocialPay ашиглан хийсэн танд сугалаанд оролцох эрх үүсэх ба азаа үзэх эрх нь өнөөдөртөө л хүчинтэйг санаарай.';
const step3 = 'Урамшууллын хэсэгт байрлах БЭЛЭГ зураг дээр даран азаа үзэх хэсэг рүү орж үйлчлүүлсэн байгууллагаа сонгоно.';
const step4 = 'Хамгийн таалагдсан зурган дээрээ дарж төрөл бүрийн бэлэгнээс хожоорой. (Бэлэгээ үйлчлүүлсэн газраасаа л авна гэдгээ мартваа)';

//welcome page images

const model = '/amc.png';
const t = '/t.png';
const spay = '/socialpay.png';
const loves = '/loves-one.png';

//sugalaa sugalah uyiin text

const usedYourLottery =
  'Та өнөөдрийн сугалаанд оролцох эрхээ ашигласан байна. <br /> Маргааш ахин хямдралтай худалдан авалт хийж сугалаандаа оролцоорой.';
const noPromotionOnTheBranch = 'Тухайн салбарт зарлагдсан урамшуулал одоогоор байхгүй байна.';
const noTransactionToday = 'Та өнөөдөр Socialpay-р гүйлгээ хийгээгүй байна';
const noAccessToLottery = 'Танд өнөөдрийн сугалааны эрх үүсээгүй байна.';
const noWinLottery = 'Танд хязгааргүй их боломж бий, маргааш ахин оролдоод үзээрэй.';
const winLottery = (branchName, promotionName) => {
  return 'Та <strong>' + branchName + '</strong> салбараас <strong>' + promotionName + ' </strong> хөнгөлөлттэй худалдан авах эрх хожлоо.';
};

export {
  step1,
  step2,
  step3,
  step4,
  model,
  t,
  spay,
  loves,
  usedYourLottery,
  noPromotionOnTheBranch,
  noTransactionToday,
  noAccessToLottery,
  noWinLottery,
  winLottery,
};
