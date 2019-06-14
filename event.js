function myfunction() {
	var name = prompt("이름을 입력하세요","");
	if(name == null) { alert('응모를 포기하셨습니다.') } 
	var a = prompt("기대평을 입력하세요", "");
	if(a == null) { alert('응모를 포기하셨습니다.') } 
	else if(a == "") { alert('내용을 입력해주세요'); myfunction(); } 
	else if(a < 10){ alert('최소 10자 부터 등록 가능합니다')}
	else { alert(name+'님 기대평이 등록되었습니다.'); }
}
function myfunction2() {
	var name = prompt("이름을 입력하세요","");
	if(name == null) { alert('응모를 포기하셨습니다.') } 
	var a = prompt("관람후기를 입력하세요", "");
	if(a == null) { alert('응모를 포기하셨습니다.') } 
	else if(a == "") { alert('내용을 입력해주세요'); myfunction(); } 
	else if(a < 10){ alert('최소 10자 부터 등록 가능합니다')}
	else { alert(name+'님 관람후기가 등록되었습니다.'); }
}