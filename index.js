module.exports = {
    ra: {
        action: {
            add_filter: '필터 추가',
            add: '추가',
            back: '뒤로가기',
            bulk_actions: '1개 항목 선택됨 |||| %{smart_count} 항목 선택됨',
            cancel: '취소',
            clear_input_value: '비우기',
            clone: '복사',
            confirm: '확인',
            create: '생성',
            delete: '삭제',
            edit: '수정',
            export: '내보내기',
            list: '목록',
            refresh: '새로고침',
            remove_filter: '해당 필터 삭제',
            remove: '삭제',
            save: '저장',
            search: '검색',
            show: '보기',
            sort: '정렬',
            undo: '되돌리기',
            expand: '확장',
            close: '닫기',
        },
        boolean: {
            true: 'Yes',
            false: 'No',
        },
        page: {
            create: '%{name} 생성',
            dashboard: '대시보드',
            edit: '%{name} #%{id}',
            error: '오류',
            list: '%{name}',
            loading: '로딩중',
            not_found: '찾을 수 없음',
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several:
                    '업로드 할 파일을 끌어오거나 파일을 선택하세요',
                upload_single: '업로드 할 파일을 끌어오거나 파일을 선택하세요',
            },
            image: {
                upload_several:
                    '업로드 할 사진을 끌어오거나 사진을 선택하세요',
                upload_single:
                    '업로드 할 사진을 끌어오거나 사진을 선택하세요',
            },
            references: {
                all_missing: '레퍼런스 데이터를 찾을 수 없습니다.',
                many_missing:
                    '하나 이상의 관련 레퍼런스가 사용 불가능한 것 같습니다.',
                single_missing:
                    '관련 레퍼런스가 사용 불가능한 것 같습니다.',
            },
        },
        message: {
            about: '대하여',
            are_you_sure: '확실합니까?',
            bulk_delete_content:
                '%{name}를 삭제하시겠습니까? |||| %{smart_count}개의 항목 삭제하시겠습니까??',
            bulk_delete_title:
                '%{name} 삭제 |||| %{smart_count}개 %{name} 삭제',
            delete_content: '해당 항목을 삭제하시겠습니까?',
            delete_title: '%{name} #%{id} 삭제',
            details: '세부사항',
            error:
                "클라이언트 에러로 요청에 실패했습니다.",
            invalid_form: '양식이 유효하지 않습니다. 에러를 확인해주세요.',
            loading: '페이지가 로딩중입니다. 잠시만 기다려주세요.',
            no: '아니요',
            not_found:
                '잘못된 URL을 입력했거나 링크가 잘못되었습니다.',
            yes: '예',
        },
        navigation: {
            no_results: '검색 결과 없음',
            no_more_results:
                '%{page}번 페이지는 마지막 페이지 입니다. 이전 페이지로 돌아가세요.',
            page_out_of_boundaries: '%{page}는 유효 페이지를 벗어납니다.',
            page_out_from_end: '마지막 페이지를 넘어갈 수 없습니다.',
            page_out_from_begin: '첫 페이지 이전으로 갈 수 없습니다.',
            page_range_info: '%{offsetBegin}-%{offsetEnd} 중 %{total}',
            page_rows_per_page: '페이지 열:',
            next: '다음',
            prev: '이전',
        },
        auth: {
            user_menu: '프로필',
            username: '사용자이름',
            password: '비밀번호',
            sign_in: '회원가입',
            sign_in_error: '인증 실패. 다시 시도해주세요.',
            logout: '로그아웃',
        },
        notification: {
            updated: '항목 업데이트 완료. |||| %{smart_count}개 항목 업데이트 완료.',
            created: '항목 생성 완료',
            deleted: '항목 삭제 완료 |||| %{smart_count}개 항목 삭제 완료',
            bad_item: '잘못된 항목',
            item_doesnt_exist: '항목이 존재하지 않습니다',
            http_error: '서버 통신 오류',
            data_provider_error:
                'dataProvider 오류. 콘솔을 확인하세요.',
            canceled: '액션 취소됨',
            logged_out: '세션이 완료되었습니다. 재접속하세요.',
        },
        validation: {
            required: '필수',
            minLength: '최소 ${min} 문자 이상이어야 합니다.',
            maxLength: '최대 %{max} 문자 혹은 이하이어야 합니다',
            minValue: '최소 %{min} 이상',
            maxValue: '최대 %{max} 혹은 이하',
            number: '숫자이어야 합니다',
            email: '유요한 이메일이어야 합니다.',
            oneOf: '이 중 하나이어야 합니다: %{options}',
            regex: '특정 형식과 일치해야 합니다. (regexp): %{pattern}',
        },
    },
};
