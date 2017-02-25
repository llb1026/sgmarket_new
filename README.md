# 슥마켓

### 찬하 지윤 정현이 일주일만에 만든ㅎㅎ 슥마켓 리뉴얼 버전입니다.

#### 현재 버전은 1차 알파버전으로, 기능은 다음과 같습니다.

* 이메일로 로그인 (via devise)

* 게시글 올리기, 사진첨부 가능 (for login user only, via ckeditor)

* 마이페이지에 내가 올린 게시물 (for login user only)

* 카테고리별 게시물 보기 (with will_paginate)

* 게시글 상세 페이지에 댓글달기와 업로더 연락처 보기 (for login user only)

#### 추후 버전에서 추가해야 할 기능은 다음과 같습니다.

* 판매완료된 물건 done 처리 (for author only)

* 공지 게시판용 카테고리 (for admin user only)

* 게시글 제목으로 검색 기능 (extract data from db)

* 댓글달때 페이지 새로고침 없애기 (js)

* 마이페이지에 내가 찜한 게시물 (for login user only)

#### 이에 더해 고쳐가야 할 사항은 다음과 같습니다.

* 대표 이미지 미첨부시 디폴트 이미지

* 사이트 이미지 에셋

* CSS 좀 더 깔끔하게 가다듬기

* 특정 경로로 어떤 페이지에 들어가면 js가 먹통이 되는 현상 수정