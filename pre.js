 window.onload = function(){
         var cells = document.getElementsByTagName("td"); 
        for (var i = 0; i < cells.length; i++) { 
            cells[i].onclick = function(){
                if(this.style.backgroundColor== 'red') this.style.backgroundColor= 'white';
                else if (this.className == 'already') alert("해당 좌석은 이미 예약된 좌석입니다.");
                else this.style.backgroundColor= 'red';
            };
            }
            
            
        }
          function reservation_success(){
        
        var check = confirm("정말 예약하시겠습니까?")
        if(check)
           {
                alert("예약이 완료되었습니다.");
               self.close();
           }
        else{
             alert("예약이 취소되었습니다.");
        }
    }
    function cancel(){
         self.close();
    }