var scrs = ["https://resources.premierleague.com/photos/2021/09/01/9b4cc67d-0c01-4978-904c-43cdfc78be36/GettyImages-1337106592.jpg?width=500&height=333",
"https://resources.premierleague.com/photos/2021/08/28/2aa56517-c891-40dc-b86d-93bf1a6ba167/2021-08-28T145738Z_455386085_UP1EH8S15K1HU_RTRMADP_3_SOCCER-ENGLAND-NOR-LEI-REPORT.JPG?width=500&height=333",
"https://resources.premierleague.com/photos/2021/09/01/1cec6cbd-2ff0-4391-9ae5-76746f0c14ad/GettyImages-1336918480.jpg?width=500&height=333"];

var title = ["FPL signings: Emerson threatens Tanganga's spot",
"Wildcard targets: Time for another Pukki party?",
"Wildcard targets: Salah the standout midfielder"];

//getRandomNum
function getRandomNum(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSrc(num){
  return scrs[num];
}
function getTitle(num){
  return title[num];
}
