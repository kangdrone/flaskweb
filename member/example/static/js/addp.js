function addP(){
            var newP = document.createElement('P');
            var text = document.createTextNode('안녕하세요 숨겨진 텍스트입니다.')
            newP.appendChild(text);
            document.getElementById('demo').appendChild(newP);   // p태그를 부모div에 추가
        }