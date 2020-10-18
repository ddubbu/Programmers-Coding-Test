function solution(priorities, location) {
    /*
    input : array 2개, 
        priorities(우선순위, 복사물(idx로 구분) 개수와 동일), location(언제 복사되는지 알고 싶은 복사물)
    problem : 앞 idx 부터 꺼내서(shift) 우선순위가 낮으면 뒤로 push
    output : location 위치의 복사물 인쇄 순서
    
    주의사항: 만약, push해버리면 고유의 idx가 사라지 잖아..! > idx를 갖고 있자!
    */
    
    // 고유 위치 저장
    let withIdxArray = priorities.map( (ele, idx)=> [idx, ele]);
    //console.log(withIdxArray)
    // 작업 시작
    let count = 0;
    while(1){
        // MAX value Node 찾기
        let maxNode = withIdxArray.reduce((ele,cur)=> {
            if(ele[1]>=cur[1]){ 
            	return ele
            } 
            else{ 
            	return cur
            }
        })
        console.log(maxNode)
        
        // 앞 Node 꺼내기
        let prePopEle =withIdxArray.shift();
        let preEle =prePopEle[1];
        console.log(preEle)

        if(preEle<maxNode[1]){ //가장 큰 요소가 아니므로 뒤로 push
            withIdxArray.push(prePopEle);
        }
        else{ //preEle가 가장 큰요소이면서
            count ++;
            if(prePopEle[0] === location){ // 찾는 요소 위치 (idx) 이면
                return count;
            }
        }   
    }
}
