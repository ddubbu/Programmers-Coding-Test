## Read Me
1. PDF file is for flow chart  

2. analysis the problem

  * input : array 2개, 고유번호 i인 노래의 genres & plays  
  * output  
  > 각 장르별 total 재생 큰수 부터  
  > 장르 내 많이 재생된 노래 top 2  
  > 예외 :  (같은 경우 고유 번호 낮은 아이 부터), 장르 내 1곡만 있으면 1곡만  
  > return [best 노래들]

  * solution  
  > obj 형태로, 해쉬 구조  
  key => 장르 ,value => total 재생횟수, 노래 (고유 번호, 재생횟수)  
  > genres & plays 동시 탐색하면서 playCount 정리하기  
  let playCount = { genre1 : { totalCount : Number, songs : [ 2D array, [고유 번호, 재생횟수] ]}}  
  > totalCount 동시에 sum  
  > 마지막에 songs sort(재생횟수 기준)  

