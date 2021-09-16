// welcome page step text

const step1 = 'Digital Nation-2021 арга хэмжээний дараах үйлчилгээний цэгүүдээр үйлчлүүлэн Education coupon хожоорой.';
const step2 = 'HippoCards application 1 сарын эрх';
const step3 = 'TomYo application 1 сарын эрх';
const step4 = 'MemoWords application ашиглах эрх';
const step5 = 'Marchaakhai application ашиглах эрх';

//welcome page images

const model = '/amc.png';
const t = '/t.png';
const spay = '/socialpay.png';

const lovesHeader = '/lovesHeader.png';

const loves = '/loves-one.png';
const hippo = '/hippo.png';
const marchaakhai = '/marchaakhai.png';
const memoWords = '/memoWods.png';
const tomyo = '/tomyo.png';

//sugalaa sugalah uyiin text

const usedYourLottery =
  'Та өнөөдрийн сугалаанд оролцох эрхээ ашигласан байна. <br /> Маргааш ахин худалдан авалт хийж сугалаандаа оролцоорой.';
const noPromotionOnTheBranch = 'Тухайн дэлгүүрт зарлагдсан урамшуулал одоогоор байхгүй байна.';
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
  step5,
  model,
  lovesHeader,
  t,
  spay,
  loves,
  usedYourLottery,
  noPromotionOnTheBranch,
  noTransactionToday,
  noAccessToLottery,
  noWinLottery,
  winLottery,
  hippo,
  marchaakhai,
  memoWords,
  tomyo
};
